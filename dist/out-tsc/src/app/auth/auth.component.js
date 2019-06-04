import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var AuthComponent = /** @class */ (function () {
    function AuthComponent(fb) {
        this.fb = fb;
        this.ErrorMessage = 'Invalid Value';
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.profileForm = this.fb.group({
            email: ['', [
                    Validators.required,
                    Validators.email
                ]],
            password: ['', [
                    Validators.required,
                ]],
        });
    };
    AuthComponent.prototype.onSubmit = function () {
        console.log(this.profileForm.value);
    };
    Object.defineProperty(AuthComponent.prototype, "email", {
        get: function () {
            return this.profileForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "password", {
        get: function () {
            return this.profileForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    AuthComponent = tslib_1.__decorate([
        Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], AuthComponent);
    return AuthComponent;
}());
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map