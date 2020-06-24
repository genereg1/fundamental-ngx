import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-example',
    templateUrl: './platform-checkbox-group-example.component.html'
})
export class PlatformCheckboxGroupExampleComponent {
    fruits: string[] = ['Apple', 'Banana', 'Grapes'];
    favourites = { fruitsEx: ['banana'] };
    favourites1 = { fruits1: ['Apple'] };

    form1 = new FormGroup({});
    form2 = new FormGroup({});
}
