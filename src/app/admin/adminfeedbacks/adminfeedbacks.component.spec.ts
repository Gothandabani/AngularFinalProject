import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeedbacksComponent } from './adminfeedbacks.component';

describe('AdminfeedbacksComponent', () => {
  let component: AdminfeedbacksComponent;
  let fixture: ComponentFixture<AdminfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
