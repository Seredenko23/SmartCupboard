import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
var CupboardServiceService = /** @class */ (function () {
    function CupboardServiceService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    CupboardServiceService.prototype.setCupboardId = function (val) {
        this.cupboardId = val;
    };
    CupboardServiceService.prototype.getCupboardId = function () {
        return this.cupboardId;
    };
    CupboardServiceService.prototype.setShelfId = function (val) {
        this.shelfId = val;
    };
    CupboardServiceService.prototype.getShelfId = function () {
        return this.shelfId;
    };
    CupboardServiceService.prototype.setSectorId = function (val) {
        this.sectorId = val;
    };
    CupboardServiceService.prototype.getSectorId = function () {
        return this.sectorId;
    };
    CupboardServiceService.prototype.createCupboard = function (data) {
        var _this = this;
        this.http.post("/api/cupboards", data, { headers: new HttpHeaders({ 'Content-type': 'application/json' })
        })
            .subscribe(function (data) {
            _this.toastr.success("Cupboard created successfully", "Success!");
        }, function (error) {
            _this.toastr.error("There are some problems", "Oops!");
        });
    };
    CupboardServiceService.prototype.createShelf = function (cupboardId, formValue) {
        var _this = this;
        var post = { cupboardId: cupboardId, deviceId: formValue.deviceId, title: formValue.title };
        this.http.post("/api/cupboards/" + cupboardId + "/shelfs", post, { headers: new HttpHeaders({ 'Content-type': 'application/json' })
        })
            .subscribe(function (data) {
            _this.toastr.success("Shelf created successfully", "Success!");
        }, function (error) {
            _this.toastr.error("There are some problems", "Oops!");
        });
    };
    CupboardServiceService.prototype.createSector = function (shelfId, formValue) {
        var _this = this;
        var post = { shelfId: shelfId, readerId: formValue.readerId, title: formValue.title };
        this.http.post("/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors", post, { headers: new HttpHeaders({ 'Content-type': 'application/json' })
        })
            .subscribe(function (data) {
            _this.toastr.success("Sector created successfully", "Success!");
        }, function (error) {
            _this.toastr.error("There are some problems", "Oops!");
        });
    };
    CupboardServiceService.prototype.getCupboards = function () {
        return this.http.get('/api/cupboards');
    };
    CupboardServiceService.prototype.getShelves = function (cupboardId) {
        return this.http.get("/api/cupboards/" + cupboardId);
    };
    CupboardServiceService.prototype.getSectors = function (shelfId) {
        return this.http.get("/api/cupboards/{cupboardId}/shelfs/" + shelfId);
    };
    CupboardServiceService.prototype.getDevices = function () {
        return this.http.get("/api/devices");
    };
    CupboardServiceService.prototype.getItems = function (shelfId) {
        return this.http.get("/api/shelfs/" + shelfId + "/items");
    };
    CupboardServiceService.prototype.getReaders = function () {
        return this.http.get("/api/readers");
    };
    CupboardServiceService.prototype.updateCupboard = function (id, data) {
        var _this = this;
        this.http.put("api/cupboards/" + id, data)
            .subscribe(function (data) {
            _this.toastr.success("Your data updated properly", "Success!");
        }, function (error) {
            _this.toastr.error("There are some problems", "Oops!");
        });
    };
    CupboardServiceService.prototype.updateShelf = function (id, ShelfId, shelfData) {
        var _this = this;
        var request = { cupboardId: id, deviceId: shelfData.deviceId, title: shelfData.title };
        this.http.put("/api/cupboards/{cupboardId}/shelfs/" + ShelfId, request)
            .subscribe(function (data) {
            _this.toastr.success("Your data updated properly", "Success!");
        }, function (error) {
            _this.toastr.error("There are some problems", "Oops!");
        });
    };
    CupboardServiceService.prototype.updateSector = function (id, sectorId, sectorData) {
        var _this = this;
        var request = { shelfId: id, readerId: sectorData.readerId, title: sectorData.title };
        this.http.put("/api/cupboards/{cupboardId}/shelfs/{ShelfId/sectors/" + sectorId, request)
            .subscribe(function (data) {
            _this.toastr.success("Your data updated properly", "Success!");
        }, function (error) {
            _this.toastr.error("There are some problems", "Oops!");
        });
    };
    CupboardServiceService.prototype.deleteCurrentCupboard = function (id) {
        var _this = this;
        this.http.delete("/api/cupboards/" + id)
            .subscribe(function (data) {
            _this.toastr.success("Cupboard deleted correctly", "Success");
        });
    };
    CupboardServiceService.prototype.deleteCurrentShelf = function (id) {
        var _this = this;
        this.http.delete("api/cupboards/{cupboardId}/shelfs/" + id)
            .subscribe(function (data) {
            _this.toastr.success("Shelf deleted correctly", "Success");
        });
    };
    CupboardServiceService.prototype.deleteCurrentSector = function (id) {
        var _this = this;
        this.http.delete("/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors/" + id)
            .subscribe(function (data) {
            _this.toastr.success("Sector deleted correctly", "Success");
        });
    };
    CupboardServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ToastrService])
    ], CupboardServiceService);
    return CupboardServiceService;
}());
export { CupboardServiceService };
//# sourceMappingURL=cupboard-service.service.js.map