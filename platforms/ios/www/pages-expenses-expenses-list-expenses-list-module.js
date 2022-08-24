(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expenses-expenses-list-expenses-list-module"],{

/***/ "78u3":
/*!********************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-list/expenses-list.page.ts ***!
  \********************************************************************/
/*! exports provided: ExpensesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesListPage", function() { return ExpensesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_expenses_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./expenses-list.page.html */ "IJPZ");
/* harmony import */ var _expenses_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses-list.page.scss */ "GP6k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_expenses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/expenses.service */ "otNS");
/* harmony import */ var src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fare.service */ "iQIO");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");









let ExpensesListPage = class ExpensesListPage {
    constructor(expenseService, fareService, router, activatedRoute, toastController, alertController, tokenService, modalController) {
        this.expenseService = expenseService;
        this.fareService = fareService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.tokenService = tokenService;
        this.modalController = modalController;
        this.fares = [];
        this.expenses = [];
        this.incomes = [];
        this.balance = 0;
        this.totalIncomes = 0;
        this.totalExpenses = 0;
        this.hasData = false;
        //MOCKED DATA
        this.user = "";
        this.selector = "profile";
        this.selectedYear = 0;
    }
    ngOnInit() {
        console.log(this.incomes);
        console.log(this.incomes);
    }
    ionViewWillEnter() {
        // this.cargar();
        // this.cargarFares();
    }
    // cargarFares() {
    //   this.fareService.lista(100).subscribe(data => {
    //     this.fares = data.content;
    //   }, err => {
    //     console.log(err);
    //     this.presentToast('Error cargando tarifas');
    //   });
    // }
    // selectFareId(event) {
    //   this.profile.fareId = event.value.id;
    //  }
    segmentChanged($event) {
        this.selector = $event.detail.value;
        console.log($event.detail.value);
    }
    selectYear(event) {
        this.selectedYear = event.detail.value.substring(0, 4);
    }
    selectMonth(event) {
        this.selectedMonth = event.detail.value.substring(5, 7);
    }
    buscar() {
        this.totalExpenses = 0;
        this.totalIncomes = 0;
        this.balance = 0;
        this.hasData = false;
        if (this.selectedYear == 0) {
            this.selectedYear = new Date().getFullYear();
        }
        else {
            if (this.selectedMonth == 0) {
                this.selectedMonth = new Date().getMonth() + 1;
            }
        }
        if (this.selectedMonth == null || this.selectMonth == undefined) {
            this.expenseService.gastosPorAnno(100, this.selectedYear).subscribe(data => {
                this.expenses = data.content;
                if (this.expenses.length > 0) {
                    for (let i = 0; i < this.expenses.length; i++) {
                        this.totalExpenses += this.expenses[i].amount;
                    }
                    this.balance -= this.totalExpenses;
                    this.hasData = true;
                }
            });
            this.expenseService.ingresosPorAnno(100, this.selectedYear).subscribe(data => {
                this.incomes = data.content;
                if (this.incomes.length > 0) {
                    for (let i = 0; i < this.incomes.length; i++) {
                        this.totalIncomes += this.incomes[i].amount;
                    }
                    this.balance += this.totalIncomes;
                    this.hasData = true;
                }
            });
            this.expenseService.expensesPerYear(this.selectedYear).subscribe(data => {
                this.summary = data;
                this.balance += parseFloat(this.summary.totalPaidUsers);
            });
        }
        else {
            this.expenseService.gastosPorAnnoYMes(100, this.selectedYear, this.selectedMonth).subscribe(data => {
                this.expenses = data.content;
                if (this.expenses.length > 0) {
                    for (let i = 0; i < this.expenses.length; i++) {
                        this.totalExpenses += this.expenses[i].amount;
                    }
                    this.balance -= this.totalExpenses;
                    this.hasData = true;
                }
            });
            this.expenseService.ingresosPorAnnoYMes(100, this.selectedYear, this.selectedMonth).subscribe(data => {
                this.incomes = data.content;
                if (this.incomes.length > 0) {
                    for (let i = 0; i < this.incomes.length; i++) {
                        this.totalIncomes += this.incomes[i].amount;
                    }
                    this.balance += this.totalIncomes;
                    this.hasData = true;
                }
            });
            this.expenseService.expensesPerYearAndMonth(this.selectedYear, this.selectedMonth).subscribe(data => {
                this.summary = data;
                this.balance += parseFloat(this.summary.totalPaidUsers);
            });
        }
        // this.balance = this.totalIncomes - this.totalExpenses;
    }
};
ExpensesListPage.ctorParameters = () => [
    { type: src_app_services_expenses_service__WEBPACK_IMPORTED_MODULE_6__["ExpenseService"] },
    { type: src_app_services_fare_service__WEBPACK_IMPORTED_MODULE_7__["FareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ExpensesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-expenses-list',
        template: _raw_loader_expenses_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expenses_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExpensesListPage);



/***/ }),

/***/ "8b9a":
/*!**********************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-list/expenses-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExpensesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesListPageModule", function() { return ExpensesListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _expenses_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expenses-list-routing.module */ "Lfqn");
/* harmony import */ var _expenses_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expenses-list.page */ "78u3");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "8xsl");









let ExpensesListPageModule = class ExpensesListPageModule {
};
ExpensesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expenses_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensesListPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"]
        ],
        declarations: [_expenses_list_page__WEBPACK_IMPORTED_MODULE_6__["ExpensesListPage"]]
    })
], ExpensesListPageModule);



/***/ }),

/***/ "GP6k":
/*!**********************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-list/expenses-list.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlcy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "IJPZ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/expenses-list/expenses-list.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Gestion de gastos e Ingresos\"></app-header>\n\n\n <ion-content>\n    <ion-row>\n    <ion-col col-6>\n        <ion-item>\n          <ion-label>Año</ion-label>\n          <ion-datetime displayFormat=\"YYYY\" (ionChange)=\"selectYear($event)\"></ion-datetime>\n        </ion-item>\n    </ion-col>\n    \n    <ion-col col-6>\n      <ion-item>\n        <ion-label>Mes</ion-label>\n        <ion-datetime displayFormat=\"MMM\" (ionChange)=\"selectMonth($event)\" [disabled]=\"!selectedYear || selectedYear == 0\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>\n      <ion-button (click)=\"buscar()\" expand=\"block\">\n        <ion-icon name=\"search\"></ion-icon>\n        Buscar    \n      </ion-button>\n  </ion-col>\n  \n  <ion-col col-6>\n    <ion-button routerLink=\"/new-expense\" color=\"success\" expand=\"block\">\n      <ion-icon name=\"add\" ></ion-icon>\n        Crear    \n      </ion-button>\n  </ion-col>\n  </ion-row>\n\n\n\n\n  <ion-content>\n    <ion-item>\n        <ion-col col-12>\n          <ion-segment (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"profile\">\n              <ion-label>Gastos</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"payments\">\n              <ion-label>Ingresos</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"comments\">\n              <ion-label>Resumen</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-col>\n        <!-- <ion-col col-3>\n                  <ion-button expand=\"block\" color=\"success\">\n                      <ion-label>Actualizar</ion-label>\n                  </ion-button>\n          </ion-col> -->\n    </ion-item>\n    <ion-content *ngIf=\"selector == 'profile'\">\n      <ion-content *ngIf=\"expenses.length == 0\" style=\"margin: 10%\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\" align=\"center\" style=\"margin: 10%\">No existen gastos para los filtros seleccionados</ion-label>\n        </ion-item>\n      </ion-content>\n\n      <ion-content *ngIf=\"expenses\">\n        <ion-list *ngFor=\"let expense of expenses\">\n          <ion-item-sliding>\n              <ion-item-options side=\"start\" > \n                 <ion-item-option routerLink=\"/detail-expense/{{expense.id}}\"> \n                   <ion-icon name=\"eye\" slot=\"icon-only\"> \n                  </ion-icon>  \n                 </ion-item-option>\n              </ion-item-options> \n          \n              <ion-item>\n                <ion-label>{{expense.name}} ({{expense.amount}}€)</ion-label>\n              </ion-item>\n          \n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"danger\" (click)=\"deleteConfirm(center.id)\">\n                      <ion-icon name=\"trash\" slot=\"icon-only\" >\n                      </ion-icon>  \n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n      </ion-content>\n\n\n    </ion-content>\n\n\n    <ion-content *ngIf=\"selector == 'payments'\">\n      <ion-content *ngIf=\"incomes.length == 0\" style=\"margin: 10%\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\" align=\"center\" style=\"margin: 10%\">No existen ingresos para los filtros seleccionados</ion-label>\n        </ion-item>\n      </ion-content>\n\n      <ion-content *ngIf=\"incomes\">\n        <ion-list *ngFor=\"let income of incomes\">\n          <ion-item-sliding>\n              <ion-item-options side=\"start\" > \n                 <ion-item-option routerLink=\"/detail-expense/{{income.id}}\"> \n                   <ion-icon name=\"eye\" slot=\"icon-only\"> \n                  </ion-icon>  \n                 </ion-item-option>\n              </ion-item-options> \n          \n              <ion-item>\n                <ion-label>{{income.name}} ({{income.amount}}€)</ion-label>\n              </ion-item>\n          \n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"danger\" (click)=\"deleteConfirm(center.id)\">\n                      <ion-icon name=\"trash\" slot=\"icon-only\" >\n                      </ion-icon>  \n                  </ion-item-option>\n              </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n      </ion-content>\n\n    </ion-content>\n\n\n\n\n    <ion-content *ngIf=\"selector == 'comments'\">\n      <ion-content *ngIf=\"!hasData\" style=\"margin: 10%\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\" align=\"center\" style=\"margin: 10%\">No existen gastos ni ingresos para los filtros</ion-label>\n        </ion-item>\n      </ion-content>\n      <ion-content *ngIf=\"summary\" style=\"margin: 10%\">\n\n        <ion-item>\n          <ion-label position=\"stacked\">Balance</ion-label>\n          <ion-label>{{balance}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Total gastos</ion-label>\n          <ion-label>{{totalExpenses}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label  position=\"stacked\">Total ingresos</ion-label>\n          <ion-label>{{totalIncomes}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Usuarios activos</ion-label>\n          <ion-label>{{summary.numberOfActiveUsers}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Total pagos usuario</ion-label>\n          <ion-label>{{summary.totalPaidUsers}}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"summary.remainingUnpaidUsers != '-'\">\n          <ion-label position=\"stacked\">Nº usuarios pendientes de pago</ion-label>\n          <ion-label>{{summary.remainingUnpaidUsers}}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"summary.remainingAmountUsers != '-'\">\n          <ion-label position=\"stacked\">Cantidad pendiente de pago</ion-label>\n          <ion-label>{{summary.remainingAmountUsers}}</ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"summary.totalExpectedUsers != '-'\">\n          <ion-label position=\"stacked\">Total esperado usuarios</ion-label>\n          <ion-label>{{summary.totalExpectedUsers}}</ion-label>\n        </ion-item>\n      </ion-content>\n    </ion-content>\n\n       \n  </ion-content>  \n\n\n  \n</ion-content>  \n\n");

/***/ }),

/***/ "Lfqn":
/*!******************************************************************************!*\
  !*** ./src/app/pages/expenses/expenses-list/expenses-list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ExpensesListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesListPageRoutingModule", function() { return ExpensesListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _expenses_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses-list.page */ "78u3");




const routes = [
    {
        path: '',
        component: _expenses_list_page__WEBPACK_IMPORTED_MODULE_3__["ExpensesListPage"]
    }
];
let ExpensesListPageRoutingModule = class ExpensesListPageRoutingModule {
};
ExpensesListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpensesListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-expenses-expenses-list-expenses-list-module.js.map