import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';

@Component({
  selector: 'app-create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.css']
})
export class CreateSectorComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService ) { }

  response: any;

  createSectorForm: FormGroup;

  ngOnInit() {
    this.http.get("/api/readers")
    .subscribe(data => {
      this.response = data;
    })
  	this.createSectorForm = this.fb.group({
      title: [''],
      readerId: ['']
    })
  }

  onSubmit(formValue: any) {
   this.cupboardService.createSector(this.cupboardService.getShelfId(), formValue);
  }

}
