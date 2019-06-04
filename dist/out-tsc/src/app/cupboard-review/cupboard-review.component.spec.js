import { async, TestBed } from '@angular/core/testing';
import { CupboardReviewComponent } from './cupboard-review.component';
describe('CupboardReviewComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CupboardReviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CupboardReviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cupboard-review.component.spec.js.map