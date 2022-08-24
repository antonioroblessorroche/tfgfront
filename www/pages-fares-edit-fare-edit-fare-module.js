(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fares-edit-fare-edit-fare-module"],{

/***/ "BB4K":
/*!***********************************************************!*\
  !*** ./src/app/pages/fares/edit-fare/edit-fare.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWZhcmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "GqDu":
/*!*********************************************************!*\
  !*** ./src/app/pages/fares/edit-fare/edit-fare.page.ts ***!
  \*********************************************************/
/*! exports provided: EditFarePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFarePage", function() { return EditFarePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_fare_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-fare.page.html */ "gb0b");
/* harmony import */ var _edit_fare_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-fare.page.scss */ "BB4K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");







let EditFarePage = class EditFarePage {
    constructor(service, router, activatedRoute, toastController, alertController) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.cargar();
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
    onCreate() {
        this.editar();
    }
    volver() {
        this.router.navigate(['/fares-list']);
    }
    editar() {
        this.service.actualizar(this.fare.id, this.fare).subscribe(data => {
            console.log(data);
            this.presentToast('Centro de entrenamiento actualizado correctamente');
            this.volver();
        }, err => {
            this.presentToast('No puco actualizarse el centro de entrenamientos.');
        });
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.service.detalle(id).subscribe(data => {
            this.fare = data;
            console.log(data);
        }, err => {
            this.presentToast('No se encontró el centro de entrenamientos');
            this.volver();
        });
    }
};
EditFarePage.ctorParameters = () => [
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_6__["FareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditFarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-fare',
        template: _raw_loader_edit_fare_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_fare_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditFarePage);



/***/ }),

/***/ "aVqj":
/*!***********************************************************!*\
  !*** ./src/app/pages/fares/edit-fare/edit-fare.module.ts ***!
  \***********************************************************/
/*! exports provided: EditFarePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFarePageModule", function() { return EditFarePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_fare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-fare-routing.module */ "jJ/9");
/* harmony import */ var _edit_fare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-fare.page */ "GqDu");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let EditFarePageModule = class EditFarePageModule {
};
EditFarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_fare_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditFarePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_fare_page__WEBPACK_IMPORTED_MODULE_6__["EditFarePage"]]
    })
], EditFarePageModule);



/***/ }),

/***/ "gb0b":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fares/edit-fare/edit-fare.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Edicion de tarifas\"></app-header>\n\n<ion-content *ngIf=\"fare\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\">\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-item>\n        <ion-label>Nombre: </ion-label>\n        <ion-input required placeholder=\"Nombre del centro\" name=\"nombre\" [(ngModel)]=\"fare.name\"></ion-input>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Cantidad: </ion-label>\n        <ion-input required placeholder=\"Descripcion\" name=\"description\" [(ngModel)]=\"fare.amount\"></ion-input>\n    </ion-item>\n\n\n\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Editar\n               </ion-button>\n       </div>\n       \n    </ion-list>\n   \n</form>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"!fare\">\n  <ion-card>\n      <ion-card-header>\n          <ion-card-title>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-title>\n          <ion-card-subtitle>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-justify\">\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "jJ/9":
/*!*******************************************************************!*\
  !*** ./src/app/pages/fares/edit-fare/edit-fare-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditFarePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFarePageRoutingModule", function() { return EditFarePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_fare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-fare.page */ "GqDu");




const routes = [
    {
        path: '',
        component: _edit_fare_page__WEBPACK_IMPORTED_MODULE_3__["EditFarePage"]
    }
];
let EditFarePageRoutingModule = class EditFarePageRoutingModule {
};
EditFarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditFarePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-fares-edit-fare-edit-fare-module.js.map