import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersoneComponent } from './create-persone.component';

describe('CreatePersoneComponent', () => {
  let component: CreatePersoneComponent;
  let fixture: ComponentFixture<CreatePersoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
