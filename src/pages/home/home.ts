import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlaidPage } from '../plaid/plaid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPlaid() {
    this.navCtrl.push(PlaidPage);
  }

}
