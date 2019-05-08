import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyABIFWWeeDDyTEHwHROje7zPqIvkAjaLc0",
  authDomain: "booklist-e22f6.firebaseapp.com",
  databaseURL: "https://booklist-e22f6.firebaseio.com",
  projectId: "booklist-e22f6",
  storageBucket: "booklist-e22f6.appspot.com",
  messagingSenderId: "230231051457",
  appId: "1:230231051457:web:de4200f07549c436"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp( firebaseConfig ), AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
