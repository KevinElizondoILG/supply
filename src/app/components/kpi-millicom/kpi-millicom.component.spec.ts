import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiMillicomComponent } from './kpi-millicom.component';

describe('KpiMillicomComponent', () => {
  let component: KpiMillicomComponent;
  let fixture: ComponentFixture<KpiMillicomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiMillicomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiMillicomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
