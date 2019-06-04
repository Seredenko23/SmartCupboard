import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { CupboardReviewComponent } from './cupboard-review/cupboard-review.component';
var routes = [
    { path: 'home', component: MainPageComponent },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: 'monitoring', component: MonitoringComponent },
    //{ path: 'profile-list', component:ProfileTableComponent },
    { path: 'cupboard-review', component: CupboardReviewComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map