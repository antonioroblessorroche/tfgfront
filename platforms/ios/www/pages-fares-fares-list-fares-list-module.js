(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fares-fares-list-fares-list-module"],{

/***/ "0Q5p":
/*!*************************************************************!*\
  !*** ./src/app/pages/fares/fares-list/fares-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXJlcy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "1l9Q":
/*!***********************************************************!*\
  !*** ./src/app/pages/fares/fares-list/fares-list.page.ts ***!
  \***********************************************************/
/*! exports provided: FaresListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaresListPage", function() { return FaresListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fares_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fares-list.page.html */ "o57a");
/* harmony import */ var _fares_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fares-list.page.scss */ "0Q5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_fare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/fare */ "Fr/w");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");









let FaresListPage = class FaresListPage {
    constructor(service, router, activatedRoute, toastController, alertController) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.fares = [];
    }
    ngOnInit() {
        // this.cargar();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ionViewWillEnter() {
        this.cargar();
    }
    cargar() {
        this.subs.add(this.service.lista(100).subscribe(data => {
            this.fares = data.content;
        }));
    }
    newTrainingClass() {
        this.subs.add(this.service
            .nuevo(new src_app_models_fare__WEBPACK_IMPORTED_MODULE_7__["Fare"](null, "Nueva Tarifa", 0.0))
            .subscribe(data => {
            console.log(data);
            this.cargar();
        }, err => {
            console.log('Error: ' + err);
        }));
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
    borrar(id) {
        this.subs.add(this.service.delete(id).subscribe(data => {
            this.presentToast('Centro de entrenamiento borrado correctamente');
            this.cargar();
        }, err => {
            this.presentToast('Error borrando item');
        }));
    }
    deleteConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Borrado de datos',
                message: 'Confirmación de borrado de datos',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.borrar(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FaresListPage.ctorParameters = () => [
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_8__["FareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
FaresListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fares-list',
        template: _raw_loader_fares_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fares_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaresListPage);



/***/ }),

/***/ "9hDo":
/*!*************************************************************!*\
  !*** ./src/app/pages/fares/fares-list/fares-list.module.ts ***!
  \*************************************************************/
/*! exports provided: FaresListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaresListPageModule", function() { return FaresListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fares_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fares-list-routing.module */ "JnLt");
/* harmony import */ var _fares_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fares-list.page */ "1l9Q");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let FaresListPageModule = class FaresListPageModule {
};
FaresListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fares_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaresListPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_fares_list_page__WEBPACK_IMPORTED_MODULE_6__["FaresListPage"]]
    })
], FaresListPageModule);



/***/ }),

/***/ "Fr/w":
/*!********************************!*\
  !*** ./src/app/models/fare.ts ***!
  \********************************/
/*! exports provided: Fare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fare", function() { return Fare; });
class Fare {
    constructor(id, name, amount) {
        this.id = id;
        this.amount = amount;
        this.name = name;
    }
}


/***/ }),

/***/ "JnLt":
/*!*********************************************************************!*\
  !*** ./src/app/pages/fares/fares-list/fares-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FaresListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaresListPageRoutingModule", function() { return FaresListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fares_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fares-list.page */ "1l9Q");




const routes = [
    {
        path: '',
        component: _fares_list_page__WEBPACK_IMPORTED_MODULE_3__["FaresListPage"]
    }
];
let FaresListPageRoutingModule = class FaresListPageRoutingModule {
};
FaresListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaresListPageRoutingModule);



/***/ }),

/***/ "o57a":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fares/fares-list/fares-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Gestion de Tarifas\"></app-header>\n\n<ion-content>\n   <ion-list *ngFor=\"let fare of fares\">\n       <ion-item-sliding>\n           <ion-item-options side=\"start\" > \n              <ion-item-option routerLink=\"/edit-fare/{{fare.id}}\"> \n                <ion-icon name=\"eye\" slot=\"icon-only\"> \n               </ion-icon>  \n              </ion-item-option>\n           </ion-item-options> \n       \n           <ion-item>\n             <ion-label>{{fare.name}} ({{fare.amount}}€)</ion-label>\n           </ion-item>\n       \n           <ion-item-options side=\"end\">\n               <ion-item-option color=\"danger\" (click)=\"deleteConfirm(center.id)\">\n                   <ion-icon name=\"trash\" slot=\"icon-only\" >\n                   </ion-icon>  \n               </ion-item-option>\n           </ion-item-options>\n       </ion-item-sliding>\n   </ion-list>\n\n  \n   <div class=\"ion-text-center ion-margin-top\">\n       <!-- <h3>Desliza para ver las opciones</h3> -->\n       <ion-button expand=\"block\" color=\"success\" (click)=\"newTrainingClass()\">\n           <ion-icon name=\"add-circle\"></ion-icon>\n           <ion-label> Nueva tarifa</ion-label>\n       </ion-button>\n   </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-fares-fares-list-fares-list-module.js.map