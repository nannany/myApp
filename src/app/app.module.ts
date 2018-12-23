import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; 
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireAuthModule } from '@angular/fire/auth'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nl2brPipe } from './nl2br.pipe';
import {PaginationModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Nl2brPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,  
    AngularFireAuthModule,  
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
