(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arobles/TFG/front/frontJwt/src/main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "AabN");
/* harmony import */ var _menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component.scss */ "nfPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");






let MenuComponent = class MenuComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    ngOnInit() {
        this.testLogged();
    }
    logOut() {
        this.tokenService.logOut();
        this.isLogged = false;
        this.isAdmin = false;
        this.router.navigate(['/login']);
    }
    testLogged() {
        this.isLogged = this.tokenService.getToken() != null;
        this.isAdmin = this.tokenService.getAuthorities().length > 1;
        this.username = this.tokenService.getUsername();
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuComponent);



/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "yxfS");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "oHuE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "AabN":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" swipeGesture=\"false\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"/\">\n          <ion-icon name = \"home\" slot = \"start\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/admin\">\n          <ion-icon name = \"fitness\" slot = \"start\"></ion-icon>\n          <ion-label>Entrenamientos</ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/master-training-centers\">\n          <ion-icon name = \"compass\" slot = \"start\"></ion-icon>\n          <ion-label>Gestion de Centros</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/fares-list\">\n          <ion-icon name = \"logo-euro\" slot = \"start\"></ion-icon>\n          <ion-label>Gestion de Tarifas</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/expenses-list\">\n          <ion-icon name = \"calculator\" slot = \"start\"></ion-icon>\n          <ion-label>Gastos e ingresos</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- <ion-menu-toggle *ngIf=\"isLogged && !isAdmin\">\n        <ion-item routerLink=\"/user\">\n          <ion-icon name = \"fitness\" slot = \"start\"></ion-icon>\n          <ion-label>Entrenamientos</ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <!-- <ion-menu-toggle *ngIf=\"isLogged && !isAdmin\">\n        <ion-item routerLink=\"/admin-diet\">\n          <ion-icon name = \"nutrition\" slot = \"start\"></ion-icon>\n          <ion-label>Dietas</ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <ion-menu-toggle *ngIf=\"isLogged && !isAdmin\">\n        <ion-item routerLink=\"/search-daily-class\">\n          <ion-icon name = \"body\" slot = \"start\"></ion-icon>\n          <ion-label>Clases</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/weekly-classes\">\n          <ion-icon name = \"calendar\" slot = \"start\"></ion-icon>\n          <ion-label>Clases Semanales</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/admin-class-master\">\n          <ion-icon name = \"fitness\" slot = \"start\"></ion-icon>\n          <ion-label>Gestion de Clases</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/weekly-classes-master\">\n          <ion-icon name = \"repeat\" slot = \"start\"></ion-icon>\n          <ion-label>Gestion Semanal de Clases</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/new-workout\">\n          <ion-icon name = \"add-circle\" slot = \"start\"></ion-icon>\n          <ion-label>Nuevo workout</ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <!-- <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/admin-diet\">\n          <ion-icon name = \"nutrition\" slot = \"start\"></ion-icon>\n          <ion-label>Dietas</ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <ion-menu-toggle *ngIf=\"isLogged\">\n        <ion-item routerLink=\"/list-news\">\n          <ion-icon slot = \"start\" name=\"newspaper-outline\"></ion-icon>\n          <ion-label>Comunicacion</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/list-users\">\n          <ion-icon name=\"people\" slot = \"start\"></ion-icon>\n          <ion-label>Usuarios</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <!-- <ion-menu-toggle *ngIf=\"isLogged && isAdmin\">\n        <ion-item routerLink=\"/new-diet\">\n          <ion-icon name = \"add-circle\" slot = \"start\"></ion-icon>\n          <ion-label>Nueva dieta</ion-label>\n        </ion-item>\n      </ion-menu-toggle> -->\n\n      <ion-menu-toggle *ngIf=\"!isLogged\">\n        <ion-item routerLink=\"/login\">\n          <ion-icon name = \"log-in\" slot = \"start\"></ion-icon>\n          <ion-label>Login</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n      <ion-menu-toggle *ngIf=\"isLogged\">\n        <ion-item routerLink=\"/profile/{{username}}\">\n          <ion-icon name = \"person\" slot = \"start\"></ion-icon>\n          <ion-label>Mi perfil</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n\n\n      <ion-menu-toggle *ngIf=\"isLogged\">\n        <ion-item (click)=\"logOut()\">\n          <ion-icon name = \"log-out\" slot = \"start\"></ion-icon>\n          <ion-label>Cerrar sesion</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      \n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- <ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n  <ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-title>Custom Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu side=\"end\" type=\"push\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-title>End Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n      <ion-item>Menu Item</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"main\"></ion-router-outlet> -->");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/token.service */ "rj1t");







let AppComponent = class AppComponent {
    constructor(menuController, tokenService) {
        this.menuController = menuController;
        this.tokenService = tokenService;
        this.menuOpen = false;
        this.isAdmin = false;
    }
    ngOnInit() {
        this.isAdmin = this.tokenService.getAuthorities().length > 1;
        this.username = this.tokenService.getUsername();
    }
    toggleMenu() {
        this.menu.testLogged();
        this.menuController.toggle('first');
    }
    changeMenu() {
        this.menuOpen = !this.menuOpen;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
];
AppComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <app-menu (ionWillClose)=\"changeMenu()\" (ionWillOpen)=\"changeMenu()\"></app-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n<ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"  >\n  <ion-fab-button (click)=\"toggleMenu()\" [color]=\"menuOpen? 'danger' : 'primary'\">\n    <ion-icon [name]=\"menuOpen? 'close' : 'menu'\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n");

/***/ }),

/***/ "Xv4z":
/*!*************************************************************!*\
  !*** ./src/app/interceptors/workout-interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: WorkoutInterceptorService, interceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutInterceptorService", function() { return WorkoutInterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProvider", function() { return interceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "rj1t");




let WorkoutInterceptorService = class WorkoutInterceptorService {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.tokenService.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
WorkoutInterceptorService.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
WorkoutInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WorkoutInterceptorService);

const interceptorProvider = [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: WorkoutInterceptorService, multi: true }];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_workout_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/workout-interceptor.service */ "Xv4z");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-selectable */ "8xsl");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_10__["IonicSelectableModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _interceptors_workout_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["interceptorProvider"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ekVA":
/*!***********************************************!*\
  !*** ./src/app/guards/workout-guard.guard.ts ***!
  \***********************************************/
/*! exports provided: WorkoutGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutGuardGuard", function() { return WorkoutGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/token.service */ "rj1t");




let WorkoutGuardGuard = class WorkoutGuardGuard {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    canActivate(next, state) {
        const requiredRoles = next.data.requiredRoles;
        const actualRole = this.tokenService.getAuthorities().length > 1 ? 'admin' : 'user';
        if (!this.tokenService.getToken() || requiredRoles.indexOf(actualRole) === -1) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
};
WorkoutGuardGuard.ctorParameters = () => [
    { type: _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WorkoutGuardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkoutGuardGuard);



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "0oYm");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nfPh":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "oHuE":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button-back {\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLWJhY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "rj1t":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
let TokenService = class TokenService {
    constructor() { }
    setToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    setUsername(userName) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, userName);
    }
    getUsername() {
        return window.sessionStorage.getItem(USERNAME_KEY);
    }
    setAuthorities(authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }
    getAuthorities() {
        const roles = [];
        if (sessionStorage.getItem(AUTHORITIES_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(rol => {
                roles.push(rol);
            });
        }
        return roles;
    }
    logOut() {
        window.sessionStorage.clear();
    }
};
TokenService.ctorParameters = () => [];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/workout-guard.guard */ "ekVA");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-admin-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/admin/admin.module */ "mD57")).then(m => m.AdminPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'admin-diet',
        loadChildren: () => Promise.all(/*! import() | pages-diet-diet-diet-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-diet-diet-diet-module")]).then(__webpack_require__.bind(null, /*! ./pages/diet/diet/diet.module */ "NYew")).then(m => m.DietPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'admin-classes',
        loadChildren: () => Promise.all(/*! import() | pages-clases-admin-classes-admin-classes-modules */[__webpack_require__.e("common"), __webpack_require__.e("pages-clases-admin-classes-admin-classes-modules")]).then(__webpack_require__.bind(null, /*! ./pages/clases/admin-classes/admin-classes.modules */ "c0Q4")).then(m => m.AdminClassesPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'admin-class-master',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-admin-class-master-admin-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-admin-class-master-admin-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/admin-class-master/admin-class-master.module */ "RlOJ")).then(m => m.AdminClassMasterPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'classes',
        loadChildren: () => Promise.all(/*! import() | pages-clases-training-class-training-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clases-training-class-training-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/clases/training-class/training-class.module */ "ImS2")).then(m => m.TrainingClassPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'user',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-user-user-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-user-user-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/user/user.module */ "zZ4o")).then(m => m.UserPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | pages-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "fhSy")).then(m => m.RegisterPageModule)
    },
    {
        path: 'new-workout',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-new-workout-new-workout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-new-workout-new-workout-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/new-workout/new-workout.module */ "4vil")).then(m => m.NewWorkoutPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'new-class-master',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-new-class-master-new-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-new-class-master-new-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/new-class-master/new-class-master.module */ "oWAy")).then(m => m.NewClassMasterPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'new-diet',
        loadChildren: () => Promise.all(/*! import() | pages-diet-new-diet-new-diet-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-diet-new-diet-new-diet-module")]).then(__webpack_require__.bind(null, /*! ./pages/diet/new-diet/new-diet.module */ "TyVP")).then(m => m.NewDietPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'edit-workout/:id',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-edit-workout-edit-workout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-edit-workout-edit-workout-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/edit-workout/edit-workout.module */ "pFah")).then(m => m.EditWorkoutPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'edit-class-master/:id',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-edit-class-master-edit-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-edit-class-master-edit-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/edit-class-master/edit-class-master.module */ "9Qi1")).then(m => m.EditClassMasterPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'workout-detail/:id',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-workout-detail-workout-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-workout-detail-workout-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/workout-detail/workout-detail.module */ "10e+")).then(m => m.WorkoutDetailPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'training-class-detail/:id',
        loadChildren: () => Promise.all(/*! import() | pages-clases-training-class-detail-training-class-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clases-training-class-detail-training-class-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/clases/training-class-detail/training-class-detail.module */ "dv9k")).then(m => m.TrainingClassDetailPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'diet-detail/:id',
        loadChildren: () => Promise.all(/*! import() | pages-diet-diet-detail-diet-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-diet-diet-detail-diet-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/diet/diet-detail/diet-detail.module */ "A/In")).then(m => m.DietDetailPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'class-master-detail/:id',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-detail-class-master-detail-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-detail-class-master-detail-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/detail-class-master/detail-class-master.module */ "7MXr")).then(m => m.DetailClassMasterPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'session-detail/:id',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-session-detail-session-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-session-detail-session-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/session-detail/session-detail.module */ "rIfr")).then(m => m.SessionDetailPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'link-workout',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-link-workout-link-workout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-link-workout-link-workout-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/link-workout/link-workout.module */ "EUlx")).then(m => m.LinkWorkoutPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin'] }
    },
    {
        path: 'profile/:user',
        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "723k")).then(m => m.ProfilePageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['user', 'admin'] }
    },
    {
        path: 'mis-clases',
        loadChildren: () => Promise.all(/*! import() | pages-clases-my-classes-my-classes-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clases-my-classes-my-classes-module")]).then(__webpack_require__.bind(null, /*! ./pages/clases/my-classes/my-classes.module */ "Xz0N")).then(m => m.ClassPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['user'] }
    },
    {
        path: 'link-workout',
        loadChildren: () => Promise.all(/*! import() | pages-workouts-link-workout-link-workout-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-workouts-link-workout-link-workout-module")]).then(__webpack_require__.bind(null, /*! ./pages/workouts/link-workout/link-workout.module */ "EUlx")).then(m => m.LinkWorkoutPageModule)
    },
    {
        path: 'diet-admin',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-diet-diet-admin-diet-admin-module */ "pages-diet-diet-admin-diet-admin-module").then(__webpack_require__.bind(null, /*! ./pages/diet/diet-admin/diet-admin.module */ "CIw6")).then(m => m.DietAdminPageModule)
    },
    // {
    //   path: 'admin-class-master',
    //   loadChildren: () => import('./admin-class-master/admin-class-master.module').then( m => m.AdminClassMasterPageModule)
    // },
    // {
    //   path: 'admin-class-master',
    //   loadChildren: () => import('./admin-class-master/admin-class-master.module').then( m => m.AdminClassMasterPageModule)
    // },
    {
        path: 'new-class-master',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-new-class-master-new-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-new-class-master-new-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/new-class-master/new-class-master.module */ "oWAy")).then(m => m.NewClassMasterPageModule)
    },
    {
        path: 'detail-class-master',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-detail-class-master-detail-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-detail-class-master-detail-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/detail-class-master/detail-class-master.module */ "7MXr")).then(m => m.DetailClassMasterPageModule)
    },
    {
        path: 'edit-class-master',
        loadChildren: () => Promise.all(/*! import() | pages-class-master-edit-class-master-edit-class-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-class-master-edit-class-master-edit-class-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/class-master/edit-class-master/edit-class-master.module */ "9Qi1")).then(m => m.EditClassMasterPageModule)
    },
    {
        path: 'weekly-classes-master',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-weekly-classes-master-weekly-classes-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-weekly-classes-master-weekly-classes-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/weekly-classes-master/weekly-classes-master.module */ "C97e")).then(m => m.WeeklyClassesMasterPageModule)
    },
    {
        path: 'weekly-classes-days/:id',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-weekly-classes-days-weekly-classes-days-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-weekly-classes-days-weekly-classes-days-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/weekly-classes-days/weekly-classes-days.module */ "p0NP")).then(m => m.WeeklyClassesDaysPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'daily-classes-master/:id',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-daily-classes-master-daily-classes-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-daily-classes-master-daily-classes-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/daily-classes-master/daily-classes-master.module */ "xsc0")).then(m => m.DailyClassesMasterPageModule)
    },
    {
        path: 'new-daily-class/:id',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-new-daily-class-new-daily-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-new-daily-class-new-daily-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/new-daily-class/new-daily-class.module */ "C3mF")).then(m => m.NewDailyClassPageModule),
        canActivate: [_guards_workout_guard_guard__WEBPACK_IMPORTED_MODULE_3__["WorkoutGuardGuard"]], data: { requiredRoles: ['admin', 'user'] }
    },
    {
        path: 'detail-daily-class/:id',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-detail-daily-class-detail-daily-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-detail-daily-class-detail-daily-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/detail-daily-class/detail-daily-class.module */ "DCjl")).then(m => m.DetailDailyClassPageModule)
    },
    {
        path: 'edit-daily-class/:id/:index',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-edit-daily-class-edit-daily-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-edit-daily-class-edit-daily-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/edit-daily-class/edit-daily-class.module */ "t910")).then(m => m.EditDailyClassPageModule)
    },
    {
        path: 'new-weekly-classes-master/:id',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-new-weekly-classes-master-new-weekly-classes-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-new-weekly-classes-master-new-weekly-classes-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/new-weekly-classes-master/new-weekly-classes-master.module */ "tFRo")).then(m => m.NewWeeklyClassesMasterPageModule)
    },
    {
        path: 'edit-daily-classes-master/:id/:index',
        loadChildren: () => Promise.all(/*! import() | pages-weekly-classes-edit-daily-classes-master-edit-daily-classes-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-weekly-classes-edit-daily-classes-master-edit-daily-classes-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/weekly-classes/edit-daily-classes-master/edit-daily-classes-master.module */ "xelj")).then(m => m.EditDailyClassesMasterPageModule)
    },
    {
        path: 'new-daily-classes-master/:id',
        loadChildren: () => Promise.all(/*! import() | pages-new-daily-classes-master-new-daily-classes-master-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-new-daily-classes-master-new-daily-classes-master-module")]).then(__webpack_require__.bind(null, /*! ./pages/new-daily-classes-master/new-daily-classes-master.module */ "Nlh3")).then(m => m.NewDailyClassesMasterPageModule)
    },
    {
        path: 'weekly-classes',
        loadChildren: () => Promise.all(/*! import() | pages-clasesSemanales-weekly-classes-weekly-classes-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clasesSemanales-weekly-classes-weekly-classes-module")]).then(__webpack_require__.bind(null, /*! ./pages/clasesSemanales/weekly-classes/weekly-classes.module */ "tAHW")).then(m => m.WeeklyClassesPageModule)
    },
    {
        path: 'new-weekly-class',
        loadChildren: () => Promise.all(/*! import() | pages-clasesSemanales-new-weekly-class-new-weekly-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clasesSemanales-new-weekly-class-new-weekly-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/clasesSemanales/new-weekly-class/new-weekly-class.module */ "MO8T")).then(m => m.NewWeeklyClassPageModule)
    },
    {
        path: 'master-training-centers',
        loadChildren: () => Promise.all(/*! import() | pages-master-master-training-centers-master-training-centers-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-master-master-training-centers-master-training-centers-module")]).then(__webpack_require__.bind(null, /*! ./pages/master/master-training-centers/master-training-centers.module */ "0LFr")).then(m => m.MasterTrainingCentersPageModule)
    },
    {
        path: 'edit-master-training-centers/:id',
        loadChildren: () => Promise.all(/*! import() | pages-master-edit-master-training-centers-edit-master-training-centers-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-master-edit-master-training-centers-edit-master-training-centers-module")]).then(__webpack_require__.bind(null, /*! ./pages/master/edit-master-training-centers/edit-master-training-centers.module */ "x6tn")).then(m => m.EditMasterTrainingCentersPageModule)
    },
    {
        path: 'edit-master-training-centers',
        loadChildren: () => Promise.all(/*! import() | pages-master-edit-master-training-centers-edit-master-training-centers-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-master-edit-master-training-centers-edit-master-training-centers-module")]).then(__webpack_require__.bind(null, /*! ./pages/master/edit-master-training-centers/edit-master-training-centers.module */ "x6tn")).then(m => m.EditMasterTrainingCentersPageModule)
    },
    {
        path: 'edit-weekly-classes/:id',
        loadChildren: () => Promise.all(/*! import() | pages-clasesSemanales-edit-weekly-classes-edit-weekly-classes-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clasesSemanales-edit-weekly-classes-edit-weekly-classes-module")]).then(__webpack_require__.bind(null, /*! ./pages/clasesSemanales/edit-weekly-classes/edit-weekly-classes.module */ "KOiO")).then(m => m.EditWeeklyClassesPageModule)
    },
    {
        path: 'regular-weekly-classes',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-clasesSemanales-regular-weekly-classes-regular-weekly-classes-module */ "pages-clasesSemanales-regular-weekly-classes-regular-weekly-classes-module").then(__webpack_require__.bind(null, /*! ./pages/clasesSemanales/regular-weekly-classes/regular-weekly-classes.module */ "z196")).then(m => m.RegularWeeklyClassesPageModule)
    },
    {
        path: 'list-users',
        loadChildren: () => Promise.all(/*! import() | pages-users-list-users-list-users-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-users-list-users-list-users-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/list-users/list-users.module */ "CRec")).then(m => m.ListUsersPageModule)
    },
    {
        path: 'user-detail/:id',
        loadChildren: () => Promise.all(/*! import() | pages-users-user-detail-user-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-users-user-detail-user-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/user-detail/user-detail.module */ "299q")).then(m => m.UserDetailPageModule)
    },
    {
        path: 'fares-list',
        loadChildren: () => Promise.all(/*! import() | pages-fares-fares-list-fares-list-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-fares-fares-list-fares-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/fares/fares-list/fares-list.module */ "9hDo")).then(m => m.FaresListPageModule)
    },
    {
        path: 'edit-fare/:id',
        loadChildren: () => Promise.all(/*! import() | pages-fares-edit-fare-edit-fare-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-fares-edit-fare-edit-fare-module")]).then(__webpack_require__.bind(null, /*! ./pages/fares/edit-fare/edit-fare.module */ "aVqj")).then(m => m.EditFarePageModule)
    },
    {
        path: 'expenses-list',
        loadChildren: () => Promise.all(/*! import() | pages-expenses-expenses-list-expenses-list-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-expenses-expenses-list-expenses-list-module")]).then(__webpack_require__.bind(null, /*! ./pages/expenses/expenses-list/expenses-list.module */ "8b9a")).then(m => m.ExpensesListPageModule)
    },
    {
        path: 'detail-expense/:id',
        loadChildren: () => Promise.all(/*! import() | pages-expenses-detail-expense-detail-expense-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-expenses-detail-expense-detail-expense-module")]).then(__webpack_require__.bind(null, /*! ./pages/expenses/detail-expense/detail-expense.module */ "9DVt")).then(m => m.DetailExpensePageModule)
    },
    {
        path: 'new-expense',
        loadChildren: () => Promise.all(/*! import() | pages-expenses-new-expense-new-expense-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-expenses-new-expense-new-expense-module")]).then(__webpack_require__.bind(null, /*! ./pages/expenses/new-expense/new-expense.module */ "NWUT")).then(m => m.NewExpensePageModule)
    },
    {
        path: 'new-user-payment/:id',
        loadChildren: () => Promise.all(/*! import() | pages-users-new-user-payment-new-user-payment-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-users-new-user-payment-new-user-payment-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/new-user-payment/new-user-payment.module */ "q7tw")).then(m => m.NewUserPaymentPageModule)
    },
    {
        path: 'detail-user-payment/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-users-detail-user-payment-detail-user-payment-module */ "pages-users-detail-user-payment-detail-user-payment-module").then(__webpack_require__.bind(null, /*! ./pages/users/detail-user-payment/detail-user-payment.module */ "Lv0G")).then(m => m.DetailUserPaymentPageModule)
    },
    {
        path: 'list-user-payment',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-users-list-user-payment-list-user-payment-module */ "pages-users-list-user-payment-list-user-payment-module").then(__webpack_require__.bind(null, /*! ./pages/users/list-user-payment/list-user-payment.module */ "AiOJ")).then(m => m.ListUserPaymentPageModule)
    },
    {
        path: 'create-new-user',
        loadChildren: () => Promise.all(/*! import() | pages-users-create-new-user-create-new-user-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-users-create-new-user-create-new-user-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/create-new-user/create-new-user.module */ "sQa4")).then(m => m.CreateNewUserPageModule)
    },
    {
        path: 'create-news',
        loadChildren: () => Promise.all(/*! import() | pages-news-create-news-create-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-create-news-create-news-module")]).then(__webpack_require__.bind(null, /*! ./pages/news/create-news/create-news.module */ "jaMa")).then(m => m.CreateNewsPageModule)
    },
    {
        path: 'list-news',
        loadChildren: () => Promise.all(/*! import() | pages-news-list-news-list-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-list-news-list-news-module")]).then(__webpack_require__.bind(null, /*! ./pages/news/list-news/list-news.module */ "uRgp")).then(m => m.ListNewsPageModule)
    },
    {
        path: 'search-daily-class',
        loadChildren: () => Promise.all(/*! import() | pages-clasesDiarias-search-daily-class-search-daily-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clasesDiarias-search-daily-class-search-daily-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/clasesDiarias/search-daily-class/search-daily-class.module */ "87gC")).then(m => m.SearchDailyClassPageModule)
    },
    {
        path: 'detail-daily-class-session/:id/:index',
        loadChildren: () => Promise.all(/*! import() | pages-clasesDiarias-detail-daily-class-detail-daily-class-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-clasesDiarias-detail-daily-class-detail-daily-class-module")]).then(__webpack_require__.bind(null, /*! ./pages/clasesDiarias/detail-daily-class/detail-daily-class.module */ "/5aE")).then(m => m.DetailDailyClassPageModule)
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yxfS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color = \"primary\">\n    <ion-buttons slot=\"start\" class=\"button-back\">\n        <ion-back-button defaultHref=\"/\" text=\"\" icon=\"arrow-back-outline\" >\n            \n        </ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map