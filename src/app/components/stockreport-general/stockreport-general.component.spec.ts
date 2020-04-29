import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockreportGeneralComponent } from './stockreport-general.component';

describe('StockreportGeneralComponent', () => {
  let component: StockreportGeneralComponent;
  let fixture: ComponentFixture<StockreportGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockreportGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockreportGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
