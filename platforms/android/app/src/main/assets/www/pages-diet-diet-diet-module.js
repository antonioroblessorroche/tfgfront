(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-diet-diet-diet-module"],{

/***/ "EGEY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/diet/diet/diet.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Diets diet\"></app-header>\n\n<ion-content>\n   <div class=\"ion-text-center ion-margin-bottom ion-margin-top\">\n       <h3>Desliza para ver las opciones</h3>\n   </div>\n\n    <ion-card *ngFor=\"let diet of diets\">\n        <ion-item-sliding>\n            <ion-item-options side=\"start\" >\n              <ion-item-option routerLink=\"/diet-detail/{{diet.id}}\">\n                <ion-icon name=\"eye\" slot=\"icon-only\">\n                </ion-icon>  \n    \n              </ion-item-option>\n              \n            </ion-item-options>\n        \n            <ion-item>\n              <ion-label>{{diet.user}} : {{diet.day}}/{{diet.month}}/{{diet.year}}</ion-label>\n            </ion-item>\n        \n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"warning\" routerLink=\"/edit-diet/{{diet.id}}\">\n                    <ion-icon name=\"create\" slot=\"icon-only\" >\n                    </ion-icon>  \n                </ion-item-option>\n                <ion-item-option color=\"danger\" (click)=\"deleteConfirm(diet.id)\">\n                    <ion-icon name=\"trash\" slot=\"icon-only\" >\n                    </ion-icon>  \n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-card>\n\n   \n    <div class=\"ion-text-center ion-margin-top\">\n        <!-- <h3>Desliza para ver las opciones</h3> -->\n        <ion-button expand=\"block\" color=\"success\" routerLink=\"/new-diet\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label> Crear dieta</ion-label>\n        </ion-button>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "NYew":
/*!************************************************!*\
  !*** ./src/app/pages/diet/diet/diet.module.ts ***!
  \************************************************/
/*! exports provided: DietPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPageModule", function() { return DietPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _diet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diet-routing.module */ "yfoP");
/* harmony import */ var _diet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diet.page */ "TOam");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DietPageModule = class DietPageModule {
};
DietPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _diet_routing_module__WEBPACK_IMPORTED_MODULE_5__["DietPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_diet_page__WEBPACK_IMPORTED_MODULE_6__["DietPage"]]
    })
], DietPageModule);



/***/ }),

/***/ "TOam":
/*!**********************************************!*\
  !*** ./src/app/pages/diet/diet/diet.page.ts ***!
  \**********************************************/
/*! exports provided: DietPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPage", function() { return DietPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_diet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./diet.page.html */ "EGEY");
/* harmony import */ var _diet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diet.page.scss */ "XgRu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_diet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/diet.service */ "KrSI");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");








let DietPage = class DietPage {
    constructor(dietService, router, toastController, alertController, tokenService) {
        this.dietService = dietService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.tokenService = tokenService;
        this.diets = [];
        this.user = "";
    }
    ngOnInit() {
        this.cargar();
        console.log(this.diets);
    }
    ionViewWillEnter() {
        this.cargar();
        console.log(this.diets);
    }
    cargar() {
        if (this.tokenService.getAuthorities().length > 1) {
            this.dietService.lista(0).subscribe(data => {
                this.diets = data.content;
                console.log(this.diets);
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        else {
            this.user = this.tokenService.getUsername();
            this.dietService.findByUser(this.user).subscribe(data => {
                this.diets = data.content;
                console.log(this.diets);
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
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
        this.dietService.delete(id).subscribe(data => {
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
DietPage.ctorParameters = () => [
    { type: src_app_services_diet_service__WEBPACK_IMPORTED_MODULE_6__["DietService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }
];
DietPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
DietPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-diet',
        template: _raw_loader_diet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_diet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DietPage);



/***/ }),

/***/ "XgRu":
/*!************************************************!*\
  !*** ./src/app/pages/diet/diet/diet.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWV0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "yfoP":
/*!********************************************************!*\
  !*** ./src/app/pages/diet/diet/diet-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DietPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPageRoutingModule", function() { return DietPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _diet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diet.page */ "TOam");




const routes = [
    {
        path: '',
        component: _diet_page__WEBPACK_IMPORTED_MODULE_3__["DietPage"]
    }
];
let DietPageRoutingModule = class DietPageRoutingModule {
};
DietPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DietPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-diet-diet-diet-module.js.map