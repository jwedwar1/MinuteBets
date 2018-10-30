import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login';
import { AuthService } from '../services/auth.services';
import { HomePage } from '../pages/home/home';


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPageModule;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  initializeApp() {

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPageModule;
          }
        },
        () => {
          this.rootPage = LoginPageModule;
        }
      );
  }

  login() {
    this.auth.signOut();
    this.nav.setRoot(LoginPageModule);
    //this.navCtrl.setRoot(LoginPageModule);
  }

  logout() {
  this.auth.signOut();
  this.nav.setRoot(LoginPageModule);
  //this.navCtrl.setRoot(HomePage);
  }

}


