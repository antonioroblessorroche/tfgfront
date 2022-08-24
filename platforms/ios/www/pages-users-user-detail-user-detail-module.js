(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-user-detail-user-detail-module"],{

/***/ "299q":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/user-detail/user-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function() { return UserDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-detail-routing.module */ "H/wz");
/* harmony import */ var _user_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-detail.page */ "hHfM");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let UserDetailPageModule = class UserDetailPageModule {
};
UserDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDetailPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_user_detail_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailPage"]]
    })
], UserDetailPageModule);



/***/ }),

/***/ "H/wz":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/user-detail/user-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageRoutingModule", function() { return UserDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-detail.page */ "hHfM");




const routes = [
    {
        path: '',
        component: _user_detail_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailPage"]
    }
];
let UserDetailPageRoutingModule = class UserDetailPageRoutingModule {
};
UserDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDetailPageRoutingModule);



/***/ }),

/***/ "OfhF":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/user-detail/user-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Perfil de usuario\"></app-header>\n\n\n   \n\n\n\n\n\n    <!-- <ion-item>\n        <ion-segment (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"profile\">\n                <ion-label>Perfil</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"measures\">\n                <ion-label>Mediciones</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"goals\">\n                <ion-label>Objetivos</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-item> -->\n    <ion-content *ngIf=\"profile\">\n\n      <!-- <ion-item class='ion-padding'>\n        <ion-avatar slot=\"start\">\n          <img src=\"https://es.gravatar.com/userimage/196648361/6547f10b6d19e0502a7c4ed4fcc2ccca.jpg\">\n        </ion-avatar>\n           <ion-label> {{profile.nombreUsuario}} </ion-label>\n      </ion-item> -->\n      <ion-item>\n    <ion-row>\n        <ion-col col-9>\n           \n                <ion-segment (ionChange)=\"segmentChanged($event)\">\n                    <ion-segment-button value=\"profile\">\n                        <ion-label>Perfil</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"comments\">\n                        <ion-label>Observaciones</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"payments\">\n                        <ion-label>Pagos</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n            \n    \n        </ion-col>\n        <ion-col col-3>\n                <ion-button expand=\"block\" color=\"success\" (click)=\"actualizar()\" *ngIf=\"selector != 'payments'\" >\n                    <ion-label>Actualizar</ion-label>\n                </ion-button>\n                <ion-button expand=\"block\" color=\"success\" routerLink=\"/new-user-payment/{{profile.id}}\" *ngIf=\"selector == 'payments'\" >\n                <ion-label>Añadir pago usuario</ion-label>\n            </ion-button>\n        </ion-col>\n       \n    </ion-row>\n</ion-item>\n      \n\n    <ion-content *ngIf=\"selector == 'profile'\">\n      \n        <ion-item>\n            <ion-label position=\"stacked\">Nombre completo</ion-label>\n            <ion-input placeholder=\"Nombre completo\" [(ngModel)]=\"profile.nombre\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre de usuario</ion-label>\n            <ion-input placeholder=\"Nombre completo\" [(ngModel)]=\"profile.nombreUsuario\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Tarifa</ion-label>\n            <ion-input  *ngIf=\"!currentFare\" >Sin tarifa asociada</ion-input>\n            <ion-input  *ngIf=\"currentFare\" >{{currentFare.name}} ({{currentFare.amount}}€)</ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label >Realizar cambio de tarifa</ion-label>\n              <!-- <ion-input placeholder=\"Fecha de nacimiento\"></ion-input> -->\n              <!-- <ion-input></ion-input> -->\n              <ionic-selectable\n                [(ngModel)]=\"profile.fareId\"\n                  [items]=\"fares\"\n                  itemValueField=\"id\"\n                  itemTextField=\"name\"\n                  [canSearch]=\"true\"\n                  (onChange)=\"selectFareId($event)\">\n              </ionic-selectable>\n          </ion-item>\n\n          <ion-item>\n            <ion-checkbox color=\"success\" expand=\"block\" [(ngModel)]=\"profile.admin\" [ngModelOptions]=\"{standalone: true}\">Administrador</ion-checkbox>\n            <ion-label style=\"margin-left: 15px\">Administrador</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-checkbox color=\"danger\" expand=\"block\" (ionChange)=\"changeActive($event.detail.checked)\" [(ngModel)]=\"profile.active\" [ngModelOptions]=\"{standalone: true}\">Activo</ion-checkbox>\n            <ion-label style=\"margin-left: 15px\">Activo</ion-label>\n          </ion-item>\n\n    </ion-content>\n\n    <ion-content *ngIf=\"selector == 'comments'\">\n        <ion-item>\n          <ion-textarea rows=\"30\" placeholder=\"Anotaciones sobre el usuario...\" [(ngModel)]=\"profile.comments\"></ion-textarea>\n          </ion-item>\n    </ion-content>\n\n    <ion-content *ngIf=\"selector == 'payments' && payments\">\n        <ion-list *ngFor=\"let payment of payments\">\n            <ion-item-sliding>\n                <!-- <ion-item-options side=\"start\" >\n                   <ion-item-option routerLink=\"/edit-weekly-classes/{{workout.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option> \n                  \n                 </ion-item-options> -->\n            \n                <ion-item>\n                  <ion-label>{{payment.month}}/{{payment.year}}: {{payment.amount}}€ ({{payment.method}})\n                  </ion-label>\n                </ion-item>\n            \n            </ion-item-sliding>\n        </ion-list>\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n              loadingSpinner=\"bubbles\"\n              loadingText=\"Loading more data...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n  </ion-content>\n\n    <!-- <ion-item> \n        <ion-button expand=\"block\" color=\"success\" (click)=\"actualizar()\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label>Actualizar</ion-label>\n        </ion-button>\n    </ion-item> -->\n\n</ion-content>\n\n");

/***/ }),

/***/ "hHfM":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/user-detail/user-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPage", function() { return UserDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-detail.page.html */ "OfhF");
/* harmony import */ var _user_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail.page.scss */ "ukvs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_userpaymen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/userpaymen.service */ "IMz1");










let UserDetailPage = class UserDetailPage {
    constructor(userService, fareService, userPaymentService, router, activatedRoute, toastController, alertController, tokenService, modalController) {
        this.userService = userService;
        this.fareService = fareService;
        this.userPaymentService = userPaymentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.tokenService = tokenService;
        this.modalController = modalController;
        this.fares = [];
        this.payments = [];
        this.user = "";
        this.selector = "profile";
    }
    ngOnInit() {
        // this.page = 0;
        // this.cargarFares();
        // this.cargar();
    }
    ionViewWillEnter() {
        this.payments = [];
        this.page = 0;
        this.cargarFares();
        this.cargar();
        this.cargarPayments();
    }
    loadData(event) {
        event.target.disabled = false;
        this.cargarPaymentsByUser(event);
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    cargarPaymentsByUser(event) {
        event.target.disabled = false;
        console.log("Event donete");
        const id = this.activatedRoute.snapshot.params.id;
        this.userPaymentService.listaByUser(this.page, id).subscribe(data => {
            console.log(data);
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.payments.push(data.content[i]);
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
    changeActive(event) {
        this.profile.active = event;
        this.profile.activationRejected = false;
    }
    changeAdmin(event) {
        this.profile.admin = event;
    }
    cargarPayments() {
        const id = this.activatedRoute.snapshot.params.id;
        this.userPaymentService.listaByUser(this.page, id).subscribe(data => {
            console.log(data);
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.payments.push(data.content[i]);
                }
                this.page += 1;
            }
            else {
                // event.target.disabled = true;
            }
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    cargarFares() {
        this.fareService.lista(100).subscribe(data => {
            this.fares = data.content;
        }, err => {
            console.log(err);
            this.presentToast('Error cargando tarifas');
        });
    }
    selectFareId(event) {
        this.profile.fareId = event.value.id;
        for (let i = 0; i < this.fares.length; i++) {
            if (this.profile.fareId == this.fares[i].id) {
                this.currentFare = this.fares[i];
            }
        }
    }
    segmentChanged($event) {
        this.selector = $event.detail.value;
        console.log($event.detail.value);
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        // if (this.tokenService.getAuthorities().length > 1) {
        this.userService.userdataById(id).subscribe(data => {
            this.profile = data;
            for (let i = 0; i < this.fares.length; i++) {
                if (this.profile.fareId == this.fares[i].id) {
                    this.currentFare = this.fares[i];
                }
            }
        }, err => {
            console.log("petó");
            console.log(err);
        });
        // }
        //  else {
        //   this.user = this.tokenService.getUsername();
        //   this.profileService.findByUser(this.user).subscribe(
        //     data => {
        //       this.profiles = data.content;
        //       console.log(this.profiles);
        //     },
        //     err => {
        //       console.log("petó");
        //       console.log(err);
        //     }
        //   );
        // }
    }
    actualizar() {
        const id = this.activatedRoute.snapshot.params.id;
        this.userService.actualizar(this.profile.id, this.profile).subscribe(data => {
            this.presentToast("Usuario actualizado correctamente");
        }, err => {
            this.presentToast("Error actualizando usuario");
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
};
UserDetailPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_6__["FareService"] },
    { type: src_app_services_userpaymen_service__WEBPACK_IMPORTED_MODULE_9__["UserPaymentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
UserDetailPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
UserDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-detail',
        template: _raw_loader_user_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserDetailPage);



/***/ }),

/***/ "ukvs":
/*!***************************************************************!*\
  !*** ./src/app/pages/users/user-detail/user-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-users-user-detail-user-detail-module.js.map