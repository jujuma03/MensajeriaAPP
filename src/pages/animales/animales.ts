import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { MapPage } from '../map/map';
import { LoginPage } from '../login/login';
/**
 * Generated class for the AnimalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animales',
  templateUrl: 'animales.html',
})
export class AnimalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalesPage');
  }
  
  mainMap(){
    this.navCtrl.push(MapPage);
  }
  logout(){
    this.appCtrl.getRootNav (). setRoot (LoginPage); 
  }
}
