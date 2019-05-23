import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';
import { repeatWhen } from 'rxjs/operators';
import { interval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  notification: boolean = false;
  itemSubscription: any;
  cupboards: any;  
	shelves: any;
  items: any;

  constructor(private http: HttpClient,
   private fb: FormBuilder,
   private cupboardService: CupboardServiceService,
   private toastr: ToastrService) { }

  ngOnInit() {
    this.getCupboard()
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
    .subscribe(data => {
      if((data != this.items) && !this.items) {
        this.toastr.success("Your data is here, pal :D", "Awesome!");
      }
        this.items = data;
    },
    error =>{
      this.items = null;
      this.toastr.error("Can`t get items from server", "Oops!");
    });

  }
}
