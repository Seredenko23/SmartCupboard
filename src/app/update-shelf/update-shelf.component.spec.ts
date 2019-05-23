import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShelfComponent } from './update-shelf.component';

describe('UpdateShelfComponent', () => {
  let component: UpdateShelfComponent;
  let fixture: ComponentFixture<UpdateShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
