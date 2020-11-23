import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceTestComponent} from './service-test.component';
import {TestService} from "../test.service";
import {NO_ERRORS_SCHEMA} from "@angular/compiler";
import {of} from "rxjs";

describe('ServiceTestComponent', () => {
  let component: ServiceTestComponent;
  let fixture: ComponentFixture<ServiceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTestComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: TestService,
        useValue: {
          fetchRecordByCreateMode: () => of(),
          updateCreateTip: () => of()
        }
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(false).toBeFalsy();
  });

  test('should get expected records and call update tip method when component init and isCreate is false', () => {
    (component as any).isCreate = false;
    const service = TestBed.inject(TestService);
    jest.spyOn(service, 'fetchRecordByCreateMode').mockReturnValue(of([2]));
    const methodSpy = jest.spyOn(service, 'updateCreateTip');

    component.ngOnInit();

    expect((component as any).records).toEqual([2]);
    expect(methodSpy).toHaveBeenCalledWith('update mode');
  });

  test('should get expected createTip when component init and isCreate is true', () => {
    (component as any).isCreate = true;

    component.ngOnInit();

    expect((component as any).createTip).toEqual('create mode');
  });
});
