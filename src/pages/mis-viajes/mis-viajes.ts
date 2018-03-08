import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the MisViajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-viajes',
  templateUrl: 'mis-viajes.html',
})
export class MisViajesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisViajesPage');
  }
  logout(){
    this.appCtrl.getRootNav (). setRoot (LoginPage); 
  }
}
