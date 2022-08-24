(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-new-user-payment-new-user-payment-module"],{

/***/ "JJXV":
/*!***************************************!*\
  !*** ./src/app/models/userPayment.ts ***!
  \***************************************/
/*! exports provided: UserPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPayment", function() { return UserPayment; });
class UserPayment {
    constructor(id, userId, amount, year, month, method) {
        this.id = id;
        this.userId = userId;
        this.amount = amount;
        this.year = year;
        this.month = month;
        this.method = method;
    }
}


/***/ }),

/***/ "LlMs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/new-user-payment/new-user-payment.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nuevo pago de usuario\"></app-header>\n\n<ion-content *ngIf=\"profile && fare\">\n<ion-content >\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Nuevo pago de usuario\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label position = \"stacked\">Usuario:</ion-label>\n        <ion-input readonly>{{profile.nombre}}</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position = \"stacked\">Tarifa a aplicar:</ion-label>\n        <ion-input readonly>{{fare.name}} ({{fare.amount}}€)</ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position = \"stacked\">Cantidad abonada: </ion-label>\n        <ion-input [(ngModel)]=\"amount\" [ngModelOptions]=\"{standalone: true}\" step=\".01\"></ion-input>\n    </ion-item>\n\n      <ion-item>\n        <ion-label position = \"stacked\">Metodo de pago</ion-label>\n        <ion-select required [(ngModel)]=\"method\" [ngModelOptions]=\"{standalone: true}\" #mySelect [value]=\"method\" [selectedText]=\"method\" (ionChange)=\"selectChanged(mySelect.value)\">\n          <ion-select-option *ngFor=\"let paymeth of methods\" [selected]=\"paymeth === method\">{{ paymeth }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position = \"stacked\">Fecha</ion-label>\n        <ion-datetime displayFormat=\"MMM YYYY\" max=\"2100\" min=\"2015\" [(ngModel)]=\"date\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeDate($event)\" ></ion-datetime>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Formalizar pago\n               </ion-button>\n              </div>\n            </ion-list>\n            \n          </form>\n        </ion-content >\n\n</ion-content>");

/***/ }),

/***/ "XWsn":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users/new-user-payment/new-user-payment.page.ts ***!
  \***********************************************************************/
/*! exports provided: NewUserPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserPaymentPage", function() { return NewUserPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_user_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-user-payment.page.html */ "LlMs");
/* harmony import */ var _new_user_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-user-payment.page.scss */ "oZIe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_userPayment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/userPayment */ "JJXV");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_userpaymen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/userpaymen.service */ "IMz1");










let NewUserPaymentPage = class NewUserPaymentPage {
    constructor(userService, fareService, paymentSerice, router, activatedRoute, toastController, alertController) {
        this.userService = userService;
        this.fareService = fareService;
        this.paymentSerice = paymentSerice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.date = (new Date()).toISOString();
        this.day = new Date().getDate();
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        this.methods = ["Efectivo", "Tarjeta", "Transferencia bancaria", "Bizum", "Paypal", "Otro"];
        this.isExpense = true;
        this.isIncome = false;
        this.name = '';
        this.description = '';
    }
    ngOnInit() {
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        // if (this.tokenService.getAuthorities().length > 1) {
        this.userService.userdataById(id).subscribe(data => {
            this.profile = data;
            this.cargarfare(data.fareId);
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    cargarfare(id) {
        this.fareService.detalle(id).subscribe(data => {
            this.fare = data;
            this.amount = data.amount;
        }, err => {
            console.log(err);
        });
    }
    changeIncome(event) {
        if (!event) {
            this.isIncome = false;
            this.isExpense = true;
        }
        else {
            this.isIncome = true;
            this.isExpense = false;
        }
    }
    changeExpense(event) {
        if (event) {
            this.isIncome = false;
            this.isExpense = true;
        }
        else {
            this.isIncome = true;
            this.isExpense = false;
        }
    }
    onCreate() {
        if (!this.method) {
            this.presentToast('Se necesita especificar el método de pago');
        }
        else {
            const id = this.activatedRoute.snapshot.params.id;
            var payment = new src_app_models_userPayment__WEBPACK_IMPORTED_MODULE_6__["UserPayment"](null, id, this.amount, this.year, this.month, this.method);
            console.log(payment);
            this.paymentSerice.nuevo(payment).subscribe(data => {
                this.presentToast('Pago completado con éxito');
                this.volver(id);
            }, err => {
                this.presentToast(err.error);
            });
        }
    }
    selectChanged(selected) {
        if (selected === 'Otro') {
            this.inputCustomValue();
        }
        else {
            this.method = selected;
        }
        ;
    }
    ;
    inputCustomValue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputAlert = yield this.alertController.create({
                header: 'Otro método de pago:',
                inputs: [{ type: 'text', placeholder: 'Otro método de pago' }],
                buttons: [{ text: 'Cancelar' }, { text: 'OK', handler: (data) => { console.log(data); this.method = data[0]; } }]
            });
            inputAlert.onDidDismiss(
            // (data) => {
            //   let customColorName: string = data.data.values[0];
            //   if (customColorName) {
            //     let indexFound = this.colors.findIndex(color => color === customColorName)
            //     if (indexFound === -1) {
            //       this.colors.push(customColorName);
            //       this.currentColor = customColorName;
            //     } else {
            //       this.currentColor = this.colors[indexFound];
            //     };
            //   };      
            // }
            );
            yield inputAlert.present();
        });
    }
    ;
    volver(id) {
        this.router.navigate(['/user-detail/' + id]);
    }
    changeDate(event) {
        var date = new Date(event.detail.value);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
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
NewUserPaymentPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_7__["FareService"] },
    { type: src_app_services_userpaymen_service__WEBPACK_IMPORTED_MODULE_9__["UserPaymentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
NewUserPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-user-payment',
        template: _raw_loader_new_user_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_user_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewUserPaymentPage);



/***/ }),

/***/ "jS+F":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/users/new-user-payment/new-user-payment-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: NewUserPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserPaymentPageRoutingModule", function() { return NewUserPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_user_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-user-payment.page */ "XWsn");




const routes = [
    {
        path: '',
        component: _new_user_payment_page__WEBPACK_IMPORTED_MODULE_3__["NewUserPaymentPage"]
    }
];
let NewUserPaymentPageRoutingModule = class NewUserPaymentPageRoutingModule {
};
NewUserPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewUserPaymentPageRoutingModule);



/***/ }),

/***/ "oZIe":
/*!*************************************************************************!*\
  !*** ./src/app/pages/users/new-user-payment/new-user-payment.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdXNlci1wYXltZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "q7tw":
/*!*************************************************************************!*\
  !*** ./src/app/pages/users/new-user-payment/new-user-payment.module.ts ***!
  \*************************************************************************/
/*! exports provided: NewUserPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserPaymentPageModule", function() { return NewUserPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_user_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-user-payment-routing.module */ "jS+F");
/* harmony import */ var _new_user_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-user-payment.page */ "XWsn");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let NewUserPaymentPageModule = class NewUserPaymentPageModule {
};
NewUserPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_user_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewUserPaymentPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_new_user_payment_page__WEBPACK_IMPORTED_MODULE_6__["NewUserPaymentPage"]]
    })
], NewUserPaymentPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-users-new-user-payment-new-user-payment-module.js.map