(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-encuestas-encuestas-module"],{

/***/ "BJIc":
/*!*****************************************************!*\
  !*** ./src/app/pages/encuestas/encuestas.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#ff7000;\n}\n\nion-content {\n  --ion-background-color:#444444;\n}\n\nion-card {\n  --ion-background-color:#ffffff;\n}\n\n.boton {\n  background-color: #ff7000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbmN1ZXN0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUFhLDhCQUFBO0FBRWI7O0FBQUE7RUFBVyw4QkFBQTtBQUlYOztBQUhBO0VBQ0kseUJBQUE7QUFNSiIsImZpbGUiOiJlbmN1ZXN0YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmNzAwMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7IC0taW9uLWJhY2tncm91bmQtY29sb3I6IzQ0NDQ0NDsgfVxyXG5cclxuaW9uLWNhcmR7ICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7fVxyXG4uYm90b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjcwMDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "DRzC":
/*!*****************************************************!*\
  !*** ./src/app/pages/encuestas/encuestas.module.ts ***!
  \*****************************************************/
/*! exports provided: EncuestasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasPageModule", function() { return EncuestasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encuestas-routing.module */ "ZFER");
/* harmony import */ var _encuestas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuestas.page */ "Ryok");







let EncuestasPageModule = class EncuestasPageModule {
};
EncuestasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_5__["EncuestasPageRoutingModule"]
        ],
        declarations: [_encuestas_page__WEBPACK_IMPORTED_MODULE_6__["EncuestasPage"]]
    })
], EncuestasPageModule);



/***/ }),

/***/ "Ryok":
/*!***************************************************!*\
  !*** ./src/app/pages/encuestas/encuestas.page.ts ***!
  \***************************************************/
/*! exports provided: EncuestasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasPage", function() { return EncuestasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_encuestas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./encuestas.page.html */ "cEp8");
/* harmony import */ var _encuestas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encuestas.page.scss */ "BJIc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_service_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service-todo.service */ "Zwmr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let EncuestasPage = class EncuestasPage {
    constructor(todoService, alertController) {
        this.todoService = todoService;
        this.alertController = alertController;
        this.id = null;
    }
    ngOnInit() {
        this.todoService.getEncuestas().subscribe((todos) => {
            console.log('Todoss', todos);
            this.encuestas = todos;
        });
    }
    eliminar(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmar!',
                message: 'Estas seguro de eliminar esta encuesta!!!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.todoService.removeEncuesta(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EncuestasPage.ctorParameters = () => [
    { type: _services_service_todo_service__WEBPACK_IMPORTED_MODULE_4__["ServiceTodoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EncuestasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-encuestas',
        template: _raw_loader_encuestas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_encuestas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EncuestasPage);



/***/ }),

/***/ "ZFER":
/*!*************************************************************!*\
  !*** ./src/app/pages/encuestas/encuestas-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EncuestasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasPageRoutingModule", function() { return EncuestasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _encuestas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuestas.page */ "Ryok");




const routes = [
    {
        path: '',
        component: _encuestas_page__WEBPACK_IMPORTED_MODULE_3__["EncuestasPage"]
    }
];
let EncuestasPageRoutingModule = class EncuestasPageRoutingModule {
};
EncuestasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EncuestasPageRoutingModule);



/***/ }),

/***/ "cEp8":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/encuestas/encuestas.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\">Inicio</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <ion-card *ngFor=\"let encuesta of encuestas\" >\n      <div align=\"center\">DATOS DE LA ENCUESTA</div>\n      <ion-grid >\n       <ion-row>\n         <ion-col size=\"6\">\n          <ion-item>\n            <ion-label>{{ encuesta.titulo }}</ion-label>\n          </ion-item>\n         </ion-col>\n         <ion-col size=\"5\">\n           <ion-item>\n            <ion-label>{{ encuesta.fecha_inicio }}</ion-label>\n           </ion-item>\n         </ion-col>\n         <ion-col size=\"1\">\n          <ion-button fill=\"clear\" class=\"boton\" [routerLink]=\"['/crearencuesta', encuesta.id]\" > <ion-icon color=\"light\" name=\"create\"></ion-icon> </ion-button>\n        </ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"6\">\n         <ion-item>\n          <ion-label>{{ encuesta.descripcion }}</ion-label>\n         </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n         <ion-item>\n          <ion-label>{{ encuesta.fecha_final }}</ion-label>\n         </ion-item>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button color=\"danger\" (click)=\"eliminar(encuesta.id)\"><ion-icon name=\"trash\" ></ion-icon> </ion-button>\n        </ion-col>\n      </ion-row>\n     </ion-grid>\n    </ion-card>\n  </ion-card-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-encuestas-encuestas-module.js.map