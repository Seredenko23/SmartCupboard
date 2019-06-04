import { async, TestBed } from '@angular/core/testing';
import { CreateCupboardComponent } from './create-cupboard.component';
describe('CreateCupboardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateCupboardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateCupboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-cupboard.component.spec.js.map