(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-daily-classes-master-new-daily-classes-master-module"],{

/***/ "70gM":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/new-daily-classes-master/new-daily-classes-master.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctZGFpbHktY2xhc3Nlcy1tYXN0ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Nlh3":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/new-daily-classes-master/new-daily-classes-master.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NewDailyClassesMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDailyClassesMasterPageModule", function() { return NewDailyClassesMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "8xsl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_daily_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-daily-classes-master-routing.module */ "Z7AM");
/* harmony import */ var _new_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-daily-classes-master.page */ "lcrJ");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");









let NewDailyClassesMasterPageModule = class NewDailyClassesMasterPageModule {
};
NewDailyClassesMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _new_daily_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_6__["NewDailyClassesMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableModule"]
        ],
        declarations: [_new_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_7__["NewDailyClassesMasterPage"]]
    })
], NewDailyClassesMasterPageModule);



/***/ }),

/***/ "Z7AM":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/new-daily-classes-master/new-daily-classes-master-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewDailyClassesMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDailyClassesMasterPageRoutingModule", function() { return NewDailyClassesMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-daily-classes-master.page */ "lcrJ");




const routes = [
    {
        path: '',
        component: _new_daily_classes_master_page__WEBPACK_IMPORTED_MODULE_3__["NewDailyClassesMasterPage"]
    }
];
let NewDailyClassesMasterPageRoutingModule = class NewDailyClassesMasterPageRoutingModule {
};
NewDailyClassesMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewDailyClassesMasterPageRoutingModule);



/***/ }),

/***/ "gw8D":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-daily-classes-master/new-daily-classes-master.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nueva clase\"></app-header>\n\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Crear nueva clase maestra\n        </ion-label>\n      </ion-list-header>\n\n        <ion-item>\n          <ion-label>Clase</ion-label>\n          <ionic-selectable\n          \n            [items]=\"workouts\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (onChange)=\"selectId($event)\">\n          </ionic-selectable>\n        </ion-item>\n\n      <ion-item>\n        <ion-label>Hora:</ion-label>\n        <ion-datetime displayFormat=\"HH:mm\" (ionChange)=\"selectTime($event)\" ></ion-datetime>\n      </ion-item>\n\n      \n      <ion-item>\n        <ion-label>Descripcion: </ion-label>\n        <ion-input placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Lugar: </ion-label>\n        <ionic-selectable\n            [items]=\"centers\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (onChange)=\"selectCenterId($event)\">\n          </ionic-selectable>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Plazas disponibles: </ion-label>\n        <ion-input type=\"number\" placeholder=\"Numero de plazas disponibles\" name=\"description\" [(ngModel)]=\"slots\"></ion-input>\n    </ion-item>\n\n\n\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Crear\n               </ion-button>\n       </div>\n       \n       <div class=\"ion-padding\">\n          <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n              <ion-icon name=\"refresh-circle\">  </ion-icon>\n              Reset\n               </ion-button>\n       </div>\n    </ion-list>\n   \n</form>\n\n</ion-content>\n");

/***/ }),

/***/ "jCtB":
/*!***************************************************!*\
  !*** ./src/app/models/masterDailyClassSession.ts ***!
  \***************************************************/
/*! exports provided: MasterDailyClassSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDailyClassSession", function() { return MasterDailyClassSession; });
class MasterDailyClassSession {
    constructor(trainingId, description, time, slots, location, name) {
        this.trainingId = trainingId;
        this.description = description;
        this.location = location;
        this.time = time;
        this.slots = slots;
        this.name = name;
    }
}


/***/ }),

/***/ "lcrJ":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/new-daily-classes-master/new-daily-classes-master.page.ts ***!
  \*********************************************************************************/
/*! exports provided: NewDailyClassesMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDailyClassesMasterPage", function() { return NewDailyClassesMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_daily_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-daily-classes-master.page.html */ "gw8D");
/* harmony import */ var _new_daily_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-daily-classes-master.page.scss */ "70gM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_masterDailyClassSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/masterDailyClassSession */ "jCtB");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");
/* harmony import */ var src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/training-center.service */ "r+Cp");










let NewDailyClassesMasterPage = class NewDailyClassesMasterPage {
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
        this.centers = [];
        this.name = '';
        this.description = '';
        this.place = "";
    }
    ngOnInit() {
        this.dailyClassId = this.activatedRoute.snapshot.params.id;
        console.log(this.dailyClassId);
        this.cargar();
    }
    compareClasses() {
    }
    cargar() {
        this.workoutService.listaCompleta().subscribe(data => {
            console.log(data);
            this.workouts = data.content;
        }, err => {
            console.log("petó");
            console.log(err);
        });
        this.trainingCenterService.lista(100).subscribe(data => {
            this.centers = data.content;
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    onCreate() {
        this.dailyClassService.detalleMaster(this.dailyClassId).subscribe(data => {
            if (data.dailyClasses == null) {
                data.dailyClasses = [];
            }
            var sessionDetail = new src_app_models_masterDailyClassSession__WEBPACK_IMPORTED_MODULE_6__["MasterDailyClassSession"](this.selectedWorkout, this.description, this.selectedTime, this.slots, this.selectedPlace, null);
            data.dailyClasses.push(sessionDetail);
            this.dailyClassService.actualizarMaster(data.id, data).subscribe(data => {
                this.presentToast('Clase guardada correctamente');
            }, err => {
                this.presentToast('No fue posible insertar nueva clase');
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
NewDailyClassesMasterPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_7__["ClassMasterService"] },
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_8__["DailyClassesService"] },
    { type: src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_9__["TrainingCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
NewDailyClassesMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-daily-classes-master',
        template: _raw_loader_new_daily_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_daily_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewDailyClassesMasterPage);



/***/ })

}]);
//# sourceMappingURL=pages-new-daily-classes-master-new-daily-classes-master-module.js.map