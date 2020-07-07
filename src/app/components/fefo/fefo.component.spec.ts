import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FefoComponent } from './fefo.component';

describe('FefoComponent', () => {
  let component: FefoComponent;
  let fixture: ComponentFixture<FefoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FefoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FefoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
