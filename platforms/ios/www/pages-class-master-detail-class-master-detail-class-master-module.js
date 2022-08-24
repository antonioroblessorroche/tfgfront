(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-class-master-detail-class-master-detail-class-master-module"],{

/***/ "3ewj":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/class-master/detail-class-master/detail-class-master.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtY2xhc3MtbWFzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "7MXr":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/class-master/detail-class-master/detail-class-master.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DetailClassMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailClassMasterPageModule", function() { return DetailClassMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-class-master-routing.module */ "f0HU");
/* harmony import */ var _detail_class_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-class-master.page */ "lSJQ");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DetailClassMasterPageModule = class DetailClassMasterPageModule {
};
DetailClassMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailClassMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detail_class_master_page__WEBPACK_IMPORTED_MODULE_6__["ClassMasterDetailPage"]]
    })
], DetailClassMasterPageModule);



/***/ }),

/***/ "chIJ":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class-master/detail-class-master/detail-class-master.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Workouts\"></app-header>\n<ion-content *ngIf=\"classMaster\">\n    <ion-card>\n        <ion-card-header>\n         \n          <ion-card-title>{{classMaster.name}}</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content class=\"ion-text-justify\">\n          {{classMaster.description}}\n        </ion-card-content>\n      </ion-card>\n      <div class=\"ion-padding\">\n        <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n            <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n            Volver\n             </ion-button>\n     </div>\n</ion-content>\n\n<ion-content *ngIf=\"!classMaster\">\n  <ion-card>\n      <ion-card-header>\n       \n        <ion-card-title><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-title>\n        <ion-card-subtitle><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content class=\"ion-text-justify\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"ion-padding\">\n      <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n          <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n          Volver\n           </ion-button>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "f0HU":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/class-master/detail-class-master/detail-class-master-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DetailClassMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailClassMasterPageRoutingModule", function() { return DetailClassMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_class_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-class-master.page */ "lSJQ");




const routes = [
    {
        path: '',
        component: _detail_class_master_page__WEBPACK_IMPORTED_MODULE_3__["ClassMasterDetailPage"]
    }
];
let DetailClassMasterPageRoutingModule = class DetailClassMasterPageRoutingModule {
};
DetailClassMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailClassMasterPageRoutingModule);



/***/ }),

/***/ "lSJQ":
/*!************************************************************************************!*\
  !*** ./src/app/pages/class-master/detail-class-master/detail-class-master.page.ts ***!
  \************************************************************************************/
/*! exports provided: ClassMasterDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMasterDetailPage", function() { return ClassMasterDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-class-master.page.html */ "chIJ");
/* harmony import */ var _detail_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-class-master.page.scss */ "3ewj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");







let ClassMasterDetailPage = class ClassMasterDetailPage {
    constructor(classMasterService, activatedRoute, router, tokenService) {
        this.classMasterService = classMasterService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.classMasterService.detalle(id).subscribe(data => {
            this.classMaster = data;
        }, err => {
            this.volver();
        });
    }
    volver() {
        this.router.navigate(['/admin-class-master']);
    }
};
ClassMasterDetailPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_6__["ClassMasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
ClassMasterDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-class-master',
        template: _raw_loader_detail_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClassMasterDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-class-master-detail-class-master-detail-class-master-module.js.map