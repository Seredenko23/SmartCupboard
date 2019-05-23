import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCupboardComponent } from './create-cupboard.component';

describe('CreateCupboardComponent', () => {
  let component: CreateCupboardComponent;
  let fixture: ComponentFixture<CreateCupboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCupboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCupboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
