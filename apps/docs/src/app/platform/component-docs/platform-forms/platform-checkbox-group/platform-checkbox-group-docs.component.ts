import { Component } from '@angular/core';
import * as listCheckboxGroupSrc from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-example.component.html';
import * as listCheckboxGroupSrcCode from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-examples.component.ts';
import { ExampleFile } from '../../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-checkbox-group',
    templateUrl: './platform-checkbox-group-docs.component.html'
})
export class PlatformCheckboxGroupDocsComponent {
    listCheckboxGroup: ExampleFile[] = [
        {
            language: 'html',
            code: listCheckboxGroupSrc,
            fileName: 'platform-checkbox-group-example'
        },
        {
            language: 'typescript',
            code: listCheckboxGroupSrcCode,
            fileName: 'platform-checkbox-group-examples',
            component: 'PlatformCheckboxGroupExampleComponent'
        }
    ];
}
