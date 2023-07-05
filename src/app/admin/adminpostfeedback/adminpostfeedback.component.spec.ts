import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpostfeedbackComponent } from './adminpostfeedback.component';

describe('AdminpostfeedbackComponent', () => {
  let component: AdminpostfeedbackComponent;
  let fixture: ComponentFixture<AdminpostfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpostfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpostfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
