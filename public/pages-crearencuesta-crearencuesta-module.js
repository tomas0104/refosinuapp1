(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crearencuesta-crearencuesta-module"],{

/***/ "O4p8":
/*!*************************************************************!*\
  !*** ./src/app/pages/crearencuesta/crearencuesta.module.ts ***!
  \*************************************************************/
/*! exports provided: CrearencuestaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearencuestaPageModule", function() { return CrearencuestaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _crearencuesta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crearencuesta-routing.module */ "yFgF");
/* harmony import */ var _crearencuesta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crearencuesta.page */ "fs1u");







let CrearencuestaPageModule = class CrearencuestaPageModule {
};
CrearencuestaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crearencuesta_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearencuestaPageRoutingModule"]
        ],
        declarations: [_crearencuesta_page__WEBPACK_IMPORTED_MODULE_6__["CrearencuestaPage"]]
    })
], CrearencuestaPageModule);



/***/ }),

/***/ "fs1u":
/*!***********************************************************!*\
  !*** ./src/app/pages/crearencuesta/crearencuesta.page.ts ***!
  \***********************************************************/
/*! exports provided: CrearencuestaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearencuestaPage", function() { return CrearencuestaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crearencuesta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crearencuesta.page.html */ "wY2s");
/* harmony import */ var _crearencuesta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crearencuesta.page.scss */ "mEG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_service_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/service-todo.service */ "Zwmr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let CrearencuestaPage = class CrearencuestaPage {
    constructor(todoService, db, toastCtrl, nav, route, loadingcontroller) {
        this.todoService = todoService;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.route = route;
        this.loadingcontroller = loadingcontroller;
        this.encuesta = {};
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        if (this.id) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingcontroller.create({
                message: 'Cargando....'
            });
            yield loading.present();
            this.todoService.getEncuesta(this.id).subscribe(todo => {
                loading.dismiss();
                ;
                this.encuesta = todo;
            });
        });
    }
    crearEncuesta() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.formValidation()) {
                let loading = yield this.loadingcontroller.create({
                    message: 'Guardando...'
                });
                loading.present();
                try {
                    yield loading.present();
                    if (this.id) {
                        //actualizar
                        this.todoService.upDateEncuesta(this.encuesta, this.id).then(() => {
                            loading.dismiss();
                            this.nav.navigateForward('/preguntas');
                        });
                    }
                    else {
                        //agregar
                        const id = Math.random().toString(36).substring(2);
                        yield this.db.collection('encuesta').doc(id).set({
                            id: id,
                            titulo: this.encuesta.titulo,
                            descripcion: this.encuesta.descripcion,
                            fecha_inicio: this.encuesta.fecha_inicio,
                            fecha_final: this.encuesta.fecha_final,
                            estado: this.encuesta.estado,
                        });
                        console.log(this.id);
                        loading.dismiss();
                        this.nav.navigateForward('/preguntas');
                    }
                }
                catch (e) {
                    this.showToast(e);
                }
                loading.dismiss();
            }
        });
    }
    formValidation() {
        if (!this.encuesta.titulo) {
            // show toast message
            this.showToast("Por favor digite el titulo");
            return false;
        }
        if (!this.encuesta.descripcion) {
            // show toast message
            this.showToast("Por favor digite descripcion");
            return false;
        }
        if (!this.encuesta.fecha_inicio) {
            // show toast message
            this.showToast("Por favor digite la fecha de inicio");
            return false;
        }
        if (!this.encuesta.fecha_final) {
            // show toast message
            this.showToast("Por favor digite la fecha final");
            return false;
        }
        return true;
    }
    showToast(message) {
        this.toastCtrl
            .create({
            message: message,
            duration: 3000
        })
            .then(toastData => toastData.present());
    }
};
CrearencuestaPage.ctorParameters = () => [
    { type: _services_service_todo_service__WEBPACK_IMPORTED_MODULE_6__["ServiceTodoService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
CrearencuestaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-crearencuesta',
        template: _raw_loader_crearencuesta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crearencuesta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrearencuestaPage);



/***/ }),

/***/ "mEG2":
/*!*************************************************************!*\
  !*** ./src/app/pages/crearencuesta/crearencuesta.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#ff7000;\n}\n\nion-content {\n  --ion-background-color:#444444;\n}\n\nion-card {\n  --ion-background-color:#ffffff;\n}\n\n.boton {\n  background-color: #ff7000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhcmVuY3Vlc3RhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFBYSw4QkFBQTtBQUViOztBQUFBO0VBQVcsOEJBQUE7QUFJWDs7QUFIQTtFQUNJLHlCQUFBO0FBTUoiLCJmaWxlIjoiY3JlYXJlbmN1ZXN0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmY3MDAwO1xyXG59XHJcblxyXG5pb24tY29udGVudHsgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNDQ0NDQ0OyB9XHJcblxyXG5pb24tY2FyZHsgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjt9XHJcbi5ib3RvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmNzAwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "wY2s":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crearencuesta/crearencuesta.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\">Inicio</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-card-content>\n   <ion-card>\n     <div align=\"center\">DATOS DE LA ENCUESTA</div>\n     <ion-grid>\n      <ion-row>\n        <ion-col>\n         <ion-item *ngIf=\"encuesta\" position=\"stacked\">\n           <ion-input required  type=\"text\" placeholder=\"Titulo de la encuesta\" [(ngModel)]=\"encuesta.titulo\" ></ion-input>\n         </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item  *ngIf=\"encuesta\">\n            <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n            <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"2020-01-01\" max=\"2050-12-31\" [(ngModel)]=\"encuesta.fecha_inicio\" ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n       <ion-col>\n        <ion-item *ngIf=\"encuesta\" position=\"stacked\">\n          <ion-input type=\"text\" placeholder=\"Descripción\" [(ngModel)]=\"encuesta.descripcion\" ></ion-input>\n        </ion-item>\n       </ion-col>\n       <ion-col>\n        <ion-item *ngIf=\"encuesta\">\n          <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n          <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"2020-01-01\" max=\"2050-12-31\" [(ngModel)]=\"encuesta.fecha_final\" ></ion-datetime>\n        </ion-item>\n       </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n        <ion-item *ngIf=\"encuesta\">\n          <ion-label>Estado</ion-label>\n          <ion-toggle checked=\"true\" [(ngModel)]=\"encuesta.estado\" ></ion-toggle>\n        </ion-item>\n        </ion-col>\n    </ion-row>\n    </ion-grid>\n   </ion-card>\n   <div align=\"center\"><ion-button  size=\"large\" shape=\"round\" (click)=\"crearEncuesta()\" >Siguiente</ion-button></div>\n </ion-card-content>\n</ion-content>\n");

/***/ }),

/***/ "yFgF":
/*!*********************************************************************!*\
  !*** ./src/app/pages/crearencuesta/crearencuesta-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CrearencuestaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearencuestaPageRoutingModule", function() { return CrearencuestaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crearencuesta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crearencuesta.page */ "fs1u");




const routes = [
    {
        path: '',
        component: _crearencuesta_page__WEBPACK_IMPORTED_MODULE_3__["CrearencuestaPage"]
    }
];
let CrearencuestaPageRoutingModule = class CrearencuestaPageRoutingModule {
};
CrearencuestaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearencuestaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-crearencuesta-crearencuesta-module.js.map