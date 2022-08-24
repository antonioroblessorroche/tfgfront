(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-edit-workout-edit-workout-module"],{

/***/ "5aX2":
/*!******************************************************************!*\
  !*** ./src/app/pages/workouts/edit-workout/edit-workout.page.ts ***!
  \******************************************************************/
/*! exports provided: EditWorkoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkoutPage", function() { return EditWorkoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_workout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-workout.page.html */ "cKOa");
/* harmony import */ var _edit_workout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-workout.page.scss */ "mCgU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_workout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/workout */ "FLWF");
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/workout.service */ "X3Gk");








let EditWorkoutPage = class EditWorkoutPage {
    constructor(workoutService, activatedRoute, router, toastController) {
        this.workoutService = workoutService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
        this.workout = new src_app_models_workout__WEBPACK_IMPORTED_MODULE_6__["Workout"]('', '', '');
        this.msgOk = '';
        this.msgKo = '';
    }
    ngOnInit() {
        this.cargar();
    }
    onUpdate() {
        const id = this.activatedRoute.snapshot.params.id;
        this.workoutService.actualizar(id, this.workout).subscribe(data => {
            this.presentToast(data.mensaje);
            this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.workoutService.detalle(id).subscribe(data => {
            this.workout = data;
        }, err => {
            this.volver();
        });
    }
    vaciar() {
        this.workout.name = '';
        this.workout.description = '';
        this.workout.workoutGroup = '';
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
EditWorkoutPage.ctorParameters = () => [
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_7__["WorkoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EditWorkoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-workout',
        template: _raw_loader_edit_workout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_workout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditWorkoutPage);



/***/ }),

/***/ "61gv":
/*!****************************************************************************!*\
  !*** ./src/app/pages/workouts/edit-workout/edit-workout-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EditWorkoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkoutPageRoutingModule", function() { return EditWorkoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_workout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-workout.page */ "5aX2");




const routes = [
    {
        path: '',
        component: _edit_workout_page__WEBPACK_IMPORTED_MODULE_3__["EditWorkoutPage"]
    }
];
let EditWorkoutPageRoutingModule = class EditWorkoutPageRoutingModule {
};
EditWorkoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditWorkoutPageRoutingModule);



/***/ }),

/***/ "cKOa":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/edit-workout/edit-workout.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Editar workout\"></app-header>\n<ion-content>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onUpdate()\" novalidate>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n            <ion-list-header lines=\"full\">\n              <ion-label>\n                Editar workout\n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label>Nombre:</ion-label>\n              <ion-input placeholder=\"Nombre del workout\" name=\"name\" [(ngModel)]=\"workout.name\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Grupo: </ion-label>\n              <ion-input placeholder=\"Grupo del workout\" name=\"workoutGroup\" [(ngModel)]=\"workout.workoutGroup\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Descripcion: </ion-label>\n                <ion-input placeholder=\"Descripción del workout\" name=\"description\" [(ngModel)]=\"workout.description\"></ion-input>\n              </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"create\">  </ion-icon>\n                    Actualizar\n                     </ion-button>\n             </div>\n             <div class=\"ion-padding\">\n                <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n                    <ion-icon name=\"refresh-circle\">  </ion-icon>\n                    Reset\n                     </ion-button>\n             </div>\n          </ion-list>\n         \n    </form>\n\n    <div class=\"ion-text-center\">\n        <ion-label position=\"floating\">\n            <ion-text color=\"danger\">\n                *\n            </ion-text> Campos obligatorios\n        </ion-label>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "mCgU":
/*!********************************************************************!*\
  !*** ./src/app/pages/workouts/edit-workout/edit-workout.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXdvcmtvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "pFah":
/*!********************************************************************!*\
  !*** ./src/app/pages/workouts/edit-workout/edit-workout.module.ts ***!
  \********************************************************************/
/*! exports provided: EditWorkoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkoutPageModule", function() { return EditWorkoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_workout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-workout-routing.module */ "61gv");
/* harmony import */ var _edit_workout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-workout.page */ "5aX2");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let EditWorkoutPageModule = class EditWorkoutPageModule {
};
EditWorkoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_workout_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditWorkoutPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_workout_page__WEBPACK_IMPORTED_MODULE_6__["EditWorkoutPage"]]
    })
], EditWorkoutPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-workouts-edit-workout-edit-workout-module.js.map