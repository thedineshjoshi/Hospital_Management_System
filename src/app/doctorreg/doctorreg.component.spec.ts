import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorregComponent } from './doctorreg.component';

describe('DoctorregComponent', () => {
  let component: DoctorregComponent;
  let fixture: ComponentFixture<DoctorregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
