import { Component, DoCheck } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fdp-platform-checkbox-group-example',
    templateUrl: './platform-checkbox-group-example.component.html'
})
export class PlatformCheckboxGroupExampleComponent implements DoCheck {
    fruits: string[] = ['Apple', 'Banana', 'Guava', 'Papaya'];
    favourites = { fruits: ['banana'] };

    form1 = new FormGroup({});

    ngDoCheck(): void {
        // console.log('form1 group: ', this.form1);
    }
}
