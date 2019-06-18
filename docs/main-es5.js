(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n  <app-top-bar></app-top-bar>\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Cart</h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <span>\r\n        <button mat-stroked-button color=\"warn\" class=\"bright\" (click)=\"clearCart()\">Clear Cart</button>\r\n        <button mat-stroked-button color=\"primary\" routerLink=\"/shipping\">Shipping Prices</button>\r\n      </span>\r\n\r\n      <div class=\"cart-item\" *ngFor=\"let item of items\">\r\n\r\n        <span>{{ item.name }}</span>\r\n        <span>{{ item.price | currency }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"column\">\r\n      <div class=\"sticky\">\r\n        <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\r\n\r\n          <div>\r\n            <label>Name</label>\r\n            <input type=\"text\" formControlName=\"name\">\r\n          </div>\r\n\r\n          <div>\r\n            <label>Address</label>\r\n            <input type=\"text\" formControlName=\"address\">\r\n          </div>\r\n\r\n          <span>\r\n            <button mat-raised-button class=\"button\" type=\"submit\">Purchase</button>\r\n          </span>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/here-map/here-map.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/here-map/here-map.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\" #map [style.height]=\"height\" style=\"width: 100%;\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nearby/nearby.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nearby/nearby.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"out-container\">\r\n  <h1>Location Detail</h1>\r\n  <p>Fredericton</p>\r\n</div>\r\n<here-map class=\"map\" #map appId=\"UX8kI6uGEss5wV7qSesH\" appCode=\"AU7LpsmWScRwLxE_50lOzg\"></here-map>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"background-picture\" src=\"./assets/{{product.picture}}background.jpg\"/>\r\n\r\n<div class=\"container\">\r\n    <div class=\"top-detail\">\r\n      <div *ngIf=\"product\">\r\n        <h3>{{ product.name }}</h3>\r\n        <div class=\"sticky\">\r\n          <img class=\"picleft\" src=\"./assets/{{product.picture}}.jpg\" />\r\n          <h4>{{ product.price | currency }}</h4>\r\n          <span>\r\n            <button mat-raised-button color=\"primary\" (click)=\"addToCart(product)\">\r\n              Add to Cart\r\n            </button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n        <p>{{ product.description }}</p>\r\n\r\n\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Products</h1>\r\n  <mat-list>\r\n    <div *ngFor=\"let product of products; index as productId\">\r\n      <mat-nav-list>\r\n        <a mat-list-item role=\"navigation\" [routerLink]=\"['/products', productId]\">\r\n          <h2 matLine>\r\n            <h2 [title]=\"product.name + ' details'\">\r\n              {{ product.name }}\r\n            </h2>\r\n          </h2>\r\n\r\n          <p matLine *ngIf=\"product.description\" class=\"description\">\r\n            Description: {{ product.description }}\r\n          </p>\r\n\r\n        </a>\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-list>\r\n</div>\r\n  <!--\r\n  Copyright Google LLC. All Rights Reserved.\r\n  Use of this source code is governed by an MIT-style license that\r\n  can be found in the LICENSE file at http://angular.io/license\r\n  -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipping/shipping.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <h1>Shipping Prices</h1>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <button class=\"return-button\" mat-stroked-button [routerLink]=\"['/cart']\"><i class=\"material-icons\">keyboard_return</i>Back</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"shipping-item\" *ngFor=\"let shipping of shippingCosts | async\">\r\n    <span>{{ shipping.type }}</span>\r\n    <span>{{ shipping.price | currency }}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\r\n  <a [routerLink]=\"['/']\">\r\n    <h1>Dat's Angular Store</h1>\r\n  </a>\r\n  <span class=\"spacer\"></span>\r\n\r\n  <a [routerLink]=\"['/nearby']\"><mat-icon class=\"material-icons whiteicons\">business</mat-icon></a>\r\n  <a [routerLink]=\"['/cart']\"><mat-icon matBadge={{items.length}} matBadgeSize=\"small\" class=\"material-icons whiteicons\">shopping_cart</mat-icon></a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-link{\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.container {\r\n  margin-top: 50px;\r\n  padding-right: 10px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\nbody {\r\n  background-color: green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _nearby_nearby_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nearby/nearby.component */ "./src/app/nearby/nearby.component.ts");
/* harmony import */ var _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./here-map/here-map.component */ "./src/app/here-map/here-map.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductListComponent"] },
                    { path: 'nearby', component: _nearby_nearby_component__WEBPACK_IMPORTED_MODULE_12__["NearbyComponent"] },
                    { path: 'products/:productId', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"] },
                    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
                    { path: 'shipping', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__["ShippingComponent"] },
                ]),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_8__["TopBarComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductListComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
                _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__["ShippingComponent"],
                _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_13__["HereMapComponent"],
                _nearby_nearby_component__WEBPACK_IMPORTED_MODULE_12__["NearbyComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.items = [];
    }
    CartService.prototype.addToCart = function (product) {
        this.items.push(product);
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.clearCart = function () {
        this.items.length = 0;
        return this.items;
    };
    CartService.prototype.getShippingPrices = function () {
        return this.http.get('./assets/shipping.json');
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bright {\r\n  margin-top: 5px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 0 4px;\r\n}\r\n\r\n.column {\r\n  flex: 50%;\r\n  padding: 0 50px;\r\n}\r\n\r\n.sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyaWdodCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nOiAwIDRweDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZmxleDogNTAlO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");




var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    CartComponent.prototype.clearCart = function () {
        this.items = this.cartService.clearCart();
    };
    CartComponent.prototype.onSubmit = function (customerData) {
        // Process checkout data here
        if (customerData.name && customerData.address) {
            console.warn('Your order has been submitted', customerData);
            this.items = this.cartService.clearCart();
            this.checkoutForm.reset();
        }
        else {
            window.alert('Please fill out the form');
        }
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/here-map/here-map.component.css":
/*!*************************************************!*\
  !*** ./src/app/here-map/here-map.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcmUtbWFwL2hlcmUtbWFwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/here-map/here-map.component.ts":
/*!************************************************!*\
  !*** ./src/app/here-map/here-map.component.ts ***!
  \************************************************/
/*! exports provided: HereMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereMapComponent", function() { return HereMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HereMapComponent = /** @class */ (function () {
    function HereMapComponent(http) {
        this.http = http;
        this.height = window.innerHeight - 95 + "px";
    }
    HereMapComponent.prototype.ngOnInit = function () {
        this.srcTiles = "https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?app_id=" + this.appId + "&app_code=" + this.appCode + "&ppi=320";
    };
    HereMapComponent.prototype.ngAfterViewInit = function () {
        this.map = L.map(this.mapElement.nativeElement, {
            center: [45.9644093, -66.6397244],
            zoom: 14,
            layers: [L.tileLayer(this.srcTiles)],
            zoomControl: true
        });
    };
    HereMapComponent.prototype.dropMarker = function (address) {
        var _this = this;
        this.http.get("https://geocoder.api.here.com/6.2/geocode.json", {
            params: {
                app_id: this.appId,
                app_code: this.appCode,
                searchtext: address
            }
        }).subscribe(function (result) {
            var location = result['Response']['View'][0]['Result'][0]['Location']['DisplayPosition'];
            var marker = new L.Marker([location['Latitude'], location['Longitude']]);
            marker.addTo(_this.map);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HereMapComponent.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appId"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HereMapComponent.prototype, "appId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appCode"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HereMapComponent.prototype, "appCode", void 0);
    HereMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'here-map',
            template: __webpack_require__(/*! raw-loader!./here-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/here-map/here-map.component.html"),
            styles: [__webpack_require__(/*! ./here-map.component.css */ "./src/app/here-map/here-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HereMapComponent);
    return HereMapComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nearby/nearby.component.css":
/*!*********************************************!*\
  !*** ./src/app/nearby/nearby.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".out-container {\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 5%;\r\n  padding: 25px;\r\n  background-color: white;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .out-container {\r\n    top:80%;\r\n    bottom: 0%;\r\n    left:10%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVhcmJ5L25lYXJieS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixRQUFRO0VBQ1IsUUFBUTtFQUNSLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRTtJQUNFLE9BQU87SUFDUCxVQUFVO0lBQ1YsUUFBUTtFQUNWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uZWFyYnkvbmVhcmJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0LWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNSU7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAub3V0LWNvbnRhaW5lciB7XHJcbiAgICB0b3A6ODAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGxlZnQ6MTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nearby/nearby.component.ts":
/*!********************************************!*\
  !*** ./src/app/nearby/nearby.component.ts ***!
  \********************************************/
/*! exports provided: NearbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyComponent", function() { return NearbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../here-map/here-map.component */ "./src/app/here-map/here-map.component.ts");



var NearbyComponent = /** @class */ (function () {
    function NearbyComponent() {
    }
    NearbyComponent.prototype.ngOnInit = function () { };
    NearbyComponent.prototype.ngAfterViewInit = function () {
        this.mapElement.dropMarker("oromocto, nb");
        this.mapElement.dropMarker("fredericton, nb");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_2__["HereMapComponent"])
    ], NearbyComponent.prototype, "mapElement", void 0);
    NearbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nearby',
            template: __webpack_require__(/*! raw-loader!./nearby.component.html */ "./node_modules/raw-loader/index.js!./src/app/nearby/nearby.component.html"),
            styles: [__webpack_require__(/*! ./nearby.component.css */ "./src/app/nearby/nearby.component.css")]
        })
    ], NearbyComponent);
    return NearbyComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picleft{\r\n  align-items:flex-start;\r\n  max-width:30vw;\r\n}\r\n\r\n  .column p {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n  .background-picture {\r\n  margin-top: 50px;\r\n  width: 100%;\r\n  position: fixed;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\n  .container {\r\n  margin-top: 20vw;\r\n  background-color: #ededed;\r\n}\r\n\r\n  .top-detail {\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  margin-bottom: 50px;\r\n  margin-top: -10vw;\r\n  padding:20px;\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0VBRUU7SUFDRSxlQUFlO0VBQ2pCOztFQUVGO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1AsV0FBVztBQUNiOztFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY2xlZnR7XHJcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICBtYXgtd2lkdGg6MzB2dztcclxufVxyXG5cclxuICAuY29sdW1uIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtcGljdHVyZSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG59XHJcblxyXG4udG9wLWRldGFpbCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwdnc7XHJcbiAgcGFkZGluZzoyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, cartService, _snackBar) {
        this.route = route;
        this.cartService = cartService;
        this._snackBar = _snackBar;
    }
    ProductDetailsComponent.prototype.addToCart = function (product) {
        this._snackBar.open('Added to Cart', 'Dismiss', {
            duration: 2000,
        });
        this.cartService.addToCart(product);
    };
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.product = _products__WEBPACK_IMPORTED_MODULE_3__["products"][+params.get('productId')];
        });
    };
    ProductDetailsComponent.prototype.onNotify = function () {
        this._snackBar.open('You will be notified when the product goes on sale', 'Dismiss', {
            duration: 2000,
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description {\r\n  white-space: nowrap;\r\n  width: auto;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
    }
    ProductListComponent.prototype.share = function () {
        window.alert('The product has been shared!');
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/products.ts":
/*!*****************************!*\
  !*** ./src/app/products.ts ***!
  \*****************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [
    {
        name: 'Google Home Max',
        picture: 'homemax',
        price: 799,
        description: [
            'The best Smart-Speaker out there. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit. Sed id semper risus in hendrerit gravida rutrum quisque non. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Id aliquet risus feugiat in. Eu non diam phasellus vestibulum lorem sed. Nisi quis eleifend quam adipiscing vitae. Ut etiam sit amet nisl purus in mollis. Augue neque gravida in fermentum et sollicitudin. Nunc sed augue lacus viverra. Felis bibendum ut tristique et egestas.',
            'Lorem ipsum dolor sit amet consectetur adipiscing.Nulla aliquet enim tortor at auctor urna.At varius vel pharetra vel turpis nunc.Duis at tellus at urna condimentum mattis pellentesque.Vitae sapien pellentesque habitant morbi.Neque viverra justo nec ultrices dui sapien eget mi.Diam volutpat commodo sed egestas egestas fringilla.Adipiscing bibendum est ultricies integer quis auctor elit.Risus at ultrices mi tempus.Erat pellentesque adipiscing commodo elit at.Montes nascetur ridiculus mus mauris vitae.Ultrices gravida dictum fusce ut placerat.Integer feugiat scelerisque varius morbi.',
            'Sagittis orci a scelerisque purus semper eget.Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.Pretium viverra suspendisse potenti nullam ac tortor.Ut venenatis tellus in metus vulputate eu scelerisque felis.Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.Eu mi bibendum neque egestas.Suscipit adipiscing bibendum est ultricies integer quis auctor.Risus nullam eget felis eget nunc.Habitasse platea dictumst quisque sagittis.Quis risus sed vulputate odio ut enim blandit volutpat maecenas.At quis risus sed vulputate odio ut.Et netus et malesuada fames ac turpis.Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.',
            'A pellentesque sit amet porttitor eget dolor.Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.Urna nunc id cursus metus aliquam eleifend mi in nulla.Arcu cursus vitae congue mauris rhoncus aenean vel elit.Mauris pharetra et ultrices neque.Magna ac placerat vestibulum lectus mauris ultrices eros.Ultrices in iaculis nunc sed augue lacus viverra vitae.Phasellus egestas tellus rutrum tellus.Facilisis sed odio morbi quis commodo odio.Lectus urna duis convallis convallis.Purus viverra accumsan in nisl nisi scelerisque.Leo a diam sollicitudin tempor id eu.Ipsum dolor sit amet consectetur adipiscing elit duis.Ullamcorper sit amet risus nullam.Sodales ut eu sem integer vitae justo eget.'
        ]
    },
    {
        name: 'Google Home Mini',
        picture: 'homemini',
        price: 699,
        description: ['A also-great speaker. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit. Sed id semper risus in hendrerit gravida rutrum quisque non. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Id aliquet risus feugiat in. Eu non diam phasellus vestibulum lorem sed. Nisi quis eleifend quam adipiscing vitae. Ut etiam sit amet nisl purus in mollis. Augue neque gravida in fermentum et sollicitudin. Nunc sed augue lacus viverra. Felis bibendum ut tristique et egestas.',
            'Lorem ipsum dolor sit amet consectetur adipiscing.Nulla aliquet enim tortor at auctor urna.At varius vel pharetra vel turpis nunc.Duis at tellus at urna condimentum mattis pellentesque.Vitae sapien pellentesque habitant morbi.Neque viverra justo nec ultrices dui sapien eget mi.Diam volutpat commodo sed egestas egestas fringilla.Adipiscing bibendum est ultricies integer quis auctor elit.Risus at ultrices mi tempus.Erat pellentesque adipiscing commodo elit at.Montes nascetur ridiculus mus mauris vitae.Ultrices gravida dictum fusce ut placerat.Integer feugiat scelerisque varius morbi.',
            'Sagittis orci a scelerisque purus semper eget.Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.Pretium viverra suspendisse potenti nullam ac tortor.Ut venenatis tellus in metus vulputate eu scelerisque felis.Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.Eu mi bibendum neque egestas.Suscipit adipiscing bibendum est ultricies integer quis auctor.Risus nullam eget felis eget nunc.Habitasse platea dictumst quisque sagittis.Quis risus sed vulputate odio ut enim blandit volutpat maecenas.At quis risus sed vulputate odio ut.Et netus et malesuada fames ac turpis.Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.',
            'A pellentesque sit amet porttitor eget dolor.Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.Urna nunc id cursus metus aliquam eleifend mi in nulla.Arcu cursus vitae congue mauris rhoncus aenean vel elit.Mauris pharetra et ultrices neque.Magna ac placerat vestibulum lectus mauris ultrices eros.Ultrices in iaculis nunc sed augue lacus viverra vitae.Phasellus egestas tellus rutrum tellus.Facilisis sed odio morbi quis commodo odio.Lectus urna duis convallis convallis.Purus viverra accumsan in nisl nisi scelerisque.Leo a diam sollicitudin tempor id eu.Ipsum dolor sit amet consectetur adipiscing elit duis.Ullamcorper sit amet risus nullam.Sodales ut eu sem integer vitae justo eget.']
    },
    {
        name: 'Google Home',
        picture: 'home',
        price: 299,
        description: [
            'Makes you feel at home. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit. Sed id semper risus in hendrerit gravida rutrum quisque non. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Id aliquet risus feugiat in. Eu non diam phasellus vestibulum lorem sed. Nisi quis eleifend quam adipiscing vitae. Ut etiam sit amet nisl purus in mollis. Augue neque gravida in fermentum et sollicitudin. Nunc sed augue lacus viverra. Felis bibendum ut tristique et egestas.',
            'Lorem ipsum dolor sit amet consectetur adipiscing.Nulla aliquet enim tortor at auctor urna.At varius vel pharetra vel turpis nunc.Duis at tellus at urna condimentum mattis pellentesque.Vitae sapien pellentesque habitant morbi.Neque viverra justo nec ultrices dui sapien eget mi.Diam volutpat commodo sed egestas egestas fringilla.Adipiscing bibendum est ultricies integer quis auctor elit.Risus at ultrices mi tempus.Erat pellentesque adipiscing commodo elit at.Montes nascetur ridiculus mus mauris vitae.Ultrices gravida dictum fusce ut placerat.Integer feugiat scelerisque varius morbi.',
            'Sagittis orci a scelerisque purus semper eget.Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.Pretium viverra suspendisse potenti nullam ac tortor.Ut venenatis tellus in metus vulputate eu scelerisque felis.Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.Eu mi bibendum neque egestas.Suscipit adipiscing bibendum est ultricies integer quis auctor.Risus nullam eget felis eget nunc.Habitasse platea dictumst quisque sagittis.Quis risus sed vulputate odio ut enim blandit volutpat maecenas.At quis risus sed vulputate odio ut.Et netus et malesuada fames ac turpis.Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.',
            'A pellentesque sit amet porttitor eget dolor.Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.Urna nunc id cursus metus aliquam eleifend mi in nulla.Arcu cursus vitae congue mauris rhoncus aenean vel elit.Mauris pharetra et ultrices neque.Magna ac placerat vestibulum lectus mauris ultrices eros.Ultrices in iaculis nunc sed augue lacus viverra vitae.Phasellus egestas tellus rutrum tellus.Facilisis sed odio morbi quis commodo odio.Lectus urna duis convallis convallis.Purus viverra accumsan in nisl nisi scelerisque.Leo a diam sollicitudin tempor id eu.Ipsum dolor sit amet consectetur adipiscing elit duis.Ullamcorper sit amet risus nullam.Sodales ut eu sem integer vitae justo eget.'
        ]
    }
];
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".return-button {\r\n  position: relative;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvc2hpcHBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGlwcGluZy9zaGlwcGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldHVybi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(cartService) {
        this.cartService = cartService;
        this.shippingCosts = this.cartService.getShippingPrices();
    }
    ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  text-decoration: none;\r\n}\r\n\r\n.whiteicons {\r\n  #color: white;\r\n  padding: 0 25px;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.topbar {\r\n  position:fixed;\r\n  z-index:10;\r\n  margin: 0px;\r\n  width: 100%;\r\n  height: 68px;\r\n  background-color: white;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);\r\n}\r\n\r\n.topbar h1{\r\n  font-size:25px;\r\n}\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ud2hpdGVpY29ucyB7XHJcbiAgI2NvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udG9wYmFyIHtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB6LWluZGV4OjEwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi50b3BiYXIgaDF7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbn1cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(cartService) {
        this.cartService = cartService;
        this.items = this.cartService.getItems();
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chiendat\Documents\GitHub\angular-here-leaflet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map