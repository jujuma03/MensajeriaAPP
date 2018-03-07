webpackJsonp([1],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(afAuth, afDatabase, toast, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.user.loggedin = true;
                _this.user.correo = data.email;
                _this.user.nombre = data.displayName;
                _this.user.fotoPerfil = data.photoURL;
                _this.user.telefono = data.phoneNumber;
            }
        });
    };
    WelcomePage.prototype.mainMudanza = function () {
        this.navCtrl.push('MudanzaPage');
    };
    WelcomePage.prototype.mainElectr = function () {
        this.navCtrl.push('ArtiDomesticosPage');
    };
    WelcomePage.prototype.mainAnimal = function () {
        this.navCtrl.push('AnimalesPage');
    };
    WelcomePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.user.loggedin = false;
        this.navCtrl.push("LoginPage");
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\User\Desktop\ResetPeru\EnvioApp\Mensajeria\MensajeriaAPP\MensajeriaAPP\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-left >Bienvenido<ion-icon name="exit" (click)="logout()"></ion-icon> </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-card (click)="mainMudanza()">\n    <img src="img/mudanza.jpg"/>\n    <div class="card-title">Mudanza:</div>\n    <div class="card-subtitle">Departamento, casa, oficina</div>\n  </ion-card>\n\n  <ion-card (click)="mainElectr()">\n    <img src="img/electrodomesticos.jpg"/>\n    <div class="card-title">Artículos Domésticos:</div>\n    <div class="card-subtitle">Muebles, Electrodomésticos, Máquinas de Gym</div>\n  </ion-card>\n\n  <ion-card (click)="mainAnimal()">\n    <img src="img/animal.jpg"/>\n    <div class="card-title">Animales:</div>\n    <div class="card-subtitle">Perros, Gatos, Caballos, Ganados</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\ResetPeru\EnvioApp\Mensajeria\MensajeriaAPP\MensajeriaAPP\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=1.js.map