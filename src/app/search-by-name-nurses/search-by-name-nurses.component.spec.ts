import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNameNursesComponent } from './search-by-name-nurses.component';

describe('SearchByNameNursesComponent', () => {
  let component: SearchByNameNursesComponent;
  let fixture: ComponentFixture<SearchByNameNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchByNameNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByNameNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
