import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
var CreateCupboardComponent = /** @class */ (function () {
    function CreateCupboardComponent(fb, http, cupboardService) {
        this.fb = fb;
        this.http = http;
        this.cupboardService = cupboardService;
    }
    CreateCupboardComponent.prototype.ngOnInit = function () {
        this.createCupboardForm = this.fb.group({
            title: ['']
        });
    };
    CreateCupboardComponent.prototype.onSubmit = function (data) {
        this.cupboardService.createCupboard(data);
    };
    CreateCupboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-cupboard',
            templateUrl: './create-cupboard.component.html',
            styleUrls: ['./create-cupboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient, CupboardServiceService])
    ], CreateCupboardComponent);
    return CreateCupboardComponent;
}());
export { CreateCupboardComponent };
//# sourceMappingURL=create-cupboard.component.js.map