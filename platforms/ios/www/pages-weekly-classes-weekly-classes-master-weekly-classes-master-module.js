(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-weekly-classes-master-weekly-classes-master-module"],{

/***/ "/mm3":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-master/weekly-classes-master-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: WeeklyClassesMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesMasterPageRoutingModule", function() { return WeeklyClassesMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekly-classes-master.page */ "pw+N");




const routes = [
    {
        path: '',
        component: _weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_3__["WeeklyClassesMasterPage"]
    }
];
let WeeklyClassesMasterPageRoutingModule = class WeeklyClassesMasterPageRoutingModule {
};
WeeklyClassesMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WeeklyClassesMasterPageRoutingModule);



/***/ }),

/***/ "C97e":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-master/weekly-classes-master.module.ts ***!
  \********************************************************************************************/
/*! exports provided: WeeklyClassesMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesMasterPageModule", function() { return WeeklyClassesMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _weekly_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekly-classes-master-routing.module */ "/mm3");
/* harmony import */ var _weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weekly-classes-master.page */ "pw+N");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let WeeklyClassesMasterPageModule = class WeeklyClassesMasterPageModule {
};
WeeklyClassesMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _weekly_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeeklyClassesMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesMasterPage"]]
    })
], WeeklyClassesMasterPageModule);



/***/ }),

/***/ "RZi/":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/weekly-classes-master/weekly-classes-master.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Gestion de Clases Semanales\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-top\">\n      \n    </div>\n\n    \n    <ion-searchbar searchIcon=\"search\" \n      animated\n      cancel-button-icon\n      (ionCancel)=\"hideSearch()\"\n      (search)=\"getWorkouts()\"\n      (ionChange)=\"setSearchValue($event.target.value)\"\n      placeholder=\"Buscar clases semanales maestras\">\n    </ion-searchbar>\n\n    \n    <ion-row>\n      <ion-col col-6> \n        <ion-button (click)=\"getWorkouts()\" expand=\"block\">\n          <ion-icon name=\"search\"></ion-icon>\n           Buscar    \n        </ion-button>\n        \n      </ion-col>\n    \n      <ion-col col-6>\n       <ion-button expand=\"block\" color=\"success\" (click)=\"createNew()\"> \n        <!-- aqui llamar a crear clase y recargar -->\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label> Crear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-content> -->\n        <ion-list *ngFor=\"let workout of trainingClass\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\" >\n                   <ion-item-option routerLink=\"/new-weekly-classes-master/{{workout.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option>\n                  \n                </ion-item-options>\n            \n                <ion-item>\n                  <ion-label>{{workout.name}}</ion-label>\n                </ion-item>\n            \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" (click)=\"deleteConfirm(workout.id)\">\n                        <ion-icon name=\"trash\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n        \n\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      <!-- </ion-content> -->\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "hhVN":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-master/weekly-classes-master.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWVrbHktY2xhc3Nlcy1tYXN0ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "pw+N":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/weekly-classes-master/weekly-classes-master.page.ts ***!
  \******************************************************************************************/
/*! exports provided: WeeklyClassesMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesMasterPage", function() { return WeeklyClassesMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weekly_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weekly-classes-master.page.html */ "RZi/");
/* harmony import */ var _weekly_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly-classes-master.page.scss */ "hhVN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/weekly-classes-master-service.service */ "UZcu");







let WeeklyClassesMasterPage = class WeeklyClassesMasterPage {
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
        this.classService.listaMaster(0).subscribe(data => {
            this.trainingClass = data.content;
        }, err => {
            this.volver();
        });
    }
    createNew() {
        this.classService.generarMaster().subscribe(data => {
            //  this.name = data.name;
            //  this.description = data.description
            //  this.classMaster = data;
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
            this.classService.listaByNameMaster(0, this.searchValue).subscribe(data => {
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
        this.classService.listaMaster(this.page).subscribe(data => {
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
        this.classService.deleteMaster(id).subscribe(data => {
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
WeeklyClassesMasterPage.ctorParameters = () => [
    { type: src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesMasterServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
WeeklyClassesMasterPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
WeeklyClassesMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weekly-classes-master',
        template: _raw_loader_weekly_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_weekly_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WeeklyClassesMasterPage);



/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-weekly-classes-master-weekly-classes-master-module.js.map