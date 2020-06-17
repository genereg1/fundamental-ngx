import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-example',
    templateUrl: './platform-checkbox-group-example.component.html'
})
export class PlatformCheckboxGroupExampleComponent {
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    fruits: string[] = ['Apple', 'Banana', 'Guava', 'Papaya'];

    form1 = new FormGroup({});
    form2 = new FormGroup({});
}
