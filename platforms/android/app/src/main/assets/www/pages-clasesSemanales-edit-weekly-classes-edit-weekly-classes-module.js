(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clasesSemanales-edit-weekly-classes-edit-weekly-classes-module"],{

/***/ "5zUT":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes.page.ts ***!
  \***************************************************************************************/
/*! exports provided: EditWeeklyClassesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWeeklyClassesPage", function() { return EditWeeklyClassesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_weekly_classes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-weekly-classes.page.html */ "mYkj");
/* harmony import */ var _edit_weekly_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-weekly-classes.page.scss */ "tGJe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/weekly-classes-master-service.service */ "UZcu");







let EditWeeklyClassesPage = class EditWeeklyClassesPage {
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
        this.classService.detalle(id).subscribe(data => {
            this.class = data;
            this.name = data.name;
            this.description = data.description;
        }, err => {
            this.volver();
        });
    }
    actualizar() {
        this.class.name = this.name;
        this.class.description = this.description;
        this.classService.actualizarMaster(this.class.id, this.class).subscribe(data => {
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
EditWeeklyClassesPage.ctorParameters = () => [
    { type: src_app_services_weekly_classes_master_service_service__WEBPACK_IMPORTED_MODULE_6__["WeeklyClassesMasterServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditWeeklyClassesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-weekly-classes',
        template: _raw_loader_edit_weekly_classes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_weekly_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditWeeklyClassesPage);



/***/ }),

/***/ "BHNe":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditWeeklyClassesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWeeklyClassesPageRoutingModule", function() { return EditWeeklyClassesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_weekly_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-weekly-classes.page */ "5zUT");




const routes = [
    {
        path: '',
        component: _edit_weekly_classes_page__WEBPACK_IMPORTED_MODULE_3__["EditWeeklyClassesPage"]
    }
];
let EditWeeklyClassesPageRoutingModule = class EditWeeklyClassesPageRoutingModule {
};
EditWeeklyClassesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditWeeklyClassesPageRoutingModule);



/***/ }),

/***/ "KOiO":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditWeeklyClassesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWeeklyClassesPageModule", function() { return EditWeeklyClassesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_weekly_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-weekly-classes-routing.module */ "BHNe");
/* harmony import */ var _edit_weekly_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-weekly-classes.page */ "5zUT");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let EditWeeklyClassesPageModule = class EditWeeklyClassesPageModule {
};
EditWeeklyClassesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_weekly_classes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditWeeklyClassesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_edit_weekly_classes_page__WEBPACK_IMPORTED_MODULE_6__["EditWeeklyClassesPage"]]
    })
], EditWeeklyClassesPageModule);



/***/ }),

/***/ "mYkj":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases Semanales\"></app-header>\n\n<ion-content>\n\n    <ion-content *ngIf=\"class\">\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\n        <ion-list-header lines=\"full\">\n          <ion-label>\n            Edicion de clases semanales\n          </ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Nombre:</ion-label>\n          <ion-input required placeholder=\"Nombre de la clase\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Descripcion: </ion-label>\n            <ion-input required placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n        </ion-item>\n\n         <ion-item button routerLink=\"/detail-daily-class/{{class.monday}}\">\n            <ion-label>Lunes</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/detail-daily-class/{{class.tuesday}}\">\n            <ion-label>Martes</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/detail-daily-class/{{class.wednesday}}\">\n            <ion-label>Miercoles</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/detail-daily-class/{{class.thursday}}\">\n            <ion-label>Jueves</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/detail-daily-class/{{class.friday}}\">\n            <ion-label>Viernes</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/detail-daily-class/{{class.saturday}}\">\n            <ion-label>Sabado</ion-label>\n          </ion-item>\n          <ion-item button routerLink=\"/detail-daily-class/{{class.sunday}}\">\n            <ion-label>Domingo</ion-label>\n          </ion-item>\n\n      </ion-list>\n\n\n      <div class=\"ion-padding\">\n        <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\" (click)=\"actualizar()\"> \n            <ion-icon name=\"create\">  </ion-icon>\n            Editar\n             </ion-button>\n     </div>\n     <!-- <div class=\"ion-padding\">\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n            <ion-icon name=\"refresh-circle\">  </ion-icon>\n            Reset\n             </ion-button>\n     </div> -->\n     \n  </form>\n\n  </ion-content>\n  \n  <ion-content *ngIf=\"!class\">\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-card-title>\n            <ion-card-subtitle>\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-justify\">\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "tGJe":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXdlZWtseS1jbGFzc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-clasesSemanales-edit-weekly-classes-edit-weekly-classes-module.js.map