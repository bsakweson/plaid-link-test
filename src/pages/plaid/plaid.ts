import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var Plaid;

@Component({
  selector: 'page-plaid',
  templateUrl: 'plaid.html'
})
export class PlaidPage {

  private linkHandler;

  public static PLAID_PUBLISHABLE_KEY = "7dc382b3780665771fc7317f8651c8";
  public static PLAID_ENVIRONMENT: string = "sandbox";
  public static APP_NAME: string = "kaphamobile";

  constructor(public navCtrl: NavController) {

  }

  ionViewWillLoad() {
    this.configurePlaid();
  }

  configurePlaid() {
    this.linkHandler = Plaid.create({
      clientName: PlaidPage.APP_NAME,
      env: PlaidPage.PLAID_ENVIRONMENT,
      key: PlaidPage.PLAID_PUBLISHABLE_KEY,
      product: ['auth'],
      selectAccount: true,
      forceIframe: true,
      onLoad: function () {
        console.debug('loaded');
      },
      onSuccess: function (public_token: string, metadata: any) {
        console.log(metadata);
      },
      onExit: function (err, metadata: any) {
        if (err != null) {
          console.error(err);
        }
      }
    });
  }

  forceExitLink() {
    this.linkHandler.exit();
  }

  link() {
    this.linkHandler.open();
  }

}
