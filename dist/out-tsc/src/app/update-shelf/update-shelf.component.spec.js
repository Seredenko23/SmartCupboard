import { async, TestBed } from '@angular/core/testing';
import { UpdateShelfComponent } from './update-shelf.component';
describe('UpdateShelfComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdateShelfComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdateShelfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-shelf.component.spec.js.map