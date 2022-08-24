(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-diet-new-diet-new-diet-module"],{

/***/ "TyVP":
/*!********************************************************!*\
  !*** ./src/app/pages/diet/new-diet/new-diet.module.ts ***!
  \********************************************************/
/*! exports provided: NewDietPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDietPageModule", function() { return NewDietPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _new_diet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-diet-routing.module */ "t8VS");
/* harmony import */ var _new_diet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-diet.page */ "w/+1");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let NewDietPageModule = class NewDietPageModule {
};
NewDietPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_diet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewDietPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_new_diet_page__WEBPACK_IMPORTED_MODULE_6__["NewDietPage"]]
    })
], NewDietPageModule);



/***/ }),

/***/ "Z1dv":
/*!********************************!*\
  !*** ./src/app/models/diet.ts ***!
  \********************************/
/*! exports provided: Diet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diet", function() { return Diet; });
class Diet {
    constructor(description, comments, user, year, month, day) {
        this.description = description;
        this.comments = comments;
        this.user = user;
        this.year = year;
        this.month = month;
        this.day = day;
    }
}


/***/ }),

/***/ "ecx9":
/*!********************************************************!*\
  !*** ./src/app/pages/diet/new-diet/new-diet.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctZGlldC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "t8VS":
/*!****************************************************************!*\
  !*** ./src/app/pages/diet/new-diet/new-diet-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NewDietPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDietPageRoutingModule", function() { return NewDietPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _new_diet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-diet.page */ "w/+1");




const routes = [
    {
        path: '',
        component: _new_diet_page__WEBPACK_IMPORTED_MODULE_3__["NewDietPage"]
    }
];
let NewDietPageRoutingModule = class NewDietPageRoutingModule {
};
NewDietPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewDietPageRoutingModule);



/***/ }),

/***/ "vCBF":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/diet/new-diet/new-diet.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nuevo diet\"></app-header>\n\n<ion-content>\n\n    <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n            <ion-list-header lines=\"full\">\n              <ion-label>\n                Rellenar nuevo registro\n              </ion-label>\n            </ion-list-header>\n            <ion-item>\n              <ion-label>Fecha</ion-label>\n              <ion-datetime displayFormat=\"D MMM YYYY\" max=\"2100\" min=\"2015\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label>Description:</ion-label>\n              <ion-input required placeholder=\"Descripción\" name=\"name\" [(ngModel)]=\"description\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Comentarios: </ion-label>\n              <ion-input required placeholder=\"Comentarios\" name=\"comments\" [(ngModel)]=\"comments\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>User</ion-label>\n              <ionic-selectable item-content [items]=\"users\" itemValueField=\"id\" itemTextField=\"nombre\" [canSearch]=\"true\" (onChange)=\"userChange($event)\">\n              </ionic-selectable>\n            </ion-item>\n\n\n            <div class=\"ion-padding\">\n                <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n                    <ion-icon name=\"add-circle\">  </ion-icon>\n                    Crear\n                     </ion-button>\n             </div>\n             <div class=\"ion-padding\">\n                <ion-button color=\"secondary\" expand=\"block\" (click)=\"vaciar()\" class=\"ion-no-margin\"> \n                    <ion-icon name=\"refresh-circle\">  </ion-icon>\n                    Reset\n                     </ion-button>\n             </div>\n          </ion-list>\n         \n    </form>\n\n    <div class=\"ion-text-center\">\n        <ion-label position=\"floating\">\n            <ion-text color=\"danger\">\n                *\n            </ion-text> Campos obligatorios\n        </ion-label>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "w/+1":
/*!******************************************************!*\
  !*** ./src/app/pages/diet/new-diet/new-diet.page.ts ***!
  \******************************************************/
/*! exports provided: NewDietPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDietPage", function() { return NewDietPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_new_diet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./new-diet.page.html */ "vCBF");
/* harmony import */ var _new_diet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-diet.page.scss */ "ecx9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_diet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/diet */ "Z1dv");
/* harmony import */ var src_app_services_diet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/diet.service */ "KrSI");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");









let NewDietPage = class NewDietPage {
    constructor(dietService, router, toastController, userService) {
        this.dietService = dietService;
        this.router = router;
        this.toastController = toastController;
        this.userService = userService;
        this.userId = '';
        this.description = '';
        this.comments = '';
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.users = [];
        this.msgOk = '';
        this.msgKo = '';
    }
    ngOnInit() {
        this.setTodayDate();
        this.userService.lista().subscribe(data => {
            this.users = data;
        }, err => {
            this.presentToast("Error recuperndo usuarios: ");
        });
    }
    setTodayDate() {
        var today = new Date();
        this.day = today.getDate();
        this.month = today.getMonth() + 1;
        this.year = today.getFullYear();
    }
    onCreate() {
        this.diet = new src_app_models_diet__WEBPACK_IMPORTED_MODULE_6__["Diet"](this.description, this.comments, this.userId, this.year, this.month, this.day);
        this.dietService.nuevo(this.diet).subscribe(data => {
            this.presentToast('Creada dieta');
            this.vaciar();
            this.volver();
        }, err => {
            this.presentToast(err.error.mensaje);
        });
    }
    userChange(event) {
        this.userId = event.value.id;
    }
    vaciar() {
        this.description = '';
        this.comments = '';
        this.userId = '';
        this.setTodayDate();
    }
    volver() {
        this.router.navigate(['/admin-diet']);
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
NewDietPage.ctorParameters = () => [
    { type: src_app_services_diet_service__WEBPACK_IMPORTED_MODULE_7__["DietService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
NewDietPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-diet',
        template: _raw_loader_new_diet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_new_diet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewDietPage);



/***/ })

}]);
//# sourceMappingURL=pages-diet-new-diet-new-diet-module.js.map