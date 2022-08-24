(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-link-workout-link-workout-module"],{

/***/ "1qM5":
/*!****************************************************************************!*\
  !*** ./src/app/pages/workouts/link-workout/link-workout-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: LinkWorkoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWorkoutPageRoutingModule", function() { return LinkWorkoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _link_workout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link-workout.page */ "PS0n");




const routes = [
    {
        path: '',
        component: _link_workout_page__WEBPACK_IMPORTED_MODULE_3__["LinkWorkoutPage"]
    }
];
let LinkWorkoutPageRoutingModule = class LinkWorkoutPageRoutingModule {
};
LinkWorkoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LinkWorkoutPageRoutingModule);



/***/ }),

/***/ "BPDi":
/*!********************************************************************!*\
  !*** ./src/app/pages/workouts/link-workout/link-workout.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLXdvcmtvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "EUlx":
/*!********************************************************************!*\
  !*** ./src/app/pages/workouts/link-workout/link-workout.module.ts ***!
  \********************************************************************/
/*! exports provided: LinkWorkoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWorkoutPageModule", function() { return LinkWorkoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _link_workout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link-workout-routing.module */ "1qM5");
/* harmony import */ var _link_workout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link-workout.page */ "PS0n");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let LinkWorkoutPageModule = class LinkWorkoutPageModule {
};
LinkWorkoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _link_workout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LinkWorkoutPageRoutingModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_link_workout_page__WEBPACK_IMPORTED_MODULE_6__["LinkWorkoutPage"]]
    })
], LinkWorkoutPageModule);



/***/ }),

/***/ "PEVM":
/*!*******************************************!*\
  !*** ./src/app/models/trainingSession.ts ***!
  \*******************************************/
/*! exports provided: TrainingSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingSession", function() { return TrainingSession; });
class TrainingSession {
    constructor(userId, comments, workouts, workoutIds, year, month, day) {
        this.userId = userId;
        this.comments = comments;
        this.workouts = workouts;
        this.workoutIds = workoutIds;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}


/***/ }),

/***/ "PS0n":
/*!******************************************************************!*\
  !*** ./src/app/pages/workouts/link-workout/link-workout.page.ts ***!
  \******************************************************************/
/*! exports provided: LinkWorkoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWorkoutPage", function() { return LinkWorkoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_link_workout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./link-workout.page.html */ "n114");
/* harmony import */ var _link_workout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-workout.page.scss */ "BPDi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_trainingSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/trainingSession */ "PEVM");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/session.service */ "IfdK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/workout.service */ "X3Gk");










let LinkWorkoutPage = class LinkWorkoutPage {
    constructor(workoutService, router, toastController, userService, sessionService) {
        this.workoutService = workoutService;
        this.router = router;
        this.toastController = toastController;
        this.userService = userService;
        this.sessionService = sessionService;
        this.workouts = [];
        this.userId = '';
        this.description = '';
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.users = [];
        this.page = 0;
        this.searchValue = '';
        this.comments = '';
        this.selectedWorkouts = [];
        this.selectedWorkoutIds = [];
    }
    onCreate() {
        // this.diet = new Diet(this.description, this.comments, this.userId, this.year, this.month, this.day);
        // this.dietService.nuevo(this.diet).subscribe(
        //   data => {
        //     this.presentToast('Creada dieta');
        //     this.vaciar();
        //     this.volver();
        //   }, err => {
        //     this.presentToast(err.error.mensaje);
        //   }
        // );
        this.selectedWorkoutIds = [];
        this.formattedDate = new Date(Date.parse(this.date));
        this.day = this.formattedDate.getDate();
        this.month = this.formattedDate.getMonth() + 1;
        this.year = this.formattedDate.getFullYear();
        var size = this.selectedWorkouts.length;
        for (let i = 0; i < size; i++) {
            this.selectedWorkoutIds.push(this.selectedWorkouts[i].id);
        }
        this.trainingSession = new src_app_models_trainingSession__WEBPACK_IMPORTED_MODULE_6__["TrainingSession"](this.userId, this.comments, [], this.selectedWorkoutIds, this.year, this.month, this.day);
        this.sessionService.nuevo(this.trainingSession).subscribe(data => {
            this.presentToast('Creada sesión de entrenamiento');
            // this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    ngOnInit() {
        this.setTodayDate();
        this.userService.lista().subscribe(data => {
            this.users = data;
        }, err => {
            this.presentToast("Error recuperndo usuarios: ");
        });
        this.workoutService.lista(this.page).subscribe(data => {
            this.workouts = data.content;
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    setDate(event) {
        this.day = event.getDate();
        this.month = event.getMonth() + 1;
        this.year = event.getFullYear();
    }
    getWorkouts(event) {
        this.workouts = [];
        this.page = 0;
        if (event.text != '') {
            this.workoutService.listaByName(this.page, event.text).subscribe(data => {
                this.workouts = data.content;
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        else {
            this.workoutService.lista(this.page).subscribe(data => {
                this.workouts = data.content;
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        this.page += 1;
    }
    getMore(event) {
        if (event.text != '') {
            this.workoutService.listaByName(this.page, event.text).subscribe(data => {
                let dataSize = data.content.length;
                if (dataSize > 0) {
                    for (let i = 0; i < dataSize; i++) {
                        this.workouts.push(data.content[i]);
                    }
                    this.page += 1;
                }
                else {
                    // event.target.disabled = true;
                    event.component.disableInfiniteScroll();
                }
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        else {
            this.workoutService.lista(this.page).subscribe(data => {
                let dataSize = data.content.length;
                if (dataSize > 0) {
                    for (let i = 0; i < dataSize; i++) {
                        this.workouts.push(data.content[i]);
                    }
                    this.page += 1;
                }
                else {
                    // event.target.disabled = true;
                    event.component.disableInfiniteScroll();
                }
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        // setTimeout(() => {
        //   event.component.disableInfiniteScroll();
        // }, 500);
    }
    setSearchValue(searchVal) {
        this.searchValue = searchVal;
    }
    setTodayDate() {
        var today = new Date();
        this.day = today.getDate();
        this.month = today.getMonth() + 1;
        this.year = today.getFullYear();
    }
    userChange(event) {
        this.userId = event.value.nombreUsuario;
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
    volver() {
        this.router.navigate(['/admin']);
    }
};
LinkWorkoutPage.ctorParameters = () => [
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_9__["WorkoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }
];
LinkWorkoutPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
LinkWorkoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-link-workout',
        template: _raw_loader_link_workout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_link_workout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LinkWorkoutPage);



/***/ }),

/***/ "n114":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/link-workout/link-workout.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Asignar entrenamiento\"></app-header>\n\n<ion-content>\n\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\n        <ion-list-header lines=\"full\">\n          <ion-label>\n            Asignar entrenamientos a usuario\n          </ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Fecha</ion-label>\n          <ion-datetime displayFormat=\"D MMM YYYY\" max=\"2100\" min=\"2015\" (onChange)=\"setDate($event)\" name=\"date\" [(ngModel)]=\"date\"></ion-datetime>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Usuario</ion-label>\n          <ionic-selectable item-content [items]=\"users\" itemValueField=\"nombreUsuario\" itemTextField=\"nombre\" [canSearch]=\"true\" (onChange)=\"userChange($event)\" >\n          </ionic-selectable>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Ejercicio</ion-label>\n          <ionic-selectable\n            item-content\n            [isMultiple]=\"true\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [items]=\"workouts\"\n            [canSearch]=\"true\"\n            [hasInfiniteScroll]=\"true\"\n            (onSearch)=\"getWorkouts($event)\"\n            (onInfiniteScroll)=\"getMore($event)\"\n            name=\"selectedWorkouts\"\n            [(ngModel)]=\"selectedWorkouts\">\n          </ionic-selectable>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label>Comentarios: </ion-label>\n          <ion-input required placeholder=\"Comentarios\" name=\"comments\" [(ngModel)]=\"comments\"></ion-input>\n        </ion-item>\n\n\n\n        <div class=\"ion-padding\">\n            <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                <ion-icon name=\"add-circle\">  </ion-icon>\n                Crear\n                 </ion-button>\n         </div>\n         <div class=\"ion-padding\">\n            <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n                <ion-icon name=\"refresh-circle\">  </ion-icon>\n                Reset\n                 </ion-button>\n         </div>\n      </ion-list>\n     \n</form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-workouts-link-workout-link-workout-module.js.map