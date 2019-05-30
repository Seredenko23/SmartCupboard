import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
