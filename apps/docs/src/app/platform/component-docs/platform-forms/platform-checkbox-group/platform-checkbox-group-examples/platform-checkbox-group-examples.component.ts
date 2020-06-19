import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-example',
    templateUrl: './platform-checkbox-group-example.component.html'
})
export class PlatformCheckboxGroupExampleComponent {
    fruits: string[] = ['Apple', 'Banana', 'Guava', 'Papaya'];
    favourites = ['banana', 'guava'];

    form1 = new FormGroup({});
}
