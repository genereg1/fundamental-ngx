import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { PopoverModule } from '../popover/popover.module';
import { MenuModule } from '../menu/menu.module';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../utils/pipes/pipe.module';

@NgModule({
    declarations: [SearchInputComponent],
    imports: [
        CommonModule,
        PopoverModule,
        MenuModule,
        FormsModule,
        PipeModule
    ],
    exports: [SearchInputComponent]
})
export class SearchInputModule {}
