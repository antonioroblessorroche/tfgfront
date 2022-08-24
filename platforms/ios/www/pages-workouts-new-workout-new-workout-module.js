(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-new-workout-new-workout-module"],{

/***/ "4vil":
/*!******************************************************************!*\
  !*** ./src/app/pages/workouts/new-workout/new-workout.module.ts ***!
  \******************************************************************/
/*! exports provided: NewWorkoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWorkoutPageModule", function() { return NewWorkoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_workout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-workout-routing.module */ "DC52");
/* harmony import */ var _new_workout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-workout.page */ "NlEH");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let NewWorkoutPageModule = class NewWorkoutPageModule {
};
NewWorkoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_workout_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewWorkoutPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_new_workout_page__WEBPACK_IMPORTED_MODULE_6__["NewWorkoutPage"]]
    })
], NewWorkoutPageModule);



/***/ }),

/***/ "DC52":
/*!**************************************************************************!*\
  !*** ./src/app/pages/workouts/new-workout/new-workout-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: NewWorkoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWorkoutPageRoutingModule", function() { return NewWorkoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_workout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-workout.page */ "NlEH");




const routes = [
    {
        path: '',
        component: _new_workout_page__WEBPACK_IMPORTED_MODULE_3__["NewWorkoutPage"]
    }
];
let NewWorkoutPageRoutingModule = class NewWorkoutPageRoutingModule {
};
NewWorkoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewWorkoutPageRoutingModule);



/***/ }),

/***/ "NlEH":
/*!****************************************************************!*\
  !*** ./src/app/pages/workouts/new-workout/new-workout.page.ts ***!
  \****************************************************************/
/*! exports provided: NewWorkoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWorkoutPage", function() { return NewWorkoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_workout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-workout.page.html */ "x/aT");
/* harmony import */ var _new_workout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-workout.page.scss */ "m5Go");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_workout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/workout */ "FLWF");
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/workout.service */ "X3Gk");








let NewWorkoutPage = class NewWorkoutPage {
    constructor(workoutService, router, toastController) {
        this.workoutService = workoutService;
        this.router = router;
        this.toastController = toastController;
        this.name = '';
        this.description = '';
        this.workoutGroup = '';
        this.msgOk = '';
        this.msgKo = '';
    }
    ngOnInit() {
    }
    onCreate() {
        this.workout = new src_app_models_workout__WEBPACK_IMPORTED_MODULE_6__["Workout"](this.name, this.description, this.workoutGroup);
        this.workoutService.nuevo(this.workout).subscribe(data => {
            this.presentToast(data.mensaje);
            this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    vaciar() {
        this.name = '';
        this.description = '';
        this.workoutGroup = '';
    }
    volver() {
        this.router.navigate(['/admin']);
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
NewWorkoutPage.ctorParameters = () => [
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_7__["WorkoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
NewWorkoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-workout',
        template: _raw_loader_new_workout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_workout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewWorkoutPage);



/***/ }),

/***/ "m5Go":
/*!******************************************************************!*\
  !*** ./src/app/pages/workouts/new-workout/new-workout.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctd29ya291dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "x/aT":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/new-workout/new-workout.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nuevo workout\"></app-header>\n\n<ion-content>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n            <ion-list-header lines=\"full\">\n              <ion-label>\n                Rellenar nuevo registro\n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label>Nombre:</ion-label>\n              <ion-input required placeholder=\"Nombre del workout\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Grupo: </ion-label>\n              <ion-input required placeholder=\"Grupo\" name=\"workoutGroup\" [(ngModel)]=\"workoutGroup\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Descripcion: </ion-label>\n                <ion-input required placeholder=\"Descripción del workout\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n            </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"add-circle\">  </ion-icon>\n                    Crear\n                     </ion-button>\n             </div>\n             <div class=\"ion-padding\">\n                <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n                    <ion-icon name=\"refresh-circle\">  </ion-icon>\n                    Reset\n                     </ion-button>\n             </div>\n          </ion-list>\n         \n    </form>\n\n    <div class=\"ion-text-center\">\n        <ion-label position=\"floating\">\n            <ion-text color=\"danger\">\n                *\n            </ion-text> Campos obligatorios\n        </ion-label>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-workouts-new-workout-new-workout-module.js.map