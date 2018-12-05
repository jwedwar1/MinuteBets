import { Component, ValueProvider } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AccountPage } from './../account/account';
import { QuestionPage } from './../question/question';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.services';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-ingame',
  templateUrl: 'ingame.html'
})
export class InGamePage {

  currency: number;
  userId: string;
  home: number;
  away: number;
  user: firebase.User;
  question: question = {
    answers: {
      one: "",
      two: "",
      three: ""
    },
    correct: "",
    hidden: false,
    qtext: ""
  };


  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    public afDatabase: AngularFireDatabase,
    private vibration: Vibration,
  ) {
    //this.currency = 0
    if (this.auth.user) {
      var countRef = firebase.database().ref('users').child(this.auth.user.uid).child('currency');
      countRef.once('value', (snapshot) => {
        if (snapshot) {
          this.currency = snapshot.val();
        }
      });
      var questionRef = firebase.database().ref('question');
      questionRef.on('value', (snapshot) => {
        if (snapshot) {
          this.question = snapshot.val();
        }
      });
      var homeRef = firebase.database().ref('home');
      homeRef.once('value', (snapshot) => {
        if (snapshot) {
          this.home = snapshot.val();
        }
      });
      var awayRef = firebase.database().ref('away');
      awayRef.once('value', (snapshot) => {
        if (snapshot) {
          this.away = snapshot.val();
        }
      });


      

    }
  }


  goBack() {
    this.navCtrl.pop();
  }

  generateQuestion() {
    this.navCtrl.setRoot(QuestionPage);
  }

  goToHomePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(HomePage);
  }

  doAccountAlert() {
    /*
      let alert = this.alertCtrl.create({
        title: 'Coming Soon!',
        message: 'This button will link to a webpage, such as RebelRewards, where students can redeem their tokens for prizes',
        buttons: ['Ok']
      });
      alert.present()
      */

    this.navCtrl.push(AccountPage);
  }


  betSelected() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will display in-depth information about the previous bet. Current info displayed is: Time Since Bet, Amount Won/Lost, Result',
      buttons: ['Ok']
    });
    alert.present()

  }

}

interface answer {
  one: string,
  two: string,
  three: string,
}

interface question {
  answers: answer,
  correct: string,
  hidden: boolean,
  qtext: string,
}

