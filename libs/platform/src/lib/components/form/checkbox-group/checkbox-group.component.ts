import { NgControl, NgForm } from '@angular/forms';
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    EventEmitter,
    Input,
    OnInit,
    Optional,
    Output,
    QueryList,
    Self,
    ViewEncapsulation,
    ViewChildren
} from '@angular/core';
import { CollectionBaseInput } from '../collection-base.input';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectItem } from '../../../domain/data-model';
import { FormFieldControl } from '../form-control';

/**
 * Checkbox group implementation based on the
 * https://github.com/SAP/fundamental-ngx/wiki/Platform:-CheckboxGroup-Technical-Design
 * documents.
 *
 */

@Component({
    selector: 'fdp-checkbox-group',
    templateUrl: './checkbox-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [{ provide: FormFieldControl, useExisting: CheckboxGroupComponent, multi: true }]
})
export class CheckboxGroupComponent extends CollectionBaseInput implements AfterContentInit, AfterViewInit, OnInit {
    /**
     * value for selected checkboxes. can be String or Array
     */
    @Input()
    get value(): any {
        return super.getValue();
    }
    set value(selectedValue: any) {
        super.setValue(selectedValue);
    }

    /**
     * To Dispaly multiple checkboxes in a line
     */
    @Input()
    isInline: boolean = false;

    /**
     * None value checkbox created
     */
    @Input()
    hasNoValue: boolean = false;

    /**
     * Label for None value checkbox
     */
    @Input()
    noValueLabel: string = 'None';

    /** Children checkboxes passed as content */
    @ContentChildren(CheckboxComponent)
    contentCheckboxes: QueryList<CheckboxComponent>;

    /** Children checkboxes created from passed list values. */
    @ViewChildren(CheckboxComponent)
    viewCheckboxes: QueryList<CheckboxComponent>;

    @Output()
    readonly change: EventEmitter<SelectItem | string> = new EventEmitter<SelectItem | string>();

    constructor(
        private _changeDetector: ChangeDetectorRef,
        @Optional() @Self() public ngcontrol: NgControl,
        @Optional() @Self() public ngForm: NgForm
    ) {
        super(_changeDetector, ngcontrol, ngForm);
    }

    ngOnInit(): void {
        console.log('ngOnInit contentCheckboxes: ', this.contentCheckboxes);
        console.log('ngOnInit viewCheckboxes: ', this.viewCheckboxes);
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit contentCheckboxes: ', this.contentCheckboxes);
        console.log('ngAfterContentInit viewCheckboxes: ', this.viewCheckboxes);
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit contentCheckboxes: ', this.contentCheckboxes);
        console.log('ngAfterViewInit viewCheckboxes: ', this.viewCheckboxes);
    }

    writeValue(value: any): void {
        console.log('writevalue value: ', value);
        super.writeValue(value);
    }

    /**
     * @param event ,can be keyboard event, mouseevent, touchevent etc.
     */
    public stateChange(event: any): void {
        console.log('checkbox state changed');
    }
}
