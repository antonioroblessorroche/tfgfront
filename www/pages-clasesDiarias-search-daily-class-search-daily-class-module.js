(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clasesDiarias-search-daily-class-search-daily-class-module"],{

/***/ "87gC":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/search-daily-class/search-daily-class.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SearchDailyClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDailyClassPageModule", function() { return SearchDailyClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _search_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-daily-class-routing.module */ "BkKg");
/* harmony import */ var _search_daily_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-daily-class.page */ "FhsG");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let SearchDailyClassPageModule = class SearchDailyClassPageModule {
};
SearchDailyClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_daily_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchDailyClassPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_search_daily_class_page__WEBPACK_IMPORTED_MODULE_6__["SearchDailyClassPage"]]
    })
], SearchDailyClassPageModule);



/***/ }),

/***/ "BkKg":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/search-daily-class/search-daily-class-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SearchDailyClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDailyClassPageRoutingModule", function() { return SearchDailyClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_daily_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-daily-class.page */ "FhsG");




const routes = [
    {
        path: '',
        component: _search_daily_class_page__WEBPACK_IMPORTED_MODULE_3__["SearchDailyClassPage"]
    }
];
let SearchDailyClassPageRoutingModule = class SearchDailyClassPageRoutingModule {
};
SearchDailyClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchDailyClassPageRoutingModule);



/***/ }),

/***/ "FhsG":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/search-daily-class/search-daily-class.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchDailyClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDailyClassPage", function() { return SearchDailyClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-daily-class.page.html */ "bRuq");
/* harmony import */ var _search_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-daily-class.page.scss */ "ITEb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/daily-classes.service */ "ojj2");







let SearchDailyClassPage = class SearchDailyClassPage {
    constructor(classService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        // date: Date;
        this.selector = "clases";
        this.sessions = [];
        this.convertedSelectedDate = '';
        this.selectedRawDate = new Date();
    }
    ngOnInit() {
        let date = new Date();
        this.convertedSelectedDate = 'hoy';
    }
    ionViewWillEnter() {
        this.selector = 'inscripciones';
        this.selector = 'clases';
        this.cargar(this.selectedRawDate);
    }
    segmentChanged($event) {
        this.selector = $event.detail.value;
        console.log($event.detail.value);
    }
    cargar(date) {
        // this.dailyClassId = this.activatedRoute.snapshot.params.id;
        this.classService.inscripcionesUsuario().subscribe(data => {
            console.log(data);
            this.sessions = data.dailyClasses;
            for (let i = 0; i < this.sessions.length; i++) {
                let date = new Date(this.sessions[i].classTimestamp);
                this.sessions[i].classConvertedTime = date.getDate() + '/'
                    + (date.getMonth() + 1) + '/'
                    + date.getFullYear();
            }
            console.log('a');
        }, err => {
            console.log(err);
        });
        this.classService.listaByDate(0, date.getTime()).subscribe(data => {
            console.log(data);
            this.classes = data.content[0];
            for (let i = 0; i < data.content.length; i++) {
                this.classes;
                for (let j = 0; j < data.content[i].dailyClasses.length; j++) {
                    data.content[i].dailyClasses[j].index = j;
                }
            }
        }, err => {
            this.volver();
        });
    }
    deleteConfirm(indexOfElement) {
        this.classes.dailyClasses.splice(indexOfElement, 1);
        this.classService.actualizar(this.classes.id, this.classes).subscribe(data => {
            this.presentToast('Clase eliminada correctamente');
        }, err => {
            this.presentToast('No fue posible eliminar clase');
        });
        setTimeout(() => { this.cargar(new Date()); }, 500);
        // this.cargar();
    }
    volver() {
        this.router.navigate(['/']);
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
    changeDate(event) {
        let date = new Date(event.detail.value);
        this.selectedRawDate = date;
        this.convertedSelectedDate = 'el día ' + date.getDate() + '/'
            + (date.getMonth() + 1);
        console.log(date);
        this.cargar(date);
    }
};
SearchDailyClassPage.ctorParameters = () => [
    { type: src_app_services_daily_classes_service__WEBPACK_IMPORTED_MODULE_6__["DailyClassesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
SearchDailyClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-daily-class',
        template: _raw_loader_search_daily_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_daily_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchDailyClassPage);



/***/ }),

/***/ "ITEb":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/clasesDiarias/search-daily-class/search-daily-class.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtZGFpbHktY2xhc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "bRuq":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clasesDiarias/search-daily-class/search-daily-class.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases\"></app-header>\n\n<ion-row>\n  <ion-segment (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"clases\">\n        <ion-label>Clases</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"inscripciones\">\n        <ion-label>Mis inscripciones</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  </ion-row>\n\n<ion-content *ngIf=\"selector == 'clases'\">\n  <ion-item>\n    <ion-label>Seleccionar fecha</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY\" max=\"2100\" min=\"2015\" [(ngModel)]=\"date\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeDate($event)\" ></ion-datetime>\n  </ion-item>\n  <ion-content *ngIf=\"classes\">\n    <ion-list *ngFor=\"let workout of classes.dailyClasses; index as indexOfElement\">\n      <ion-card routerLink=\"/detail-daily-class-session/{{classes.id}}/{{indexOfElement}}\">\n        <ion-card-header>\n          <ion-card-subtitle>{{workout.locationName}}</ion-card-subtitle>\n          <ion-card-title>{{workout.name}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          {{workout.time}} ({{workout.slots}} plazas)\n        </ion-card-content>\n        </ion-card>\n      </ion-list>\n      \n    </ion-content>\n\n    <ion-content *ngIf=\"!classes\"> \n      <ion-item>\n        <ion-label class=\"ion-text-wrap\" align=\"center\">\n          No hay clases disponibles\n          para {{convertedSelectedDate}}\n        </ion-label>\n      </ion-item>\n    </ion-content>\n</ion-content>\n\n<ion-content  *ngIf=\"selector == 'inscripciones'\">\n  <ion-content  *ngIf=\"sessions\">\n\n  <ion-list *ngFor=\"let session of sessions\">\n    <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>{{session.locationName}}</ion-card-subtitle>\n      <ion-card-title>{{session.name}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{session.classConvertedTime}} - {{session.time}}\n    </ion-card-content>\n  </ion-card>\n</ion-list>\n</ion-content>\n<ion-content  *ngIf=\"!sessions\">\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\" align=\"center\">\n      No tiene reservas de clases vigentes.\n    </ion-label>\n  </ion-item>\n\n</ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-clasesDiarias-search-daily-class-search-daily-class-module.js.map