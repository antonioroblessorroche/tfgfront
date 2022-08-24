(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clasesDiarias-detail-daily-class-detail-daily-class-module"],{

/***/ "/5aE":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/detail-daily-class/detail-daily-class.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailDailyClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDailyClassPageModule", function() { return DetailDailyClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-daily-class-routing.module */ "K/J7");
/* harmony import */ var _detail_daily_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-daily-class.page */ "vY6l");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DetailDailyClassPageModule = class DetailDailyClassPageModule {
};
DetailDailyClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailDailyClassPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detail_daily_class_page__WEBPACK_IMPORTED_MODULE_6__["DetailDailyClassPage"]]
    })
], DetailDailyClassPageModule);



/***/ }),

/***/ "EhlV":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/detail-daily-class/detail-daily-class.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtZGFpbHktY2xhc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "K/J7":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/detail-daily-class/detail-daily-class-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetailDailyClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDailyClassPageRoutingModule", function() { return DetailDailyClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_daily_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-daily-class.page */ "vY6l");




const routes = [
    {
        path: '',
        component: _detail_daily_class_page__WEBPACK_IMPORTED_MODULE_3__["DetailDailyClassPage"]
    }
];
let DetailDailyClassPageRoutingModule = class DetailDailyClassPageRoutingModule {
};
DetailDailyClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailDailyClassPageRoutingModule);



/***/ }),

/***/ "THdD":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clasesDiarias/detail-daily-class/detail-daily-class.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clase\"></app-header>\n\n<ion-content *ngIf=\"class\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>{{class.locationName}}</ion-card-subtitle>\n      <ion-card-title>{{class.name}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Horario: {{class.time}} <br><br>\n      Plazas disponibles: {{class.slots}} <br><br>\n      {{class.description}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-content *ngIf=\"!pastClass && !userHasJoined && isAvailable\">\n    <ion-button (click)=\"inscribirme()\" expand=\"block\" color=\"success\">\n      <ion-icon name=\"add-circle\"></ion-icon>\n      Inscribirme\n    </ion-button>\n  </ion-content>\n\n  <ion-content *ngIf=\"!pastClass && userHasJoined\">\n    <ion-button (click)=\"borrarme()\" expand=\"block\" color=\"danger\">\n      <ion-icon name=\"add-circle\"></ion-icon>\n      Eliminar Inscripción\n    </ion-button>\n  </ion-content>\n\n\n\n  <ion-content *ngIf=\"!pastClass && !isAvailable && !userHasJoined\">\n    <ion-title align=\"center\">No hay plazas disponibles</ion-title>\n    <ion-title align=\"center\">Disculpe las molestias</ion-title>\n  </ion-content>\n  \n\n</ion-content>");

/***/ }),

/***/ "vY6l":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/detail-daily-class/detail-daily-class.page.ts ***!
  \***********************************************************************************/
/*! exports provided: DetailDailyClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDailyClassPage", function() { return DetailDailyClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-daily-class.page.html */ "THdD");
/* harmony import */ var _detail_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-daily-class.page.scss */ "EhlV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");








let DetailDailyClassPage = class DetailDailyClassPage {
    constructor(classService, router, activatedRoute, toastController, alertController, tokenService) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.tokenService = tokenService;
        this.isAvailable = true;
        this.userHasJoined = false;
        this.pastClass = false;
        this.hours = [];
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        const index = this.activatedRoute.snapshot.params.index;
        this.classService.detalle(id).subscribe(data => {
            console.log(data);
            this.class = data.dailyClasses[index];
            this.isAvailable = this.class.slots > this.class.reservations;
            this.userHasJoined = this.class.userHasJoined;
            this.hours = this.class.time.split(':');
            this.pastClass = new Date().getTime() > new Date(data.year, data.month - 1, data.day, parseInt(this.hours[0]), parseInt(this.hours[1], 0)).getTime();
            //  for (let i = 0; i < data.content.length; i++) {
            //    this.classes
            //   for (let j=0; j < data.content[i].dailyClasses.length; j++) {
            //     data.content[i].dailyClasses[j].index = j;
            //    }
            // }
        }, err => {
            this.volver();
        });
    }
    presentToast(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    }
    inscribirme() {
        const id = this.activatedRoute.snapshot.params.id;
        const userName = this.tokenService.getUsername();
        this.classService.inscripcion(id, userName, this.class.id).subscribe(data => {
            this.presentToast('Se ha realizado su inscripción en la clase.');
            this.volver();
        }, err => {
            this.presentToast('No ha podido realizarse su inscripción en la clase.');
        });
    }
    borrarme() {
        const id = this.activatedRoute.snapshot.params.id;
        const userName = this.tokenService.getUsername();
        this.classService.eliminacion(id, userName, this.class.id).subscribe(data => {
            this.presentToast('Se ha eliminado su inscripción en la clase.');
            this.volver();
        }, err => {
            this.presentToast('No ha podido eliminarse su inscripción en la clase.');
        });
    }
    volver() {
        this.router.navigate(['/search-daily-class']);
    }
};
DetailDailyClassPage.ctorParameters = () => [
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__["DailyClassesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }
];
DetailDailyClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-daily-class',
        template: _raw_loader_detail_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailDailyClassPage);



/***/ })

}]);
//# sourceMappingURL=pages-clasesDiarias-detail-daily-class-detail-daily-class-module.js.map