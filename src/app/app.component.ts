import { Component, HostListener, ElementRef  } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthComponent } from '../app/auth/auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { Router,NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Event as NavigationEvent } from "@angular/router";
import { CreateCupboardComponent } from './create-cupboard/create-cupboard.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  loader: boolean = true;
  url: string;
  ShowCreateCupboard: boolean = false;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(public signIn: MatDialog, public singUp: MatDialog, private router: Router, public Cupboard: MatDialog, ) {
    router.events.pipe(
      filter(event => {
        return (event instanceof NavigationStart)
      })
    ).subscribe((event: NavigationStart) => {
      if(event.url == "/cupboard-review") {
        this.ShowCreateCupboard = true;
      } else {
        this.ShowCreateCupboard = false;
      }
    })
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loader = true;
      }
      if(event instanceof NavigationEnd) {
        this.loader = false;
      }
    })
  }

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

  createCupboard() {
    const dialogRef = this.Cupboard.open(CreateCupboardComponent, {
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
