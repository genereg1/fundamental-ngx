import { Component } from '@angular/core';
import * as listCheckboxGroupHtml from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-list.component.html';
import * as listCheckboxGroupTs from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-list.component.ts';
import * as contentCheckboxGroupHtml from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-content-checkbox.component.html';
import * as contentCheckboxGroupTs from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-content-checkbox.component.ts';
import * as checkboxGroupExampleHtml from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-example.component.html';
import * as checkboxGroupExampleTs from '!raw-loader!./platform-checkbox-group-examples/platform-checkbox-group-examples.component.ts';
import { ExampleFile } from '../../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-checkbox-group',
    templateUrl: './platform-checkbox-group-docs.component.html'
})
export class PlatformCheckboxGroupDocsComponent {
    listCheckboxGroup: ExampleFile[] = [
        {
            language: 'html',
            code: listCheckboxGroupHtml,
            fileName: 'platform-checkbox-group-list'
        },
        {
            language: 'typescript',
            code: listCheckboxGroupTs,
            fileName: 'platform-checkbox-group-list',
            component: 'PlatformCheckboxGroupListComponent'
        }
    ];

    contentCheckboxGroup: ExampleFile[] = [
        {
            language: 'html',
            code: contentCheckboxGroupHtml,
            fileName: 'platform-checkbox-group-content-checkbox'
        },
        {
            language: 'typescript',
            code: contentCheckboxGroupTs,
            fileName: 'platform-checkbox-group-content-checkbox',
            component: 'PlatformCheckboxGroupContentCheckboxComponent'
        }
    ];

    checkboxGroupExample: ExampleFile[] = [
        {
            language: 'html',
            code: checkboxGroupExampleHtml,
            fileName: 'platform-checkbox-group-example'
        },
        {
            language: 'typescript',
            code: checkboxGroupExampleTs,
            fileName: 'platform-checkbox-group-examples',
            component: 'PlatformCheckboxGroupExampleComponent'
        }
    ];
}
