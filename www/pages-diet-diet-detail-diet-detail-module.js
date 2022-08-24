(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-diet-diet-detail-diet-detail-module"],{

/***/ "A/In":
/*!**************************************************************!*\
  !*** ./src/app/pages/diet/diet-detail/diet-detail.module.ts ***!
  \**************************************************************/
/*! exports provided: DietDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietDetailPageModule", function() { return DietDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _diet_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diet-detail-routing.module */ "TCew");
/* harmony import */ var _diet_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diet-detail.page */ "K5nP");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DietDetailPageModule = class DietDetailPageModule {
};
DietDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _diet_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DietDetailPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_diet_detail_page__WEBPACK_IMPORTED_MODULE_6__["DietDetailPage"]]
    })
], DietDetailPageModule);



/***/ }),

/***/ "K5nP":
/*!************************************************************!*\
  !*** ./src/app/pages/diet/diet-detail/diet-detail.page.ts ***!
  \************************************************************/
/*! exports provided: DietDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietDetailPage", function() { return DietDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_diet_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./diet-detail.page.html */ "fkVb");
/* harmony import */ var _diet_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diet-detail.page.scss */ "ycMh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_diet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/diet.service */ "KrSI");







let DietDetailPage = class DietDetailPage {
    constructor(dietService, activatedRoute, router, tokenService) {
        this.dietService = dietService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.dietService.detalle(id).subscribe(data => {
            this.diet = data;
        }, err => {
            this.volver();
        });
    }
    volver() {
        const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin-diet' : '/admin-diet';
        this.router.navigate([redirectUrtl]);
    }
};
DietDetailPage.ctorParameters = () => [
    { type: src_app_services_diet_service__WEBPACK_IMPORTED_MODULE_6__["DietService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
DietDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-diet-detail',
        template: _raw_loader_diet_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_diet_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DietDetailPage);



/***/ }),

/***/ "TCew":
/*!**********************************************************************!*\
  !*** ./src/app/pages/diet/diet-detail/diet-detail-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DietDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietDetailPageRoutingModule", function() { return DietDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _diet_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diet-detail.page */ "K5nP");




const routes = [
    {
        path: '',
        component: _diet_detail_page__WEBPACK_IMPORTED_MODULE_3__["DietDetailPage"]
    }
];
let DietDetailPageRoutingModule = class DietDetailPageRoutingModule {
};
DietDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DietDetailPageRoutingModule);



/***/ }),

/***/ "fkVb":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/diet/diet-detail/diet-detail.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Entrenamiento\"></app-header>\n<ion-content *ngIf=\"diet\">\n    <ion-card>\n        <ion-card-header>\n         \n          <ion-card-title> {{diet.day}}/{{diet.month}}/{{diet.year}} </ion-card-title>\n          <ion-card-subtitle>{{diet.description}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card *ngFor=\"let menu of diet.menus\">\n\n          <ion-card-title class=\"ion-margin\"> {{menu.meal}} </ion-card-title>\n          <ion-card-content class=\"ion-text-justify\">\n            {{menu.description}}\n            <br>\n            {{menu.annotations}}\n          </ion-card-content>\n          \n        </ion-card>\n      \n        <ion-card-content class=\"ion-text-justify\">\n          {{diet.comments}}\n        </ion-card-content>\n      </ion-card>\n      <div class=\"ion-padding\">\n        <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n            <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n            Volver\n             </ion-button>\n     </div>\n</ion-content>\n\n<ion-content *ngIf=\"!diet\">\n  <ion-card>\n      <ion-card-header>\n       \n        <ion-card-title><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-title>\n        <ion-card-subtitle><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content class=\"ion-text-justify\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"ion-padding\">\n      <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n          <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n          Volver\n           </ion-button>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "ycMh":
/*!**************************************************************!*\
  !*** ./src/app/pages/diet/diet-detail/diet-detail.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWV0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-diet-diet-detail-diet-detail-module.js.map