import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup , FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
import { repeatWhen } from 'rxjs/operators';
import { interval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  colums: number = 4;
  notification: boolean = false;
  itemSubscription: any;
  cupboards: any;  
	shelves: any;
  items: any;

  constructor(private http: HttpClient,
   private fb: FormBuilder,
   private cupboardService: CupboardServiceService,
   private toastr: ToastrService,
   public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.getCupboard();
    this.breakpointObserver
      .observe(['(min-width: 720px)', '(min-width: 960px)', '(min-width: 1280px)'])
      .subscribe((state: BreakpointState) => {
        if (this.breakpointObserver.isMatched('(min-width: 1280px)')) {
          this.colums = 4;
        } else if(this.breakpointObserver.isMatched('(min-width: 960px)')) {
          this.colums = 3;
        } else if(this.breakpointObserver.isMatched('(min-width: 720px)')) {
          this.colums = 2;
        } else {
          this.colums = 1;
        }
      });
  }

  getCupboard() {
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

  getItem(ShelfId: number) {
    if(this.itemSubscription) {
      this.itemSubscription.unsubscribe();
      this.items = null;
    }
   this.itemSubscription = this.cupboardService.getItems(ShelfId).pipe(repeatWhen(() => interval(3000)))
    .subscribe((data:[]) => {
      if(((data != this.items) && !this.items) && data.length) {
        this.toastr.success("Your data is here, pal :D", "Awesome!");
      }
      if(!data.length) {
        this.toastr.error("There are no items on this shelf", "Oops!");
        this.items = null;
        this.itemSubscription.unsubscribe()
      } else {
        this.items = data;
      }
    },
    error =>{
      this.items = null;
      this.toastr.error("Can`t get responce from server", "Oops!");
    });
  }
  ngOnDestroy() {
    if(this.itemSubscription){
      this.itemSubscription.unsubscribe();
    }
  }
}
