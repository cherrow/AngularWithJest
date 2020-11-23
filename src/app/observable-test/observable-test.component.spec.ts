import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTestComponent } from './observable-test.component';
import {TestService} from "../test.service";
import {of} from "rxjs";

describe('ObservableTestComponent', () => {
  let component: ObservableTestComponent;
  let fixture: ComponentFixture<ObservableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableTestComponent ],
      providers: [{
        provide: TestService,
        useValue: {testSubject$: of(false)}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should get create mode tip when component init and test subject is true', () => {
    const service = TestBed.inject(TestService);
    (service as any).testSubject$ = of(true);

    component.ngOnInit();

    expect((component as any).createTip).toEqual('create mode');
  });

  test('should get update mode tip when component init and test subject is false', () => {
    const service = TestBed.inject(TestService);
    (service as any).testSubject$ = of(false);

    component.ngOnInit();

    expect((component as any).createTip).toEqual('update mode');
  });
});
