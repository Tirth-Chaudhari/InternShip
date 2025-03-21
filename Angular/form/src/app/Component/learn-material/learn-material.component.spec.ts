import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMaterialComponent } from './learn-material.component';

describe('LearnMaterialComponent', () => {
  let component: LearnMaterialComponent;
  let fixture: ComponentFixture<LearnMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
