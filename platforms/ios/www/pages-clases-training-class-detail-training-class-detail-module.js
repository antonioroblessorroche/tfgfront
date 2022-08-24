(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clases-training-class-detail-training-class-detail-module"],{

/***/ "3U0k":
/*!****************************************************!*\
  !*** ./src/app/models/trainingClassReservation.ts ***!
  \****************************************************/
/*! exports provided: TrainingClassReservation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassReservation", function() { return TrainingClassReservation; });
class TrainingClassReservation {
    constructor(user, classId, classTime, className) {
        this.user = user;
        this.classId = classId;
        this.time = classTime;
        this.userFullName = className;
    }
}


/***/ }),

/***/ "LL1j":
/*!************************************************************************************!*\
  !*** ./src/app/pages/clases/training-class-detail/training-class-detail.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1jbGFzcy1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "cMP+":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/clases/training-class-detail/training-class-detail-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: TrainingClassDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassDetailPageRoutingModule", function() { return TrainingClassDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _training_class_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-class-detail.page */ "jREv");




const routes = [
    {
        path: '',
        component: _training_class_detail_page__WEBPACK_IMPORTED_MODULE_3__["TrainingClassDetailPage"]
    }
];
let TrainingClassDetailPageRoutingModule = class TrainingClassDetailPageRoutingModule {
};
TrainingClassDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainingClassDetailPageRoutingModule);



/***/ }),

/***/ "dv9k":
/*!************************************************************************************!*\
  !*** ./src/app/pages/clases/training-class-detail/training-class-detail.module.ts ***!
  \************************************************************************************/
/*! exports provided: TrainingClassDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassDetailPageModule", function() { return TrainingClassDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _training_class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-class-detail-routing.module */ "cMP+");
/* harmony import */ var _training_class_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training-class-detail.page */ "jREv");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let TrainingClassDetailPageModule = class TrainingClassDetailPageModule {
};
TrainingClassDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _training_class_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainingClassDetailPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_training_class_detail_page__WEBPACK_IMPORTED_MODULE_6__["TrainingClassDetailPage"]]
    })
], TrainingClassDetailPageModule);



/***/ }),

/***/ "jREv":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/clases/training-class-detail/training-class-detail.page.ts ***!
  \**********************************************************************************/
/*! exports provided: TrainingClassDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassDetailPage", function() { return TrainingClassDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_training_class_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./training-class-detail.page.html */ "qrOf");
/* harmony import */ var _training_class_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-class-detail.page.scss */ "LL1j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_trainingClassReservation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/trainingClassReservation */ "3U0k");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/trainingclass.service */ "GTnE");









let TrainingClassDetailPage = class TrainingClassDetailPage {
    constructor(trainingClassService, activatedRoute, router, toastController, tokenService) {
        this.trainingClassService = trainingClassService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastController = toastController;
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.cargar();
    }
    reservar() {
        const classId = this.activatedRoute.snapshot.params.id;
        const userName = this.tokenService.getUsername();
        this.trainingClassService.reservar(new src_app_models_trainingClassReservation__WEBPACK_IMPORTED_MODULE_6__["TrainingClassReservation"](userName, classId, 0, "")).subscribe(data => {
            this.presentToast('Clase reservada!');
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
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
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.trainingClassService.detalle(id).subscribe(data => {
            console.log(id);
            console.log(data);
            this.trainingClass = data;
            this.trainingClass.date = new Date(this.trainingClass.timeStart).toLocaleTimeString();
        }, err => {
            this.volver();
        });
    }
    volver() {
        const redirectUrtl = this.tokenService.getAuthorities.length > 1 ? '/classes' : '/classes';
        this.router.navigate([redirectUrtl]);
    }
    eliminarReserva() {
        const classId = this.activatedRoute.snapshot.params.id;
        const userName = this.tokenService.getUsername();
        this.trainingClassService.deleteReservation(this.trainingClass.reservationId).subscribe(data => {
            this.presentToast('Reserva eliminada!');
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
};
TrainingClassDetailPage.ctorParameters = () => [
    { type: src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_8__["TrainingClassService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }
];
TrainingClassDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-training-class-detail',
        template: _raw_loader_training_class_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_training_class_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TrainingClassDetailPage);



/***/ }),

/***/ "qrOf":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clases/training-class-detail/training-class-detail.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases\"></app-header>\n<ion-content *ngIf=\"trainingClass\">\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>{{trainingClass.name}}\n            </ion-card-title>\n            <ion-card-subtitle>{{trainingClass.date}} <ion-text color=\"danger\" *ngIf=\"trainingClass.available==false\">\n                    (No disponible) </ion-text>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-justify\">\n            {{trainingClass.comments}}\n            <ion-text color=\"danger\" *ngIf=\"trainingClass.available==false\"> <br> No quedan plazas disponibles\n            </ion-text>\n        </ion-card-content>\n    </ion-card>\n    <ion-content *ngIf=\"!trainingClass.reservationId\">\n        <div class=\"ion-padding\">\n            <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"reservar()\">\n                <ion-icon name=\"add-circle\"> </ion-icon>\n                &nbsp; Inscribeme!\n            </ion-button>\n        </div>\n        <div class=\"ion-padding\">\n            <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\">\n                <ion-icon name=\"arrow-back-circle\"> </ion-icon>\n                &nbsp; Volver\n            </ion-button>\n        </div>\n    </ion-content>\n    <ion-content *ngIf=\"trainingClass.reservationId\">\n        <div class=\"ion-padding\">\n            <ion-button color=\"danger\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"eliminarReserva()\">\n                <ion-icon name=\"close-circle\"> </ion-icon>\n                &nbsp; Eliminar reserva!\n            </ion-button>\n        </div>\n        <div class=\"ion-padding\">\n            <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" (click)=\"volver()\">\n                <ion-icon name=\"arrow-back-circle\"> </ion-icon>\n                &nbsp; Volver\n            </ion-button>\n        </div>\n    </ion-content>\n</ion-content>\n\n<ion-content *ngIf=\"!trainingClass\">\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-card-title>\n            <ion-card-subtitle>\n                <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-justify\">\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-clases-training-class-detail-training-class-detail-module.js.map