(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-list-news-list-news-module"],{

/***/ "QRIL":
/*!**********************************************************!*\
  !*** ./src/app/pages/news/list-news/list-news.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW5ld3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "itui":
/*!******************************************************************!*\
  !*** ./src/app/pages/news/list-news/list-news-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ListNewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsPageRoutingModule", function() { return ListNewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-news.page */ "r2rb");




const routes = [
    {
        path: '',
        component: _list_news_page__WEBPACK_IMPORTED_MODULE_3__["ListNewsPage"]
    }
];
let ListNewsPageRoutingModule = class ListNewsPageRoutingModule {
};
ListNewsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListNewsPageRoutingModule);



/***/ }),

/***/ "n9LZ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/news/list-news/list-news.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Comunicación\"></app-header>\n\n<div *ngIf=\"isAdmin\" class=\"ion-text-center ion-margin-top\">\n  <!-- <h3>Desliza para ver las opciones</h3> -->\n  <ion-button expand=\"block\" color=\"success\" routerLink=\"/create-news\">\n      <ion-icon name=\"add-circle\"></ion-icon>\n      <ion-label> Nueva noticia</ion-label>\n  </ion-button>\n</div>\n\n<ion-content>\n   <ion-list *ngFor=\"let news of allNews\">\n       <ion-card>\n           <!-- <ion-item-options side=\"start\" > \n              <ion-item-option routerLink=\"/detail-news/{{news.id}}\"> \n                <ion-icon name=\"eye\" slot=\"icon-only\"> \n               </ion-icon>  \n              </ion-item-option>\n           </ion-item-options>  -->\n       \n           <!-- <ion-item> -->\n            <ion-card-header>\n              <ion-card-subtitle>{{news.parsedDate}}</ion-card-subtitle>\n             <ion-card-title>{{news.title}}</ion-card-title>\n               \n             </ion-card-header>\n\n             <ion-card-content>\n             {{news.description}}\n            </ion-card-content>\n           <!-- </ion-item> -->\n<!--        \n           <ion-item-options *ngIf=\"isAdmin\" side=\"end\">\n               <ion-item-option color=\"danger\" (click)=\"deleteConfirm(news.id)\">\n                   <ion-icon name=\"trash\" slot=\"icon-only\" >\n                   </ion-icon>  \n               </ion-item-option>\n           </ion-item-options> -->\n       </ion-card>\n   </ion-list>\n\n   <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n");

/***/ }),

/***/ "r2rb":
/*!********************************************************!*\
  !*** ./src/app/pages/news/list-news/list-news.page.ts ***!
  \********************************************************/
/*! exports provided: ListNewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsPage", function() { return ListNewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-news.page.html */ "n9LZ");
/* harmony import */ var _list_news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-news.page.scss */ "QRIL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");








let ListNewsPage = class ListNewsPage {
    constructor(service, router, activatedRoute, toastController, alertController, tokenService) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.tokenService = tokenService;
        this.isAdmin = false;
        this.allNews = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.page = 0;
        this.cargar();
        this.page += 1;
        this.isAdmin = this.tokenService.getAuthorities().length > 1;
    }
    cargar() {
        this.service.lista(this.page).subscribe(data => {
            this.allNews = data.content;
            for (let i = 0; i < this.allNews.length; i++) {
                this.allNews[i].parsedDate = this.formatDate(this.allNews[i].date);
            }
        }, err => {
            console.log(err);
        });
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    cargarData(event) {
        event.target.disabled = false;
        this.service.lista(this.page).subscribe(data => {
            console.log(data);
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.allNews.push(data.content[i]);
                }
                this.page += 1;
            }
            else {
                event.target.complete();
            }
        }, err => {
            console.log("petó");
            console.log(err);
        });
    }
    loadData(event) {
        event.target.disabled = false;
        this.cargarData(event);
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
};
ListNewsPage.ctorParameters = () => [
    { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"] }
];
ListNewsPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
ListNewsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-news',
        template: _raw_loader_list_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListNewsPage);



/***/ }),

/***/ "uRgp":
/*!**********************************************************!*\
  !*** ./src/app/pages/news/list-news/list-news.module.ts ***!
  \**********************************************************/
/*! exports provided: ListNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsPageModule", function() { return ListNewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_news_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-news-routing.module */ "itui");
/* harmony import */ var _list_news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-news.page */ "r2rb");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ListNewsPageModule = class ListNewsPageModule {
};
ListNewsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_news_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListNewsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_list_news_page__WEBPACK_IMPORTED_MODULE_6__["ListNewsPage"]]
    })
], ListNewsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-news-list-news-list-news-module.js.map