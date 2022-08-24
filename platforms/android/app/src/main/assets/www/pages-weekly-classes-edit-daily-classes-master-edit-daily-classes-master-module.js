(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-edit-daily-classes-master-edit-daily-classes-master-module"],{

/***/ "+gSq":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: EditDailyClassesMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyClassesMasterPageRoutingModule", function() { return EditDailyClassesMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-daily-classes-master.page */ "ekmf");




const routes = [
    {
        path: '',
        component: _edit_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_3__["EditDailyClassesMasterPage"]
    }
];
let EditDailyClassesMasterPageRoutingModule = class EditDailyClassesMasterPageRoutingModule {
};
EditDailyClassesMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditDailyClassesMasterPageRoutingModule);



/***/ }),

/***/ "78Az":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master.page.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWRhaWx5LWNsYXNzZXMtbWFzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ekmf":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditDailyClassesMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyClassesMasterPage", function() { return EditDailyClassesMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_daily_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-daily-classes-master.page.html */ "wX9/");
/* harmony import */ var _edit_daily_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-daily-classes-master.page.scss */ "78Az");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");
/* harmony import */ var src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/training-center.service */ "r+Cp");









let EditDailyClassesMasterPage = class EditDailyClassesMasterPage {
    constructor(workoutService, dailyClassService, trainingCenterService, router, activatedRoute, toastController, alertController) {
        this.workoutService = workoutService;
        this.dailyClassService = dailyClassService;
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
    }
    ngOnInit() {
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
        this.dailyClassService.detalleMaster(this.dailyClassId).subscribe(data => {
            console.log(data);
            this.classes = data;
            this.session = data.dailyClasses[this.index];
            this.selectedTime = this.session.time;
            this.selectedPlace = this.session.location;
            this.selectedWorkout = this.session.trainingId;
            console.log("Workout " + this.selectedWorkout);
        }, err => {
            this.volver();
        });
    }
    onCreate() {
        this.dailyClassService.detalleMaster(this.dailyClassId).subscribe(data => {
            if (data.dailyClasses == null) {
                data.dailyClasses = [];
            }
            data.dailyClasses[this.index] = this.session;
            this.dailyClassService.actualizarMaster(data.id, data).subscribe(data => {
                this.presentToast('Clase editada correctamente');
            }, err => {
                this.presentToast('No fue posible editar la clase diaria');
            });
            this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    vaciar() {
        this.description = '';
        this.selectedTime = '';
        this.selectedWorkout = '';
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
    selectTime(event) {
        this.selectedTime = event.detail.value.substring(11, 16);
    }
    volver() {
        this.router.navigate(['/daily-classes-master/' + this.dailyClassId]);
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
EditDailyClassesMasterPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_6__["ClassMasterService"] },
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_7__["DailyClassesService"] },
    { type: src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_8__["TrainingCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditDailyClassesMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-daily-classes-master',
        template: _raw_loader_edit_daily_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_daily_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditDailyClassesMasterPage);



/***/ }),

/***/ "wX9/":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master.page.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Editar clase maetsra\"></app-header>\n\n<ion-content *ngIf=\"session\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Editar clase diaria maestra\n        </ion-label>\n      </ion-list-header>\n\n        <ion-item>\n          <ion-label>Clase</ion-label>\n          <ionic-selectable\n            value=\"{{session.trainingId}}\"\n            [items]=\"workouts\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (ionChange)=\"selectId($event)\">\n          </ionic-selectable>\n        </ion-item>\n\n      <ion-item>\n        <ion-label>Hora:</ion-label>\n        <ion-datetime displayFormat=\"HH:mm\" (ionChange)=\"selectTime($event)\" [(ngModel)]=\"selectedTime\" [ngModelOptions]=\"{standalone: true}\"></ion-datetime>\n      </ion-item>\n\n      \n      <ion-item>\n        <ion-label>Descripcion: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"session.description\"></ion-input>\n    </ion-item>\n\n      <!-- <ion-item>\n        <ion-label>Lugar: </ion-label>\n        <ion-input placeholder=\"¿Dónde tendrá lugar?\" name=\"description\" [(ngModel)]=\"place\"></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label>Lugar</ion-label>\n      <ionic-selectable\n        value=\"{{selectedPlace}}\"\n        [items]=\"places\"\n        itemValueField=\"id\"\n        itemTextField=\"name\"\n        [canSearch]=\"true\"\n        (ionChange)=\"selectCenterId($event)\"\n        >\n      </ionic-selectable>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Plazas disponibles: </ion-label>\n        <ion-input type=\"number\" placeholder=\"Numero de plazas disponibles\" name=\"slots\" [(ngModel)]=\"session.slots\"></ion-input>\n    </ion-item>\n\n\n\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Editar\n               </ion-button>\n       </div>\n<!--        \n       <div class=\"ion-padding\">\n          <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n              <ion-icon name=\"refresh-circle\">  </ion-icon>\n              Reset\n               </ion-button>\n       </div> -->\n    </ion-list>\n   \n</form>\n\n</ion-content>\n\n");

/***/ }),

/***/ "xelj":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditDailyClassesMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDailyClassesMasterPageModule", function() { return EditDailyClassesMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_daily_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-daily-classes-master-routing.module */ "+gSq");
/* harmony import */ var _edit_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-daily-classes-master.page */ "ekmf");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let EditDailyClassesMasterPageModule = class EditDailyClassesMasterPageModule {
};
EditDailyClassesMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_daily_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDailyClassesMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_edit_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_6__["EditDailyClassesMasterPage"]]
    })
], EditDailyClassesMasterPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-edit-daily-classes-master-edit-daily-classes-master-module.js.map