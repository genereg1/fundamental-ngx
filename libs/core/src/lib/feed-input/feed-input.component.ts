import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    Input,
    ViewEncapsulation,
    AfterContentInit,
    forwardRef,
    OnDestroy, ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ButtonComponent, FeedInputButtonDirective, FeedInputTextareaDirective } from '../..';

@Component({
    selector: 'fd-feed-input',
    templateUrl: './feed-input.component.html',
    styleUrls: ['./feed-input.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedInputComponent implements AfterContentInit, OnDestroy {
    /** component disable state */
    @Input()
    disabled = false;

    /** @hidden */
    @ContentChild(forwardRef(() => FeedInputTextareaDirective))
    textareaElement: FeedInputTextareaDirective;

    /** @hidden */
    @ContentChild(forwardRef(() => FeedInputButtonDirective))
    buttonElement: FeedInputButtonDirective;

    /** @hidden */
    private _subscriptions = new Subscription();

    /** @hidden */
    ngAfterContentInit(): void {
        if (this.disabled) {
            this.textareaElement.disabled = true;
        }

        this._subscriptions.add(
            this.textareaElement.valueChange.subscribe((value => this.buttonElement.disabled = !Boolean(value))));
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }
}
