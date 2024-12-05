import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNursesComponent } from './register-nurses.component';

describe('RegisterNursesComponent', () => {
  let component: RegisterNursesComponent;
  let fixture: ComponentFixture<RegisterNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
