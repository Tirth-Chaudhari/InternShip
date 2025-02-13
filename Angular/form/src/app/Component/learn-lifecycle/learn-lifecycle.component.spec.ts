import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnLifecycleComponent } from './learn-lifecycle.component';

describe('LearnLifecycleComponent', () => {
  let component: LearnLifecycleComponent;
  let fixture: ComponentFixture<LearnLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnLifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
