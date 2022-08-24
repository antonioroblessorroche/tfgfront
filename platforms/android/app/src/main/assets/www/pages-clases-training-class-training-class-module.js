(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clases-training-class-training-class-module"],{

/***/ "ImS2":
/*!**********************************************************************!*\
  !*** ./src/app/pages/clases/training-class/training-class.module.ts ***!
  \**********************************************************************/
/*! exports provided: TrainingClassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassPageModule", function() { return TrainingClassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _training_class_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-class-routing.module */ "mJiC");
/* harmony import */ var _training_class_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training-class.page */ "Xjm3");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let TrainingClassPageModule = class TrainingClassPageModule {
};
TrainingClassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _training_class_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainingClassPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_training_class_page__WEBPACK_IMPORTED_MODULE_6__["TrainingClassPage"]]
    })
], TrainingClassPageModule);



/***/ }),

/***/ "TNv3":
/*!**********************************************************************!*\
  !*** ./src/app/pages/clases/training-class/training-class.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  background-image: url(\"/assets/images/main-background.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RyYWluaW5nLWNsYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJ0cmFpbmluZy1jbGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tYWluLWJhY2tncm91bmQuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "Xjm3":
/*!********************************************************************!*\
  !*** ./src/app/pages/clases/training-class/training-class.page.ts ***!
  \********************************************************************/
/*! exports provided: TrainingClassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassPage", function() { return TrainingClassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_training_class_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./training-class.page.html */ "sJw3");
/* harmony import */ var _training_class_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-class.page.scss */ "TNv3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/trainingclass.service */ "GTnE");







let TrainingClassPage = class TrainingClassPage {
    constructor(sessionService, activatedRoute, router, tokenService) {
        this.sessionService = sessionService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tokenService = tokenService;
        this.page = 0;
        this.searchValue = '';
    }
    ngOnInit() {
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        var todayMidnight = new Date(this.year, this.month - 1, this.day).getTime();
        this.sessionService.listaByStartEndDate(0, todayMidnight, (todayMidnight + 86400000)).subscribe(data => {
            this.session = data.content;
            for (var i = 0; i < this.session.length; i++) {
                this.session[i].date = new Date(this.session[i].timeStart).toLocaleTimeString();
            }
            this.isEmpty = data.content.length == 0;
        }, err => {
            this.volver();
        });
    }
    getWorkouts() {
        this.session = [];
        this.page = 0;
        var pickDate = new Date(this.year, this.month - 1, this.day).getTime();
        if (this.searchValue != '') {
            this.sessionService.listaByStartEndDateAndName(0, pickDate, (pickDate + 86400000), this.searchValue).subscribe(data => {
                this.session = data.content;
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
    clases() {
        const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/mis-clases' : '/mis-clases';
        this.router.navigate([redirectUrtl]);
    }
    setSearchValue(searchVal) {
        this.searchValue = searchVal;
        this.getWorkouts();
    }
    volver() {
        const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/admin-session' : '/admin-session';
        this.router.navigate([redirectUrtl]);
    }
    setDate(event) {
        var date = new Date(event.detail.value);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.cargar();
    }
};
TrainingClassPage.ctorParameters = () => [
    { type: src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_6__["TrainingClassService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
TrainingClassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-training-class',
        template: _raw_loader_training_class_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_training_class_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TrainingClassPage);



/***/ }),

/***/ "mJiC":
/*!******************************************************************************!*\
  !*** ./src/app/pages/clases/training-class/training-class-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: TrainingClassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassPageRoutingModule", function() { return TrainingClassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _training_class_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-class.page */ "Xjm3");




const routes = [
    {
        path: '',
        component: _training_class_page__WEBPACK_IMPORTED_MODULE_3__["TrainingClassPage"]
    }
];
let TrainingClassPageRoutingModule = class TrainingClassPageRoutingModule {
};
TrainingClassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainingClassPageRoutingModule);



/***/ }),

/***/ "sJw3":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clases/training-class/training-class.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Sesion de entrenamiento\"></app-header>\n\n<ion-content>\n  <div class='ion-padding'>\n    <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"clases()\">\n      <ion-icon name=\"person\"> </ion-icon>\n      &nbsp; Mis clases\n    </ion-button>\n  </div>\n\n\n  <ion-item class=\"ion-margin\">\n    <ion-label>Fecha de la clase</ion-label>\n    <ion-datetime placeholder=\"Seleccionar fecha\" displayFormat=\"D MMM YYYY\" max=\"2100\" min=\"2015\"\n      (ionChange)=\"setDate($event)\" name=\"date\" [(ngModel)]=\"date\"></ion-datetime>\n  </ion-item>\n  <ion-searchbar class=\"ion-margin-top\" searchIcon=\"search\" animated cancel-button-icon (ionCancel)=\"hideSearch()\"\n    (search)=\"getWorkouts()\" (ionChange)=\"setSearchValue($event.target.value)\" placeholder=\"Buscar clases\">\n  </ion-searchbar>\n\n  <ion-content *ngIf=\"!isEmpty\">\n    <ion-card *ngFor=\"let class of session\">\n      <ion-card-content class=\"ion-text-justify\" color=\"dark\" style=\"size: 14px\" ion-item\n        routerLink=\"/training-class-detail/{{class.id}}\">\n        <ion-text color=\"dark\"><b>{{class.name}}</b>\n          <ion-text color=\"danger\" *ngIf=\"class.available==false\"> (No disponible) </ion-text>\n          <br>\n          <b>{{class.date}}</b>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n\n  <ion-content *ngIf=\"isEmpty\">\n    <ion-content class='ion-padding' style=\"font-size: 30px;\">\n      <ion-text>\n        ¡Vaya!<br><br>\n      </ion-text>\n      <ion-text>\n        No hay clases programadas para hoy.\n      </ion-text>\n    </ion-content>\n  </ion-content>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-clases-training-class-training-class-module.js.map