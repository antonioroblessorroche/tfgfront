(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-class-master-new-class-master-new-class-master-module"],{

/***/ "KaVa":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/class-master/new-class-master/new-class-master-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: NewClassMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClassMasterPageRoutingModule", function() { return NewClassMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_class_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-class-master.page */ "Nuof");




const routes = [
    {
        path: '',
        component: _new_class_master_page__WEBPACK_IMPORTED_MODULE_3__["NewClassMasterPage"]
    }
];
let NewClassMasterPageRoutingModule = class NewClassMasterPageRoutingModule {
};
NewClassMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewClassMasterPageRoutingModule);



/***/ }),

/***/ "Nuof":
/*!******************************************************************************!*\
  !*** ./src/app/pages/class-master/new-class-master/new-class-master.page.ts ***!
  \******************************************************************************/
/*! exports provided: NewClassMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClassMasterPage", function() { return NewClassMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-class-master.page.html */ "id1y");
/* harmony import */ var _new_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-class-master.page.scss */ "ppYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_classMaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/classMaster */ "HneZ");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");








let NewClassMasterPage = class NewClassMasterPage {
    constructor(workoutService, router, toastController) {
        this.workoutService = workoutService;
        this.router = router;
        this.toastController = toastController;
        this.name = '';
        this.description = '';
        this.msgOk = '';
        this.msgKo = '';
    }
    ngOnInit() {
    }
    onCreate() {
        this.workout = new src_app_models_classMaster__WEBPACK_IMPORTED_MODULE_6__["ClassMaster"](this.name, this.description);
        this.workoutService.nuevo(this.workout).subscribe(data => {
            this.presentToast(data.mensaje);
            this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    vaciar() {
        this.name = '';
        this.description = '';
    }
    volver() {
        this.router.navigate(['/admin-class-master']);
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
};
NewClassMasterPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__["ClassMasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
NewClassMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-class-master',
        template: _raw_loader_new_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewClassMasterPage);



/***/ }),

/***/ "id1y":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class-master/new-class-master/new-class-master.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nueva clase\"></app-header>\n\n<ion-content>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n            <ion-list-header lines=\"full\">\n              <ion-label>\n                Crear nueva clase maestra\n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label>Nombre:</ion-label>\n              <ion-input required placeholder=\"Nombre de la clase\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Descripcion: </ion-label>\n                <ion-input required placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n            </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"add-circle\">  </ion-icon>\n                    Crear\n                     </ion-button>\n             </div>\n             <!-- <div class=\"ion-padding\">\n                <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n                    <ion-icon name=\"refresh-circle\">  </ion-icon>\n                    Reset\n                     </ion-button>\n             </div> -->\n          </ion-list>\n         \n    </form>\n\n    <!-- <div class=\"ion-text-center\">\n        <ion-label position=\"floating\">\n            <ion-text color=\"danger\">\n                *\n            </ion-text> Campos obligatorios\n        </ion-label>\n    </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "oWAy":
/*!********************************************************************************!*\
  !*** ./src/app/pages/class-master/new-class-master/new-class-master.module.ts ***!
  \********************************************************************************/
/*! exports provided: NewClassMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClassMasterPageModule", function() { return NewClassMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-class-master-routing.module */ "KaVa");
/* harmony import */ var _new_class_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-class-master.page */ "Nuof");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let NewClassMasterPageModule = class NewClassMasterPageModule {
};
NewClassMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewClassMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_new_class_master_page__WEBPACK_IMPORTED_MODULE_6__["NewClassMasterPage"]]
    })
], NewClassMasterPageModule);



/***/ }),

/***/ "ppYr":
/*!********************************************************************************!*\
  !*** ./src/app/pages/class-master/new-class-master/new-class-master.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctY2xhc3MtbWFzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-class-master-new-class-master-new-class-master-module.js.map