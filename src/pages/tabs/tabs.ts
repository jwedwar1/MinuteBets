import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SignInPage } from '../signin/signin';
import { HomePage } from '../home/home';
import { QuestionPage } from '../question/question';
import { InGamePage } from '../ingame/ingame'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SignInPage;
  tab4Root = QuestionPage;
  tab5Root = InGamePage;

  constructor() {

  }
}
