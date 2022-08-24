(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-class-master-admin-class-master-admin-class-master-module"],{

/***/ "/ny4":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/class-master/admin-class-master/admin-class-master-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AdminClassMasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassMasterPageRoutingModule", function() { return AdminClassMasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_class_master_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-class-master.page */ "g4kT");




const routes = [
    {
        path: '',
        component: _admin_class_master_page__WEBPACK_IMPORTED_MODULE_3__["AdminClassMasterPage"]
    }
];
let AdminClassMasterPageRoutingModule = class AdminClassMasterPageRoutingModule {
};
AdminClassMasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminClassMasterPageRoutingModule);



/***/ }),

/***/ "CPx7":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/class-master/admin-class-master/admin-class-master.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Clases\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-top\">\n      \n    </div>\n\n    \n    <ion-searchbar searchIcon=\"search\" \n      animated\n      cancel-button-icon\n      (ionCancel)=\"hideSearch()\"\n      (search)=\"getWorkouts()\"\n      (ionChange)=\"setSearchValue($event.target.value)\"\n      placeholder=\"Buscar ejercicios\">\n    </ion-searchbar>\n\n    \n    <ion-row>\n      <ion-col col-6> \n        <ion-button (click)=\"getWorkouts()\" expand=\"block\">\n          <ion-icon name=\"search\"></ion-icon>\n           Buscar    \n        </ion-button>\n        \n      </ion-col>\n    \n      <ion-col col-6>\n       <ion-button expand=\"block\" color=\"success\" routerLink=\"/new-class-master\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label> Crear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-content> -->\n        <ion-list *ngFor=\"let workout of trainingClass\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\" >\n                   <ion-item-option routerLink=\"/class-master-detail/{{workout.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option>\n                  \n                </ion-item-options>\n            \n                <ion-item>\n                  <ion-label>{{workout.name}}</ion-label>\n                </ion-item>\n            \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"warning\" routerLink=\"/edit-class-master/{{workout.id}}\">\n                        <ion-icon name=\"create\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"deleteConfirm(workout.id)\">\n                        <ion-icon name=\"trash\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n        \n\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      <!-- </ion-content> -->\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "CVV2":
/*!************************************************************************************!*\
  !*** ./src/app/pages/class-master/admin-class-master/admin-class-master.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label-shorten {\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkbWluLWNsYXNzLW1hc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLWNsYXNzLW1hc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbC1zaG9ydGVuIHtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "RlOJ":
/*!************************************************************************************!*\
  !*** ./src/app/pages/class-master/admin-class-master/admin-class-master.module.ts ***!
  \************************************************************************************/
/*! exports provided: AdminClassMasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassMasterPageModule", function() { return AdminClassMasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-class-master-routing.module */ "/ny4");
/* harmony import */ var _admin_class_master_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-class-master.page */ "g4kT");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let AdminClassMasterPageModule = class AdminClassMasterPageModule {
};
AdminClassMasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_class_master_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminClassMasterPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_admin_class_master_page__WEBPACK_IMPORTED_MODULE_6__["AdminClassMasterPage"]]
    })
], AdminClassMasterPageModule);



/***/ }),

/***/ "g4kT":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/class-master/admin-class-master/admin-class-master.page.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminClassMasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassMasterPage", function() { return AdminClassMasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-class-master.page.html */ "CPx7");
/* harmony import */ var _admin_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-class-master.page.scss */ "CVV2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/classMasterService */ "xNZO");







let AdminClassMasterPage = class AdminClassMasterPage {
    constructor(classService, router, activatedRoute, toastController, alertController) {
        this.classService = classService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.trainingClass = [];
        this.page = 0;
        this.searchValue = '';
        this.isEmpty = true;
    }
    ngOnInit() {
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth() + 1;
        this.year = this.date.getFullYear();
        this.cargar();
    }
    cargar() {
        const id = this.activatedRoute.snapshot.params.id;
        var todayMidnight = new Date(this.year, this.month - 1, this.day).getTime();
        this.classService.lista(0).subscribe(data => {
            this.trainingClass = data.content;
        }, err => {
            this.volver();
        });
    }
    getWorkouts() {
        this.trainingClass = [];
        this.page = 0;
        var pickDate = new Date(this.year, this.month - 1, this.day).getTime();
        if (this.searchValue != '') {
            this.classService.listaByName(0, this.searchValue).subscribe(data => {
                this.trainingClass = data.content;
                this.isEmpty = data.content === [];
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
    volver() {
        this.router.navigate(['/']);
    }
    loadData(event) {
        event.target.disabled = false;
        if (this.searchValue != '') {
            this.byName(event);
        }
        else {
            this.byName(event);
        }
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    byName(event) {
        this.classService.lista(this.page).subscribe(data => {
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.trainingClass.push(data.content[i]);
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
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    ionViewWillEnter() {
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
        this.classService.delete(id).subscribe(data => {
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
AdminClassMasterPage.ctorParameters = () => [
    { type: src_app_services_classMasterService__WEBPACK_IMPORTED_MODULE_6__["ClassMasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AdminClassMasterPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
AdminClassMasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-class-master',
        template: _raw_loader_admin_class_master_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_class_master_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminClassMasterPage);



/***/ })

}]);
//# sourceMappingURL=pages-class-master-admin-class-master-admin-class-master-module.js.map