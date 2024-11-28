import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllNursesComponent } from './get-all-nurses.component';

describe('GetAllNursesComponent', () => {
  let component: GetAllNursesComponent;
  let fixture: ComponentFixture<GetAllNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
