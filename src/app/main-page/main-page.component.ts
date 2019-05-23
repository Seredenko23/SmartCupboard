import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthComponent } from '../auth/auth.component';

import { User } from 'D:/Project/angular/SmartCupBoard/smart-cupboard-Angular/src/environments/user'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public signIn: MatDialog ) { }

  ngOnInit() {
  }

}
