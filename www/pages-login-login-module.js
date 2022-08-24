(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Login\"></app-header>\n\n<ion-content *ngIf=\"!isLogged\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onLogin()\" novalidate>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n            <ion-list-header lines=\"full\">\n              <ion-label>\n               Inicio de sesión\n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label>Usuario: <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required placeholder=\"Nombre de usuario\" name=\"nombreUsuario\" [(ngModel)]=\"nombreUsuario\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Password: <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input required type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" name=\"description\"></ion-input>\n              </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"log-in\">  </ion-icon>\n                    Acceder\n                     </ion-button>\n             </div>\n          </ion-list>\n         \n    </form>\n\n    <div class=\"ion-text-center\">\n        <ion-label position=\"floating\" (click)=\"presentRetrievePass()\">\n         ¿Olvidaste la contraseña?\n        </ion-label>\n    </div>\n    <ion-item-divider>\n    </ion-item-divider>\n\n    <!-- <div class=\"ion-text-center ion-padding ion-marging-top\">\n        <h4>¿No tienes cuenta?</h4>\n        <ion-button color=\"tertiary\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" routerLink=\"/register\"> \n            <ion-icon name=\"person-add\">  </ion-icon>\n            Crear cuenta\n         </ion-button>\n    </div> -->\n</ion-content>\n\n<ion-content *ngIf=\"isLogged\">\n  <div class=\"ion-text-center ion-margin-top ion-padding\">\n    <ion-text color=\"primary\"><h2>Sesion ya iniciada</h2></ion-text>\n      <ion-divider></ion-divider>\n      <ion-button color=\"tertiary\" expand=\"block\" class=\"ion-no-margin\" (click)=\"logOut()\"> \n        <ion-icon name=\"log-out\">  </ion-icon>\n        Cerrar sesion\n     </ion-button>\n   </div>\n</ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_login_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/login-usuario */ "mljW");
/* harmony import */ var src_app_models_nuevo_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/nuevo-usuario */ "Clqk");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");










let LoginPage = class LoginPage {
    constructor(authService, tokenService, toastController, alertController, router) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.nombreUsuario = '';
        this.password = '';
        this.errMesg = 'Error al iniciar sesión';
        this.isLogged = false;
    }
    ngOnInit() {
        this.testLogged();
    }
    ionViewWillEnter() {
        this.testLogged();
        this.vaciar();
    }
    vaciar() {
        this.nombreUsuario = '';
        this.password = '';
    }
    onLogin() {
        this.loginUsuario = new src_app_models_login_usuario__WEBPACK_IMPORTED_MODULE_6__["LoginUsuario"](this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe(data => {
            this.tokenService.setToken(data.token);
            this.tokenService.setUsername(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.isLogged = true;
            this.router.navigate(['/']);
        }, err => {
            // this.errMesg = err.error.message;
            this.presentToast();
        });
    }
    presentRetrievePass() {
        this.presentAlertPrompt();
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Recuperar contraseña',
                message: 'Se le enviará un correo electrónico con la nueva contraseña.',
                inputs: [
                    {
                        name: 'mail',
                        type: 'email',
                        placeholder: 'Correo electrónico'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Confirmar',
                        handler: (alertData) => {
                            this.sendNewPass(alertData.mail);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    sendNewPass(mail) {
        let userVar = new src_app_models_nuevo_usuario__WEBPACK_IMPORTED_MODULE_7__["NuevoUsuario"](null, null, mail, null);
        this.authService.newPass(userVar).subscribe(data => {
            console.log(data.mensaje);
            this.presentToastMsg(data.mensaje);
        }, err => {
            console.log(err);
            this.presentToastMsg(err.mensaje);
        });
    }
    presentToastMsg(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.errMesg,
                duration: 2000
            });
            toast.present();
        });
    }
    logOut() {
        this.tokenService.logOut();
        this.isLogged = false;
    }
    testLogged() {
        this.isLogged = this.tokenService.getToken() != null;
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_9__["TokenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "mljW":
/*!*****************************************!*\
  !*** ./src/app/models/login-usuario.ts ***!
  \*****************************************/
/*! exports provided: LoginUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsuario", function() { return LoginUsuario; });
class LoginUsuario {
    constructor(nombreUsuario, password) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map