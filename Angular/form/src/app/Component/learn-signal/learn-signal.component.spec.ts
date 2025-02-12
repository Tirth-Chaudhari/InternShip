import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSignalComponent } from './learn-signal.component';

describe('LearnSignalComponent', () => {
  let component: LearnSignalComponent;
  let fixture: ComponentFixture<LearnSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
