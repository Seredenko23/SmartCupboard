import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CreateCupboardComponent } from '../create-cupboard/create-cupboard.component';
import { CreateShelfComponent } from '../create-shelf/create-shelf.component';
import { CreateSectorComponent } from '../create-sector/create-sector.component';
import { UpdateShelfComponent } from '../update-shelf/update-shelf.component';
import { UpdateCupboardComponent } from '../update-cupboard/update-cupboard.component';
import { UpdateSectorComponent } from '../update-sector/update-sector.component';
import { CupboardServiceService } from '../cupboard-service.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cupboard-review',
  templateUrl: './cupboard-review.component.html',
  styleUrls: ['./cupboard-review.component.css']
})
export class CupboardReviewComponent implements OnInit {

  constructor(private http: HttpClient,
   public Cupboard: MatDialog,
   private cupboardService: CupboardServiceService ) { }

  cupboards: any;
  shelves: any;
  sectors: any;

  createShelf(cupboardId: number) {
  this.cupboardService.setCupboardId(cupboardId);
    const dialogRef = this.Cupboard.open(CreateShelfComponent, {
      width:'400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
        this.getShelf(cupboardId);
      }
    )
  }

  createSector(shelfId: number) {
  this.cupboardService.setShelfId(shelfId);
    const dialogRef = this.Cupboard.open(CreateSectorComponent, {
      width:'400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
        this.getSectors(shelfId);
      }
    )
  }

  updateCupboard(cupboardId: number) {
  this.cupboardService.setCupboardId(cupboardId);
    const dialogRef = this.Cupboard.open(UpdateCupboardComponent, {
      width:'400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
        this.getCupboard();
      }
    )
  }

  updateShelf(cupboardId: number, shelfId: number) {
    this.cupboardService.setCupboardId(cupboardId);
    this.cupboardService.setShelfId(shelfId);
    const dialogRef = this.Cupboard.open(UpdateShelfComponent, {
      width:'400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
        this.getShelf(cupboardId);
      }
    )
  }

  updateSector(shelfId: number, sectorId: number) {
    this.cupboardService.setShelfId(shelfId);
    this.cupboardService.setSectorId(sectorId);
    const dialogRef = this.Cupboard.open(UpdateSectorComponent, {
      width:'400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
        this.getSectors(shelfId);
      }
    )
  }

  deleteCupboard(id: number) {
    this.cupboardService.deleteCurrentCupboard(id);
    this.getCupboard();
  }

  deleteShefl(shelfId: number, cupboardId: number) {
    this.cupboardService.deleteCurrentShelf(shelfId);
    this.getShelf(cupboardId);

  }

  deleteSector(sectorId: number, shelfId: number) {
    this.cupboardService.deleteCurrentSector(sectorId);
    this.getSectors(shelfId);
  }

  getCupboard(){
  	this.cupboardService.getCupboards()
    .subscribe(data =>{
      this.cupboards = data;
    });
  }

  getShelf(cupboardId: number) {
    this.cupboardService.getShelves(cupboardId)
    .subscribe(data => {
      this.shelves = data.shelves;
    });
  }

  getSectors(shelfId: number) {
    this.cupboardService.getSectors(shelfId)
    .subscribe(data => {
      this.sectors = data.sectors;
    });
  }

  ngOnInit() {
  	this.getCupboard();
  }

}