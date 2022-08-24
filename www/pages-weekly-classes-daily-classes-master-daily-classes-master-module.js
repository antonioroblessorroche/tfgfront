(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-daily-classes-master-daily-classes-master-module"],{

/***/ "M02q":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/daily-classes-master/daily-classes-master-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: DailyClassesMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyClassesMasterPageRoutingModule", function() { return DailyClassesMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _daily_classes_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-classes-master.page */ "SBbX");




const routes = [
    {
        path: '',
        component: _daily_classes_master_page__WEBPACK_IMPORTED_MODULE_3__["DailyClassesMasterPage"]
    }
];
let DailyClassesMasterPageRoutingModule = class DailyClassesMasterPageRoutingModule {
};
DailyClassesMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DailyClassesMasterPageRoutingModule);



/***/ }),

/***/ "SBbX":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/daily-classes-master/daily-classes-master.page.ts ***!
  \****************************************************************************************/
/*! exports provided: DailyClassesMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyClassesMasterPage", function() { return DailyClassesMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_daily_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./daily-classes-master.page.html */ "j0Oh");
/* harmony import */ var _daily_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily-classes-master.page.scss */ "ZmQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");







let DailyClassesMasterPage = class DailyClassesMasterPage {
    constructor(classService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    ngOnInit() {
        // this.cargar();
    }
    ionViewWillEnter() {
        this.cargar();
    }
    cargar() {
        this.dailyClassId = this.activatedRoute.snapshot.params.id;
        this.classService.detalleMaster(this.dailyClassId).subscribe(data => {
            this.classes = data;
            //  if (this.classes.classesDetail!= null || this.classes.classesDetail != undefined) {
            //   for (let i=0; i < this.classes.classesDetail.length; i++) {
            //       this.classes.classesDetail[i].convertedTimeStart = new Date(this.classes.classesDetail[i].timeStart).toLocaleTimeString();
            //       this.classes.classesDetail[i].convertedTimeEnd = new Date(this.classes.classesDetail[i].timeEnd).toLocaleTimeString();
            //    }
            //   }
        }, err => {
            this.volver();
        });
    }
    deleteConfirm(indexOfElement) {
        this.classes.dailyClasses.splice(indexOfElement, 1);
        this.classService.actualizarMaster(this.classes.id, this.classes).subscribe(data => {
            this.presentToast('Clase eliminada correctamente');
        }, err => {
            this.presentToast('No fue posible eliminar clase');
        });
        this.cargar();
    }
    volver() {
        this.router.navigate(['/']);
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
DailyClassesMasterPage.ctorParameters = () => [
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__["DailyClassesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
DailyClassesMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-daily-classes-master',
        template: _raw_loader_daily_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_daily_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DailyClassesMasterPage);



/***/ }),

/***/ "ZmQ1":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/daily-classes-master/daily-classes-master.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYWlseS1jbGFzc2VzLW1hc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "j0Oh":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/daily-classes-master/daily-classes-master.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases\"></app-header>\n\n<ion-content *ngIf=\"classes\">\n  <ion-list *ngFor=\"let workout of classes.dailyClasses; index as indexOfElement\">\n    <ion-item-sliding>\n        <ion-item-options side=\"start\" >\n           <ion-item-option routerLink=\"/edit-daily-classes-master/{{classes.id}}/{{indexOfElement}}\">\n            <ion-icon name=\"eye\" slot=\"icon-only\">\n            </ion-icon>            </ion-item-option>\n        </ion-item-options>\n    \n        <ion-item>\n          <ion-label>{{workout.name}} - {{workout.time}} ({{workout.slots}} plazas)</ion-label>\n        </ion-item>\n    \n        <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"deleteConfirm(indexOfElement)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\" >\n                </ion-icon>  \n            </ion-item-option>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n\n\n<ion-button expand=\"block\" color=\"success\" routerLink=\"/new-daily-classes-master/{{dailyClassId}}\">\n  <ion-icon name=\"add-circle\"></ion-icon>\n  <ion-label> Crear</ion-label>\n</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "xsc0":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/daily-classes-master/daily-classes-master.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DailyClassesMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyClassesMasterPageModule", function() { return DailyClassesMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _daily_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-classes-master-routing.module */ "M02q");
/* harmony import */ var _daily_classes_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daily-classes-master.page */ "SBbX");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DailyClassesMasterPageModule = class DailyClassesMasterPageModule {
};
DailyClassesMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _daily_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["DailyClassesMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_6__["DailyClassesMasterPage"]]
    })
], DailyClassesMasterPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-daily-classes-master-daily-classes-master-module.js.map