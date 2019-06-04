import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
var UpdateCupboardComponent = /** @class */ (function () {
    function UpdateCupboardComponent(fb, http, cupboardService) {
        this.fb = fb;
        this.http = http;
        this.cupboardService = cupboardService;
    }
    UpdateCupboardComponent.prototype.ngOnInit = function () {
        this.updateCupboardForm = this.fb.group({
            title: ['']
        });
    };
    UpdateCupboardComponent.prototype.onSubmit = function (data) {
        this.cupboardService.updateCupboard(this.cupboardService.getCupboardId(), data);
    };
    UpdateCupboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-cupboard',
            templateUrl: './update-cupboard.component.html',
            styleUrls: ['./update-cupboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient, CupboardServiceService])
    ], UpdateCupboardComponent);
    return UpdateCupboardComponent;
}());
export { UpdateCupboardComponent };
//# sourceMappingURL=update-cupboard.component.js.map