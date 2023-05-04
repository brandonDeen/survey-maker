import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSurveysComponent } from './manage-surveys.component';

describe('ManageSurveysComponent', () => {
  let component: ManageSurveysComponent;
  let fixture: ComponentFixture<ManageSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSurveysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
