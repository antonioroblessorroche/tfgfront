(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-list-users-list-users-module"],{

/***/ "CRec":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/list-users/list-users.module.ts ***!
  \*************************************************************/
/*! exports provided: ListUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersPageModule", function() { return ListUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-users-routing.module */ "XzRB");
/* harmony import */ var _list_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-users.page */ "i5up");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let ListUsersPageModule = class ListUsersPageModule {
};
ListUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_users_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListUsersPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_list_users_page__WEBPACK_IMPORTED_MODULE_6__["ListUsersPage"]]
    })
], ListUsersPageModule);



/***/ }),

/***/ "Qxgs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/list-users/list-users.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Usuarios\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-top\">\n      \n    </div>\n    <ion-searchbar searchIcon=\"search\" \n      animated\n      cancel-button-icon\n      (ionCancel)=\"hideSearch()\"\n      (search)=\"getWorkouts()\"\n      (ionChange)=\"setSearchValue($event.target.value)\"\n      placeholder=\"Buscar usuarios\">\n    </ion-searchbar>\n    \n    <ion-row>\n      <ion-col col-6 >\n        <ion-button (click)=\"getWorkouts()\" expand=\"block\">\n          <ion-icon name=\"search\"></ion-icon>\n           Buscar    \n        </ion-button>\n      </ion-col>      <ion-col col-6 >\n\n        <ion-button expand=\"block\" color=\"success\" routerLink=\"/create-new-user\">\n          <ion-icon name=\"add\"></ion-icon>\n          Nuevo usuario    \n        </ion-button>\n      </ion-col>\n    </ion-row>\n        \n    \n\n\n    <!-- <ion-content> -->\n        <ion-list *ngFor=\"let user of users\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\" >\n                  <ion-item-option routerLink=\"/user-detail/{{user.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option>\n                  \n                </ion-item-options>\n            \n                <ion-item>\n                  <ion-label>{{user.nombre}}</ion-label>\n                </ion-item>\n            \n                <!-- <ion-item-options side=\"end\">\n                    <ion-item-option color=\"warning\" routerLink=\"/edit-workout/{{workout.id}}\">\n                        <ion-icon name=\"create\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"deleteConfirm(workout.id)\">\n                        <ion-icon name=\"trash\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                </ion-item-options> -->\n            </ion-item-sliding>\n        </ion-list>\n\n\n\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      <!-- </ion-content> -->\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "XzRB":
/*!*********************************************************************!*\
  !*** ./src/app/pages/users/list-users/list-users-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ListUsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersPageRoutingModule", function() { return ListUsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-users.page */ "i5up");




const routes = [
    {
        path: '',
        component: _list_users_page__WEBPACK_IMPORTED_MODULE_3__["ListUsersPage"]
    }
];
let ListUsersPageRoutingModule = class ListUsersPageRoutingModule {
};
ListUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListUsersPageRoutingModule);



/***/ }),

/***/ "i5up":
/*!***********************************************************!*\
  !*** ./src/app/pages/users/list-users/list-users.page.ts ***!
  \***********************************************************/
/*! exports provided: ListUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersPage", function() { return ListUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-users.page.html */ "Qxgs");
/* harmony import */ var _list_users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-users.page.scss */ "uJZP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");







let ListUsersPage = class ListUsersPage {
    constructor(userService, router, toastController, alertController) {
        this.userService = userService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.users = [];
        this.page = 0;
        this.searchValue = '';
    }
    getWorkouts() {
        this.users = [];
        this.page = 0;
        if (this.searchValue != '') {
            this.userService.userList(this.searchValue, this.page).subscribe(data => {
                this.users = data.content;
            }, err => {
                console.log("petó");
                console.log(err);
            });
        }
        else {
            this.cargar();
        }
        this.page += 1;
    }
    setSearchValue(searchVal) {
        this.searchValue = searchVal;
    }
    loadData(event) {
        event.target.disabled = false;
        // if (this.searchValue != '') {
        //   this.userService.userList(this.page).subscribe(
        //     data => {
        //       let dataSize = data.content.length;
        //       if (dataSize > 0) {
        //         for (let i = 0; i< dataSize; i++) {
        //           this.workouts.push(data.content[i]);
        //         }
        //        this.page+=1;
        //       }  else {
        //         // event.target.disabled = true;
        //         event.target.complete();
        //       }        
        //     },
        //     err => {
        //       console.log("petó");
        //       console.log(err);
        //     }
        //   );
        // } else {
        this.userService.userList(this.searchValue, this.page).subscribe(data => {
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.users.push(data.content[i]);
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
        // }
        // event.target.complete();
        // event.target.disabled = true;
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    ngOnInit() {
        // this.cargar();
    }
    ionViewWillEnter() {
        // this.cargar();
        // this.page+=1;
    }
    cargar() {
        this.userService.userList(this.searchValue, this.page).subscribe(data => {
            this.users = data.content;
        }, err => {
            console.log("petó");
            console.log(err);
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
ListUsersPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ListUsersPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
ListUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-users',
        template: _raw_loader_list_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListUsersPage);



/***/ }),

/***/ "uJZP":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/list-users/list-users.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXVzZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-users-list-users-list-users-module.js.map