(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clases-admin-classes-admin-classes-modules"],{

/***/ "IB9o":
/*!********************************************************************!*\
  !*** ./src/app/pages/clases/admin-classes/admin-classes.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1jbGFzc2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "c0Q4":
/*!*********************************************************************!*\
  !*** ./src/app/pages/clases/admin-classes/admin-classes.modules.ts ***!
  \*********************************************************************/
/*! exports provided: AdminClassesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassesPageModule", function() { return AdminClassesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_classes_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-classes-routing.modules */ "l581");
/* harmony import */ var _admin_classes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-classes.page */ "nVR2");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let AdminClassesPageModule = class AdminClassesPageModule {
};
AdminClassesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_classes_routing_modules__WEBPACK_IMPORTED_MODULE_5__["AdminClassesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_admin_classes_page__WEBPACK_IMPORTED_MODULE_6__["AdminClassesPage"]]
    })
], AdminClassesPageModule);



/***/ }),

/***/ "dMCr":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clases/admin-classes/admin-classes.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Workouts admin\"></app-header>\n\n<ion-content>\n    <div class=\"ion-text-center ion-margin-top\">\n      \n    </div>\n    <ion-button routerLink=\"/link-workout\" expand=\"block\">\n      <ion-icon name=\"link-workout\"></ion-icon>\n       Asignar entrenamiento    \n    </ion-button>\n    \n    <ion-searchbar searchIcon=\"search\" \n      animated\n      cancel-button-icon\n      (ionCancel)=\"hideSearch()\"\n      (search)=\"getWorkouts()\"\n      (ionChange)=\"setSearchValue($event.target.value)\"\n      placeholder=\"Buscar ejercicios\">\n    </ion-searchbar>\n\n    \n    <ion-row>\n      <ion-col col-6> \n        <ion-button (click)=\"getWorkouts()\" expand=\"block\">\n          <ion-icon name=\"search\"></ion-icon>\n           Buscar    \n        </ion-button>\n        \n      </ion-col>\n    \n      <ion-col col-6>\n       <ion-button expand=\"block\" color=\"success\" routerLink=\"/new-workout\">\n            <ion-icon name=\"add-circle\"></ion-icon>\n            <ion-label> Crear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- <ion-content> -->\n        <ion-list *ngFor=\"let workout of workouts\">\n            <ion-item-sliding>\n                <ion-item-options side=\"start\" >\n                  <ion-item-option routerLink=\"/workout-detail/{{workout.id}}\">\n                    <ion-icon name=\"eye\" slot=\"icon-only\">\n                    </ion-icon>  \n        \n                  </ion-item-option>\n                  \n                </ion-item-options>\n            \n                <ion-item>\n                  <ion-label>{{workout.name}}</ion-label>\n                </ion-item>\n            \n                <ion-item-options side=\"end\">\n                    <ion-item-option color=\"warning\" routerLink=\"/edit-workout/{{workout.id}}\">\n                        <ion-icon name=\"create\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"deleteConfirm(workout.id)\">\n                        <ion-icon name=\"trash\" slot=\"icon-only\" >\n                        </ion-icon>  \n                    </ion-item-option>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n        \n\n\n        <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      <!-- </ion-content> -->\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "l581":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/clases/admin-classes/admin-classes-routing.modules.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminClassesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassesPageRoutingModule", function() { return AdminClassesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_classes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-classes.page */ "nVR2");




const routes = [
    {
        path: '',
        component: _admin_classes_page__WEBPACK_IMPORTED_MODULE_3__["AdminClassesPage"]
    }
];
let AdminClassesPageRoutingModule = class AdminClassesPageRoutingModule {
};
AdminClassesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminClassesPageRoutingModule);



/***/ }),

/***/ "nVR2":
/*!******************************************************************!*\
  !*** ./src/app/pages/clases/admin-classes/admin-classes.page.ts ***!
  \******************************************************************/
/*! exports provided: AdminClassesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminClassesPage", function() { return AdminClassesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_classes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-classes.page.html */ "dMCr");
/* harmony import */ var _admin_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-classes.page.scss */ "IB9o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/trainingclass.service */ "GTnE");







let AdminClassesPage = class AdminClassesPage {
    constructor(trainingClassService, router, activatedRoute, toastController, alertController) {
        this.trainingClassService = trainingClassService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.trainingClass = [];
        this.page = 0;
        this.searchValue = '';
        this.isEmpty = true;
    }
    // getWorkouts() {
    //   this.trainingClass = [];
    //   this.page = 0;
    //   if (this.searchValue != '') {
    //     this.trainingClassService.listaByName(this.page, this.searchValue).subscribe(
    //       data => {
    //         this.trainingClass = data.content;
    //       },
    //       err => {
    //         console.log("petó");
    //         console.log(err);
    //       }
    //     );
    //   } else {
    //     this.cargar();
    //   }
    //   this.page+=1;
    // }
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
        this.trainingClassService.listaByStartEndDate(0, todayMidnight, (todayMidnight + 86400000)).subscribe(data => {
            this.trainingClass = data.content;
            for (var i = 0; i < this.trainingClass.length; i++) {
                this.trainingClass[i].date = new Date(this.trainingClass[i].timeStart).toLocaleTimeString();
            }
        }, err => {
            this.volver();
        });
    }
    getWorkouts() {
        this.trainingClass = [];
        this.page = 0;
        var pickDate = new Date(this.year, this.month - 1, this.day).getTime();
        if (this.searchValue != '') {
            this.trainingClassService.listaByStartEndDateAndName(0, pickDate, (pickDate + 86400000), this.searchValue).subscribe(data => {
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
            //this.all(event);
            this.byName(event);
        }
        // event.target.complete();
        // event.target.disabled = true;
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    // private all(event: any) {
    //     this.trainingClassService.listaByName(this.page, this.searchValue).subscribe(
    //         data => {
    //             let dataSize = data.content.length;
    //             if (dataSize > 0) {
    //                 for (let i = 0; i < dataSize; i++) {
    //                     this.trainingClass.push(data.content[i]);
    //                 }
    //                 this.page += 1;
    //             } else {
    //                 // event.target.disabled = true;
    //                 event.target.complete();
    //             }
    //         },
    //         err => {
    //             console.log("petó");
    //             console.log(err);
    //         }
    //     );
    // }
    byName(event) {
        this.trainingClassService.lista(this.page).subscribe(data => {
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
    //   ngOnInit() {
    //     // this.cargar();
    //   }
    ionViewWillEnter() {
        // this.cargar();
        // this.page+=1;
    }
    //   cargar(): void {
    //     this.trainingClassService.lista(this.page).subscribe(
    //       data => {
    //         this.trainingClasss = data.content;
    //       },
    //       err => {
    //         console.log("petó");
    //         console.log(err);
    //       }
    //     );
    //   }
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
        this.trainingClassService.delete(id).subscribe(data => {
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
AdminClassesPage.ctorParameters = () => [
    { type: src_app_services_trainingclass_service__WEBPACK_IMPORTED_MODULE_6__["TrainingClassService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AdminClassesPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"],] }]
};
AdminClassesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_classes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_classes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminClassesPage);



/***/ })

}]);
//# sourceMappingURL=pages-clases-admin-classes-admin-classes-modules.js.map