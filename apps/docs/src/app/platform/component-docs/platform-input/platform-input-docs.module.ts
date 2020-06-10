import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { API_FILES } from '../../api-files';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { PlatformInputHeaderComponent } from './platform-input-header/platform-input-header.component';
import { PlatformInputDocsComponent } from './platform-input-docs.component';
import { PlatformInputExampleComponent } from './platform-input-example/platform-input-example.component';
import { PlatformInputReactiveValidationExampleComponent } from './platform-input-example/platform-input-reactive-validation-example.component';
import { PlatformInputAutoCompleteValidationExampleComponent } from './platform-input-example/platform-input-auto-complete-validation-example.component';
import { PlatformInputModule, FdpFormGroupModule, PlatformButtonModule } from '@fundamental-ngx/platform';
import { FormModule } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: PlatformInputHeaderComponent,
        children: [
            { path: '', component: PlatformInputDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.input } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, PlatformInputModule, FdpFormGroupModule, PlatformButtonModule, FormModule],
    exports: [RouterModule],
    declarations: [
        PlatformInputExampleComponent,
        PlatformInputHeaderComponent,
        PlatformInputDocsComponent,
        PlatformInputReactiveValidationExampleComponent,
        PlatformInputAutoCompleteValidationExampleComponent,
        PlatformInputDocsComponent
    ]
})
export class PlatformInputDocsModule {}