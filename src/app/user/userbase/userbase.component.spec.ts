import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbaseComponent } from './userbase.component';

describe('UserbaseComponent', () => {
  let component: UserbaseComponent;
  let fixture: ComponentFixture<UserbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
