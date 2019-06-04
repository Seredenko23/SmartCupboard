import { async, TestBed } from '@angular/core/testing';
import { UpdateSectorComponent } from './update-sector.component';
describe('UpdateSectorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdateSectorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdateSectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-sector.component.spec.js.map