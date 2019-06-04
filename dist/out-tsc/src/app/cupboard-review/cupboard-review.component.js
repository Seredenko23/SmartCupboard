import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CreateShelfComponent } from '../create-shelf/create-shelf.component';
import { CreateSectorComponent } from '../create-sector/create-sector.component';
import { UpdateShelfComponent } from '../update-shelf/update-shelf.component';
import { UpdateCupboardComponent } from '../update-cupboard/update-cupboard.component';
import { UpdateSectorComponent } from '../update-sector/update-sector.component';
import { CupboardServiceService } from '../cupboard-service.service';
var CupboardReviewComponent = /** @class */ (function () {
    function CupboardReviewComponent(http, Cupboard, cupboardService) {
        this.http = http;
        this.Cupboard = Cupboard;
        this.cupboardService = cupboardService;
    }
    CupboardReviewComponent.prototype.createShelf = function (cupboardId) {
        this.cupboardService.setCupboardId(cupboardId);
        var dialogRef = this.Cupboard.open(CreateShelfComponent, {
            width: '400px',
            data: {}
        });
    };
    CupboardReviewComponent.prototype.createSector = function (shelfId) {
        this.cupboardService.setShelfId(shelfId);
        var dialogRef = this.Cupboard.open(CreateSectorComponent, {
            width: '400px',
            data: {}
        });
    };
    CupboardReviewComponent.prototype.updateCupboard = function (cupboardId) {
        this.cupboardService.setCupboardId(cupboardId);
        var dialogRef = this.Cupboard.open(UpdateCupboardComponent, {
            width: '400px',
            data: {}
        });
    };
    CupboardReviewComponent.prototype.updateShelf = function (cupboardId, shelfId) {
        this.cupboardService.setCupboardId(cupboardId);
        this.cupboardService.setShelfId(shelfId);
        var dialogRef = this.Cupboard.open(UpdateShelfComponent, {
            width: '400px',
            data: {}
        });
    };
    CupboardReviewComponent.prototype.updateSector = function (shelfId, sectorId) {
        this.cupboardService.setShelfId(shelfId);
        this.cupboardService.setSectorId(sectorId);
        var dialogRef = this.Cupboard.open(UpdateSectorComponent, {
            width: '400px',
            data: {}
        });
    };
    CupboardReviewComponent.prototype.deleteCupboard = function (id) {
        this.cupboardService.deleteCurrentCupboard(id);
    };
    CupboardReviewComponent.prototype.deleteShefl = function (id) {
        this.cupboardService.deleteCurrentShelf(id);
    };
    CupboardReviewComponent.prototype.deleteSector = function (id) {
        this.cupboardService.deleteCurrentSector(id);
    };
    CupboardReviewComponent.prototype.getCupboard = function () {
        var _this = this;
        this.cupboardService.getCupboards()
            .subscribe(function (data) {
            _this.cupboards = data;
        });
    };
    CupboardReviewComponent.prototype.getShelf = function (cupboardId) {
        var _this = this;
        this.cupboardService.getShelves(cupboardId)
            .subscribe(function (data) {
            _this.shelves = data.shelves;
        });
    };
    CupboardReviewComponent.prototype.getSectors = function (shelfId) {
        var _this = this;
        this.cupboardService.getSectors(shelfId)
            .subscribe(function (data) {
            _this.sectors = data.sectors;
        });
    };
    CupboardReviewComponent.prototype.ngOnInit = function () {
        this.getCupboard();
    };
    CupboardReviewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cupboard-review',
            templateUrl: './cupboard-review.component.html',
            styleUrls: ['./cupboard-review.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            MatDialog,
            CupboardServiceService])
    ], CupboardReviewComponent);
    return CupboardReviewComponent;
}());
export { CupboardReviewComponent };
//# sourceMappingURL=cupboard-review.component.js.map