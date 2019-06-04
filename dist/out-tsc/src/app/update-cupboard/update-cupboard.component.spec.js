import { async, TestBed } from '@angular/core/testing';
import { UpdateCupboardComponent } from './update-cupboard.component';
describe('UpdateCupboardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdateCupboardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdateCupboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-cupboard.component.spec.js.map