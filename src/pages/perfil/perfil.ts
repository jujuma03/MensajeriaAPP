import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';
import { AngularFireDatabase } from "angularfire2/database";
import { LoginPage } from '../login/login';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,public appCtrl: App) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
        this.user.correo = data.email;
        this.user.nombre = data.displayName;
        this.user.fotoPerfil = data.photoURL;
        this.user.telefono = data.phoneNumber;
      
    } );
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  saveProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.object(`cliente/${auth.uid}`).set(this.user).then(() => this.alert("Datos del perfil Actualizados"))
    });
  }
  logout () { 
    this.appCtrl.getRootNav (). setRoot (LoginPage); 
    } 

}
