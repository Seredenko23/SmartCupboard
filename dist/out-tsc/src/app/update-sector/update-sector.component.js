import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
var UpdateSectorComponent = /** @class */ (function () {
    function UpdateSectorComponent(fb, http, cupboardService) {
        this.fb = fb;
        this.http = http;
        this.cupboardService = cupboardService;
    }
    UpdateSectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cupboardService.getReaders()
            .subscribe(function (data) {
            _this.readers = data;
        });
        this.updateSectorForm = this.fb.group({
            title: [''],
            readerId: ['']
        });
    };
    UpdateSectorComponent.prototype.onSubmit = function (data) {
        this.cupboardService.updateSector(this.cupboardService.getShelfId(), this.cupboardService.getSectorId(), data);
    };
    UpdateSectorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-sector',
            templateUrl: './update-sector.component.html',
            styleUrls: ['./update-sector.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient, CupboardServiceService])
    ], UpdateSectorComponent);
    return UpdateSectorComponent;
}());
export { UpdateSectorComponent };
//# sourceMappingURL=update-sector.component.js.map