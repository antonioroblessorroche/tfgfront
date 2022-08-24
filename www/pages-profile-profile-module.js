(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "723k":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "x0XS");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "uxLX");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "Aso2":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let ProfileService = class ProfileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.profileUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/profile/';
    }
    detalle(id) {
        return this.httpClient.get(this.profileUrl + id);
    }
    findByUser(user) {
        return this.httpClient.get(this.profileUrl + '?username=' + user);
    }
    nuevo(profile) {
        return this.httpClient.post(this.profileUrl, profile);
    }
    actualizar(id, profile) {
        return this.httpClient.put(this.profileUrl + id, profile);
    }
    delete(id) {
        return this.httpClient.delete(this.profileUrl + id);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "EGjV":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VVTS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Mi perfil\"></app-header>\n\n<ion-content *ngIf=\"profile\">\n\n      <ion-item *ngIf=\"!isAdmin\">\n        <ion-segment  (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"profile\">\n            <ion-label>Perfil</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"payments\">\n            <ion-label>Pagos</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"notes\">\n            <ion-label>Notas</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-item>\n\n      <ion-item  *ngIf=\"isAdmin\">\n      <ion-segment (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"profile\">\n          <ion-label>Perfil</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"notes\">\n          <ion-label>Notas</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-item>\n\n    <ion-content *ngIf=\"selector == 'profile'\">\n\n      <ion-list-header>Datos de usuario</ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"stacked\">Nombre completo</ion-label>\n            <ion-row>\n              <ion-input placeholder=\"Nombre completo\" readonly [(ngModel)]=\"profile.nombre\"></ion-input>\n              <ion-button (click)=\"presentNewName()\">Editar</ion-button>\n            </ion-row>\n\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Nombre de usuario</ion-label>\n            <ion-row>\n            <ion-input placeholder=\"Nombre de usuario\" readonly [(ngModel)]=\"profile.nombreUsuario\"></ion-input>\n            <ion-button (click)=\"presentNewUser()\">Editar</ion-button>\n          </ion-row>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Correo electrónico</ion-label>\n            <ion-row>\n            <ion-input placeholder=\"Correo electrónico\" readonly [(ngModel)]=\"profile.email\"></ion-input>\n            <ion-button (click)=\"presentNewMail()\">Editar</ion-button>\n          </ion-row>\n          </ion-item>\n\n          <ion-item *ngIf=\"!isAdmin\">\n            <ion-label position=\"stacked\">Tarifa actual</ion-label>\n            <ion-input placeholder=\"Tarifa actual\" readonly [(ngModel)]=\"currentFare\"></ion-input>\n          </ion-item>\n\n          <ion-list-header>Seguridad</ion-list-header>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Contraseña</ion-label>\n            <ion-row>\n            <ion-input readonly >Credenciales</ion-input>\n            <ion-button (click)=\"presentNewPass()\" >Modificar contraseña</ion-button>\n          </ion-row>\n          </ion-item>\n\n          <!-- <ion-item>\n            <ion-label position = \"stacked\">Metodo de pago</ion-label>\n            <ion-select required [(ngModel)]=\"method\" [ngModelOptions]=\"{standalone: true}\" #mySelect [value]=\"method\" [selectedText]=\"method\" (ionChange)=\"selectChanged(mySelect.value)\">\n              <ion-select-option *ngFor=\"let paymeth of methods\" [selected]=\"paymeth === method\">{{ paymeth }}</ion-select-option>\n            </ion-select>\n          </ion-item> -->\n    </ion-content>\n    \n    <ion-content *ngIf=\"selector == 'notes'\">\n      <ion-item>\n        <ion-textarea rows=\"25\" placeholder=\"Anotaciones...\" [(ngModel)]=\"profile.userComments\"></ion-textarea>\n      </ion-item>\n        <ion-button expand=\"block\" color=\"success\"  (click)=\"addComments()\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label>Actualizar</ion-label>\n        </ion-button>\n\n  </ion-content>\n\n    <ion-content *ngIf=\"selector == 'payments' && payments\">\n      <ion-list *ngFor=\"let payment of payments\">\n          <ion-item-sliding>\n              <ion-item>\n                <ion-label>{{payment.month}}/{{payment.year}}: {{payment.amount}}€ ({{payment.method}})\n                </ion-label>\n              </ion-item>\n          </ion-item-sliding>\n      </ion-list>\n\n      <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  </ion-content>\n\n   <ion-content *ngIf=\"selector == 'payments' && !payments\">\n    <ion-title>No existen pagos.</ion-title>\n  </ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "uxLX":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "VVTS");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "EGjV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/profile.service */ "Aso2");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_userpaymen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/userpaymen.service */ "IMz1");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");












let ProfilePage = class ProfilePage {
    constructor(userService, profileService, router, toastController, alertController, fareService, userPaymentService, tokenService, authService) {
        this.userService = userService;
        this.profileService = profileService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.fareService = fareService;
        this.userPaymentService = userPaymentService;
        this.tokenService = tokenService;
        this.authService = authService;
        this.payments = [];
        this.isAdmin = false;
        this.user = "";
        this.selector = "profile";
    }
    ngOnInit() {
        // this.isLogged = this.tokenService
        // this.cargar();
    }
    ionViewWillEnter() {
        this.isAdmin = this.tokenService.getAuthorities().length > 1;
        this.page = 0;
        this.cargar();
    }
    cargar() {
        this.cargarUser(this.tokenService.getUsername());
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
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
        this.userPaymentService.listaByUser(this.page, this.profile.id).subscribe(data => {
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
    cargarUser(username) {
        console.log(username);
        this.profileService.findByUser(username).subscribe(data => {
            console.log('Userdata: ' + data);
            this.profile = data;
            if (!this.isAdmin) {
                this.currentFare = data.fare.name + ' (' + data.fare.amount + '€)';
                this.cargarPayments();
            }
        }, err => {
            console.log(err);
        });
    }
    cargarPayments() {
        this.userPaymentService.listaByUser(this.page, this.profile.id).subscribe(data => {
            console.log(data);
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.payments.push(data.content[i]);
                }
                this.page += 1;
            }
            else {
                this.payments = null;
            }
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    presentNewPass() {
        this.presentNewPassPrompt();
    }
    presentNewMail() {
        this.presentNewMailPrompt();
    }
    presentNewUser() {
        this.presentNewUserPrompt();
    }
    presentNewName() {
        this.presentNewNamePrompt();
    }
    presentNewMailPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Modificar mail',
                message: 'Establecer nuevo correo electrónico para alertas',
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
                            if (this.validateEmail(alertData.mail)) {
                                this.changeMail(alertData.mail);
                            }
                            else {
                                this.presentToast('Email no válido');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    validateEmail(input) {
        return input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }
    presentNewUserPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Modificar nombre de usuario',
                message: 'Establecer nuevo nombre de usuario para inicio de sesión',
                inputs: [
                    {
                        name: 'username',
                        type: 'text',
                        placeholder: 'Nombre de usuario'
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
                            this.changeUser(alertData.username);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentNewNamePrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Modificar nombre',
                message: 'Establecer nuevo nombre completo',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Nombre completo'
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
                            this.changeName(alertData.name);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addComments() {
        this.authService.addComments(this.profile).subscribe(data => {
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    changeUser(user) {
        if (user == '') {
            this.presentToast('El nombre no puede ser vacío');
        }
        else {
            this.profile.nombreUsuario = user;
            this.authService.newUsername(this.profile).subscribe(data => {
                this.presentToast(data.mensaje);
                this.cargar();
            }, err => {
                this.presentToast(err.error.mensaje);
            });
        }
    }
    changeMail(mail) {
        if (mail == '') {
            this.presentToast('El mail no puede ser vacío');
        }
        else {
            this.profile.email = mail;
            this.authService.newMail(this.profile).subscribe(data => {
                this.presentToast(data.mensaje);
                this.cargar();
            }, err => {
                this.presentToast(err.error.mensaje);
            });
        }
    }
    changeName(name) {
        if (name == '') {
            this.presentToast('El nombre no puede ser vacío');
        }
        else {
            this.profile.nombre = name;
            this.authService.newName(this.profile).subscribe(data => {
                this.presentToast(data.mensaje);
                this.cargar();
            }, err => {
                this.presentToast(err.error.mensaje);
            });
        }
    }
    presentNewPassPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Nueva contraseña',
                message: 'Establecer nueva contraseña de acceso al sistema',
                inputs: [
                    {
                        name: 'newpass',
                        type: 'password',
                        placeholder: 'Nueva contraseña'
                    },
                    {
                        name: 'newpassconfirm',
                        type: 'password',
                        placeholder: 'Repetir contraseña'
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
                            this.validateAndChangePass(alertData.newpass, alertData.newpassconfirm);
                        }
                    }
                ]
            });
            yield alert.present();
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
    validateAndChangePass(newpass, newpassconfirm) {
        if (newpass != newpassconfirm) {
            this.presentToast('Las contraseñas introducidas no coinciden. No se cambiará la contraseña.');
        }
        else {
            if (newpass.length < 8) {
                this.presentToast('La contraseña debe tener al menos 8 caracteres');
            }
            else {
                this.profile.creds = newpass;
                this.authService.cambioPass(this.profile).subscribe(data => {
                    this.presentToast(data.mensaje);
                }, err => {
                    this.presentToast(err.error.mensaje);
                });
            }
        }
    }
    segmentChanged($event) {
        this.selector = $event.detail.value;
        console.log($event.detail.value);
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
        this.profileService.delete(id).subscribe(data => {
            this.presentToast('Item borrado correctamente');
            // this.cargar();
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
ProfilePage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_6__["FareService"] },
    { type: src_app_services_userpaymen_service__WEBPACK_IMPORTED_MODULE_10__["UserPaymentService"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
];
ProfilePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "x0XS":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "uxLX");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map