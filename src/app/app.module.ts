import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AdMobFree } from '@ionic-native/admob-free';

import { LoginPage } from '../pages/login/login';
import { Main } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import {WelcomePage} from '../pages/welcome/welcome';
import { MapPage } from '../pages/map/map';
import { MisViajesPage } from '../pages/mis-viajes/mis-viajes';
import { PerfilPage } from '../pages/perfil/perfil';
import { MudanzaPage } from '../pages/mudanza/mudanza';
import { ArtiDomesticosPage } from '../pages/arti-domesticos/arti-domesticos';
import { AnimalesPage } from '../pages/animales/animales';

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    Main,
    RegisterPage,
    WelcomePage,
    MapPage,
    MisViajesPage,
    PerfilPage,
    MudanzaPage,
    ArtiDomesticosPage,
    AnimalesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    Main,
    RegisterPage,
    WelcomePage,
    MapPage,
    MisViajesPage,
    PerfilPage,
    MudanzaPage,
    ArtiDomesticosPage,
    AnimalesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
