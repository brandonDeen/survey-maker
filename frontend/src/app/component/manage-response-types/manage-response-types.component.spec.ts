import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResponseTypesComponent } from './manage-response-types.component';

describe('ManageResponseTypesComponent', () => {
  let component: ManageResponseTypesComponent;
  let fixture: ComponentFixture<ManageResponseTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageResponseTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResponseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
