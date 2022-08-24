(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-weekly-classes-days-weekly-classes-days-module"],{

/***/ "692n":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-days/weekly-classes-days-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: WeeklyClassesDaysPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesDaysPageRoutingModule", function() { return WeeklyClassesDaysPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _weekly_classes_days_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-classes-days.page */ "LSSO");




const routes = [
    {
        path: '',
        component: _weekly_classes_days_page__WEBPACK_IMPORTED_MODULE_3__["WeeklyClassesDaysPage"]
    }
];
let WeeklyClassesDaysPageRoutingModule = class WeeklyClassesDaysPageRoutingModule {
};
WeeklyClassesDaysPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WeeklyClassesDaysPageRoutingModule);



/***/ }),

/***/ "LSSO":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-days/weekly-classes-days.page.ts ***!
  \**************************************************************************************/
/*! exports provided: WeeklyClassesDaysPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesDaysPage", function() { return WeeklyClassesDaysPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weekly_classes_days_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weekly-classes-days.page.html */ "TmGB");
/* harmony import */ var _weekly_classes_days_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly-classes-days.page.scss */ "wEZz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/weekly-classes-master-service.service */ "UZcu");






let WeeklyClassesDaysPage = class WeeklyClassesDaysPage {
    constructor(classService, router, activatedRoute) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.hi = "hola";
    }
    ngOnInit() {
        this.cargar();
        console.log(this.trainingClass);
    }
    buttonClick() {
        console.log("Holi jeje");
        console.log(this.trainingClass);
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        console.log(id);
        this.classService.detalle(id).subscribe(data => {
            console.log(data);
            this.trainingClass = data;
        }, err => {
            this.volver();
        });
    }
    volver() {
        this.router.navigate(['/']);
    }
};
WeeklyClassesDaysPage.ctorParameters = () => [
    { type: src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_5__["WeeklyClassesMasterServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
WeeklyClassesDaysPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weekly-classes-days',
        template: _raw_loader_weekly_classes_days_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_weekly_classes_days_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WeeklyClassesDaysPage);



/***/ }),

/***/ "TmGB":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/weekly-classes-days/weekly-classes-days.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases Semanales\"></app-header>\n\n<ion-content *ngIf=\"trainingClass\">\n  <div class=\"ion-text-center ion-margin-top\">\n      \n  </div>\n\n\n  <ion-list >\n        <ion-item button *ngIf=\"trainingClass.monday\" routerLink=\"/daily-classes-master/{{trainingClass.monday}}\">\n          <ion-label>Lunes</ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"trainingClass.tuesday\" routerLink=\"/daily-classes-master/{{trainingClass.tuesday}}\">\n          <ion-label>Martes</ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"trainingClass.wednesday\" routerLink=\"/daily-classes-master/{{trainingClass.wednesday}}\">\n          <ion-label>Miercoles</ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"trainingClass.thursday\" routerLink=\"/daily-classes-master/{{trainingClass.thursday}}\">\n          <ion-label>Jueves</ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"trainingClass.friday\" routerLink=\"/daily-classes-master/{{trainingClass.friday}}\">\n          <ion-label>Viernes</ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"trainingClass.saturday\" routerLink=\"/daily-classes-master/{{trainingClass.saturday}}\">\n          <ion-label>Sabado</ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"trainingClass.sunday\" routerLink=\"/daily-classes-master/{{trainingClass.sunday}}\">\n          <ion-label>Domingo</ion-label>\n        </ion-item>\n</ion-list>\n\n</ion-content>\n\n<ion-content *ngIf=\"!trainingClass\">\n  <ion-card>\n      <ion-card-header>\n          <ion-card-title>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-title>\n          <ion-card-subtitle>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-justify\">\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "p0NP":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-days/weekly-classes-days.module.ts ***!
  \****************************************************************************************/
/*! exports provided: WeeklyClassesDaysPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesDaysPageModule", function() { return WeeklyClassesDaysPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _weekly_classes_days_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekly-classes-days-routing.module */ "692n");
/* harmony import */ var _weekly_classes_days_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weekly-classes-days.page */ "LSSO");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let WeeklyClassesDaysPageModule = class WeeklyClassesDaysPageModule {
};
WeeklyClassesDaysPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _weekly_classes_days_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeeklyClassesDaysPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_weekly_classes_days_page__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesDaysPage"]]
    })
], WeeklyClassesDaysPageModule);



/***/ }),

/***/ "wEZz":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-days/weekly-classes-days.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWVrbHktY2xhc3Nlcy1kYXlzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-weekly-classes-days-weekly-classes-days-module.js.map