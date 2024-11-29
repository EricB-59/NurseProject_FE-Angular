import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNursesComponent } from './login-nurses.component';

describe('LoginNursesComponent', () => {
  let component: LoginNursesComponent;
  let fixture: ComponentFixture<LoginNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
