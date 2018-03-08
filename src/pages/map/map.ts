import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import {LoginPage } from '../login/login';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  logout(){
    this.appCtrl.getRootNav (). setRoot (LoginPage); 
  }
}
