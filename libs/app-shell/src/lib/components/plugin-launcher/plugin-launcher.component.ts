import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef, ElementRef,
    Injector,
    Input,
    OnChanges, Renderer2,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { loadRemoteModule } from '../../api/extensions/federation-utils';
import { AngularIvyComponentDescriptor, PluginDescriptor } from '../../api/extensions/lookup/plugin-descriptor.model';
import { LookupService } from '../../api/extensions/lookup/lookup.service';
import { isPluginComponent } from '../../api/extensions/component/plugin-component';
import { PluginManagerService } from '../../api/extensions/plugin-manager.service';


@Component({
    selector: 'fds-plugin-launcher',
    template: '<ng-container #view></ng-container>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginLauncherComponent implements OnChanges {
    /** plugin name */
    @Input()
    name: string;

    /** module name */
    @Input()
    module: string;

    descriptor: Partial<PluginDescriptor>;

    @ViewChild('view', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(private injector: Injector,
                private _elementRef: ElementRef,
                private cfr: ComponentFactoryResolver,
                private _cd: ChangeDetectorRef,
                private _render: Renderer2,
                private _pluginMgr: PluginManagerService,
                private lookupService: LookupService) {
    }

    async ngOnChanges(): Promise<void> {
        this.viewContainer.clear();

        if (!this.descriptor) {
            const item = this.lookupService.lookup(this.initQuery());
            if (!item) {
                return;
            }
            this.descriptor = item.descriptor;
        }
        this.doCreateComponent(this.descriptor, this.module);
    }


    async doCreateComponent(descriptor: Partial<PluginDescriptor>, moduleName: string): Promise<void> {
        const _module = descriptor.modules.find(module => module.name === moduleName);
        const _component = await loadRemoteModule(descriptor, _module as AngularIvyComponentDescriptor)
            .then(m => m[_module.name]);

        if (_module.type === 'custom-element') {
            const element = document.createElement(_component);
            this._render.appendChild(this._elementRef.nativeElement, element);
            return;
        }

        if (_module.type === 'angular-ivy-component') {
            const factory = this.cfr.resolveComponentFactory(_component);
            const componentRef: ComponentRef<any> = this.viewContainer.createComponent(factory, null, this.injector);

            if (isPluginComponent(componentRef.instance)) {
                this._pluginMgr.register(descriptor, componentRef.instance);
            }
            this._cd.detectChanges();
            return;
        }
    }

    private initQuery(): Map<string, any> {
        const query = new Map();
        if (this.name) {
            query.set('name', this.name);
        }
        return query;
    }
}