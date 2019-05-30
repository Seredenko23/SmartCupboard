import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';

@Component({
  selector: 'app-update-sector',
  templateUrl: './update-sector.component.html',
  styleUrls: ['./update-sector.component.css']
})
export class UpdateSectorComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService) { }

  updateSectorForm: FormGroup;
  readers: any;

  ngOnInit() {
  	this.cupboardService.getReaders()
  	.subscribe(data => {
  		this.readers = data;
  	})
  	this.updateSectorForm = this.fb.group({
      title: [''],
      readerId: ['']
    })
  }

  onSubmit(data: any) {
  	this.cupboardService.updateSector(this.cupboardService.getShelfId(), this.cupboardService.getSectorId(), data)
  }

}
