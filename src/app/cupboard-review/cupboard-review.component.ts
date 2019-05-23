import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CreateCupboardComponent } from '../create-cupboard/create-cupboard.component';
import { CreateShelfComponent } from '../create-shelf/create-shelf.component';
import { CreateSectorComponent } from '../create-sector/create-sector.component';
import { UpdateShelfComponent } from '../update-shelf/update-shelf.component';
import { UpdateCupboardComponent } from '../update-cupboard/update-cupboard.component';
import { CupboardServiceService } from '../cupboard-service.service';
import { MatExpansionModule } from '@angular/material/expansion';

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

  createCupboard() {
    const dialogRef = this.Cupboard.open(CreateCupboardComponent, {
      width:'400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getCupboard();
    })
  }

  createShelf(cupboardId: number) {
  this.cupboardService.setCupboardId(cupboardId);
    const dialogRef = this.Cupboard.open(CreateShelfComponent, {
      width:'400px',
      data: {}
    });
  }

  createSector(shelfId: number) {
  this.cupboardService.setShelfId(shelfId);
    const dialogRef = this.Cupboard.open(CreateSectorComponent, {
      width:'400px',
      data: {}
    });
  }

  updateCupboard(cupboardId: number) {
  this.cupboardService.setCupboardId(cupboardId);
    const dialogRef = this.Cupboard.open(UpdateCupboardComponent, {
      width:'400px',
      data: {}
    });
  }

  updateShelf(cupboardId: number, shelfId: number) {
    this.cupboardService.setCupboardId(cupboardId);
    this.cupboardService.setShelfId(shelfId);
    const dialogRef = this.Cupboard.open(UpdateShelfComponent, {
      width:'400px',
      data: {}
    });
  }

  deleteCupboard(id: number) {
    this.cupboardService.deleteCurrentCupboard(id);
  }

  deleteShefl(id: number) {
    this.cupboardService.deleteCurrentShelf(id);
  }

  deleteSector(id: number) {
    this.cupboardService.deleteCurrentSector(id);
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