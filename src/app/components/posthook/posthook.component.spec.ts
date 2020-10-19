import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthookComponent } from './posthook.component';

describe('PosthookComponent', () => {
  let component: PosthookComponent;
  let fixture: ComponentFixture<PosthookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosthookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosthookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
