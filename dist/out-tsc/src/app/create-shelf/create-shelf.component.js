import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
var CreateShelfComponent = /** @class */ (function () {
    function CreateShelfComponent(fb, http, cupboardService) {
        this.fb = fb;
        this.http = http;
        this.cupboardService = cupboardService;
    }
    CreateShelfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/devices")
            .subscribe(function (data) {
            _this.response = data;
        });
        this.createShelfForm = this.fb.group({
            title: [''],
            deviceId: ['']
        });
    };
    CreateShelfComponent.prototype.onSubmit = function (formValue) {
        this.cupboardService.createShelf(this.cupboardService.getCupboardId(), formValue);
    };
    CreateShelfComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-shelf',
            templateUrl: './create-shelf.component.html',
            styleUrls: ['./create-shelf.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient, CupboardServiceService])
    ], CreateShelfComponent);
    return CreateShelfComponent;
}());
export { CreateShelfComponent };
//# sourceMappingURL=create-shelf.component.js.map