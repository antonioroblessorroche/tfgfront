(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekly-classes-new-weekly-classes-master-new-weekly-classes-master-module"],{

/***/ "1rWu":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master.page.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctd2Vla2x5LWNsYXNzZXMtbWFzdGVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "L/1N":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master.page.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases Semanales\"></app-header>\n\n<ion-content>\n\n    \n\n\n         \n\n    <ion-content *ngIf=\"classMaster\">\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\n        <ion-list-header lines=\"full\">\n          <ion-label>\n            Edicion de clases semanales maestras\n          </ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Nombre:</ion-label>\n          <ion-input required placeholder=\"Nombre de la clase\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Descripcion: </ion-label>\n            <ion-input required placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n        </ion-item>\n\n         <ion-item button routerLink=\"/daily-classes-master/{{classMaster.monday}}\">\n            <ion-label>Lunes</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/daily-classes-master/{{classMaster.tuesday}}\">\n            <ion-label>Martes</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/daily-classes-master/{{classMaster.wednesday}}\">\n            <ion-label>Miercoles</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/daily-classes-master/{{classMaster.thursday}}\">\n            <ion-label>Jueves</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/daily-classes-master/{{classMaster.friday}}\">\n            <ion-label>Viernes</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/daily-classes-master/{{classMaster.saturday}}\">\n            <ion-label>Sabado</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/daily-classes-master/{{classMaster.sunday}}\">\n            <ion-label>Domingo</ion-label>\n          </ion-item>\n\n      </ion-list>\n\n\n      <div class=\"ion-padding\">\n        <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\" (click)=\"actualizar()\"> \n            <ion-icon name=\"create\">  </ion-icon>\n            Editar\n             </ion-button>\n     </div>\n     <!-- <div class=\"ion-padding\">\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n            <ion-icon name=\"refresh-circle\">  </ion-icon>\n            Reset\n             </ion-button>\n     </div> -->\n     \n  </form>\n\n  </ion-content>\n  \n  <ion-content *ngIf=\"!trainingClass\">\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-card-title>\n            <ion-card-subtitle>\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-justify\">\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "fmDx":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: NewWeeklyClassesMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWeeklyClassesMasterPage", function() { return NewWeeklyClassesMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_weekly_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-weekly-classes-master.page.html */ "L/1N");
/* harmony import */ var _new_weekly_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-weekly-classes-master.page.scss */ "1rWu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/weekly-classes-master-service.service */ "UZcu");







let NewWeeklyClassesMasterPage = class NewWeeklyClassesMasterPage {
    constructor(classService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.classService.detalleMaster(id).subscribe(data => {
            this.classMaster = data;
            this.name = data.name;
            this.description = data.description;
        }, err => {
            this.volver();
        });
    }
    actualizar() {
        this.classMaster.name = this.name;
        this.classMaster.description = this.description;
        this.classService.actualizarMaster(this.classMaster.id, this.classMaster).subscribe(data => {
            this.presentToast("Clase maestra actualizada correctamente");
        }, err => {
            this.presentToast("No fue posible actualizar la clase maestra");
        });
        this.volver();
    }
    volver() {
        this.router.navigate(['/weekly-classes-master']);
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
NewWeeklyClassesMasterPage.ctorParameters = () => [
    { type: src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesMasterServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
NewWeeklyClassesMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-weekly-classes-master',
        template: _raw_loader_new_weekly_classes_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_weekly_classes_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewWeeklyClassesMasterPage);



/***/ }),

/***/ "o1rx":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: NewWeeklyClassesMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWeeklyClassesMasterPageRoutingModule", function() { return NewWeeklyClassesMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-weekly-classes-master.page */ "fmDx");




const routes = [
    {
        path: '',
        component: _new_weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_3__["NewWeeklyClassesMasterPage"]
    }
];
let NewWeeklyClassesMasterPageRoutingModule = class NewWeeklyClassesMasterPageRoutingModule {
};
NewWeeklyClassesMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewWeeklyClassesMasterPageRoutingModule);



/***/ }),

/***/ "tFRo":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: NewWeeklyClassesMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewWeeklyClassesMasterPageModule", function() { return NewWeeklyClassesMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_weekly_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-weekly-classes-master-routing.module */ "o1rx");
/* harmony import */ var _new_weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-weekly-classes-master.page */ "fmDx");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let NewWeeklyClassesMasterPageModule = class NewWeeklyClassesMasterPageModule {
};
NewWeeklyClassesMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_weekly_classes_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewWeeklyClassesMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_new_weekly_classes_master_page__WEBPACK_IMPORTED_MODULE_6__["NewWeeklyClassesMasterPage"]]
    })
], NewWeeklyClassesMasterPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-weekly-classes-new-weekly-classes-master-new-weekly-classes-master-module.js.map