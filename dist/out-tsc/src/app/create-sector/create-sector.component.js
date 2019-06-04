import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
var CreateSectorComponent = /** @class */ (function () {
    function CreateSectorComponent(fb, http, cupboardService) {
        this.fb = fb;
        this.http = http;
        this.cupboardService = cupboardService;
    }
    CreateSectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/readers")
            .subscribe(function (data) {
            _this.response = data;
        });
        this.createSectorForm = this.fb.group({
            title: [''],
            readerId: ['']
        });
    };
    CreateSectorComponent.prototype.onSubmit = function (formValue) {
        this.cupboardService.createSector(this.cupboardService.getShelfId(), formValue);
    };
    CreateSectorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-sector',
            templateUrl: './create-sector.component.html',
            styleUrls: ['./create-sector.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient, CupboardServiceService])
    ], CreateSectorComponent);
    return CreateSectorComponent;
}());
export { CreateSectorComponent };
//# sourceMappingURL=create-sector.component.js.map