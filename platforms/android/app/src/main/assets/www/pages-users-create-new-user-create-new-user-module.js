(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-create-new-user-create-new-user-module"],{

/***/ "/csN":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/users/create-new-user/create-new-user-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateNewUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewUserPageRoutingModule", function() { return CreateNewUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_new_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-new-user.page */ "zb/l");




const routes = [
    {
        path: '',
        component: _create_new_user_page__WEBPACK_IMPORTED_MODULE_3__["CreateNewUserPage"]
    }
];
let CreateNewUserPageRoutingModule = class CreateNewUserPageRoutingModule {
};
CreateNewUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateNewUserPageRoutingModule);



/***/ }),

/***/ "6UVj":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/create-new-user/create-new-user.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtbmV3LXVzZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "RCtR":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/create-new-user/create-new-user.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Alta de usuario\"></app-header>\n\n<ion-content>\n    <form #f=\"ngForm\" (ngSubmit)=\"onRegister()\" novalidate>\n        <ion-list >\n            <ion-item>\n              <ion-label>Nombre: <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required placeholder=\"Nombre completo\" name=\"nombre\" [(ngModel)]=\"nombre\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Email: <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"email\" placeholder=\"Correo electrónico\" name=\"email\" [(ngModel)]=\"email\" email [ngModelOptions]=\"{standalone: true}\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-checkbox color=\"danger\" expand=\"block\" (ionChange)=\"changeActive($event.detail.checked)\" [(ngModel)]=\"active\" [ngModelOptions]=\"{standalone: true}\">Activo</ion-checkbox>\n                <ion-label style=\"margin-left: 15px\">Activo</ion-label>\n              </ion-item>\n              <!-- <ion-item>\n                <ion-checkbox color=\"success\" expand=\"block\" (ionChange)=\"changeGuest($event.detail.checked)\" [(ngModel)]=\"guest\" [ngModelOptions]=\"{standalone: true}\">Guest</ion-checkbox>\n                <ion-label style=\"margin-left: 15px\">Invitado</ion-label>\n              </ion-item> -->\n              <ion-item *ngIf=\"active\">\n                  <ion-label >Tarifa</ion-label>\n                  <ionic-selectable\n                    [(ngModel)]=\"fareId\"\n                    [ngModelOptions]=\"{standalone: true}\"\n                      [items]=\"fares\"\n                      itemValueField=\"id\"\n                      itemTextField=\"name\"\n                      [canSearch]=\"true\"\n                      (onChange)=\"selectFareId($event)\">\n                  </ionic-selectable>\n              </ion-item>\n\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"person-add\">  </ion-icon>\n                    Registrar usuario\n                     </ion-button>\n             </div>\n             \n          </ion-list>\n         \n    </form>\n\n    <!-- <div class=\"ion-text-center\">\n        <ion-label position=\"floating\">\n            <ion-text color=\"danger\">\n                *\n            </ion-text> Campos obligatorios\n        </ion-label>\n    </div> -->\n\n\n    \n</ion-content>\n");

/***/ }),

/***/ "sQa4":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/create-new-user/create-new-user.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateNewUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewUserPageModule", function() { return CreateNewUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_new_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-new-user-routing.module */ "/csN");
/* harmony import */ var _create_new_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-new-user.page */ "zb/l");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let CreateNewUserPageModule = class CreateNewUserPageModule {
};
CreateNewUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_new_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateNewUserPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_create_new_user_page__WEBPACK_IMPORTED_MODULE_6__["CreateNewUserPage"]]
    })
], CreateNewUserPageModule);



/***/ }),

/***/ "zb/l":
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/create-new-user/create-new-user.page.ts ***!
  \*********************************************************************/
/*! exports provided: CreateNewUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewUserPage", function() { return CreateNewUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_new_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-new-user.page.html */ "RCtR");
/* harmony import */ var _create_new_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-new-user.page.scss */ "6UVj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_nuevo_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/nuevo-usuario */ "Clqk");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");










let CreateNewUserPage = class CreateNewUserPage {
    constructor(authService, tokenService, toastController, router, fareService) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.toastController = toastController;
        this.router = router;
        this.fareService = fareService;
        this.nombre = '';
        this.email = '';
        this.nombreUsuario = '';
        this.password = '';
        this.errMesg = 'Error al crear usuario';
        this.okMsg = 'Usuario creado correctamente';
        this.active = true;
        this.guest = false;
        this.fares = [];
        this.isLogged = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.vaciar();
        this.cargarFares();
    }
    changeActive(event) {
        this.active = event;
        this.guest = false;
        console.log(event);
    }
    changeGuest(event) {
        this.active = false;
        this.guest = event;
        console.log(event);
    }
    onRegister() {
        this.nuevoUsuario = new src_app_models_nuevo_usuario__WEBPACK_IMPORTED_MODULE_6__["NuevoUsuario"](this.nombre, 'DUMMY', this.email, 'DUMMY');
        this.nuevoUsuario.fareId = this.fareId;
        this.authService.registroByAdmin(this.nuevoUsuario).subscribe(data => {
            this.presentToast(this.okMsg);
            this.vaciar();
            this.router.navigate(['/list-users']);
        }, err => {
            this.presentToast(this.errMesg);
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
        this.fareId = event.value.id;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    vaciar() {
        this.nombre = '';
        this.email = '';
        this.nombreUsuario = '';
        this.password = '';
    }
    logOut() {
        this.tokenService.logOut();
        this.isLogged = false;
    }
    testLogged() {
        this.isLogged = this.tokenService.getToken() != null;
    }
};
CreateNewUserPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_8__["FareService"] }
];
CreateNewUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-new-user',
        template: _raw_loader_create_new_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_new_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateNewUserPage);



/***/ })

}]);
//# sourceMappingURL=pages-users-create-new-user-create-new-user-module.js.map