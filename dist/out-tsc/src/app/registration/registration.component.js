import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb) {
        this.fb = fb;
        this.ErrorMessage = 'Invalid Value';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.fb.group({
            email: ['', [
                    Validators.required,
                    Validators.email
                ]],
            password: ['', [
                    Validators.required,
                    Validators.minLength(8)
                ]],
            FirstName: ['', [
                    Validators.required,
                ]],
            LastName: ['', [
                    Validators.required,
                ]]
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        console.log(this.registrationForm.value);
    };
    Object.defineProperty(RegistrationComponent.prototype, "email", {
        get: function () {
            return this.registrationForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "password", {
        get: function () {
            return this.registrationForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "FirstName", {
        get: function () {
            return this.registrationForm.get('FirstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "LastName", {
        get: function () {
            return this.registrationForm.get('LastName');
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map