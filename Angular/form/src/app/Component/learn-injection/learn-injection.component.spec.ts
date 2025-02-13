import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnInjectionComponent } from './learn-injection.component';

describe('LearnInjectionComponent', () => {
  let component: LearnInjectionComponent;
  let fixture: ComponentFixture<LearnInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
