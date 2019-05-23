import { Component, HostListener, ElementRef  } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthComponent } from '../app/auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(public signIn: MatDialog, public singUp: MatDialog ) { }

  onSingIn() {
  	const dialogRef = this.signIn.open(AuthComponent, {
  		width:'400px',
  		data: {}
  	});
  }

  onSingUp() {
    const dialogRef = this.singUp.open(RegistrationComponent, {
      width:'400px',
      data: {}
    });
  }

  @HostListener('window:scroll')
  checkScroll() {
    
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
