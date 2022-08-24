(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-admin-admin-module"],{

/***/ "JEFn":
/*!****************************************************!*\
  !*** ./src/app/pages/workouts/admin/admin.page.ts ***!
  \****************************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.page.html */ "QIVq");
/* harmony import */ var _admin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.page.scss */ "oRAR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/workout.service */ "X3Gk");







let AdminPage = class AdminPage {
    constructor(workoutService, router, toastController, alertController) {
        this.workoutService = workoutService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.workouts = [];
        this.page = 0;
        this.searchValue = '';
    }
    getWorkouts() {
        this.workouts = [];
        this.page = 0;
        if (this.searchValue != '') {
            this.workoutService.listaByName(this.page, this.searchValue).subscribe(data => {
                this.workouts = data.content;
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        else {
            this.cargar();
        }
        this.page += 1;
    }
    setSearchValue(searchVal) {
        this.searchValue = searchVal;
    }
    loadData(event) {
        event.target.disabled = false;
        if (this.searchValue != '') {
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
                    event.target.complete();
                }
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        else {
            this.workoutService.listaByName(this.page, this.searchValue).subscribe(data => {
                let dataSize = data.content.length;
                if (dataSize > 0) {
                    for (let i = 0; i < dataSize; i++) {
                        this.workouts.push(data.content[i]);
                    }
                    this.page += 1;
                }
                else {
                    // event.target.disabled = true;
                    event.target.complete();
                }
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        // event.target.complete();
        // event.target.disabled = true;
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    ngOnInit() {
        // this.cargar();
    }
    ionViewWillEnter() {
        // this.cargar();
        // this.page+=1;
    }
    cargar() {
        this.workoutService.lista(this.page).subscribe(data => {
            this.workouts = data.content;
        }, err => {
            console.log("petó");
            console.log(err);
        });
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
    borrar(id) {
        this.workoutService.delete(id).subscribe(data => {
            this.presentToast('Item borrado correctamente');
            this.cargar();
        }, err => {
            this.presentToast('Error borrando item');
        });
    }
    deleteConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Borrado de datos',
                message: 'Confirmación de borrado de datos',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.borrar(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AdminPage.ctorParameters = () => [
    { type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_6__["WorkoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AdminPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminPage);



/***/ }),

/***/ "QIVq":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/admin/admin.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Workouts admin\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-top\">\n      \n    </div>\n    <ion-button routerLink=\"/link-workout\" expand=\"block\">\n      <ion-icon name=\"link-workout\"></ion-icon>\n       Asignar entrenamiento    \n    </ion-button>\n    \n    <ion-searchbar searchIcon=\"search\" \n      animated\n      cancel-button-icon\n      (ionCancel)=\"hideSearch()\"\n      (search)=\"getWorkouts()\"\n      (ionChange)=\"setSearchValue($event.target.value)\"\n      placeholder=\"Buscar ejercicios\">\n    </ion-searchbar>\n\n    \n    <ion-row>\n      <ion-col col-6> \n        <ion-button (click)=\"getWorkouts()\" expand=\"block\">\n          <ion-icon name=\"search\"></ion-icon>\n           Buscar    \n        </ion-button>\n        \n      </ion-col>\n    \n      <ion-col col-6>\n       <ion-button expand=\"block\" color=\"success\" routerLink=\"/new-workout\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label> Crear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-content> -->\n        <ion-list *ngFor=\"let workout of workouts\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\" >\n                  <ion-item-option routerLink=\"/workout-detail/{{workout.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option>\n                  \n                </ion-item-options>\n            \n                <ion-item>\n                  <ion-label>{{workout.name}}</ion-label>\n                </ion-item>\n            \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"warning\" routerLink=\"/edit-workout/{{workout.id}}\">\n                        <ion-icon name=\"create\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"deleteConfirm(workout.id)\">\n                        <ion-icon name=\"trash\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n\n\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      <!-- </ion-content> -->\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "mD57":
/*!******************************************************!*\
  !*** ./src/app/pages/workouts/admin/admin.module.ts ***!
  \******************************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "pbyo");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "JEFn");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let AdminPageModule = class AdminPageModule {
};
AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]]
    })
], AdminPageModule);



/***/ }),

/***/ "oRAR":
/*!******************************************************!*\
  !*** ./src/app/pages/workouts/admin/admin.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "pbyo":
/*!**************************************************************!*\
  !*** ./src/app/pages/workouts/admin/admin-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ "JEFn");




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"]
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-workouts-admin-admin-module.js.map