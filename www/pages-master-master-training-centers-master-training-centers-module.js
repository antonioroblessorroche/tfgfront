(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-master-master-training-centers-master-training-centers-module"],{

/***/ "0LFr":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/master/master-training-centers/master-training-centers.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MasterTrainingCentersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterTrainingCentersPageModule", function() { return MasterTrainingCentersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _master_training_centers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master-training-centers-routing.module */ "RziR");
/* harmony import */ var _master_training_centers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-training-centers.page */ "xHSv");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let MasterTrainingCentersPageModule = class MasterTrainingCentersPageModule {
};
MasterTrainingCentersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _master_training_centers_routing_module__WEBPACK_IMPORTED_MODULE_5__["MasterTrainingCentersPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_master_training_centers_page__WEBPACK_IMPORTED_MODULE_6__["MasterTrainingCentersPage"]]
    })
], MasterTrainingCentersPageModule);



/***/ }),

/***/ "C9V4":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/master-training-centers/master-training-centers.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Gestion de Centros\"></app-header>\n\n<ion-content>\n   <ion-list *ngFor=\"let center of centers\">\n       <ion-item-sliding>\n           <ion-item-options side=\"start\" > \n              <ion-item-option routerLink=\"/edit-master-training-centers/{{center.id}}\"> \n                <ion-icon name=\"eye\" slot=\"icon-only\"> \n               </ion-icon>  \n              </ion-item-option>\n           </ion-item-options> \n       \n           <ion-item>\n             <ion-label>{{center.name}}</ion-label>\n           </ion-item>\n       \n           <ion-item-options side=\"end\">\n               <ion-item-option color=\"danger\" (click)=\"deleteConfirm(center.id)\">\n                   <ion-icon name=\"trash\" slot=\"icon-only\" >\n                   </ion-icon>  \n               </ion-item-option>\n           </ion-item-options>\n       </ion-item-sliding>\n   </ion-list>\n\n  \n   <div class=\"ion-text-center ion-margin-top\">\n       <!-- <h3>Desliza para ver las opciones</h3> -->\n       <ion-button expand=\"block\" color=\"success\" (click)=\"newTrainingClass()\">\n           <ion-icon name=\"add-circle\"></ion-icon>\n           <ion-label> Nuevo Centro</ion-label>\n       </ion-button>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "H2lQ":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/master/master-training-centers/master-training-centers.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXItdHJhaW5pbmctY2VudGVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "RziR":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/master/master-training-centers/master-training-centers-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: MasterTrainingCentersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterTrainingCentersPageRoutingModule", function() { return MasterTrainingCentersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _master_training_centers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-training-centers.page */ "xHSv");




const routes = [
    {
        path: '',
        component: _master_training_centers_page__WEBPACK_IMPORTED_MODULE_3__["MasterTrainingCentersPage"]
    }
];
let MasterTrainingCentersPageRoutingModule = class MasterTrainingCentersPageRoutingModule {
};
MasterTrainingCentersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MasterTrainingCentersPageRoutingModule);



/***/ }),

/***/ "dsmo":
/*!******************************************!*\
  !*** ./src/app/models/trainingCenter.ts ***!
  \******************************************/
/*! exports provided: TrainingCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCenter", function() { return TrainingCenter; });
class TrainingCenter {
    constructor(id, name, description) {
        this.id = id;
        this.description = description;
        this.name = name;
    }
}


/***/ }),

/***/ "xHSv":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master/master-training-centers/master-training-centers.page.ts ***!
  \**************************************************************************************/
/*! exports provided: MasterTrainingCentersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterTrainingCentersPage", function() { return MasterTrainingCentersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_master_training_centers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./master-training-centers.page.html */ "C9V4");
/* harmony import */ var _master_training_centers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-training-centers.page.scss */ "H2lQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_models_trainingCenter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/trainingCenter */ "dsmo");
/* harmony import */ var src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/training-center.service */ "r+Cp");









let MasterTrainingCentersPage = class MasterTrainingCentersPage {
    constructor(service, router, activatedRoute, toastController, alertController) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.centers = [];
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
            this.centers = data.content;
        }));
    }
    newTrainingClass() {
        this.subs.add(this.service
            .nuevo(new src_app_models_trainingCenter__WEBPACK_IMPORTED_MODULE_7__["TrainingCenter"](null, "Nuevo centro de entrenamiento", "Nuevo centro de entrenamiento autogenerado"))
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
MasterTrainingCentersPage.ctorParameters = () => [
    { type: src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_8__["TrainingCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
MasterTrainingCentersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-master-training-centers',
        template: _raw_loader_master_training_centers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_master_training_centers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MasterTrainingCentersPage);



/***/ })

}]);
//# sourceMappingURL=pages-master-master-training-centers-master-training-centers-module.js.map