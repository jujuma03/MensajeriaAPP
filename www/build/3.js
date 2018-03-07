webpackJsonp([3],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(alertCtrl, afAuth, afDatabase, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            _this.user.correo = data.email;
            _this.user.nombre = data.displayName;
            _this.user.fotoPerfil = data.photoURL;
            _this.user.telefono = data.phoneNumber;
        });
    };
    PerfilPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    PerfilPage.prototype.saveProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("cliente/" + auth.uid).set(_this.user).then(function () { return _this.alert("Datos del perfil Actualizados"); });
        });
    };
    /*
      logout(){
        this.afAuth.auth.signOut();
    
        this.user.loggedin = false;
        this.navCtrl.setRoot("LoginPage");
      }
    */
    PerfilPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\User\Desktop\ResetPeru\EnvioApp\Mensajeria\MensjaeriaApp\MensajeriaApp\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil <ion-icon name="exit" (click)="logout()"></ion-icon> </ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <img src="{{user.fotoPerfil}}"/>\n\n    <p> {{user.nombre}} &nbsp; {{user.apellido}} <p>\n    <p> {{user.correo}} <p>\n    <p> {{user.dni}} <p>\n    <p> {{user.domicilio}} <p>\n    <p> {{user.telefono}} <p>\n    <p> {{user.nacimiento}} <p>\n\n  <ion-item>\n    <ion-label floating>Nombre</ion-label>\n    <ion-input [(ngModel)]="user.nombre"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Apellido</ion-label>\n      <ion-input [(ngModel)]="user.apellido"></ion-input>\n    </ion-item>\n\n  <ion-item>\n      <ion-label floating>Correo eléctronico</ion-label>\n      <ion-input [(ngModel)]="user.correo"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Cambiar contraseña</ion-label>\n      <ion-input [(ngModel)]="user.contrasena"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>DNI</ion-label>\n      <ion-input [(ngModel)]="user.dni"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Domicilio</ion-label>\n      <ion-input [(ngModel)]="user.domicilio"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label floating>Teléfono</ion-label>\n        <ion-input [(ngModel)]="user.telefono"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label floating>Nacimiento</ion-label>\n        <ion-input [(ngModel)]="user.nacimiento"></ion-input>\n    </ion-item>\n\n\n  <button ion-button clear block (click)="saveProfile()">Actualizar Perfil</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\ResetPeru\EnvioApp\Mensajeria\MensjaeriaApp\MensajeriaApp\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=3.js.map