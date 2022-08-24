(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-workout-detail-workout-detail-module"],{

/***/ "10e+":
/*!************************************************************************!*\
  !*** ./src/app/pages/workouts/workout-detail/workout-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: WorkoutDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailPageModule", function() { return WorkoutDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _workout_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workout-detail-routing.module */ "9aQb");
/* harmony import */ var _workout_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workout-detail.page */ "1RZ7");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let WorkoutDetailPageModule = class WorkoutDetailPageModule {
};
WorkoutDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _workout_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkoutDetailPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_workout_detail_page__WEBPACK_IMPORTED_MODULE_6__["WorkoutDetailPage"]]
    })
], WorkoutDetailPageModule);



/***/ }),

/***/ "1RZ7":
/*!**********************************************************************!*\
  !*** ./src/app/pages/workouts/workout-detail/workout-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: WorkoutDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailPage", function() { return WorkoutDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_workout_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./workout-detail.page.html */ "mSfl");
/* harmony import */ var _workout_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workout-detail.page.scss */ "zAik");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/workout.service */ "X3Gk");







let WorkoutDetailPage = class WorkoutDetailPage {
    constructor(workoutService, activatedRoute, router, tokenService) {
        this.workoutService = workoutService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.workoutService.detalle(id).subscribe(data => {
            this.workout = data;
        }, err => {
            this.volver();
        });
    }
    volver() {
        const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin' : '/user';
        this.router.navigate([redirectUrtl]);
    }
};
WorkoutDetailPage.ctorParameters = () => [
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_6__["WorkoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
WorkoutDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-workout-detail',
        template: _raw_loader_workout_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_workout_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WorkoutDetailPage);



/***/ }),

/***/ "9aQb":
/*!********************************************************************************!*\
  !*** ./src/app/pages/workouts/workout-detail/workout-detail-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: WorkoutDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutDetailPageRoutingModule", function() { return WorkoutDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _workout_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workout-detail.page */ "1RZ7");




const routes = [
    {
        path: '',
        component: _workout_detail_page__WEBPACK_IMPORTED_MODULE_3__["WorkoutDetailPage"]
    }
];
let WorkoutDetailPageRoutingModule = class WorkoutDetailPageRoutingModule {
};
WorkoutDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WorkoutDetailPageRoutingModule);



/***/ }),

/***/ "mSfl":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/workout-detail/workout-detail.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Workouts\"></app-header>\n<ion-content *ngIf=\"workout\">\n    <ion-card>\n        <ion-card-header>\n         \n          <ion-card-title>{{workout.name}}</ion-card-title>\n          <ion-card-subtitle>{{workout.workoutGroup}}</ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-card-content class=\"ion-text-justify\">\n          {{workout.description}}\n        </ion-card-content>\n      </ion-card>\n      <div class=\"ion-padding\">\n        <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n            <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n            Volver\n             </ion-button>\n     </div>\n</ion-content>\n\n<ion-content *ngIf=\"!workout\">\n  <ion-card>\n      <ion-card-header>\n       \n        <ion-card-title><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-title>\n        <ion-card-subtitle><ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text></ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content class=\"ion-text-justify\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"ion-padding\">\n      <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\"> \n          <ion-icon name=\"arrow-back-circle\">  </ion-icon>\n          Volver\n           </ion-button>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "zAik":
/*!************************************************************************!*\
  !*** ./src/app/pages/workouts/workout-detail/workout-detail.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrb3V0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-workouts-workout-detail-workout-detail-module.js.map