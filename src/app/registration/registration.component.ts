import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  ErrorMessage: string;
  constructor(private fb: FormBuilder) { 
    this.ErrorMessage = 'Invalid Value'
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      FirstName: ['', [
        Validators.required,
      ]],
      LastName: ['', [
        Validators.required,
      ]]
    })
  }

  onSubmit() {
  	console.log(this.registrationForm.value);
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get FirstName() {
    return this.registrationForm.get('FirstName');
  }
  get LastName() {
    return this.registrationForm.get('LastName');
  }
}
