import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';


@Component({
  selector: 'app-update-cupboard',
  templateUrl: './update-cupboard.component.html',
  styleUrls: ['./update-cupboard.component.css']
})
export class UpdateCupboardComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService) { }

  updateCupboardForm: FormGroup;

  ngOnInit() {
  	this.updateCupboardForm = this.fb.group({
      title: ['']
    })
  }

  onSubmit(data: any) {
  	this.cupboardService.updateCupboard(this.cupboardService.getCupboardId() , data)
  }

}
