import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';

import { CupboardServiceService } from './cupboard-service.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { CupboardReviewComponent } from './cupboard-review/cupboard-review.component';
import { CreateCupboardComponent } from './create-cupboard/create-cupboard.component';
import { CreateShelfComponent } from './create-shelf/create-shelf.component';
import { CreateSectorComponent } from './create-sector/create-sector.component';
import { UpdateShelfComponent } from './update-shelf/update-shelf.component';
import { UpdateCupboardComponent } from './update-cupboard/update-cupboard.component';
import { UpdateSectorComponent } from './update-sector/update-sector.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MonitoringComponent,
    AuthComponent,
    RegistrationComponent,
    ProfileTableComponent,
    CupboardReviewComponent,
    CreateCupboardComponent,
    CreateShelfComponent,
    CreateSectorComponent,
    UpdateShelfComponent,
    UpdateCupboardComponent,
    UpdateSectorComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonToggleModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    LayoutModule
  ],
  providers: [ CupboardServiceService ],
  
  entryComponents: [
  AuthComponent,
  RegistrationComponent,
  CreateCupboardComponent,
  CreateShelfComponent,
  UpdateShelfComponent,
  UpdateCupboardComponent,
  CreateSectorComponent,
  UpdateSectorComponent,
  EditItemComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
