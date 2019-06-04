import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
var EMAILS = ['gmail.com', 'ukr.net', 'mail.ru'];
var ProfileTableComponent = /** @class */ (function () {
    function ProfileTableComponent() {
        this.displayedColumns = ['id', 'name', 'progress', 'email'];
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        this.dataSource = new MatTableDataSource(users);
    }
    ProfileTableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ProfileTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ProfileTableComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort),
        tslib_1.__metadata("design:type", MatSort)
    ], ProfileTableComponent.prototype, "sort", void 0);
    ProfileTableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-table',
            templateUrl: './profile-table.component.html',
            styleUrls: ['./profile-table.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProfileTableComponent);
    return ProfileTableComponent;
}());
export { ProfileTableComponent };
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    var email = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + '@' + EMAILS[Math.round(Math.random() * (EMAILS.length - 1))];
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        email: email,
    };
}
//# sourceMappingURL=profile-table.component.js.map