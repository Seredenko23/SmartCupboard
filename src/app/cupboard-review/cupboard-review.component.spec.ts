import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupboardReviewComponent } from './cupboard-review.component';

describe('CupboardReviewComponent', () => {
  let component: CupboardReviewComponent;
  let fixture: ComponentFixture<CupboardReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupboardReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupboardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
