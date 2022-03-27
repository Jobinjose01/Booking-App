import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbookingdetailsComponent } from './adminbookingdetails.component';

describe('AdminbookingdetailsComponent', () => {
  let component: AdminbookingdetailsComponent;
  let fixture: ComponentFixture<AdminbookingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbookingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbookingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
