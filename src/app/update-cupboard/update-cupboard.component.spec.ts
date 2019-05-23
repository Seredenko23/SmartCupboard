import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCupboardComponent } from './update-cupboard.component';

describe('UpdateCupboardComponent', () => {
  let component: UpdateCupboardComponent;
  let fixture: ComponentFixture<UpdateCupboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCupboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCupboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
