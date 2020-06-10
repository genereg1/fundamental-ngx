/**
 * @license
 * F. Kolar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 */
import { ChangeDetectionStrategy,
         ChangeDetectorRef, 
         Component, 
         Input, 
         Optional, 
         Self, 
         ViewChild, 
         ElementRef, 
         Output, 
         EventEmitter } from '@angular/core';
import { FormFieldControl, Status } from '../form-control';
import { NgControl, NgForm } from '@angular/forms';
import { BaseInput } from '../base.input';
import { stateType } from '@fundamental-ngx/core';


const VALID_INPUT_TYPES = [
    'text',
    'number',
    'email',
    'password'
];

type InputType = 'text' | 'number' | 'email' | 'password';

/**
 * Input field implementation to be compliant with our FormGroup/FormField design and also to
 * achieve certain this in Angular this component is re-using several ideas from MatDesign
 *
 */
@Component({
    selector: 'fdp-input',
    templateUrl: 'input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: FormFieldControl, useExisting: InputComponent, multi: true }
    ]
})
export class InputComponent extends BaseInput {

    /** defines the input type of the input. */
    @Input()
    type: InputType = 'text';
 
    /** Whether the input is read-only. */
    @Input()
    readonly: boolean = false;

    /** click event to emit */
    @Output()
    readonly click: EventEmitter<InputComponent> = new EventEmitter();
    
    /** Binds to control aria-labelledBy attribute */
    @Input()
    ariaLabelledBy: string = null;

    /** Sets control aria-label attribute value */
    @Input()
    ariaLabel: string = null;

    state: Status | stateType = 'default';

    /** @hidden */
    @ViewChild('inputElement')
    inputElement: ElementRef;

    /** return the value in the text box */
    @Input()
    get value(): any {
        return super.getValue();
    }

    set value(value: any) {
        super.setValue(value);
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this.inputElement;
    }


    constructor(protected _cd: ChangeDetectorRef,
                @Optional() @Self() public ngControl: NgControl,
                @Optional() @Self() public ngForm: NgForm) {


        super(_cd, ngControl, ngForm);
    }

    /** @hidden change formcontrol value, emits the event*/
    onClick(event: KeyboardEvent | MouseEvent) {
        event.stopPropagation();
        if (!this.disabled) {
            if (super.getValue() !== undefined) {
                this.onChange(super.getValue());
                this.click.emit(this);
            }
        }
    }

    ngOnInit(): void {
        if (!this.type || VALID_INPUT_TYPES.indexOf(this.type) === -1) {
            throw new Error(` Input type ${this.type} is not supported`);
        }
    }
}
