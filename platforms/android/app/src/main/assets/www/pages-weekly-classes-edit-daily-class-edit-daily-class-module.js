(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-edit-daily-class-edit-daily-class-module"],{

/***/ "/VT6":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-class/edit-daily-class-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EditDailyClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyClassPageRoutingModule", function() { return EditDailyClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_daily_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-daily-class.page */ "qHsO");




const routes = [
    {
        path: '',
        component: _edit_daily_class_page__WEBPACK_IMPORTED_MODULE_3__["EditDailyClassPage"]
    }
];
let EditDailyClassPageRoutingModule = class EditDailyClassPageRoutingModule {
};
EditDailyClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditDailyClassPageRoutingModule);



/***/ }),

/***/ "85BN":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/edit-daily-class/edit-daily-class.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Editar clase\"></app-header>\n\n<ion-row>\n  <ion-col>\n          <ion-segment (ionChange)=\"segmentChanged($event)\">\n              <ion-segment-button value=\"detalle\">\n                  <ion-label>Detalle</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"inscripciones\">\n                  <ion-label>Inscripciones</ion-label>\n              </ion-segment-button>\n          </ion-segment>\n  </ion-col>\n</ion-row>\n\n<ion-content *ngIf=\"selector == 'detalle'\">\n<ion-content *ngIf=\"session && fullSelectedWorkout && fullSelectedPlace && selectedTime\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Editar clase diaria\n        </ion-label>\n      </ion-list-header>\n\n        <ion-item>\n          <ion-label>Clase</ion-label>\n          <ionic-selectable item-content\n            [(ngModel)]=\"fullSelectedWorkout\"\n            [ngModelOptions]=\"{standalone: true}\"\n            [items]=\"workouts\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (onChange)=\"selectId($event)\"\n           >\n          </ionic-selectable>\n        </ion-item>\n\n      <ion-item>\n        <ion-label>Hora:</ion-label>\n        <ion-datetime displayFormat=\"HH:mm\" (ionChange)=\"selectTime($event)\" [(ngModel)]=\"selectedTime\"\n        [ngModelOptions]=\"{standalone: true}\"></ion-datetime>\n      </ion-item>\n\n      \n      <ion-item>\n        <ion-label>Descripcion: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"session.description\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Lugar</ion-label>\n      <ionic-selectable\n        item-content\n        [(ngModel)]=\"fullSelectedPlace\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [items]=\"places\"\n        itemValueField=\"id\"\n        itemTextField=\"name\"\n        [canSearch]=\"true\"\n        (onChange)=\"selectCenterId($event)\"\n        >\n      </ionic-selectable>\n    </ion-item>\n      <ion-item>\n        <ion-label>Plazas disponibles: </ion-label>\n        <ion-input type=\"number\" placeholder=\"Numero de plazas disponibles\" name=\"slots\" [(ngModel)]=\"session.slots\"></ion-input>\n    </ion-item>\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Editar\n               </ion-button>\n       </div>\n    </ion-list>\n</form>\n</ion-content>\n</ion-content>\n\n<ion-content *ngIf=\"selector == 'inscripciones' && session\">\n  <ion-content *ngIf=\"session.reservations < session.slots\">\n\n    <ion-item>\n      <ion-label>Añadir usuario</ion-label>\n      <ionic-selectable\n        [items]=\"users\"\n        itemValueField=\"nombreUsuario\"\n        itemTextField=\"nombre\"\n        [canSearch]=\"true\"\n        (onChange)=\"selectUserId($event)\"\n        >\n      </ionic-selectable>\n    </ion-item>\n\n  <div class=\"ion-padding\">\n    <ion-button color=\"success\" expand=\"block\" (click)=\"addUser()\" class=\"ion-no-margin\" > \n        <ion-icon name=\"add-circle\">  </ion-icon>\n        Añadir usuario\n         </ion-button>\n        </div>\n\n\n\n  <ion-content *ngIf=\"reservations.length != 0\">\n    <ion-list *ngFor=\"let reservation of reservations\">\n      <ion-item-sliding>\n        <ion-item-options side=\"start\">\n          <ion-item-option routerLink=\"/user-detail/{{reservation.user}}\">\n            <ion-icon name=\"eye\" slot=\"icon-only\">\n            </ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n        <ion-item>\n          <ion-label>{{reservation.userFullName}}</ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"deleteConfirm(reservation.id)\">\n            <ion-icon name=\"trash\" slot=\"icon-only\">\n            </ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n\n  <ion-content *ngIf=\"reservations.length == 0\">\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\" align=\"center\">\n       Aun no existen reservas para esta clase.\n      </ion-label>\n    </ion-item>\n  </ion-content>\n</ion-content>\n</ion-content>\n\n\n\n\n");

/***/ }),

/***/ "qHsO":
/*!********************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-class/edit-daily-class.page.ts ***!
  \********************************************************************************/
/*! exports provided: EditDailyClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyClassPage", function() { return EditDailyClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-daily-class.page.html */ "85BN");
/* harmony import */ var _edit_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-daily-class.page.scss */ "zBjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_DailyClassSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/DailyClassSession */ "eYbR");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");
/* harmony import */ var src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/training-center.service */ "r+Cp");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");











let EditDailyClassPage = class EditDailyClassPage {
    constructor(workoutService, dailyClassService, usuarioService, trainingCenterService, router, activatedRoute, toastController, alertController) {
        this.workoutService = workoutService;
        this.dailyClassService = dailyClassService;
        this.usuarioService = usuarioService;
        this.trainingCenterService = trainingCenterService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        // workouts: Workout[] = [];
        this.workouts = [];
        this.name = '';
        this.description = '';
        this.places = [];
        this.selector = 'detalle';
        this.users = [];
        this.reservations = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.dailyClassId = this.activatedRoute.snapshot.params.id;
        this.index = this.activatedRoute.snapshot.params.index;
        console.log(this.dailyClassId);
        this.cargar();
    }
    cargar() {
        this.workoutService.listaCompleta().subscribe(data => {
            this.workouts = data.content;
            console.log(data);
        }, err => {
            console.log(err);
        });
        this.trainingCenterService.lista(100).subscribe(data => {
            this.places = data.content;
        }, err => {
            console.log(err);
        });
        this.dailyClassId = this.activatedRoute.snapshot.params.id;
        this.dailyClassService.detalle(this.dailyClassId).subscribe(data => {
            console.log(data);
            this.classes = data;
            this.session = data.dailyClasses[this.index];
            this.selectedTime = data.dailyClasses[this.index].time;
            this.selectedPlace = data.dailyClasses[this.index].location;
            this.selectedWorkout = data.dailyClasses[this.index].trainingId;
            console.log("Workout " + this.selectedWorkout);
            for (let i = 0; i < this.workouts.length; i++) {
                if (this.workouts[i].id == this.selectedWorkout) {
                    this.fullSelectedWorkout = this.workouts[i];
                }
            }
            for (let i = 0; i < this.places.length; i++) {
                if (this.places[i].id == this.selectedPlace) {
                    this.fullSelectedPlace = this.places[i];
                }
            }
            this.dailyClassService.inscripcionesClase(this.dailyClassId, this.session.id).subscribe(data => {
                console.log(data);
                this.reservations = data;
            }, err => {
                this.presentToast("No pudieron cargarse las inscripciones a la sesión");
            });
        }, err => {
            this.volver();
        });
        this.usuarioService.lista().subscribe(data => {
            console.log(data);
            this.users = data;
        }, err => {
            this.presentToast("No pudieron cargarse las inscripciones a la sesión");
        });
    }
    deleteConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Eliminar inscripción',
                message: 'Confmirmar la eliminación de la inscripción de usuario en clase',
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
    borrar(id) {
        console.log(id);
        let reservation = null;
        for (let i = 0; i < this.reservations.length; i++) {
            if (this.reservations[i].id == id) {
                reservation = this.reservations[i];
                this.dailyClassService.eliminacionAdmin(reservation.classId, reservation.user, reservation.sessionId).subscribe(data => {
                    this.presentToast('Se ha eliminado la inscripción en la clase.');
                    this.ionViewWillEnter();
                }, err => {
                    this.presentToast('No ha podido eliminarse su inscripción en la clase.');
                });
            }
        }
    }
    addUser() {
        this.dailyClassService.inscripcion(this.activatedRoute.snapshot.params.id, this.selectedUser, this.session.id).subscribe(data => {
            this.presentToast('Usuario inscrito correctamente');
            this.cargar();
            this.selectedUser = '';
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    segmentChanged($event) {
        this.selector = $event.detail.value;
        console.log($event.detail.value);
    }
    onCreate() {
        this.dailyClassService.detalle(this.dailyClassId).subscribe(data => {
            if (data.dailyClasses == null) {
                data.dailyClasses = [];
            }
            if (this.session.reservations > this.session.slots) {
                this.presentToast('No pudo editarse la clase. Actualmente existen más reservas que plazas disponibles. Incremente el número de plazas al menos hasta ' + this.session.reservations);
            }
            else {
                var sessionDetail = new src_app_models_DailyClassSession__WEBPACK_IMPORTED_MODULE_6__["DailyClassSession"](this.selectedWorkout, this.description, this.selectedTime, this.slots, this.selectedPlace, null, null);
                data.dailyClasses[this.index] = this.session;
                this.dailyClassService.actualizar(data.id, data).subscribe(data => {
                    this.presentToast('Clase editada correctamente');
                }, err => {
                    this.presentToast('No fue posible editar la clase diaria');
                });
                this.vaciar();
                this.volver();
            }
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    vaciar() {
        this.description = '';
        this.selectedTime = '';
        this.selectedWorkout = '';
        this.selectedUser = '';
    }
    formatDate(value) {
        console.log(value);
    }
    selectId(event) {
        this.selectedWorkout = event.value.id;
        console.log("Ejercicio seleccionado: " + this.selectedWorkout + " " + event.value.name);
    }
    selectCenterId(event) {
        this.selectedPlace = event.value.id;
        console.log("Centro seleccionado: " + this.selectedWorkout + " " + event.value.name);
    }
    selectUserId(event) {
        this.selectedUser = event.value.nombreUsuario;
        console.log("Usuario seleccionado: " + this.selectedUser + " " + event.value.name);
    }
    selectTime(event) {
        this.selectedTime = event.detail.value.substring(11, 16);
    }
    volver() {
        this.router.navigate(['/detail-daily-class/' + this.dailyClassId]);
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
EditDailyClassPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__["ClassMasterService"] },
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_8__["DailyClassesService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_9__["TrainingCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditDailyClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-daily-class',
        template: _raw_loader_edit_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditDailyClassPage);



/***/ }),

/***/ "t910":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-class/edit-daily-class.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EditDailyClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyClassPageModule", function() { return EditDailyClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-daily-class-routing.module */ "/VT6");
/* harmony import */ var _edit_daily_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-daily-class.page */ "qHsO");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let EditDailyClassPageModule = class EditDailyClassPageModule {
};
EditDailyClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDailyClassPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_edit_daily_class_page__WEBPACK_IMPORTED_MODULE_6__["EditDailyClassPage"]]
    })
], EditDailyClassPageModule);



/***/ }),

/***/ "zBjs":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-class/edit-daily-class.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRhaWx5LWNsYXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-edit-daily-class-edit-daily-class-module.js.map