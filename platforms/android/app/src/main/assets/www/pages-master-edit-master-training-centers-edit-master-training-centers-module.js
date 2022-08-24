(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-master-edit-master-training-centers-edit-master-training-centers-module"],{

/***/ "1lFt":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/edit-master-training-centers/edit-master-training-centers.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nueva clase\"></app-header>\n\n<ion-content *ngIf=\"center\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\">\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-item>\n        <ion-label>Nombre: </ion-label>\n        <ion-input required placeholder=\"Nombre del centro\" name=\"nombre\" [(ngModel)]=\"center.name\"></ion-input>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Descripcion: </ion-label>\n        <ion-input required placeholder=\"Descripcion\" name=\"description\" [(ngModel)]=\"center.description\"></ion-input>\n    </ion-item>\n\n\n\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Editar\n               </ion-button>\n       </div>\n       \n    </ion-list>\n   \n</form>\n\n</ion-content>\n\n\n<ion-content *ngIf=\"!center\">\n  <ion-card>\n      <ion-card-header>\n          <ion-card-title>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-title>\n          <ion-card-subtitle>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-justify\">\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "8YKP":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/master/edit-master-training-centers/edit-master-training-centers.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1hc3Rlci10cmFpbmluZy1jZW50ZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "T+7M":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/master/edit-master-training-centers/edit-master-training-centers-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditMasterTrainingCentersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMasterTrainingCentersPageRoutingModule", function() { return EditMasterTrainingCentersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_master_training_centers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-master-training-centers.page */ "wuTq");




const routes = [
    {
        path: '',
        component: _edit_master_training_centers_page__WEBPACK_IMPORTED_MODULE_3__["EditMasterTrainingCentersPage"]
    }
];
let EditMasterTrainingCentersPageRoutingModule = class EditMasterTrainingCentersPageRoutingModule {
};
EditMasterTrainingCentersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditMasterTrainingCentersPageRoutingModule);



/***/ }),

/***/ "wuTq":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/master/edit-master-training-centers/edit-master-training-centers.page.ts ***!
  \************************************************************************************************/
/*! exports provided: EditMasterTrainingCentersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMasterTrainingCentersPage", function() { return EditMasterTrainingCentersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_master_training_centers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-master-training-centers.page.html */ "1lFt");
/* harmony import */ var _edit_master_training_centers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-master-training-centers.page.scss */ "8YKP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/training-center.service */ "r+Cp");







let EditMasterTrainingCentersPage = class EditMasterTrainingCentersPage {
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
        this.router.navigate(['/master-training-centers']);
    }
    editar() {
        this.service.actualizar(this.center.id, this.center).subscribe(data => {
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
            this.center = data;
            console.log(data);
        }, err => {
            this.presentToast('No se encontró el centro de entrenamientos');
            this.volver();
        });
    }
};
EditMasterTrainingCentersPage.ctorParameters = () => [
    { type: src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_6__["TrainingCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditMasterTrainingCentersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-master-training-centers',
        template: _raw_loader_edit_master_training_centers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_master_training_centers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditMasterTrainingCentersPage);



/***/ }),

/***/ "x6tn":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/master/edit-master-training-centers/edit-master-training-centers.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditMasterTrainingCentersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMasterTrainingCentersPageModule", function() { return EditMasterTrainingCentersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_master_training_centers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-master-training-centers-routing.module */ "T+7M");
/* harmony import */ var _edit_master_training_centers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-master-training-centers.page */ "wuTq");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let EditMasterTrainingCentersPageModule = class EditMasterTrainingCentersPageModule {
};
EditMasterTrainingCentersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_master_training_centers_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMasterTrainingCentersPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_master_training_centers_page__WEBPACK_IMPORTED_MODULE_6__["EditMasterTrainingCentersPage"]]
    })
], EditMasterTrainingCentersPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-master-edit-master-training-centers-edit-master-training-centers-module.js.map