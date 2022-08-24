(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-class-master-edit-class-master-edit-class-master-module"],{

/***/ "/9IG":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/class-master/edit-class-master/edit-class-master-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EditClassMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassMasterPageRoutingModule", function() { return EditClassMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_class_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-class-master.page */ "TupN");




const routes = [
    {
        path: '',
        component: _edit_class_master_page__WEBPACK_IMPORTED_MODULE_3__["EditClassMasterPage"]
    }
];
let EditClassMasterPageRoutingModule = class EditClassMasterPageRoutingModule {
};
EditClassMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditClassMasterPageRoutingModule);



/***/ }),

/***/ "4w4P":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/class-master/edit-class-master/edit-class-master.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNsYXNzLW1hc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "9Qi1":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/class-master/edit-class-master/edit-class-master.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EditClassMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassMasterPageModule", function() { return EditClassMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-class-master-routing.module */ "/9IG");
/* harmony import */ var _edit_class_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-class-master.page */ "TupN");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let EditClassMasterPageModule = class EditClassMasterPageModule {
};
EditClassMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditClassMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_class_master_page__WEBPACK_IMPORTED_MODULE_6__["EditClassMasterPage"]]
    })
], EditClassMasterPageModule);



/***/ }),

/***/ "TupN":
/*!********************************************************************************!*\
  !*** ./src/app/pages/class-master/edit-class-master/edit-class-master.page.ts ***!
  \********************************************************************************/
/*! exports provided: EditClassMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassMasterPage", function() { return EditClassMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-class-master.page.html */ "t4rf");
/* harmony import */ var _edit_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-class-master.page.scss */ "4w4P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_classMaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/classMaster */ "HneZ");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");








let EditClassMasterPage = class EditClassMasterPage {
    constructor(classMasterService, activatedRoute, router, toastController) {
        this.classMasterService = classMasterService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
        this.classMaster = new src_app_models_classMaster__WEBPACK_IMPORTED_MODULE_6__["ClassMaster"]('', '');
        this.msgOk = '';
        this.msgKo = '';
    }
    ngOnInit() {
        this.cargar();
    }
    onUpdate() {
        const id = this.activatedRoute.snapshot.params.id;
        this.classMasterService.actualizar(id, this.classMaster).subscribe(data => {
            this.presentToast(this.classMaster.name + ' actualizado');
            this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.classMasterService.detalle(id).subscribe(data => {
            this.classMaster = data;
        }, err => {
            this.volver();
        });
    }
    vaciar() {
        this.classMaster.name = '';
        this.classMaster.description = '';
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
EditClassMasterPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__["ClassMasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EditClassMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-class-master',
        template: _raw_loader_edit_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditClassMasterPage);



/***/ }),

/***/ "t4rf":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class-master/edit-class-master/edit-class-master.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Editar clase\"></app-header>\n<ion-content>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onUpdate()\" novalidate>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n            <ion-list-header lines=\"full\">\n              <ion-label>\n                Editar clase \n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label>Nombre:</ion-label>\n              <ion-input placeholder=\"Nombre de la clase\" name=\"name\" [(ngModel)]=\"classMaster.name\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Descripcion: </ion-label>\n                <ion-input placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"classMaster.description\"></ion-input>\n              </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"create\">  </ion-icon>\n                    Actualizar\n                     </ion-button>\n             </div>\n          </ion-list>\n         \n    </form>\n\n   \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-class-master-edit-class-master-edit-class-master-module.js.map