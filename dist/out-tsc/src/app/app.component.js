import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthComponent } from '../app/auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CreateCupboardComponent } from './create-cupboard/create-cupboard.component';
var AppComponent = /** @class */ (function () {
    function AppComponent(signIn, singUp, router, Cupboard) {
        var _this = this;
        this.signIn = signIn;
        this.singUp = singUp;
        this.router = router;
        this.Cupboard = Cupboard;
        this.loader = true;
        this.ShowCreateCupboard = false;
        this.topPosToStartShowing = 100;
        router.events.pipe(filter(function (event) {
            return (event instanceof NavigationStart);
        })).subscribe(function (event) {
            if (event.url == "/cupboard-review") {
                _this.ShowCreateCupboard = true;
            }
            else {
                _this.ShowCreateCupboard = false;
            }
        });
        router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.loader = true;
            }
            if (event instanceof NavigationEnd) {
                _this.loader = false;
            }
        });
    }
    AppComponent.prototype.onSingIn = function () {
        var dialogRef = this.signIn.open(AuthComponent, {
            width: '400px',
            data: {}
        });
    };
    AppComponent.prototype.onSingUp = function () {
        var dialogRef = this.singUp.open(RegistrationComponent, {
            width: '400px',
            data: {}
        });
    };
    AppComponent.prototype.createCupboard = function () {
        var dialogRef = this.Cupboard.open(CreateCupboardComponent, {
            width: '400px',
            data: {}
        });
    };
    AppComponent.prototype.checkScroll = function () {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    AppComponent.prototype.gotoTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    tslib_1.__decorate([
        HostListener('window:scroll'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], AppComponent.prototype, "checkScroll", null);
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog, MatDialog, Router, MatDialog])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map