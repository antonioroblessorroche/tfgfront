(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Ado8":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let NewsService = class NewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.newsUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/news/';
    }
    lista(page) {
        return this.httpClient.get(this.newsUrl + '?page=' + page);
    }
    detalle(id) {
        return this.httpClient.get(this.newsUrl + id);
    }
    nuevo(news) {
        return this.httpClient.post(this.newsUrl, news);
    }
    actualizar(id, news) {
        return this.httpClient.put(this.newsUrl + id, news);
    }
    delete(id) {
        return this.httpClient.delete(this.newsUrl + id);
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "Clqk":
/*!*****************************************!*\
  !*** ./src/app/models/nuevo-usuario.ts ***!
  \*****************************************/
/*! exports provided: NuevoUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoUsuario", function() { return NuevoUsuario; });
class NuevoUsuario {
    constructor(nombre, nombreUsuario, email, password) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.nombre = nombre;
        this.email = email;
    }
}


/***/ }),

/***/ "FLWF":
/*!***********************************!*\
  !*** ./src/app/models/workout.ts ***!
  \***********************************/
/*! exports provided: Workout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workout", function() { return Workout; });
class Workout {
    constructor(name, description, workoutGroup) {
        this.name = name;
        this.description = description;
        this.workoutGroup = workoutGroup;
    }
}


/***/ }),

/***/ "GTnE":
/*!***************************************************!*\
  !*** ./src/app/services/trainingclass.service.ts ***!
  \***************************************************/
/*! exports provided: TrainingClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingClassService", function() { return TrainingClassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let TrainingClassService = class TrainingClassService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.trainingClassUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/trainingClass/';
        this.trainingClassReservationUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/trainingClassReservation/';
    }
    reservar(trainingClassReservation) {
        return this.httpClient.post(this.trainingClassReservationUrl, trainingClassReservation);
    }
    lista(page) {
        return this.httpClient.get(this.trainingClassUrl + '?page=' + page);
    }
    listaByStartEndDate(page, start, end) {
        return this.httpClient.get(this.trainingClassUrl + '?page=' + page + '&timeStart=' + start + '&timeEnd=' + end);
    }
    listaByStartEndDateAndName(page, start, end, name) {
        return this.httpClient.get(this.trainingClassUrl + '?page=' + page + '&timeStart=' + start + '&timeEnd=' + end + '&name=' + name);
    }
    listaByUser(page, user) {
        return this.httpClient.get(this.trainingClassUrl + '?page=' + page + '&user=' + user);
    }
    listaByUserAndDate(page, user, timeEnd) {
        return this.httpClient.get(this.trainingClassReservationUrl + '?page=' + page + '&user=' + user
            + '&timeEnd=' + timeEnd);
    }
    detalle(id) {
        return this.httpClient.get(this.trainingClassUrl + id);
    }
    nuevo(trainingClass) {
        return this.httpClient.post(this.trainingClassUrl, trainingClass);
    }
    actualizar(id, trainingClass) {
        return this.httpClient.put(this.trainingClassUrl + id, trainingClass);
    }
    delete(id) {
        return this.httpClient.delete(this.trainingClassUrl + id);
    }
    deleteReservation(id) {
        return this.httpClient.delete(this.trainingClassReservationUrl + id);
    }
};
TrainingClassService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TrainingClassService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TrainingClassService);



/***/ }),

/***/ "HneZ":
/*!***************************************!*\
  !*** ./src/app/models/classMaster.ts ***!
  \***************************************/
/*! exports provided: ClassMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMaster", function() { return ClassMaster; });
class ClassMaster {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}


/***/ }),

/***/ "IMz1":
/*!************************************************!*\
  !*** ./src/app/services/userpaymen.service.ts ***!
  \************************************************/
/*! exports provided: UserPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPaymentService", function() { return UserPaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let UserPaymentService = class UserPaymentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.userPaymentUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/userPayment/';
    }
    lista(size) {
        return this.httpClient.get(this.userPaymentUrl + '?size=' + size);
    }
    listaByUser(page, userId) {
        return this.httpClient.get(this.userPaymentUrl + 'user/' + userId + '?page=' + page);
    }
    detalle(id) {
        return this.httpClient.get(this.userPaymentUrl + id);
    }
    nuevo(userPayment) {
        return this.httpClient.post(this.userPaymentUrl, userPayment);
    }
    actualizar(id, userPayment) {
        return this.httpClient.put(this.userPaymentUrl + id, userPayment);
    }
    delete(id) {
        return this.httpClient.delete(this.userPaymentUrl + id);
    }
};
UserPaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserPaymentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserPaymentService);



/***/ }),

/***/ "IfdK":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let SessionService = class SessionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.trainingSessionUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/trainingSession/';
    }
    lista(page) {
        return this.httpClient.get(this.trainingSessionUrl + '?page=' + page);
    }
    listaByUser(page, user) {
        return this.httpClient.get(this.trainingSessionUrl + '?page=' + page + '&user=' + user);
    }
    listaByUserAndDate(page, user, year, month, day) {
        return this.httpClient.get(this.trainingSessionUrl + '?page=' + page + '&user=' + user
            + '&day=' + day + '&month=' + month + '&year=' + year);
    }
    detalle(id) {
        return this.httpClient.get(this.trainingSessionUrl + id);
    }
    nuevo(trainingSession) {
        return this.httpClient.post(this.trainingSessionUrl, trainingSession);
    }
    actualizar(id, trainingSession) {
        return this.httpClient.put(this.trainingSessionUrl + id, trainingSession);
    }
    delete(id) {
        return this.httpClient.delete(this.trainingSessionUrl + id);
    }
};
SessionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SessionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SessionService);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "KrSI":
/*!******************************************!*\
  !*** ./src/app/services/diet.service.ts ***!
  \******************************************/
/*! exports provided: DietService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietService", function() { return DietService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let DietService = class DietService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.dietUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/diet/';
    }
    lista(page) {
        return this.httpClient.get(this.dietUrl + '?page=' + page);
    }
    detalle(id) {
        return this.httpClient.get(this.dietUrl + id);
    }
    findByUser(user) {
        return this.httpClient.get(this.dietUrl + '?user=' + user);
    }
    nuevo(diet) {
        return this.httpClient.post(this.dietUrl, diet);
    }
    actualizar(id, diet) {
        return this.httpClient.put(this.dietUrl + id, diet);
    }
    delete(id) {
        return this.httpClient.delete(this.dietUrl + id);
    }
};
DietService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DietService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DietService);



/***/ }),

/***/ "OnIE":
/*!***********************************!*\
  !*** ./src/app/models/expense.ts ***!
  \***********************************/
/*! exports provided: Expense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expense", function() { return Expense; });
class Expense {
    constructor(id, name, amount, description, year, month, day, income) {
        this.id = id;
        this.amount = amount;
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
        this.description = description;
        this.income = income;
    }
}


/***/ }),

/***/ "UZcu":
/*!*******************************************************************!*\
  !*** ./src/app/services/weekly-classes-master-service.service.ts ***!
  \*******************************************************************/
/*! exports provided: WeeklyClassesMasterServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyClassesMasterServiceService", function() { return WeeklyClassesMasterServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let WeeklyClassesMasterServiceService = class WeeklyClassesMasterServiceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.classUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/weeklyClasses/';
        this.classMasterUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/master/weeklyClasses/';
    }
    lista(page) {
        return this.httpClient.get(this.classUrl + '?page=' + page);
    }
    listaAll(size) {
        return this.httpClient.get(this.classUrl + '?size=' + size);
    }
    listaByName(page, searchValue) {
        return this.httpClient.get(this.classUrl + '?page=' + page + '&name=' + searchValue);
    }
    detalle(id) {
        return this.httpClient.get(this.classUrl + id);
    }
    nuevo(classMaster) {
        return this.httpClient.post(this.classUrl, classMaster);
    }
    actualizar(id, classMaster) {
        return this.httpClient.put(this.classUrl + id, classMaster);
    }
    delete(id) {
        return this.httpClient.delete(this.classUrl + id);
    }
    generar() {
        return this.httpClient.get(this.classUrl + 'generate');
    }
    copyFrom(generateClass) {
        return this.httpClient.post(this.classUrl + 'copyFrom', generateClass);
    }
    listaMaster(page) {
        return this.httpClient.get(this.classMasterUrl + '?page=' + page);
    }
    listaMasterAll(size) {
        return this.httpClient.get(this.classMasterUrl + '?size=' + size);
    }
    listaByNameMaster(page, searchValue) {
        return this.httpClient.get(this.classMasterUrl + '?page=' + page + '&name=' + searchValue);
    }
    detalleMaster(id) {
        return this.httpClient.get(this.classMasterUrl + id);
    }
    nuevoMaster(classMaster) {
        return this.httpClient.post(this.classMasterUrl, classMaster);
    }
    actualizarMaster(id, classMaster) {
        return this.httpClient.put(this.classMasterUrl + id, classMaster);
    }
    deleteMaster(id) {
        return this.httpClient.delete(this.classMasterUrl + id);
    }
    generarMaster() {
        return this.httpClient.get(this.classMasterUrl + 'generate');
    }
};
WeeklyClassesMasterServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeeklyClassesMasterServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeeklyClassesMasterServiceService);



/***/ }),

/***/ "X3Gk":
/*!*********************************************!*\
  !*** ./src/app/services/workout.service.ts ***!
  \*********************************************/
/*! exports provided: WorkoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutService", function() { return WorkoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let WorkoutService = class WorkoutService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.workoutUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/workout/';
    }
    lista(page) {
        return this.httpClient.get(this.workoutUrl + '?page=' + page);
    }
    listaCompleta() {
        return this.httpClient.get(this.workoutUrl + '?page=0&size=1000');
    }
    listaByName(page, regex) {
        return this.httpClient.get(this.workoutUrl + '?page=' + page + '&regex=' + regex);
    }
    detalle(id) {
        return this.httpClient.get(this.workoutUrl + id);
    }
    nuevo(workout) {
        return this.httpClient.post(this.workoutUrl, workout);
    }
    actualizar(id, workout) {
        return this.httpClient.put(this.workoutUrl + id, workout);
    }
    delete(id) {
        return this.httpClient.delete(this.workoutUrl + id);
    }
};
WorkoutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WorkoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WorkoutService);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "bXO7":
/*!********************************!*\
  !*** ./src/app/environment.ts ***!
  \********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    apiUrl: 'https://sgfitness-poc-aug.herokuapp.com/'
};


/***/ }),

/***/ "eYbR":
/*!*********************************************!*\
  !*** ./src/app/models/DailyClassSession.ts ***!
  \*********************************************/
/*! exports provided: DailyClassSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyClassSession", function() { return DailyClassSession; });
class DailyClassSession {
    constructor(trainingId, description, time, slots, location, name, locationName) {
        this.trainingId = trainingId;
        this.description = description;
        this.location = location;
        this.time = time;
        this.slots = slots;
        this.name = name;
        this.locationName = locationName;
    }
}


/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "iQIO":
/*!******************************************!*\
  !*** ./src/app/services/fare.service.ts ***!
  \******************************************/
/*! exports provided: FareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareService", function() { return FareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let FareService = class FareService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.trainingcenterUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/fare/';
    }
    lista(size) {
        return this.httpClient.get(this.trainingcenterUrl + '?size=' + size);
    }
    detalle(id) {
        return this.httpClient.get(this.trainingcenterUrl + id);
    }
    nuevo(trainingcenter) {
        return this.httpClient.post(this.trainingcenterUrl, trainingcenter);
    }
    actualizar(id, trainingcenter) {
        return this.httpClient.put(this.trainingcenterUrl + id, trainingcenter);
    }
    delete(id) {
        return this.httpClient.delete(this.trainingcenterUrl + id);
    }
};
FareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FareService);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authURL = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auth/';
    }
    login(loginUsuario) {
        return this.httpClient.post(this.authURL + 'login', loginUsuario);
    }
    registro(nuevoUsuario) {
        return this.httpClient.post(this.authURL + 'nuevo', nuevoUsuario);
    }
    registroByAdmin(nuevoUsuario) {
        return this.httpClient.post(this.authURL + 'admin/nuevo', nuevoUsuario);
    }
    newPass(usuario) {
        return this.httpClient.post(this.authURL + 'newpass', usuario);
    }
    newMail(usuario) {
        return this.httpClient.post(this.authURL + 'changemail', usuario);
    }
    newName(usuario) {
        return this.httpClient.post(this.authURL + 'changename', usuario);
    }
    newUsername(usuario) {
        return this.httpClient.post(this.authURL + 'changeusername', usuario);
    }
    cambioPass(usuario) {
        return this.httpClient.post(this.authURL + 'changepass', usuario);
    }
    addComments(usuario) {
        return this.httpClient.post(this.authURL + 'comments', usuario);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "ojj2":
/*!***************************************************!*\
  !*** ./src/app/services/daily-classes.service.ts ***!
  \***************************************************/
/*! exports provided: DailyClassesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyClassesService", function() { return DailyClassesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let DailyClassesService = class DailyClassesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.classMasterUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/master/dailyClass/';
        this.classUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/dailyClass/';
    }
    lista(page) {
        return this.httpClient.get(this.classUrl + '?page=' + page);
    }
    listaByName(page, searchValue) {
        return this.httpClient.get(this.classUrl + '?page=' + page + '&name=' + searchValue);
    }
    listaByDate(page, date) {
        return this.httpClient.get(this.classUrl + 'date?size=100&page=' + page + '&date=' + date);
    }
    detalle(id) {
        return this.httpClient.get(this.classUrl + id);
    }
    detalleForUser(id, user) {
        return this.httpClient.get(this.classUrl + id + '/user/' + user);
    }
    inscripcionesUsuario() {
        return this.httpClient.get(this.classUrl + 'user/uptodate');
    }
    inscripcionesClase(id, sessionId) {
        return this.httpClient.get(this.classUrl + id + '/inscriptions/' + sessionId);
    }
    inscripcion(idDailyClass, user, idSession) {
        return this.httpClient.post(this.classUrl + idDailyClass + '/join/' + user + '/session/' + idSession, idDailyClass);
    }
    eliminacion(idDailyClass, user, idSession) {
        return this.httpClient.post(this.classUrl + idDailyClass + '/decline/' + user + '/session/' + idSession, idDailyClass);
    }
    eliminacionAdmin(idDailyClass, user, idSession) {
        return this.httpClient.post(this.classUrl + idDailyClass + '/declinedByAdmin/' + user + '/session/' + idSession, idDailyClass);
    }
    nuevo(classMaster) {
        return this.httpClient.post(this.classUrl, classMaster);
    }
    actualizar(id, classMaster) {
        return this.httpClient.put(this.classUrl + id, classMaster);
    }
    delete(id) {
        return this.httpClient.delete(this.classUrl + id);
    }
    listaMaster(page) {
        return this.httpClient.get(this.classMasterUrl + '?page=' + page);
    }
    listaMasterByName(page, searchValue) {
        return this.httpClient.get(this.classMasterUrl + '?page=' + page + '&name=' + searchValue);
    }
    detalleMaster(id) {
        return this.httpClient.get(this.classMasterUrl + id);
    }
    nuevoMaster(classMaster) {
        return this.httpClient.post(this.classMasterUrl, classMaster);
    }
    actualizarMaster(id, classMaster) {
        return this.httpClient.put(this.classMasterUrl + id, classMaster);
    }
    deleteMaster(id) {
        return this.httpClient.delete(this.classMasterUrl + id);
    }
};
DailyClassesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DailyClassesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DailyClassesService);



/***/ }),

/***/ "otNS":
/*!**********************************************!*\
  !*** ./src/app/services/expenses.service.ts ***!
  \**********************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let ExpenseService = class ExpenseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/expense/';
    }
    lista(size) {
        return this.httpClient.get(this.url + '?size=' + size);
    }
    gastosPorAnno(size, year) {
        return this.httpClient.get(this.url + 'year/' + year + '?size=' + size);
    }
    gastosPorAnnoYMes(size, year, month) {
        return this.httpClient.get(this.url + 'year/' + year + '/month/' + month + '?size=' + size);
    }
    ingresosPorAnno(size, year) {
        return this.httpClient.get(this.url + 'incomes/year/' + year + '?size=' + size);
    }
    ingresosPorAnnoYMes(size, year, month) {
        return this.httpClient.get(this.url + 'incomes/year/' + year + '/month/' + month + '?size=' + size);
    }
    detalle(id) {
        return this.httpClient.get(this.url + id);
    }
    nuevo(trainingcenter) {
        return this.httpClient.post(this.url, trainingcenter);
    }
    actualizar(id, trainingcenter) {
        return this.httpClient.put(this.url + id, trainingcenter);
    }
    delete(id) {
        return this.httpClient.delete(this.url + id);
    }
    expensesPerYear(year) {
        return this.httpClient.get(this.url + 'summary/year/' + year);
    }
    expensesPerYearAndMonth(year, month) {
        return this.httpClient.get(this.url + 'summary/year/' + year + '/month/' + month);
    }
};
ExpenseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ExpenseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ExpenseService);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let UserService = class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.userUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/user/';
        this.userData = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/userdata/';
    }
    lista() {
        return this.httpClient.get(this.userUrl);
    }
    detalle(id) {
        return this.httpClient.get(this.userUrl + id);
    }
    findByUser(user) {
        return this.httpClient.get(this.userUrl + '?user=' + user);
    }
    nuevo(user) {
        return this.httpClient.post(this.userUrl, user);
    }
    actualizar(id, user) {
        return this.httpClient.put(this.userUrl + id, user);
    }
    delete(id) {
        return this.httpClient.delete(this.userUrl + id);
    }
    userList(regex, page) {
        return this.httpClient.get(this.userData + '?page=' + page + '&regex=' + regex);
    }
    userdataById(id) {
        return this.httpClient.get(this.userData + id);
    }
    userdataByUsername(username) {
        return this.httpClient.get(this.userData + 'username/' + username);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "r+Cp":
/*!*****************************************************!*\
  !*** ./src/app/services/training-center.service.ts ***!
  \*****************************************************/
/*! exports provided: TrainingCenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCenterService", function() { return TrainingCenterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let TrainingCenterService = class TrainingCenterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.trainingcenterUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/trainingCenter/';
    }
    lista(size) {
        return this.httpClient.get(this.trainingcenterUrl + '?size=' + size);
    }
    detalle(id) {
        return this.httpClient.get(this.trainingcenterUrl + id);
    }
    nuevo(trainingcenter) {
        return this.httpClient.post(this.trainingcenterUrl, trainingcenter);
    }
    actualizar(id, trainingcenter) {
        return this.httpClient.put(this.trainingcenterUrl + id, trainingcenter);
    }
    delete(id) {
        return this.httpClient.delete(this.trainingcenterUrl + id);
    }
};
TrainingCenterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TrainingCenterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TrainingCenterService);



/***/ }),

/***/ "xNZO":
/*!************************************************!*\
  !*** ./src/app/services/classMasterService.ts ***!
  \************************************************/
/*! exports provided: ClassMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassMasterService", function() { return ClassMasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "bXO7");




let ClassMasterService = class ClassMasterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.classMasterUrl = _environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/classMaster/';
    }
    lista(page) {
        return this.httpClient.get(this.classMasterUrl + '?page=' + page);
    }
    listaCompleta() {
        return this.httpClient.get(this.classMasterUrl + '?page=0&size=10000');
    }
    listaByName(page, searchValue) {
        return this.httpClient.get(this.classMasterUrl + '?page=' + page + '&name=' + searchValue);
    }
    detalle(id) {
        return this.httpClient.get(this.classMasterUrl + id);
    }
    nuevo(classMaster) {
        return this.httpClient.post(this.classMasterUrl, classMaster);
    }
    actualizar(id, classMaster) {
        return this.httpClient.put(this.classMasterUrl + id, classMaster);
    }
    delete(id) {
        return this.httpClient.delete(this.classMasterUrl + id);
    }
};
ClassMasterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ClassMasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ClassMasterService);



/***/ })

}]);
//# sourceMappingURL=common.js.map