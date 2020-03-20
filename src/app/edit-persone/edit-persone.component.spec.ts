import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersoneComponent } from './edit-persone.component';

describe('EditPersoneComponent', () => {
  let component: EditPersoneComponent;
  let fixture: ComponentFixture<EditPersoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
