
import { NgModule, ErrorHandler } from '@angular/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SignInPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QuestionPage } from '../pages/question/question';
import { InGamePage } from '../pages/ingame/ingame';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';
import { ResetPage } from '../pages/reset/reset';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';


export const firebaseConfig2 = {
  apiKey: "AIzaSyCLi_xNUUu3L3B748yNeup6bwXSaC5OUR8",
  authDomain: "minutebets.firebaseapp.com",
  databaseURL: "https://minutebets.firebaseio.com",
  projectId: "minutebets",
  storageBucket: "minutebets.appspot.com",
  messagingSenderId: "213833608385"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SignInPage,
    HomePage,
    QuestionPage,
    InGamePage,
    TabsPage,
    LoginPage,
    SignupPage,
    AccountPage,
    ResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   // AngularFireModule.initializeApp(firebaseConfig.fire),
   AngularFireModule.initializeApp(firebaseConfig2),
    NgxErrorsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SignInPage,
    HomePage,
    QuestionPage,
    InGamePage,
    TabsPage,
    LoginPage,
    SignupPage,
    AccountPage,
    ResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth,
    Vibration
  ]
})
export class AppModule {}
