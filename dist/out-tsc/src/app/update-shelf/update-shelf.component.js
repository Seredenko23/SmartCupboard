import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
var UpdateShelfComponent = /** @class */ (function () {
    function UpdateShelfComponent(fb, http, cupboardService) {
        this.fb = fb;
        this.http = http;
        this.cupboardService = cupboardService;
    }
    UpdateShelfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cupboardService.getDevices()
            .subscribe(function (data) {
            _this.devices = data;
        });
        console.log(this.devices);
        this.updateShelfForm = this.fb.group({
            title: [''],
            deviceId: ['']
        });
    };
    UpdateShelfComponent.prototype.onSubmit = function (data) {
        this.cupboardService.updateShelf(this.cupboardService.getCupboardId(), this.cupboardService.getShelfId(), data);
    };
    UpdateShelfComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-shelf',
            templateUrl: './update-shelf.component.html',
            styleUrls: ['./update-shelf.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient, CupboardServiceService])
    ], UpdateShelfComponent);
    return UpdateShelfComponent;
}());
export { UpdateShelfComponent };
//# sourceMappingURL=update-shelf.component.js.map