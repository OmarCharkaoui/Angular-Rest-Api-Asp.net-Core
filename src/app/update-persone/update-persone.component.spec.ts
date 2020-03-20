import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersoneComponent } from './update-persone.component';

describe('UpdatePersoneComponent', () => {
  let component: UpdatePersoneComponent;
  let fixture: ComponentFixture<UpdatePersoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
