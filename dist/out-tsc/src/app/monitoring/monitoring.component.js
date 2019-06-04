import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
import { repeatWhen } from 'rxjs/operators';
import { interval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver } from '@angular/cdk/layout';
var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent(http, fb, cupboardService, toastr, breakpointObserver) {
        this.http = http;
        this.fb = fb;
        this.cupboardService = cupboardService;
        this.toastr = toastr;
        this.breakpointObserver = breakpointObserver;
        this.colums = 4;
        this.notification = false;
    }
    MonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCupboard();
        this.breakpointObserver
            .observe(['(min-width: 720px)', 959, b, '(min-width: 1024px)'])
            .subscribe(function (state) {
            if (_this.breakpointObserver.isMatched('(min-width: 1024px)')) {
                _this.colums = 4;
                console.log(state);
            }
            else if (_this.breakpointObserver.isMatched('(min-width: 720px)')) {
                _this.colums = 2;
                console.log(state);
            }
            else {
                _this.colums = 1;
                console.log(state);
            }
        });
    };
    MonitoringComponent.prototype.getCupboard = function () {
        var _this = this;
        this.cupboardService.getCupboards()
            .subscribe(function (data) {
            _this.cupboards = data;
        });
    };
    MonitoringComponent.prototype.getShelf = function (cupboardId) {
        var _this = this;
        this.cupboardService.getShelves(cupboardId)
            .subscribe(function (data) {
            _this.shelves = data.shelves;
        });
    };
    MonitoringComponent.prototype.getItem = function (ShelfId) {
        var _this = this;
        if (this.itemSubscription) {
            this.itemSubscription.unsubscribe();
            this.items = null;
        }
        this.itemSubscription = this.cupboardService.getItems(ShelfId).pipe(repeatWhen(function () { return interval(3000); }))
            .subscribe(function (data) {
            if (((data != _this.items) && !_this.items) && data.length) {
                _this.toastr.success("Your data is here, pal :D", "Awesome!");
            }
            if (!data.length) {
                _this.toastr.error("There are no items on this shelf", "Oops!");
                _this.items = null;
                _this.itemSubscription.unsubscribe();
            }
            else {
                _this.items = data;
            }
        }, function (error) {
            _this.items = null;
            _this.toastr.error("Can`t get responce from server", "Oops!");
        });
    };
    MonitoringComponent.prototype.ngOnDestroy = function () {
        if (this.itemSubscription) {
            this.itemSubscription.unsubscribe();
        }
    };
    MonitoringComponent = tslib_1.__decorate([
        Component({
            selector: 'app-monitoring',
            templateUrl: './monitoring.component.html',
            styleUrls: ['./monitoring.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            FormBuilder,
            CupboardServiceService,
            ToastrService,
            BreakpointObserver])
    ], MonitoringComponent);
    return MonitoringComponent;
}());
export { MonitoringComponent };
//# sourceMappingURL=monitoring.component.js.map