import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintripComponent } from './admintrip.component';

describe('AdmintripComponent', () => {
  let component: AdmintripComponent;
  let fixture: ComponentFixture<AdmintripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
