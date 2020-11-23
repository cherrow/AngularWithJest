import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTestComponent } from './template-test.component';
import {NO_ERRORS_SCHEMA} from "@angular/compiler";

describe('TemplateTestComponent', () => {
  let component: TemplateTestComponent;
  let fixture: ComponentFixture<TemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTestComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('whether show first dom', () => {
    test('should show first dom when only showFirstDom is true', () => {
      component.showFirstDom = true;
      component.readonly = false;

      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.querySelector('.first-dom')).toBeTruthy();
    });

    test('should show first dom when only readonly is true', () => {
      component.showFirstDom = false;
      component.readonly = true;

      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.querySelector('.first-dom')).toBeTruthy();
    });

    test('should not show first dom when showFirstDom is false and readonly is false', () => {
      component.showFirstDom = false;
      component.readonly = false;

      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.querySelector('.first-dom')).toBeFalsy();
    });
  });

  test('should enable input control and get expected placeholder when input control value is enable', () => {

    component.ngOnInit();
    component.inputControl.setValue('enable');

    expect(component.inputControl.disabled).toBeFalsy();
    expect(component.placeholder).toEqual('enable worked');
  });

  test('should disable input control and get expected placeholder when input control value is enable', () => {

    component.ngOnInit();
    component.inputControl.setValue('disable');

    expect(component.inputControl.disabled).toBeTruthy();
    expect(component.placeholder).toEqual('disable worked')
  });
});
