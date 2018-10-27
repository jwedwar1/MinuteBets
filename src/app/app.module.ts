
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
import { LoginPageModule } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AccountPage } from '../pages/account/account';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth.services';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SignInPage,
    HomePage,
    QuestionPage,
    InGamePage,
    TabsPage,
    LoginPageModule,
    SignupPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    NgxErrorsModule
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
    LoginPageModule,
    SignupPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
