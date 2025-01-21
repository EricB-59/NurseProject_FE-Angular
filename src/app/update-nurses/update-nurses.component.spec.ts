import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNursesComponent } from './update-nurses.component';

describe('UpdateNursesComponent', () => {
  let component: UpdateNursesComponent;
  let fixture: ComponentFixture<UpdateNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
