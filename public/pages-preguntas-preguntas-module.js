(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preguntas-preguntas-module"],{

/***/ "9u1V":
/*!*****************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.module.ts ***!
  \*****************************************************/
/*! exports provided: PreguntasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPageModule", function() { return PreguntasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _preguntas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preguntas-routing.module */ "RRjT");
/* harmony import */ var _preguntas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preguntas.page */ "nOlG");







let PreguntasPageModule = class PreguntasPageModule {
};
PreguntasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _preguntas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreguntasPageRoutingModule"]
        ],
        declarations: [_preguntas_page__WEBPACK_IMPORTED_MODULE_6__["PreguntasPage"]]
    })
], PreguntasPageModule);



/***/ }),

/***/ "BzJK":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preguntas/preguntas.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\">Inicio</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-card-content>\n   <ion-card>\n    <ion-list>\n      <ion-list-header>\n        <ion-label>\n          Lista de selección\n        </ion-label>\n      </ion-list-header>\n      \n     <ion-item>\n        <ion-label>Encuestas</ion-label>\n        <ion-select [(ngModel)]=\"pre.idencuesta\" placeholder=\"Seleccione una encuesta\">\n          <ion-item *ngFor=\"let encuesta of encuestas\">\n            <ion-select-option value =\"{{encuesta.id}}\">{{encuesta.titulo}}</ion-select-option>\n          </ion-item>\n        </ion-select>\n      </ion-item>\n      <br>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-item >\n              <ion-label>Tipo de pregunta</ion-label>\n              <ion-select name=\"tipop\" [(ngModel)]=\"pre.tipop\" placeholder=\"Seleccione un tipo de pregunta\">\n                <ion-select-option value =\"1\">Abierta</ion-select-option>\n                <ion-select-option value =\"2\">Cerrada</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button >Guardar encuesta</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n   </ion-card>\n </ion-card-content>\n  <ion-card-content>\n    <ion-card>\n      <div *ngIf=\"pre.tipop == 1 ; then thenBlock\"> </div>\n    <ng-template #thenBlock>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-item >\n              <ion-input type=\"text\" name=\"pregunta1\" [(ngModel)]=\"pre.pregunta1\" placeholder=\"Pregunta\" ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\">\n           <ion-button (click)=\"saveTodo()\">Añadir pregunta</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item > <ion-input required  type=\"text\" [(ngModel)]=\"pre.respuesta1\"  placeholder=\"Respuesta 1\" ></ion-input></ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item > <ion-input required  type=\"text\" [(ngModel)]=\"pre.respuesta2\" placeholder=\"Respuesta 2\" ></ion-input></ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item > <ion-input type=\"text\" [(ngModel)]=\"pre.respuesta3\" placeholder=\"Respuesta 3\" ></ion-input></ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item > <ion-input type=\"text\" [(ngModel)]=\"pre.respuesta4\" placeholder=\"Respuesta 4\" ></ion-input></ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ng-template>\n    <div *ngIf=\"pre.tipop == 2 ; then thenBlock1\"> </div>\n    <ng-template #thenBlock1>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Pregunta\" ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\">\n           <ion-button>Añadir pregunta</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label>Si</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>No</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ng-template>\n    <div *ngIf=\"pre.tipop == '' ; then vacio\"> </div>\n    <ng-template #vacio>\n    <ion-label>Selecciona un tipo pregunta</ion-label>\n    </ng-template>\n    </ion-card>\n  </ion-card-content>\n  \n    <ion-card-content>\n      <ion-card *ngFor=\"let pregunta of preguntasencuesta\">\n        <div>\n          <ion-grid>\n          <div >\n            <div align=\"left\">\n              <ion-button  color=\"danger\" (click)=\"onRemoveTodo(pregunta.id)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n            </div>\n              <ion-row>\n                <ion-col>\n                  <ion-item>{{pregunta.pregunta1}}</ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>{{pregunta.respuesta1}}</ion-item>\n                </ion-col>\n                <ion-col>\n                 <ion-item> {{pregunta.respuesta2}}</ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                 <ion-item> {{pregunta.respuesta3}}</ion-item>\n                </ion-col>\n                <ion-col>\n                 <ion-item> {{pregunta.respuesta4}}</ion-item>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </ion-card>\n    </ion-card-content>\n\n</ion-content>\n");

/***/ }),

/***/ "RRjT":
/*!*************************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PreguntasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPageRoutingModule", function() { return PreguntasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _preguntas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preguntas.page */ "nOlG");




const routes = [
    {
        path: '',
        component: _preguntas_page__WEBPACK_IMPORTED_MODULE_3__["PreguntasPage"]
    }
];
let PreguntasPageRoutingModule = class PreguntasPageRoutingModule {
};
PreguntasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreguntasPageRoutingModule);



/***/ }),

/***/ "nOlG":
/*!***************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.page.ts ***!
  \***************************************************/
/*! exports provided: PreguntasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPage", function() { return PreguntasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_preguntas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./preguntas.page.html */ "BzJK");
/* harmony import */ var _preguntas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preguntas.page.scss */ "vWpg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_service_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service-todo.service */ "Zwmr");
/* harmony import */ var _services_pregunta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pregunta.service */ "rzde");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let PreguntasPage = class PreguntasPage {
    constructor(todoService, preguntaservice, db, toastCtrl, nav, route, loadingcontroller) {
        this.todoService = todoService;
        this.preguntaservice = preguntaservice;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.route = route;
        this.loadingcontroller = loadingcontroller;
        this.id = null;
        this.pre = {
            respuesta3: '',
            respuesta4: ''
        };
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        if (this.id) {
            this.loadTodo();
        }
        this.todoEncuentas();
    }
    loadTodo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingcontroller.create({
                message: 'Cargando....'
            });
            yield loading.present();
            this.preguntaservice.getPregunta(this.id).subscribe(todo => {
                loading.dismiss();
                ;
                this.pre = todo;
            });
        });
    }
    todoEncuentas() {
        this.todoService.getEncuestas().subscribe((res) => {
            this.encuestas = res;
            console.log('Encuestas', res);
        });
    }
    saveTodo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.formValidation()) {
                let loading = yield this.loadingcontroller.create({
                    message: 'Guardando...'
                });
                loading.present();
                try {
                    yield loading.present();
                    if (this.id) {
                        this.preguntaservice.upDatePregunta(this.pre, this.id).then(() => {
                            loading.dismiss();
                            this.nav.navigateForward('/');
                        });
                    }
                    else {
                        const id = Math.random().toString(36).substring(2);
                        yield this.db.collection('pregunta').doc(id).set({
                            id: id,
                            idencuesta: this.pre.idencuesta,
                            pregunta1: this.pre.pregunta1,
                            respuesta1: this.pre.respuesta1,
                            respuesta2: this.pre.respuesta2,
                            respuesta3: this.pre.respuesta3,
                            respuesta4: this.pre.respuesta4,
                            tipop: this.pre.tipop,
                        });
                        console.log(this.id);
                        loading.dismiss();
                        this.pre.pregunta1 = '';
                        this.pre.respuesta1 = '';
                        this.pre.respuesta2 = '';
                        this.pre.respuesta3 = '';
                        this.pre.respuesta4 = '';
                        this.todoPreguntas();
                    }
                }
                catch (e) {
                    this.showToast(e);
                }
                loading.dismiss();
            }
        });
    }
    onRemoveTodo(idTodo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.preguntaservice.removePregunta(idTodo);
        });
    }
    todoPreguntas() {
        this.db.collection('pregunta', ref => ref.where('idencuesta', '==', this.pre.idencuesta)
            .orderBy('pregunta1', 'desc')).valueChanges().subscribe(res => {
            this.preguntasencuesta = res;
        });
    }
    formValidation() {
        if (!this.pre.pregunta1) {
            // show toast message
            this.showToast("Por favor digite la pregunta");
            return false;
        }
        if (!this.pre.respuesta1) {
            // show toast message
            this.showToast("Por favor digite por lo menos la respuesta uno y dos");
            return false;
        }
        if (!this.pre.respuesta2) {
            // show toast message
            this.showToast("Por favor digite por lo menos la respuesta uno y dos");
            return false;
        }
        if (!this.pre.idencuesta) {
            // show toast message
            this.showToast("Por favor seleccione la encuesta");
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
PreguntasPage.ctorParameters = () => [
    { type: _services_service_todo_service__WEBPACK_IMPORTED_MODULE_4__["ServiceTodoService"] },
    { type: _services_pregunta_service__WEBPACK_IMPORTED_MODULE_5__["PreguntaService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
PreguntasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-preguntas',
        template: _raw_loader_preguntas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_preguntas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PreguntasPage);



/***/ }),

/***/ "rzde":
/*!**********************************************!*\
  !*** ./src/app/services/pregunta.service.ts ***!
  \**********************************************/
/*! exports provided: PreguntaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaService", function() { return PreguntaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let PreguntaService = class PreguntaService {
    constructor(db) {
        this.preguntaCollection = db.collection('pregunta');
        this.pregunta = this.preguntaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getPreguntas() {
        return this.pregunta;
    }
    getPregunta(id) {
        return this.preguntaCollection.doc(id).valueChanges();
    }
    addPregunta(pre) {
        return this.preguntaCollection.add(pre);
    }
    upDatePregunta(pregunta, id) {
        return this.preguntaCollection.doc(id).update(pregunta);
    }
    removePregunta(id) {
        return this.preguntaCollection.doc(id).delete();
    }
};
PreguntaService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PreguntaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PreguntaService);



/***/ }),

/***/ "vWpg":
/*!*****************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#ff7000;\n}\n\nion-content {\n  --ion-background-color:#444444;\n}\n\nion-card {\n  --ion-background-color:#ffffff;\n}\n\n.boton {\n  background-color: #ff7000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmVndW50YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUFhLDhCQUFBO0FBRWI7O0FBQUE7RUFBVyw4QkFBQTtBQUlYOztBQUhBO0VBQ0kseUJBQUE7QUFNSiIsImZpbGUiOiJwcmVndW50YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmNzAwMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7IC0taW9uLWJhY2tncm91bmQtY29sb3I6IzQ0NDQ0NDsgfVxyXG5cclxuaW9uLWNhcmR7ICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7fVxyXG4uYm90b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjcwMDA7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-preguntas-preguntas-module.js.map