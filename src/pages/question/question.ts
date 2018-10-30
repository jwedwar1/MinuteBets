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
    one: boolean;
    two: boolean;
    three: boolean;
    userId: string;
    user: firebase.User;
    database = firebase.database();
  
  constructor(public alertCtrl: AlertController, 
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    public afDatabase: AngularFireDatabase,
) { 
}
    submitAlert() {
    if(this.one && this.two && !this.three){
      //add currency
      this.afAuth.authState.subscribe(user => {
        if (user) this.user = user;
        this.userId = user.uid;
        var databaseRef = firebase.database().ref('users').child(this.userId).child('currency');
        databaseRef.transaction(function(currency) {
          if (currency) {
            currency = currency + 50;
          }
          return currency;
        })
        })
    
      let alert = this.alertCtrl.create({
        title: 'Nice!',
        message: 'Correct answer! You got 50 coins!',
        buttons: ['Awesome!']
      });
      alert.present()
  
    } else{
      //minus currency
      this.afAuth.authState.subscribe(user => {
        if (user) this.user = user;
        this.userId = user.uid;
        var databaseRef = firebase.database().ref('users').child(this.userId).child('currency');
        databaseRef.transaction(function(currency) {
          if (currency) {
            currency = currency - 50;
          }
          return currency;
        })
        })

    
      let alert = this.alertCtrl.create({
        title: 'Nice try',
        message: 'Wrong this time, but keep trying! You lost 50 coins.',
        buttons: ['Ok']
      });
      alert.present()
  
    }
    this.navCtrl.setRoot(InGamePage);
  }
    goBack(){
      this.navCtrl.setRoot(InGamePage);
    }
  }