import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsuccessloginComponent } from './doctorsuccesslogin.component';

describe('DoctorsuccessloginComponent', () => {
  let component: DoctorsuccessloginComponent;
  let fixture: ComponentFixture<DoctorsuccessloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsuccessloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsuccessloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
