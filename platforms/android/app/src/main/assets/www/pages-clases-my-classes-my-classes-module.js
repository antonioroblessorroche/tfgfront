(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clases-my-classes-my-classes-module"],{

/***/ "KGBG":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clases/my-classes/my-classes.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Entrenamientos\"></app-header>\n<ion-item class=\"ion-padding\">\n  <ion-checkbox (ionChange)=\"check($event.detail.checked)\" [(ngModel)]=\"historic\"></ion-checkbox>\n  <ion-label>&nbsp;&nbsp;Mostrar historico de clases</ion-label>\n</ion-item>\n<ion-content *ngIf=\"trainingSessions\">\n    <div class=\"ion-text-center ion-margin-bottom ion-margin-top\">\n        <!-- <h3>Desliza para ver las opciones</h3> -->\n    </div>\n    <ion-card *ngFor=\"let class of trainingSessions\">\n      <!-- <button ion-item routerLink=\"/training-class-detail/{{class.id}}\"> -->\n     \n      <!-- <ion-card-title class=\"ion-margin\" style=\"font-size:20px\"> {{class.name}} \n        <ion-label *ngIf=\"class.available==false\"> (No disponible) </ion-label>\n      </ion-card-title> -->\n      <ion-card-content class=\"ion-text-justify\" color=\"dark\" style=\"size: 14px\" ion-item routerLink=\"/training-class-detail/{{class.id}}\" >\n        <ion-text color=\"dark\"><b>{{class.className}}</b>\n        <br>\n        <b>{{class.date}}</b>\n      </ion-text>\n      </ion-card-content>\n    <!-- </button> -->\n    </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "PpdV":
/*!**************************************************************!*\
  !*** ./src/app/pages/clases/my-classes/my-classes.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1jbGFzc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "UtoY":
/*!************************************************************!*\
  !*** ./src/app/pages/clases/my-classes/my-classes.page.ts ***!
  \************************************************************/
/*! exports provided: ClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPage", function() { return ClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_classes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-classes.page.html */ "KGBG");
/* harmony import */ var _my_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-classes.page.scss */ "PpdV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/trainingclass.service */ "GTnE");






let ClassPage = class ClassPage {
    constructor(classService, tokenService) {
        this.classService = classService;
        this.tokenService = tokenService;
        //   workouts: Workout[] = [];
        this.page = 0;
    }
    ngOnInit() {
        this.user = this.tokenService.getUsername();
        this.endDate = new Date().getTime();
        this.historic = false;
        this.cargar();
    }
    cargar() {
        this.classService.listaByUserAndDate(this.page, this.user, this.endDate).subscribe(data => {
            this.trainingSessions = data.content;
            for (let i = 0; i < this.trainingSessions.length; i++) {
                // this.trainingSessions[i].date = new Date(this.trainingSessions[i].classTime).toLocaleTimeString();
            }
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    check(isChecked) {
        this.endDate = isChecked ? 0 : new Date().getTime();
        this.cargar();
    }
};
ClassPage.ctorParameters = () => [
    { type: src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_5__["TrainingClassService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
ClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-class',
        template: _raw_loader_my_classes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClassPage);



/***/ }),

/***/ "Xz0N":
/*!**************************************************************!*\
  !*** ./src/app/pages/clases/my-classes/my-classes.module.ts ***!
  \**************************************************************/
/*! exports provided: ClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPageModule", function() { return ClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-classes-routing.module */ "uT5F");
/* harmony import */ var _my_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-classes.page */ "UtoY");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ClassPageModule = class ClassPageModule {
};
ClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_my_classes_page__WEBPACK_IMPORTED_MODULE_6__["ClassPage"]]
    })
], ClassPageModule);



/***/ }),

/***/ "uT5F":
/*!**********************************************************************!*\
  !*** ./src/app/pages/clases/my-classes/my-classes-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPageRoutingModule", function() { return ClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-classes.page */ "UtoY");




const routes = [
    {
        path: '',
        component: _my_classes_page__WEBPACK_IMPORTED_MODULE_3__["ClassPage"]
    }
];
let ClassPageRoutingModule = class ClassPageRoutingModule {
};
ClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClassPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-clases-my-classes-my-classes-module.js.map