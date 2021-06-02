(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resultado-resultado-module"],{

/***/ "+cze":
/*!*****************************************************!*\
  !*** ./src/app/pages/resultado/resultado.module.ts ***!
  \*****************************************************/
/*! exports provided: ResultadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPageModule", function() { return ResultadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resultado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resultado-routing.module */ "sNZ2");
/* harmony import */ var _resultado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultado.page */ "0DDD");







let ResultadoPageModule = class ResultadoPageModule {
};
ResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resultado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultadoPageRoutingModule"]
        ],
        declarations: [_resultado_page__WEBPACK_IMPORTED_MODULE_6__["ResultadoPage"]]
    })
], ResultadoPageModule);



/***/ }),

/***/ "0DDD":
/*!***************************************************!*\
  !*** ./src/app/pages/resultado/resultado.page.ts ***!
  \***************************************************/
/*! exports provided: ResultadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPage", function() { return ResultadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resultado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resultado.page.html */ "IzaA");
/* harmony import */ var _resultado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resultado.page.scss */ "TfhU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ResultadoPage = class ResultadoPage {
    constructor() { }
    ngOnInit() {
    }
};
ResultadoPage.ctorParameters = () => [];
ResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resultado',
        template: _raw_loader_resultado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resultado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResultadoPage);



/***/ }),

/***/ "IzaA":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resultado/resultado.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>resultado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "TfhU":
/*!*****************************************************!*\
  !*** ./src/app/pages/resultado/resultado.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRhZG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "sNZ2":
/*!*************************************************************!*\
  !*** ./src/app/pages/resultado/resultado-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ResultadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPageRoutingModule", function() { return ResultadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resultado.page */ "0DDD");




const routes = [
    {
        path: '',
        component: _resultado_page__WEBPACK_IMPORTED_MODULE_3__["ResultadoPage"]
    }
];
let ResultadoPageRoutingModule = class ResultadoPageRoutingModule {
};
ResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultadoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-resultado-resultado-module.js.map