          import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,App } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from '../../models/user';
import { MudanzaPage } from '../mudanza/mudanza';
import { ArtiDomesticosPage } from '../arti-domesticos/arti-domesticos';
import { AnimalesPage } from '../animales/animales';
import { LoginPage} from '../login/login';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  user = {} as User;
  usuarioData: AngularFireObject<User>;


  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams,public appCtrl: App) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.user.loggedin = true;
        this.user.correo = data.email;
        this.user.nombre = data.displayName;
        this.user.fotoPerfil = data.photoURL;
        this.user.telefono = data.phoneNumber;    
      }
      
    } );
  }

  mainMudanza(){
    this.navCtrl.push(MudanzaPage);
  }

  mainElectr(){
    this.navCtrl.push(ArtiDomesticosPage);
  }

  mainAnimal(){
    this.navCtrl.push(AnimalesPage);
  }

  logout(){
    this.appCtrl.getRootNav (). setRoot (LoginPage); 
  }

}
