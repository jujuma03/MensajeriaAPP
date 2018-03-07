webpackJsonp([4],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MudanzaPageModule", function() { return MudanzaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mudanza__ = __webpack_require__(515);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MudanzaPageModule = (function () {
    function MudanzaPageModule() {
    }
    MudanzaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mudanza__["a" /* MudanzaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mudanza__["a" /* MudanzaPage */]),
            ],
        })
    ], MudanzaPageModule);
    return MudanzaPageModule;
}());

//# sourceMappingURL=mudanza.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MudanzaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(133);
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
 * Generated class for the MudanzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MudanzaPage = (function () {
    function MudanzaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MudanzaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MudanzaPage');
    };
    MudanzaPage.prototype.mainMap = function () {
        this.navCtrl.push('MapPage');
    };
    MudanzaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mudanza',template:/*ion-inline-start:"C:\Users\User\Desktop\ResetPeru\EnvioApp\Mensajeria\MensajeriaAPP\MensajeriaAPP\src\pages\mudanza\mudanza.html"*/'<!--\n  Generated template for the MudanzaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mudanza</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card (click)="mainMap()">\n    <img src="img/departpeque.jpg"/>\n    <div class="card-title">Depart/Casa Pequeña:</div>\n    <div class="card-subtitle">1 habitación, 1 Cocina</div>\n  </ion-card>\n\n  <ion-card (click)="mainMap()">\n    <img src="img/departmedio.jpg"/>\n    <div class="card-title">Depart/Casa Mediana:</div>\n    <div class="card-subtitle">2 habitaciones, 1 Cocina, 1 Sala</div>\n  </ion-card>\n\n  <ion-card (click)="mainMap()">\n    <img src="img/departgrande.jpg"/>\n    <div class="card-title">Depart/Casa Grande:</div>\n    <div class="card-subtitle">3 habitaciones, 1 Cocina, 1 Sala</div>\n  </ion-card>\n\n  <ion-card (click)="mainMap()">\n    <img src="img/oficina.jpg"/>\n    <div class="card-title">Oficina:</div>\n    <div class="card-subtitle">Cuarto de estudio a cualquier tamaño</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\User\Desktop\ResetPeru\EnvioApp\Mensajeria\MensajeriaAPP\MensajeriaAPP\src\pages\mudanza\mudanza.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], MudanzaPage);
    return MudanzaPage;
    var _a, _b;
}());

//# sourceMappingURL=mudanza.js.map

/***/ })

});
//# sourceMappingURL=4.js.map