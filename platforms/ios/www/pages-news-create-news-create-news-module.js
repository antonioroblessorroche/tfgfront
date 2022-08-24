(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-create-news-create-news-module"],{

/***/ "E6Zt":
/*!************************************************************!*\
  !*** ./src/app/pages/news/create-news/create-news.page.ts ***!
  \************************************************************/
/*! exports provided: CreateNewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsPage", function() { return CreateNewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-news.page.html */ "Umwg");
/* harmony import */ var _create_news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-news.page.scss */ "IjYK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/news */ "eegR");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");








let CreateNewsPage = class CreateNewsPage {
    constructor(service, router, activatedRoute, toastController, alertController) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.news = new src_app_models_news__WEBPACK_IMPORTED_MODULE_6__["News"](null, '', '', 0);
    }
    ngOnInit() {
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
    onCreate() {
        this.crear();
    }
    volver() {
        this.router.navigate(['/list-news']);
    }
    crear() {
        this.news.date = new Date().getTime();
        this.service.nuevo(this.news).subscribe(data => {
            console.log(data);
            this.presentToast('Creada nueva noticia');
            this.volver();
        }, err => {
            this.presentToast('No pudo crearse noticia.');
        });
    }
};
CreateNewsPage.ctorParameters = () => [
    { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_7__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CreateNewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-news',
        template: _raw_loader_create_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateNewsPage);



/***/ }),

/***/ "IjYK":
/*!**************************************************************!*\
  !*** ./src/app/pages/news/create-news/create-news.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtbmV3cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "L2DN":
/*!**********************************************************************!*\
  !*** ./src/app/pages/news/create-news/create-news-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CreateNewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsPageRoutingModule", function() { return CreateNewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-news.page */ "E6Zt");




const routes = [
    {
        path: '',
        component: _create_news_page__WEBPACK_IMPORTED_MODULE_3__["CreateNewsPage"]
    }
];
let CreateNewsPageRoutingModule = class CreateNewsPageRoutingModule {
};
CreateNewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateNewsPageRoutingModule);



/***/ }),

/***/ "Umwg":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/create-news/create-news.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Nueva noticia\"></app-header>\n\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\">\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-item>\n        <ion-label>Titulo: </ion-label>\n        <ion-input required placeholder=\"Título de la noticia\" name=\"nombre\" [(ngModel)]=\"news.title\"></ion-input>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Contenido: </ion-label>\n        <!-- <ion-textarea rows=\"30\" placeholder=\"Anotaciones sobre el usuario...\" [(ngModel)]=\"profile.comments\"></ion-textarea> -->\n\n        <ion-textarea rows=\"20\" required placeholder=\"Contenido de la noticia\" name=\"description\" [(ngModel)]=\"news.description\"></ion-textarea>\n    </ion-item>\n\n\n\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"add-circle\">  </ion-icon>\n              Crear\n               </ion-button>\n       </div>\n       \n    </ion-list>\n   \n</form>\n\n</ion-content>\n");

/***/ }),

/***/ "eegR":
/*!********************************!*\
  !*** ./src/app/models/news.ts ***!
  \********************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
class News {
    constructor(id, title, description, date) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.date = date;
    }
}


/***/ }),

/***/ "jaMa":
/*!**************************************************************!*\
  !*** ./src/app/pages/news/create-news/create-news.module.ts ***!
  \**************************************************************/
/*! exports provided: CreateNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewsPageModule", function() { return CreateNewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-news-routing.module */ "L2DN");
/* harmony import */ var _create_news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-news.page */ "E6Zt");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let CreateNewsPageModule = class CreateNewsPageModule {
};
CreateNewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_news_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateNewsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_create_news_page__WEBPACK_IMPORTED_MODULE_6__["CreateNewsPage"]]
    })
], CreateNewsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-news-create-news-create-news-module.js.map