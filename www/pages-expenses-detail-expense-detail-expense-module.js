(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expenses-detail-expense-detail-expense-module"],{

/***/ "9DVt":
/*!************************************************************************!*\
  !*** ./src/app/pages/expenses/detail-expense/detail-expense.module.ts ***!
  \************************************************************************/
/*! exports provided: DetailExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailExpensePageModule", function() { return DetailExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-expense-routing.module */ "F3Dc");
/* harmony import */ var _detail_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-expense.page */ "m0a5");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");








let DetailExpensePageModule = class DetailExpensePageModule {
};
DetailExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailExpensePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_detail_expense_page__WEBPACK_IMPORTED_MODULE_6__["DetailExpensePage"]]
    })
], DetailExpensePageModule);



/***/ }),

/***/ "F3Dc":
/*!********************************************************************************!*\
  !*** ./src/app/pages/expenses/detail-expense/detail-expense-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DetailExpensePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailExpensePageRoutingModule", function() { return DetailExpensePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-expense.page */ "m0a5");




const routes = [
    {
        path: '',
        component: _detail_expense_page__WEBPACK_IMPORTED_MODULE_3__["DetailExpensePage"]
    }
];
let DetailExpensePageRoutingModule = class DetailExpensePageRoutingModule {
};
DetailExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailExpensePageRoutingModule);



/***/ }),

/***/ "cQVe":
/*!************************************************************************!*\
  !*** ./src/app/pages/expenses/detail-expense/detail-expense.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtZXhwZW5zZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "m0a5":
/*!**********************************************************************!*\
  !*** ./src/app/pages/expenses/detail-expense/detail-expense.page.ts ***!
  \**********************************************************************/
/*! exports provided: DetailExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailExpensePage", function() { return DetailExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_expense_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-expense.page.html */ "ulTs");
/* harmony import */ var _detail_expense_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-expense.page.scss */ "cQVe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_models_expense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/expense */ "OnIE");
/* harmony import */ var src_app_services_expenses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/expenses.service */ "otNS");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");









let DetailExpensePage = class DetailExpensePage {
    constructor(service, router, activatedRoute, toastController, alertController, tokenService) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.alertController = alertController;
        this.tokenService = tokenService;
        this.date = (new Date()).toISOString();
        this.day = new Date().getDate();
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();
        this.amount = 0;
        this.submittedUser = '';
        this.canEdit = false;
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
        this.submittedUser = this.tokenService.getUsername();
        this.service.detalle(id).subscribe(data => {
            this.day = data.day;
            this.month = data.month;
            this.year = data.year;
            this.amount = data.amount;
            this.name = data.name;
            this.description = data.description;
            this.isExpense = !data.income;
            this.isIncome = data.income;
            this.canEdit = data.submittedBy == this.submittedUser;
            this.date = new Date(this.year, this.month - 1, this.day).toISOString();
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
        const id = this.activatedRoute.snapshot.params.id;
        var expense = new src_app_models_expense__WEBPACK_IMPORTED_MODULE_6__["Expense"](id, this.name, this.amount, this.description, this.year, this.month, this.day, this.isIncome);
        expense.submittedBy = this.submittedUser;
        this.service.actualizar(id, expense).subscribe(data => {
            console.log("Created: " + data);
        });
    }
    changeDate(event) {
        var date = new Date(event.detail.value);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
    }
};
DetailExpensePage.ctorParameters = () => [
    { type: src_app_services_expenses_service__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] }
];
DetailExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-expense',
        template: _raw_loader_detail_expense_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_expense_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailExpensePage);



/***/ }),

/***/ "ulTs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expenses/detail-expense/detail-expense.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"Editar gasto o ingreso\"></app-header>\n\n<ion-content *ngIf=\"canEdit\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Editar gasto o ingreso\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Concepto:</ion-label>\n        <ion-input required placeholder=\"Concepto\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Descripcion: </ion-label>\n          <ion-input required placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Cantidad: </ion-label>\n        <ion-input type=\"number\" required placeholder=\"Cantidad\" name=\"amount\" [(ngModel)]=\"amount\" step=\".01\"></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label>Fecha</ion-label>\n        <ion-datetime \n          displayFormat=\"D MMM YYYY\" \n          max=\"2100\" min=\"2015\" \n          [(ngModel)]=\"date\" \n          [ngModelOptions]=\"{standalone: true}\" \n          (ionChange)=\"changeDate($event)\" ></ion-datetime>\n      </ion-item>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n          <ion-checkbox color=\"danger\" checked expand=\"block\" (ionChange)=\"changeExpense($event.detail.checked)\" [(ngModel)]=\"isExpense\" [ngModelOptions]=\"{standalone: true}\">Gasto</ion-checkbox>\n          <ion-label style=\"margin-left: 15px\">Gasto</ion-label>\n        </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n          <ion-checkbox color=\"success\" (ionChange)=\"changeIncome($event.detail.checked)\" [(ngModel)]=\"isIncome\" [ngModelOptions]=\"{standalone: true}\">Ingreso</ion-checkbox>\n            <ion-label style=\"margin-left: 15px\">Ingreso</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div class=\"ion-padding\">\n          <ion-button color=\"success\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!f.valid\"> \n              <ion-icon name=\"create\">  </ion-icon>\n              Actualizar\n               </ion-button>\n       </div>\n    </ion-list>\n   \n</form>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content *ngIf=\"!canEdit\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onCreate()\" novalidate>\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\n      <ion-list-header lines=\"full\">\n        <ion-label>\n          Detalle gasto o ingreso\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Concepto:</ion-label>\n        <ion-input required readonly placeholder=\"Concepto\" name=\"name\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>Descripcion: </ion-label>\n          <ion-input required readonly placeholder=\"Descripción de la clase\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Cantidad: </ion-label>\n        <ion-input type=\"number\" required readonly placeholder=\"Cantidad\" name=\"amount\" [(ngModel)]=\"amount\" step=\".01\"></ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-label>Fecha</ion-label>\n        <ion-datetime displayFormat=\"D MMM YYYY\" [readonly]=\"true\" max=\"2100\" min=\"2015\" [(ngModel)]=\"date\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeDate($event)\" ></ion-datetime>\n      </ion-item>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n          <ion-checkbox color=\"danger\" checked [readonly]=\"true\" expand=\"block\" (ionChange)=\"changeExpense($event.detail.checked)\" [(ngModel)]=\"isExpense\" [ngModelOptions]=\"{standalone: true}\">Gasto</ion-checkbox>\n          <ion-label style=\"margin-left: 15px\">Gasto</ion-label>\n        </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n          <ion-checkbox color=\"success\" [readonly]=\"true\" (ionChange)=\"changeIncome($event.detail.checked)\" [(ngModel)]=\"isIncome\" [ngModelOptions]=\"{standalone: true}\">Ingreso</ion-checkbox>\n            <ion-label style=\"margin-left: 15px\">Ingreso</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n   \n</form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-expenses-detail-expense-detail-expense-module.js.map