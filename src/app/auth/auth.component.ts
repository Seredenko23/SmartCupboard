import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
	
  profileForm: FormGroup;
  ErrorMessage: string;
  constructor(private fb: FormBuilder) { 
    this.ErrorMessage = 'Invalid Value'
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
      ]],
    })
  }

  onSubmit() {
  	console.log(this.profileForm.value);
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }

}
