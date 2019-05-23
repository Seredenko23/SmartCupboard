import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShelfComponent } from './create-shelf.component';

describe('CreateShelfComponent', () => {
  let component: CreateShelfComponent;
  let fixture: ComponentFixture<CreateShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
