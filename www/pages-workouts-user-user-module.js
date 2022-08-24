(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-user-user-module"],{

/***/ "AsiO":
/*!************************************************************!*\
  !*** ./src/app/pages/workouts/user/user-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "iF3y");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "V7U5":
/*!****************************************************!*\
  !*** ./src/app/pages/workouts/user/user.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "af7W":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/user/user.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Entrenamientos\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-bottom ion-margin-top\">\n        <!-- <h3>Desliza para ver las opciones</h3> -->\n    </div>\n     <ion-card *ngFor=\"let session of trainingSessions\">\n         <ion-item-sliding>\n             <ion-item-options side=\"start\" >\n               <ion-item-option routerLink=\"/session-detail/{{session.id}}\">\n                 <ion-icon name=\"eye\" slot=\"icon-only\">\n                 </ion-icon>  \n     \n               </ion-item-option>\n               \n             </ion-item-options>\n         \n             <ion-item>\n               <ion-label>Sesión {{session.day}}/{{session.month}}/{{session.year}}</ion-label>\n             </ion-item>\n         </ion-item-sliding>\n     </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "iF3y":
/*!**************************************************!*\
  !*** ./src/app/pages/workouts/user/user.page.ts ***!
  \**************************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.page.html */ "af7W");
/* harmony import */ var _user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page.scss */ "V7U5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/workout.service */ "X3Gk");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");







let UserPage = class UserPage {
    constructor(workoutService, sessionService, tokenService) {
        this.workoutService = workoutService;
        this.sessionService = sessionService;
        this.tokenService = tokenService;
        this.workouts = [];
        this.userName = '';
        this.day = 0;
        this.year = 0;
        this.month = 0;
        this.page = 0;
    }
    ngOnInit() {
        this.setTodayDate();
        this.userName = this.tokenService.getUsername();
        this.cargar();
    }
    setTodayDate() {
        var today = new Date();
        this.day = today.getDate();
        this.month = today.getMonth() + 1;
        this.year = today.getFullYear();
    }
    cargar() {
        // this.sessionService.listaByUserAndDate(this.page, this.userName, this.year, this.month, this.day).subscribe(
        this.sessionService.listaByUser(this.page, this.userName).subscribe(data => {
            this.trainingSessions = data.content;
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
};
UserPage.ctorParameters = () => [
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutService"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserPage);



/***/ }),

/***/ "zZ4o":
/*!****************************************************!*\
  !*** ./src/app/pages/workouts/user/user.module.ts ***!
  \****************************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "AsiO");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "iF3y");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-workouts-user-user-module.js.map