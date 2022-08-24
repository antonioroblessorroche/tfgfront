(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clasesSemanales-regular-weekly-classes-regular-weekly-classes-module"],{

/***/ "1KSv":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>regular-weekly-classes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "AmMx":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: RegularWeeklyClassesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularWeeklyClassesPage", function() { return RegularWeeklyClassesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_regular_weekly_classes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./regular-weekly-classes.page.html */ "1KSv");
/* harmony import */ var _regular_weekly_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regular-weekly-classes.page.scss */ "HZHz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegularWeeklyClassesPage = class RegularWeeklyClassesPage {
    constructor() { }
    ngOnInit() {
    }
};
RegularWeeklyClassesPage.ctorParameters = () => [];
RegularWeeklyClassesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-regular-weekly-classes',
        template: _raw_loader_regular_weekly_classes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_regular_weekly_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegularWeeklyClassesPage);



/***/ }),

/***/ "GyX7":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RegularWeeklyClassesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularWeeklyClassesPageRoutingModule", function() { return RegularWeeklyClassesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _regular_weekly_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regular-weekly-classes.page */ "AmMx");




const routes = [
    {
        path: '',
        component: _regular_weekly_classes_page__WEBPACK_IMPORTED_MODULE_3__["RegularWeeklyClassesPage"]
    }
];
let RegularWeeklyClassesPageRoutingModule = class RegularWeeklyClassesPageRoutingModule {
};
RegularWeeklyClassesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegularWeeklyClassesPageRoutingModule);



/***/ }),

/***/ "HZHz":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWd1bGFyLXdlZWtseS1jbGFzc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "z196":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: RegularWeeklyClassesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularWeeklyClassesPageModule", function() { return RegularWeeklyClassesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _regular_weekly_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./regular-weekly-classes-routing.module */ "GyX7");
/* harmony import */ var _regular_weekly_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regular-weekly-classes.page */ "AmMx");







let RegularWeeklyClassesPageModule = class RegularWeeklyClassesPageModule {
};
RegularWeeklyClassesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _regular_weekly_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegularWeeklyClassesPageRoutingModule"]
        ],
        declarations: [_regular_weekly_classes_page__WEBPACK_IMPORTED_MODULE_6__["RegularWeeklyClassesPage"]]
    })
], RegularWeeklyClassesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-clasesSemanales-regular-weekly-classes-regular-weekly-classes-module.js.map