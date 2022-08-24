(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clasesSemanales-new-weekly-class-new-weekly-class-module"],{

/***/ "Gpq5":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/new-weekly-class/new-weekly-class.page.ts ***!
  \*********************************************************************************/
/*! exports provided: NewWeeklyClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWeeklyClassPage", function() { return NewWeeklyClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_weekly_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-weekly-class.page.html */ "gWX+");
/* harmony import */ var _new_weekly_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-weekly-class.page.scss */ "biwl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_generateClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/generateClass */ "xTv/");
/* harmony import */ var src_app_models_mondayData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/mondayData */ "Jfh8");
/* harmony import */ var src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/training-center.service */ "r+Cp");
/* harmony import */ var src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/weekly-classes-master-service.service */ "UZcu");










let NewWeeklyClassPage = class NewWeeklyClassPage {
    constructor(classService, centerService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.centerService = centerService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.mondayData = [];
        this.classes = [];
        this.centers = [];
        this.page = 0;
        this.searchValue = '';
        this.isEmpty = true;
        this.selectedClass = '';
        this.selectedWeek = null;
        this.selectedTime = 0;
        this.selectedCenter = '';
    }
    ngOnInit() {
        this.selectedClass = '';
        this.selectedWeek = null;
        this.getMondays();
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.cargarClasesMaestras();
        this.cargarCenters();
    }
    cargarClasesMaestras() {
        this.classService.listaMasterAll(1000).subscribe(data => {
            this.classes = data.content;
        }, err => {
            this.volver();
        });
    }
    cargarCenters() {
        this.centerService.lista(100).subscribe(data => {
            this.centers = data.content;
        }, err => {
            console.log(err);
            this.presentToast('Error cargando centros de entrenamiento');
        });
    }
    selectTemplateId(event) {
        this.selectedClass = event.value.id;
    }
    selectCenterId(event) {
        this.selectedCenter = event.value.id;
    }
    selectWeek(event) {
        console.log(event);
        this.selectedWeek = event.value;
    }
    createNew() {
        if (this.selectedClass == '' || this.selectedWeek == null) {
            this.presentToast('PLANTILLA Y SEMANA SON CAMPOS OBLIGATORIOS');
        }
        var generateClass = new src_app_models_generateClass__WEBPACK_IMPORTED_MODULE_6__["GenerateClass"](this.selectedWeek.name, this.selectedWeek.date.getTime(), this.selectedClass, this.selectedClass);
        this.classService.copyFrom(generateClass).subscribe(data => {
            this.presentToast('Nueva clase semanal generada correctamente.');
            this.cargar();
        }, err => {
            this.presentToast('Error generando nueva clase semanal.');
            this.volver();
        });
    }
    getWorkouts() {
        this.classes = [];
        this.page = 0;
        if (this.searchValue != '') {
            this.classService.listaByNameMaster(0, this.searchValue).subscribe(data => {
                this.classes = data.content;
                this.isEmpty = data.content === [];
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
    volver() {
        this.router.navigate(['/']);
    }
    espMonthName(month) {
        switch (month) {
            case 0:
                return 'Enero';
                break;
            case 1:
                return 'Febrero';
                break;
            case 2:
                return 'Marzo';
                break;
            case 3:
                return 'Abril';
                break;
            case 4:
                return 'Mayo';
                break;
            case 5:
                return 'Junio';
                break;
            case 6:
                return 'Julio';
                break;
            case 7:
                return 'Agosto';
                break;
            case 8:
                return 'Septiembre';
                break;
            case 9:
                return 'Octubre';
                break;
            case 10:
                return 'Noviembre';
                break;
            case 11:
                return 'Diciembre';
                break;
            default: return '';
        }
    }
    getMondays() {
        this.mondayData = [];
        var day_info = 8.64e+7;
        var d = new Date();
        var auxDate;
        var name;
        d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 1) % 7);
        for (let i = 0; i < 12; i++) {
            auxDate = new Date(d.getTime() + day_info * 7 * i);
            name = 'Semana Lunes ' + auxDate.getDate() + ' de ' + this.espMonthName(auxDate.getMonth()); //Day of month
            console.log(name);
            this.mondayData.push(new src_app_models_mondayData__WEBPACK_IMPORTED_MODULE_7__["MondayData"](name, auxDate));
        }
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
NewWeeklyClassPage.ctorParameters = () => [
    { type: src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_9__["WeeklyClassesMasterServiceService"] },
    { type: src_app_services_training_center_service__WEBPACK_IMPORTED_MODULE_8__["TrainingCenterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
NewWeeklyClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-weekly-class',
        template: _raw_loader_new_weekly_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_weekly_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewWeeklyClassPage);



/***/ }),

/***/ "Jfh8":
/*!**************************************!*\
  !*** ./src/app/models/mondayData.ts ***!
  \**************************************/
/*! exports provided: MondayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MondayData", function() { return MondayData; });
class MondayData {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }
}


/***/ }),

/***/ "MO8T":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/new-weekly-class/new-weekly-class.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NewWeeklyClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWeeklyClassPageModule", function() { return NewWeeklyClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "8xsl");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _new_weekly_class_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-weekly-class-routing.module */ "y1wE");
/* harmony import */ var _new_weekly_class_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-weekly-class.page */ "Gpq5");









let NewWeeklyClassPageModule = class NewWeeklyClassPageModule {
};
NewWeeklyClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_weekly_class_routing_module__WEBPACK_IMPORTED_MODULE_7__["NewWeeklyClassPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"]
        ],
        declarations: [_new_weekly_class_page__WEBPACK_IMPORTED_MODULE_8__["NewWeeklyClassPage"]]
    })
], NewWeeklyClassPageModule);



/***/ }),

/***/ "biwl":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/new-weekly-class/new-weekly-class.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctd2Vla2x5LWNsYXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gWX+":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clasesSemanales/new-weekly-class/new-weekly-class.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases Semanales\"></app-header>\n\n<ion-content>\n   \n    <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\n        <ion-list-header lines=\"full\">\n          <ion-label>\n            Creacion de clases semanales\n          </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Semana:</ion-label>\n          <ionic-selectable\n          \n            [items]=\"mondayData\"\n            itemValueField=\"name\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (onChange)=\"selectWeek($event)\">\n          </ionic-selectable>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Plantilla semanal:</ion-label>\n          <ionic-selectable\n          \n            [items]=\"classes\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (onChange)=\"selectTemplateId($event)\">\n          </ionic-selectable>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label>Centro:</ion-label>\n          <ionic-selectable\n          \n            [items]=\"centers\"\n            itemValueField=\"id\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\"\n            (onChange)=\"selectCenterId($event)\">\n          </ionic-selectable>\n        </ion-item> -->\n\n        <!-- <ion-item>\n            <ion-label>Centro: </ion-label>\n            <ion-input  placeholder=\"¿En qué centro?\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n        </ion-item> -->\n      </ion-list>\n\n      <div class=\"ion-padding\">\n        <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\" (click)=\"createNew()\"> \n            <ion-icon name=\"create\">  </ion-icon>\n            Generar\n             </ion-button>\n     </div>\n     <!-- <div class=\"ion-padding\">\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n            <ion-icon name=\"refresh-circle\">  </ion-icon>\n            Reset\n             </ion-button>\n     </div> -->\n     \n  </form>\n\n  \n\n</ion-content>\n");

/***/ }),

/***/ "xTv/":
/*!*****************************************!*\
  !*** ./src/app/models/generateClass.ts ***!
  \*****************************************/
/*! exports provided: GenerateClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateClass", function() { return GenerateClass; });
class GenerateClass {
    constructor(week, weekTime, trainingCenterId, classId) {
        this.week = week;
        this.trainingCenterId = trainingCenterId;
        this.classId = classId;
        this.weekTime = weekTime;
    }
}


/***/ }),

/***/ "y1wE":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/new-weekly-class/new-weekly-class-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewWeeklyClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWeeklyClassPageRoutingModule", function() { return NewWeeklyClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_weekly_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-weekly-class.page */ "Gpq5");




const routes = [
    {
        path: '',
        component: _new_weekly_class_page__WEBPACK_IMPORTED_MODULE_3__["NewWeeklyClassPage"]
    }
];
let NewWeeklyClassPageRoutingModule = class NewWeeklyClassPageRoutingModule {
};
NewWeeklyClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewWeeklyClassPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-clasesSemanales-new-weekly-class-new-weekly-class-module.js.map