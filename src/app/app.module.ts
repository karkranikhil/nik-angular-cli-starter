import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

// Must export the config
export const firebaseConfig = {
   apiKey: "AIzaSyARfYldhfA_3ilQwvnSVlsQq4z2LJ8nx5o",
    authDomain: "property-6b65f.firebaseapp.com",
    databaseURL: "https://property-6b65f.firebaseio.com",
    storageBucket: "property-6b65f.appspot.com",
    messagingSenderId: "499868468019"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'listings',component:ListingsComponent},
{path:'add-listing',component:AddListingComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig , firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
