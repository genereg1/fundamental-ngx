import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopoverModule } from '../popover/popover.module';
import { InputGroupModule } from '../input-group/input-group.module';
import { TimeModule } from '../time/time.module';

import { TimePickerComponent } from './time-picker.component';

import { UtilsModule } from '../utils/utils.module';

@NgModule({
    declarations: [TimePickerComponent],
    imports: [CommonModule, UtilsModule, FormsModule, PopoverModule, InputGroupModule, TimeModule],
    exports: [TimePickerComponent]
})
export class TimePickerModule {}
