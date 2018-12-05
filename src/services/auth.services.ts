import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	public user: firebase.User;
	public first: boolean = false;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		this.first = true;
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	get authenticated(): boolean {
  		return this.user !== null;
	}

	getEmail() {
  		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
  		return this.afAuth.auth.signOut();
	}

	resetPW(email) {
		
		this.afAuth.auth.sendPasswordResetEmail(email)
		//this.navCtrl.push(HomePage);
    }

}