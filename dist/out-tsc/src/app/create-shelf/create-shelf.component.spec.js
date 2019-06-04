import { async, TestBed } from '@angular/core/testing';
import { CreateShelfComponent } from './create-shelf.component';
describe('CreateShelfComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreateShelfComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreateShelfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-shelf.component.spec.js.map