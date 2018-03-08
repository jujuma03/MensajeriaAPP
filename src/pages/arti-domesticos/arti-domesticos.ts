import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { MapPage } from '../map/map';
import { LoginPage } from '../login/login';
/**
 * Generated class for the ArtiDomesticosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arti-domesticos',
  templateUrl: 'arti-domesticos.html',
})
export class ArtiDomesticosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtiDomesticosPage');
  }

  mainMap(){
    this.navCtrl.push(MapPage);
  }
  logout(){
    this.appCtrl.getRootNav (). setRoot (LoginPage);  }
}
