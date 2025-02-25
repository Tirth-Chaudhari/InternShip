import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnImageComponent } from './learn-image.component';

describe('LearnImageComponent', () => {
  let component: LearnImageComponent;
  let fixture: ComponentFixture<LearnImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
