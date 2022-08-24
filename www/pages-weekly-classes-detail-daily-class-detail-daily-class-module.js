(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-detail-daily-class-detail-daily-class-module"],{

/***/ "DCjl":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/detail-daily-class/detail-daily-class.module.ts ***!
  \**************************************************************************************/
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
/* harmony import */ var _detail_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-daily-class-routing.module */ "xd+7");
/* harmony import */ var _detail_daily_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-daily-class.page */ "oFqe");
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

/***/ "k/Px":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/detail-daily-class/detail-daily-class.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases\"></app-header>\n\n<ion-content *ngIf=\"classes\">\n  <ion-list *ngFor=\"let workout of classes.dailyClasses; index as indexOfElement\">\n    <ion-item-sliding>\n        <ion-item-options side=\"start\" >\n           <ion-item-option routerLink=\"/edit-daily-class/{{classes.id}}/{{workout.index}}\" >\n            <ion-icon name=\"eye\" slot=\"icon-only\">\n            </ion-icon>  \n\n          </ion-item-option>\n          \n        </ion-item-options>\n    \n        <ion-item>\n          <ion-label>{{workout.name}} - {{workout.time}} ({{workout.slots}} plazas)</ion-label>\n        </ion-item>\n    \n        <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"deleteConfirm(indexOfElement)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\" >\n                </ion-icon>  \n            </ion-item-option>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-list>\n\n\n<ion-button expand=\"block\" color=\"success\" routerLink=\"/new-daily-class/{{dailyClassId}}\">\n  <ion-icon name=\"add-circle\"></ion-icon>\n  <ion-label> Crear</ion-label>\n</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "ljvW":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/detail-daily-class/detail-daily-class.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtZGFpbHktY2xhc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "oFqe":
/*!************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/detail-daily-class/detail-daily-class.page.ts ***!
  \************************************************************************************/
/*! exports provided: DetailDailyClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDailyClassPage", function() { return DetailDailyClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-daily-class.page.html */ "k/Px");
/* harmony import */ var _detail_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-daily-class.page.scss */ "ljvW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");







let DetailDailyClassPage = class DetailDailyClassPage {
    constructor(classService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.cargar();
    }
    cargar() {
        this.dailyClassId = this.activatedRoute.snapshot.params.id;
        this.classService.detalle(this.dailyClassId).subscribe(data => {
            console.log(data);
            this.classes = data;
            if (this.classes.dailyClasses != null || this.classes.dailyClasses != undefined) {
                for (let i = 0; i < this.classes.dailyClasses.length; i++) {
                    this.classes.dailyClasses[i].index = i;
                }
            }
        }, err => {
            this.volver();
        });
    }
    deleteConfirm(indexOfElement) {
        this.classes.dailyClasses.splice(indexOfElement, 1);
        this.classService.actualizar(this.classes.id, this.classes).subscribe(data => {
            this.presentToast('Clase eliminada correctamente');
        }, err => {
            this.presentToast('No fue posible eliminar clase');
        });
        setTimeout(() => { this.cargar(); }, 500);
        // this.cargar();
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
DetailDailyClassPage.ctorParameters = () => [
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__["DailyClassesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
DetailDailyClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-daily-class',
        template: _raw_loader_detail_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailDailyClassPage);



/***/ }),

/***/ "xd+7":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/detail-daily-class/detail-daily-class-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DetailDailyClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDailyClassPageRoutingModule", function() { return DetailDailyClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_daily_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-daily-class.page */ "oFqe");




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



/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-detail-daily-class-detail-daily-class-module.js.map