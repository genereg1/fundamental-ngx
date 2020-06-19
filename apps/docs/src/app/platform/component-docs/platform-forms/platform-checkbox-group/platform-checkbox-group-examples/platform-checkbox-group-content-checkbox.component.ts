import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-content',
    templateUrl: './platform-checkbox-group-content-checkbox.component.html'
})
export class PlatformCheckboxGroupContentCheckboxComponent {
    fruits: string[] = ['Apple', 'Banana', 'Guava', 'Papaya'];
    favourites = ['banana', 'guava'];

    form1 = new FormGroup({});
}
