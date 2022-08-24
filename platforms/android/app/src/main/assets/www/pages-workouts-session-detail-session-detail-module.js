(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-session-detail-session-detail-module"],{

/***/ "BlTg":
/*!********************************************************************************!*\
  !*** ./src/app/pages/workouts/session-detail/session-detail-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SessionDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function() { return SessionDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail.page */ "ouy4");




const routes = [
    {
        path: '',
        component: _session_detail_page__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }
];
let SessionDetailPageRoutingModule = class SessionDetailPageRoutingModule {
};
SessionDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionDetailPageRoutingModule);



/***/ }),

/***/ "hFHz":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/session-detail/session-detail.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Sesion de entrenamiento\"></app-header>\n<ion-content *ngIf=\"session\">\n    <ion-card>\n        <ion-card-header>\n         \n          <ion-card-title> Sesion {{session.day}}/{{session.month}}/{{session.year}} </ion-card-title>\n          <ion-card-subtitle>{{session.description}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card *ngFor=\"let workout of session.workouts\">\n\n          <ion-card-title class=\"ion-margin\" style=\"font-size:20px\"> {{workout.name}} </ion-card-title>\n          <ion-card-content class=\"ion-text-justify\" style=\"size: 14px\">\n            {{workout.workoutGroup}}\n            <br><br>\n            {{workout.description}}\n          </ion-card-content>\n          \n        </ion-card>\n      \n        <ion-card-content class=\"ion-text-justify\">\n          {{session.comments}}\n        </ion-card-content>\n      </ion-card>\n      <div class=\"ion-padding\">\n        <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n            <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n            Volver\n             </ion-button>\n     </div>\n</ion-content>\n\n<ion-content *ngIf=\"!session\">\n  <ion-card>\n      <ion-card-header>\n       \n        <ion-card-title><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-title>\n        <ion-card-subtitle><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content class=\"ion-text-justify\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"ion-padding\">\n      <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n          <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n          Volver\n           </ion-button>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "nBkJ":
/*!************************************************************************!*\
  !*** ./src/app/pages/workouts/session-detail/session-detail.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ouy4":
/*!**********************************************************************!*\
  !*** ./src/app/pages/workouts/session-detail/session-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: SessionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function() { return SessionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_session_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./session-detail.page.html */ "hFHz");
/* harmony import */ var _session_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-detail.page.scss */ "nBkJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");







let SessionDetailPage = class SessionDetailPage {
    constructor(sessionService, activatedRoute, router, tokenService) {
        this.sessionService = sessionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.sessionService.detalle(id).subscribe(data => {
            this.session = data;
        }, err => {
            this.volver();
        });
    }
    volver() {
        const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin-session' : '/admin-session';
        this.router.navigate([redirectUrtl]);
    }
};
SessionDetailPage.ctorParameters = () => [
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
SessionDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-session-detail',
        template: _raw_loader_session_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_session_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SessionDetailPage);



/***/ }),

/***/ "rIfr":
/*!************************************************************************!*\
  !*** ./src/app/pages/workouts/session-detail/session-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: SessionDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPageModule", function() { return SessionDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-detail-routing.module */ "BlTg");
/* harmony import */ var _session_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-detail.page */ "ouy4");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let SessionDetailPageModule = class SessionDetailPageModule {
};
SessionDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionDetailPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_detail_page__WEBPACK_IMPORTED_MODULE_6__["SessionDetailPage"]]
    })
], SessionDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-workouts-session-detail-session-detail-module.js.map