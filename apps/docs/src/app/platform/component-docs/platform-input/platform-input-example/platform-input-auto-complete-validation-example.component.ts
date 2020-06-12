import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'fdp-platform-input-auto-complete-form-validation-example',
  templateUrl: './platform-input-auto-complete-validation-example.component.html',
  styleUrls: ['./platform-input-auto-complete-validation-example.component.scss']
})
export class PlatformInputAutoCompleteValidationExampleComponent implements OnInit {

    submitted = false;
    inputText: string = '';
    state = false;
    options: string[];

    public sportsData: string[] = [
        'American Football',
        'Badminton',
        'Basketball',
        'Cricket',
        'Football',
        'Golf',
        'Hockey',
        'Rugby',
        'Snooker',
        'Tennis'
    ];

    /** Whether the combobox is opened. */
    @Input()
    open: boolean = false;

    /**
     * The template with which to display the individual listed items.
     * Use it by passing an ng-template with implicit content. See examples for more info.
     */
    @Input()
    itemTemplate: TemplateRef<any>;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.options = this.sportsData;
    }

    filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.sportsData.filter((item: string) => item.toLowerCase().includes(filterValue));
    }

    onSearchChange() {
        this.options = this.filter(this.inputText);
        this.open = true;
    }

    onItemClick(clickedValue) {
        this.inputText = clickedValue;
        this.open = false;
    }
}
