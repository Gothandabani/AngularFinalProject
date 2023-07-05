import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedbacksComponent } from './userfeedbacks.component';

describe('UserfeedbacksComponent', () => {
  let component: UserfeedbacksComponent;
  let fixture: ComponentFixture<UserfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
