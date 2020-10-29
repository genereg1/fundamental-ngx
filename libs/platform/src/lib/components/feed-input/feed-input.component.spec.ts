import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, DebugElement, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AvatarComponent, AvatarModule, FormControlModule, SelectComponent } from '@fundamental-ngx/core';

import { FeedInputComponent } from './feed-input.component';
import { PlatformButtonModule } from '../button/public_api';

describe('FeedInputComponent', () => {
    let component: FeedInputComponent;
    let fixture: ComponentFixture<FeedInputComponent>;
    let hostEl: DebugElement;
    let textareaEl;
    let buttonEl;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ FormsModule, PlatformButtonModule, AvatarModule, FormControlModule ],
            declarations: [ FeedInputComponent ]
        })
            .overrideComponent(FeedInputComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedInputComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        hostEl = fixture.debugElement.query(By.css('.fd-feed-input'));
        textareaEl = fixture.debugElement.query(By.css('textarea'));
        buttonEl = fixture.debugElement.query(By.css('fdp-button'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disabled state', () => {
        component.disabled = true;
        fixture.detectChanges();

        expect(textareaEl.nativeElement.getAttribute('ng-reflect-is-disabled')).toEqual('true');
        expect(buttonEl.nativeElement.getAttribute('ng-reflect-disabled')).toEqual('true');
    });

    it('should button disabled when textarea has not a value', () => {
        textareaEl.nativeElement.value = '';
        textareaEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(buttonEl.nativeElement.getAttribute('ng-reflect-disabled')).toEqual('true');
    });

    it('should button enable when textarea has a value', () => {
        textareaEl.nativeElement.value = 'test';
        textareaEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(buttonEl.nativeElement.getAttribute('ng-reflect-disabled')).toEqual('false');
    });

    it('should textarea grow by default', () => {
        textareaEl.nativeElement.value = '1 \n 2 \n 3 \n 4 \n';
        component.resize();

        expect(textareaEl.nativeElement.style.height).toEqual('87px');
    });

    it('should set max height', () => {
        component.maxHeight = 7;
        fixture.detectChanges();

        component.resize();
        expect(textareaEl.nativeElement.style.maxHeight).toEqual('133px');
    })
});
