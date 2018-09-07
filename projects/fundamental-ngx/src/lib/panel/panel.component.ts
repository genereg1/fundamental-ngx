import { Component, ElementRef, Inject, Input } from '@angular/core';
import { AbstractFdNgxClass } from '../utils/abstract-fd-ngx-class';

@Component({
    selector: 'fd-panel',
    templateUrl: './panel.component.html'
})
export class PanelComponent extends AbstractFdNgxClass {
    @Input() colSpan;

    @Input() rowSpan;

    @Input() backgroundImage: string;

    _setProperties() {
        this._addClassToElement('fd-panel');
        if (this.colSpan) {
            this._addClassToElement('fd-has-grid-column-span-' + this.colSpan);
        }
        if (this.rowSpan) {
            this._addClassToElement('fd-has-grid-row-span-' + this.rowSpan);
        }
        if (this.backgroundImage) {
            this._addStyleToElement('background-image', 'url("' + this.backgroundImage + '")');
        }
    }

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super(elementRef);
    }
}
