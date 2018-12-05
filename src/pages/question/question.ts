import { Component } from '@angular/core';
import { NavController, Checkbox } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InGamePage } from './../ingame/ingame';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.services';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';



@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  question: question = {
    answers: {
      one: "",
      two: "",
      three: ""
    },
    correct: "",
    hidden: false,
    qtext: ""
  }
  userId: string;
  user: firebase.User;
  database = firebase.database();
  relationship: any = {};

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    public afDatabase: AngularFireDatabase,
  ) {
    if (this.auth.user) {
      var questionRef = firebase.database().ref('question');
      questionRef.on('value', (snapshot) => {
        if (snapshot) {
          this.question = snapshot.val();
        }
      });
    }


  }
  submitAlert() {
    if (this.relationship == this.question.correct) {
      //add currency
      if (this.auth.user.uid) {
        var databaseRef = firebase.database().ref('users').child(this.auth.user.uid).child('currency');
        databaseRef.transaction(function (currency) {
          if (currency) {
            currency = currency + 50;
          }
          return currency;
        });


        let alert = this.alertCtrl.create({
          title: 'Nice!',
          message: 'Correct answer! You got 50 coins!',
          buttons: ['Awesome!']
        });
        alert.present()

      }
    }
    else {
      //minus currency
      if (this.auth.user.uid) {
        var databaseRef = firebase.database().ref('users').child(this.auth.user.uid).child('currency');
        databaseRef.transaction(function (currency) {
          if (currency) {
            currency = currency - 50;
          }
          return currency;
        })
      }


      let alert = this.alertCtrl.create({
        title: 'Nice try',
        message: 'Wrong this time, but keep trying! You lost 50 coins.',
        buttons: ['Ok']
      });
      alert.present()

    }
    this.navCtrl.setRoot(InGamePage);
  }

  goBack() {
    this.navCtrl.setRoot(InGamePage);
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
