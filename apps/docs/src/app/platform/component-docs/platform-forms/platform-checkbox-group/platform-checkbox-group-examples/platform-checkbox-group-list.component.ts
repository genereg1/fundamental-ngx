import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectItem } from '@fundamental-ngx/platform';

@Component({
    selector: 'fdp-platform-checkbox-group-list',
    templateUrl: './platform-checkbox-group-list.component.html'
})
export class PlatformCheckboxGroupListComponent {
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    sports: string[] = ['cycling', 'running', 'visit gym', 'swimming'];
    favsports: string[] = ['running', 'swimming'];

    countryCurrency = [new Country('Australia', 'AUD'), new Country('India', 'INR'), new Country('USA', 'USD')];
    currency = ['AUD', 'USD'];

    languages = [
        new LanguageKnown('Java', 'java', false),
        new LanguageKnown('Javascript', 'javascript', true),
        new LanguageKnown('Python', 'python', false),
        new LanguageKnown('GoLang', 'go', true)
    ];

    form1 = new FormGroup({});
    form2 = new FormGroup({});
    form3 = new FormGroup({});
    form4 = new FormGroup({});
    form5 = new FormGroup({});
    form6 = new FormGroup({});
}

class Country implements SelectItem {
    constructor(public label: string, public value: string) {}
}

class LanguageKnown implements SelectItem {
    constructor(public label: string, public value: string, public disabled: boolean) {}
}
