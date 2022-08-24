(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-detail-user-payment-detail-user-payment-module"],{

/***/ "/Z6U":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/users/detail-user-payment/detail-user-payment-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DetailUserPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPaymentPageRoutingModule", function() { return DetailUserPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_user_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-user-payment.page */ "UgA2");




const routes = [
    {
        path: '',
        component: _detail_user_payment_page__WEBPACK_IMPORTED_MODULE_3__["DetailUserPaymentPage"]
    }
];
let DetailUserPaymentPageRoutingModule = class DetailUserPaymentPageRoutingModule {
};
DetailUserPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailUserPaymentPageRoutingModule);



/***/ }),

/***/ "Lv0G":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/users/detail-user-payment/detail-user-payment.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailUserPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPaymentPageModule", function() { return DetailUserPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_user_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-user-payment-routing.module */ "/Z6U");
/* harmony import */ var _detail_user_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-user-payment.page */ "UgA2");







let DetailUserPaymentPageModule = class DetailUserPaymentPageModule {
};
DetailUserPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_user_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailUserPaymentPageRoutingModule"]
        ],
        declarations: [_detail_user_payment_page__WEBPACK_IMPORTED_MODULE_6__["DetailUserPaymentPage"]]
    })
], DetailUserPaymentPageModule);



/***/ }),

/***/ "UgA2":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users/detail-user-payment/detail-user-payment.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailUserPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPaymentPage", function() { return DetailUserPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_user_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-user-payment.page.html */ "r6BP");
/* harmony import */ var _detail_user_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-user-payment.page.scss */ "xzdd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetailUserPaymentPage = class DetailUserPaymentPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailUserPaymentPage.ctorParameters = () => [];
DetailUserPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-user-payment',
        template: _raw_loader_detail_user_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_user_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailUserPaymentPage);



/***/ }),

/***/ "r6BP":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/detail-user-payment/detail-user-payment.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>detail-user-payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "xzdd":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/users/detail-user-payment/detail-user-payment.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtdXNlci1wYXltZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-users-detail-user-payment-detail-user-payment-module.js.map