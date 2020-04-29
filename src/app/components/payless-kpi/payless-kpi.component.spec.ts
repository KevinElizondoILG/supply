import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylessKpiComponent } from './payless-kpi.component';

describe('PaylessKpiComponent', () => {
  let component: PaylessKpiComponent;
  let fixture: ComponentFixture<PaylessKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaylessKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaylessKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
