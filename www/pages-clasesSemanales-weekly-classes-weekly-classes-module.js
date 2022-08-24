(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clasesSemanales-weekly-classes-weekly-classes-module"],{

/***/ "4xWJ":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/weekly-classes/weekly-classes.page.ts ***!
  \*****************************************************************************/
/*! exports provided: WeeklyClassesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesPage", function() { return WeeklyClassesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weekly_classes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weekly-classes.page.html */ "TFSU");
/* harmony import */ var _weekly_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly-classes.page.scss */ "TZrQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/weekly-classes-master-service.service */ "UZcu");







let WeeklyClassesPage = class WeeklyClassesPage {
    constructor(classService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.trainingClass = [];
        this.page = 0;
        this.searchValue = '';
        this.isEmpty = true;
        this.mondayData = [];
    }
    ngOnInit() {
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.cargar();
        this.getMondays();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        var todayMidnight = new Date(this.year, this.month - 1, this.day).getTime();
        this.classService.lista(0).subscribe(data => {
            this.trainingClass = data.content;
        }, err => {
            this.volver();
        });
    }
    createNew() {
        this.classService.generar().subscribe(data => {
            this.presentToast('Nueva clase maestra semanal generada correctamente.');
            this.cargar();
        }, err => {
            this.presentToast('Error generando nueva clase maestra semanal.');
            this.volver();
        });
    }
    getWorkouts() {
        this.trainingClass = [];
        this.page = 0;
        var pickDate = new Date(this.year, this.month - 1, this.day).getTime();
        if (this.searchValue != '') {
            this.classService.listaByName(0, this.searchValue).subscribe(data => {
                this.trainingClass = data.content;
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
    setSearchValue(searchVal) {
        this.searchValue = searchVal;
    }
    volver() {
        this.router.navigate(['/']);
    }
    loadData(event) {
        event.target.disabled = false;
        if (this.searchValue != '') {
            this.byName(event);
        }
        else {
            this.byName(event);
        }
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    byName(event) {
        this.classService.lista(this.page).subscribe(data => {
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.trainingClass.push(data.content[i]);
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
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    ionViewWillEnter() {
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
        this.classService.delete(id).subscribe(data => {
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
    getMondays() {
        var day_info = 8.64e+7;
        var d = new Date();
        d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 1) % 7);
        for (let i = 0; i < 12; i++) {
            this.mondayData.push(new Date(d.getTime() + day_info * 7 * i));
        }
        console.log(this.mondayData);
    }
};
WeeklyClassesPage.ctorParameters = () => [
    { type: src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesMasterServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
WeeklyClassesPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
WeeklyClassesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weekly-classes',
        template: _raw_loader_weekly_classes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_weekly_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WeeklyClassesPage);



/***/ }),

/***/ "TFSU":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clasesSemanales/weekly-classes/weekly-classes.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases Semanales\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-top\">\n      \n    </div>\n\n    \n    <ion-searchbar searchIcon=\"search\" \n      animated\n      cancel-button-icon\n      (ionCancel)=\"hideSearch()\"\n      (search)=\"getWorkouts()\"\n      (ionChange)=\"setSearchValue($event.target.value)\"\n      placeholder=\"Buscar clases semanales\">\n    </ion-searchbar>\n\n    \n    <ion-row>\n      <ion-col col-6> \n        <ion-button (click)=\"getWorkouts()\" expand=\"block\">\n          <ion-icon name=\"search\"></ion-icon>\n           Buscar    \n        </ion-button>\n      </ion-col>\n    \n      <ion-col col-6>\n       <ion-button expand=\"block\" color=\"success\"  routerLink=\"/new-weekly-class\"> \n        <!-- aqui llamar a crear clase y recargar     new-weekly-class      -->\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label> Crear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-content> -->\n        <ion-list *ngFor=\"let workout of trainingClass\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\" >\n                   <ion-item-option routerLink=\"/edit-weekly-classes/{{workout.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option>\n                  \n                </ion-item-options>\n            \n                <ion-item>\n                  <ion-label>{{workout.name}}</ion-label>\n                </ion-item>\n            \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" (click)=\"deleteConfirm(workout.id)\">\n                        <ion-icon name=\"trash\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n        \n\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      <!-- </ion-content> -->\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "TZrQ":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/weekly-classes/weekly-classes.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWVrbHktY2xhc3Nlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "tAHW":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/weekly-classes/weekly-classes.module.ts ***!
  \*******************************************************************************/
/*! exports provided: WeeklyClassesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesPageModule", function() { return WeeklyClassesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _weekly_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekly-classes-routing.module */ "v9+B");
/* harmony import */ var _weekly_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weekly-classes.page */ "4xWJ");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let WeeklyClassesPageModule = class WeeklyClassesPageModule {
};
WeeklyClassesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _weekly_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeeklyClassesPageRoutingModule"]
        ],
        declarations: [_weekly_classes_page__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesPage"]]
    })
], WeeklyClassesPageModule);



/***/ }),

/***/ "v9+B":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/weekly-classes/weekly-classes-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: WeeklyClassesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesPageRoutingModule", function() { return WeeklyClassesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _weekly_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-classes.page */ "4xWJ");




const routes = [
    {
        path: '',
        component: _weekly_classes_page__WEBPACK_IMPORTED_MODULE_3__["WeeklyClassesPage"]
    }
];
let WeeklyClassesPageRoutingModule = class WeeklyClassesPageRoutingModule {
};
WeeklyClassesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WeeklyClassesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-clasesSemanales-weekly-classes-weekly-classes-module.js.map