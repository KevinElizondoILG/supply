import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinationComponent } from './coordination.component';

describe('CoordinationComponent', () => {
  let component: CoordinationComponent;
  let fixture: ComponentFixture<CoordinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
