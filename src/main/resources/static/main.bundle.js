webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_component_login_component_component__ = __webpack_require__("./src/app/components/login-component/login-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_registration_component_registration_component_component__ = __webpack_require__("./src/app/components/registration-component/registration-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_component_profile_component_component__ = __webpack_require__("./src/app/components/profile-component/profile-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_component_home_component_component__ = __webpack_require__("./src/app/components/home-component/home-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_theatre_component_theatre_component_component__ = __webpack_require__("./src/app/components/theatre-component/theatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cinema_component_cinema_component_component__ = __webpack_require__("./src/app/components/cinema-component/cinema-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_fanzone_component_fanzone_component_component__ = __webpack_require__("./src/app/components/fanzone-component/fanzone-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_fanzone_component_item_component_item_component_component__ = __webpack_require__("./src/app/components/fanzone-component/item-component/item-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_fanzone_service__ = __webpack_require__("./src/app/services/fanzone-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_fanzone_component_additem_component_additem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/additem-component/additem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_item_service__ = __webpack_require__("./src/app/services/item-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_fanzone_component_edititem_component_edititem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/edititem-component/edititem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_fanzone_component_pending_component_pending_component_component__ = __webpack_require__("./src/app/components/fanzone-component/pending-component/pending-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_fanzone_component_itemprofile_component_itemprofile_component_component__ = __webpack_require__("./src/app/components/fanzone-component/itemprofile-component/itemprofile-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_bid_service__ = __webpack_require__("./src/app/services/bid-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_theatre_component_viewTheatre_component_viewTheatre_component_component__ = __webpack_require__("./src/app/components/theatre-component/viewTheatre-component/viewTheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_cinema_component_viewCinema_component_viewCinema_component_component__ = __webpack_require__("./src/app/components/cinema-component/viewCinema-component/viewCinema-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_cinema_component_editCinema_component_editCinema_component_component__ = __webpack_require__("./src/app/components/cinema-component/editCinema-component/editCinema-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_theatre_component_editTheatre_component_editTheatre_component_component__ = __webpack_require__("./src/app/components/theatre-component/editTheatre-component/editTheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_fanzone_component_myfanzone_component_myfanzone_component_component__ = __webpack_require__("./src/app/components/fanzone-component/myfanzone-component/myfanzone-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_fanzone_component_addnewitem_component_addnewitem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/addnewitem-component/addnewitem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_fanzone_component_newitem_component_newitem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/newitem-component/newitem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_newitem_service__ = __webpack_require__("./src/app/services/newitem-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_fanzone_component_editnewitem_component_editnewitem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/editnewitem-component/editnewitem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_addProjection_component_addProjection_component_component__ = __webpack_require__("./src/app/components/addProjection-component/addProjection-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_addProjectionTheatre_component_addProjectionTheatre_component_component__ = __webpack_require__("./src/app/components/addProjectionTheatre-component/addProjectionTheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_fanzone_component_newitemprofile_component_newitemprofile_component_component__ = __webpack_require__("./src/app/components/fanzone-component/newitemprofile-component/newitemprofile-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_fanzone_component_itembids_component_itembids_component_component__ = __webpack_require__("./src/app/components/fanzone-component/itembids-component/itembids-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_reservation_component_reservation_component_component__ = __webpack_require__("./src/app/components/reservation-component/reservation-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_reservation_component_step_one_step_one_component__ = __webpack_require__("./src/app/components/reservation-component/step-one/step-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_reservation_component_step_two_step_two_component__ = __webpack_require__("./src/app/components/reservation-component/step-two/step-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_reservation_component_step_three_step_three_component__ = __webpack_require__("./src/app/components/reservation-component/step-three/step-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_reservation_component_step_four_step_four_component__ = __webpack_require__("./src/app/components/reservation-component/step-four/step-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_reservation_component_step_five_step_five_component__ = __webpack_require__("./src/app/components/reservation-component/step-five/step-five.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_seating_chart_component_seating_chart_component__ = __webpack_require__("./src/app/components/seating-chart-component/seating-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_notification_service__ = __webpack_require__("./src/app/services/notification-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_location_component_location_component_component__ = __webpack_require__("./src/app/components/location-component/location-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_profile_component_change_password_change_password_component__ = __webpack_require__("./src/app/components/profile-component/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_reservation_component_accept_decline_accept_decline_component_component__ = __webpack_require__("./src/app/components/reservation-component/accept-decline/accept-decline-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_allusers_component_allusers_component_component__ = __webpack_require__("./src/app/components/allusers-component/allusers-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_addtheatre_component_addtheatre_component_component__ = __webpack_require__("./src/app/components/addtheatre-component/addtheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_addcinema_component_addcinema_component_component__ = __webpack_require__("./src/app/components/addcinema-component/addcinema-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_component_login_component_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_registration_component_registration_component_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_profile_component_profile_component_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_component_home_component_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_theatre_component_theatre_component_component__["a" /* TheatresComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_cinema_component_cinema_component_component__["a" /* CinemasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_fanzone_component_fanzone_component_component__["a" /* FanzoneComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_fanzone_component_item_component_item_component_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_fanzone_component_additem_component_additem_component_component__["a" /* AdditemComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_fanzone_component_edititem_component_edititem_component_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_fanzone_component_pending_component_pending_component_component__["a" /* PendingComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_theatre_component_viewTheatre_component_viewTheatre_component_component__["a" /* ViewTheatreComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_cinema_component_viewCinema_component_viewCinema_component_component__["a" /* ViewCinemaComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_fanzone_component_itemprofile_component_itemprofile_component_component__["a" /* ItemprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_cinema_component_editCinema_component_editCinema_component_component__["a" /* EditCinemaComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_fanzone_component_myfanzone_component_myfanzone_component_component__["a" /* MyfanzoneComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_fanzone_component_addnewitem_component_addnewitem_component_component__["a" /* AddnewitemComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_theatre_component_editTheatre_component_editTheatre_component_component__["a" /* EditTheatreComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_fanzone_component_myfanzone_component_myfanzone_component_component__["a" /* MyfanzoneComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_fanzone_component_newitem_component_newitem_component_component__["a" /* NewitemComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_fanzone_component_editnewitem_component_editnewitem_component_component__["a" /* EditnewitemComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_addProjection_component_addProjection_component_component__["a" /* AddProjectionComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_fanzone_component_newitemprofile_component_newitemprofile_component_component__["a" /* NewitemprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_fanzone_component_itembids_component_itembids_component_component__["a" /* ItembidsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_reservation_component_reservation_component_component__["a" /* ReservationComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_reservation_component_step_one_step_one_component__["a" /* StepOneComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_reservation_component_step_two_step_two_component__["a" /* StepTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_reservation_component_step_three_step_three_component__["a" /* StepThreeComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_reservation_component_step_four_step_four_component__["a" /* StepFourComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_reservation_component_step_five_step_five_component__["a" /* StepFiveComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_seating_chart_component_seating_chart_component__["a" /* SeatingChartComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_location_component_location_component_component__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_profile_component_change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_reservation_component_accept_decline_accept_decline_component_component__["a" /* AcceptDeclineComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_allusers_component_allusers_component_component__["a" /* AllusersComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_addProjectionTheatre_component_addProjectionTheatre_component_component__["a" /* AddProjectionComponentTheatre */],
                __WEBPACK_IMPORTED_MODULE_53__components_addtheatre_component_addtheatre_component_component__["a" /* AddtheatreComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_addcinema_component_addcinema_component_component__["a" /* AddcinemaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_49__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyDZNuPzGBPw4CbzPCowjIt_j3vXpnr-M7k",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_login_service_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_12__services_home_service_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_13__services_theatres_service_service__["a" /* TheatresService */],
                __WEBPACK_IMPORTED_MODULE_17__services_fanzone_service__["a" /* FanzoneService */],
                __WEBPACK_IMPORTED_MODULE_19__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_21__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_24__services_cinemas_service_service__["a" /* CinemasService */],
                __WEBPACK_IMPORTED_MODULE_20__services_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_26__services_bid_service__["a" /* BidService */],
                __WEBPACK_IMPORTED_MODULE_34__services_newitem_service__["a" /* NewItemService */],
                __WEBPACK_IMPORTED_MODULE_47__services_notification_service__["a" /* NotificationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_component_login_component_component__ = __webpack_require__("./src/app/components/login-component/login-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_registration_component_registration_component_component__ = __webpack_require__("./src/app/components/registration-component/registration-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_component_profile_component_component__ = __webpack_require__("./src/app/components/profile-component/profile-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_component_home_component_component__ = __webpack_require__("./src/app/components/home-component/home-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_theatre_component_theatre_component_component__ = __webpack_require__("./src/app/components/theatre-component/theatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cinema_component_cinema_component_component__ = __webpack_require__("./src/app/components/cinema-component/cinema-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_fanzone_component_fanzone_component_component__ = __webpack_require__("./src/app/components/fanzone-component/fanzone-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fanzone_component_additem_component_additem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/additem-component/additem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fanzone_component_edititem_component_edititem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/edititem-component/edititem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fanzone_component_pending_component_pending_component_component__ = __webpack_require__("./src/app/components/fanzone-component/pending-component/pending-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_fanzone_component_itemprofile_component_itemprofile_component_component__ = __webpack_require__("./src/app/components/fanzone-component/itemprofile-component/itemprofile-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_theatre_component_viewTheatre_component_viewTheatre_component_component__ = __webpack_require__("./src/app/components/theatre-component/viewTheatre-component/viewTheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cinema_component_viewCinema_component_viewCinema_component_component__ = __webpack_require__("./src/app/components/cinema-component/viewCinema-component/viewCinema-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cinema_component_editCinema_component_editCinema_component_component__ = __webpack_require__("./src/app/components/cinema-component/editCinema-component/editCinema-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_theatre_component_editTheatre_component_editTheatre_component_component__ = __webpack_require__("./src/app/components/theatre-component/editTheatre-component/editTheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_fanzone_component_myfanzone_component_myfanzone_component_component__ = __webpack_require__("./src/app/components/fanzone-component/myfanzone-component/myfanzone-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_fanzone_component_addnewitem_component_addnewitem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/addnewitem-component/addnewitem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_fanzone_component_editnewitem_component_editnewitem_component_component__ = __webpack_require__("./src/app/components/fanzone-component/editnewitem-component/editnewitem-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_addProjection_component_addProjection_component_component__ = __webpack_require__("./src/app/components/addProjection-component/addProjection-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_addProjectionTheatre_component_addProjectionTheatre_component_component__ = __webpack_require__("./src/app/components/addProjectionTheatre-component/addProjectionTheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_fanzone_component_newitemprofile_component_newitemprofile_component_component__ = __webpack_require__("./src/app/components/fanzone-component/newitemprofile-component/newitemprofile-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_fanzone_component_itembids_component_itembids_component_component__ = __webpack_require__("./src/app/components/fanzone-component/itembids-component/itembids-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_reservation_component_reservation_component_component__ = __webpack_require__("./src/app/components/reservation-component/reservation-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_seating_chart_component_seating_chart_component__ = __webpack_require__("./src/app/components/seating-chart-component/seating-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_location_component_location_component_component__ = __webpack_require__("./src/app/components/location-component/location-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_reservation_component_accept_decline_accept_decline_component_component__ = __webpack_require__("./src/app/components/reservation-component/accept-decline/accept-decline-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_allusers_component_allusers_component_component__ = __webpack_require__("./src/app/components/allusers-component/allusers-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_addtheatre_component_addtheatre_component_component__ = __webpack_require__("./src/app/components/addtheatre-component/addtheatre-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_addcinema_component_addcinema_component_component__ = __webpack_require__("./src/app/components/addcinema-component/addcinema-component.component.ts");






























var appRoutes = [
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full' },
    { path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_component_login_component_component__["a" /* LoginComponent */] },
    { path: 'registration',
        component: __WEBPACK_IMPORTED_MODULE_2__components_registration_component_registration_component_component__["a" /* RegistrationComponent */] },
    { path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_3__components_profile_component_profile_component_component__["a" /* ProfileComponent */] },
    { path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_component_home_component_component__["a" /* HomeComponent */] },
    { path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_3__components_profile_component_profile_component_component__["a" /* ProfileComponent */] },
    { path: 'theatres',
        component: __WEBPACK_IMPORTED_MODULE_5__components_theatre_component_theatre_component_component__["a" /* TheatresComponent */] },
    { path: 'cinemas',
        component: __WEBPACK_IMPORTED_MODULE_6__components_cinema_component_cinema_component_component__["a" /* CinemasComponent */] },
    { path: 'fanzone',
        component: __WEBPACK_IMPORTED_MODULE_7__components_fanzone_component_fanzone_component_component__["a" /* FanzoneComponent */] },
    { path: 'additem',
        component: __WEBPACK_IMPORTED_MODULE_8__components_fanzone_component_additem_component_additem_component_component__["a" /* AdditemComponent */] },
    { path: 'edititem',
        component: __WEBPACK_IMPORTED_MODULE_9__components_fanzone_component_edititem_component_edititem_component_component__["a" /* EditItemComponent */] },
    { path: 'pending',
        component: __WEBPACK_IMPORTED_MODULE_10__components_fanzone_component_pending_component_pending_component_component__["a" /* PendingComponent */] },
    { path: 'itemprofile',
        component: __WEBPACK_IMPORTED_MODULE_11__components_fanzone_component_itemprofile_component_itemprofile_component_component__["a" /* ItemprofileComponent */] },
    {
        path: 'viewTheatre',
        component: __WEBPACK_IMPORTED_MODULE_12__components_theatre_component_viewTheatre_component_viewTheatre_component_component__["a" /* ViewTheatreComponent */]
    },
    {
        path: 'viewCinema',
        component: __WEBPACK_IMPORTED_MODULE_13__components_cinema_component_viewCinema_component_viewCinema_component_component__["a" /* ViewCinemaComponent */]
    },
    {
        path: 'editCinema',
        component: __WEBPACK_IMPORTED_MODULE_14__components_cinema_component_editCinema_component_editCinema_component_component__["a" /* EditCinemaComponent */]
    },
    {
        path: 'editTheatre',
        component: __WEBPACK_IMPORTED_MODULE_15__components_theatre_component_editTheatre_component_editTheatre_component_component__["a" /* EditTheatreComponent */]
    },
    {
        path: 'myfanzone',
        component: __WEBPACK_IMPORTED_MODULE_16__components_fanzone_component_myfanzone_component_myfanzone_component_component__["a" /* MyfanzoneComponent */]
    },
    {
        path: 'addnewitem',
        component: __WEBPACK_IMPORTED_MODULE_17__components_fanzone_component_addnewitem_component_addnewitem_component_component__["a" /* AddnewitemComponent */]
    },
    {
        path: 'editnewitem',
        component: __WEBPACK_IMPORTED_MODULE_18__components_fanzone_component_editnewitem_component_editnewitem_component_component__["a" /* EditnewitemComponent */]
    },
    {
        path: 'addProjection',
        component: __WEBPACK_IMPORTED_MODULE_19__components_addProjection_component_addProjection_component_component__["a" /* AddProjectionComponent */]
    },
    {
        path: 'addProjectionTheatre',
        component: __WEBPACK_IMPORTED_MODULE_20__components_addProjectionTheatre_component_addProjectionTheatre_component_component__["a" /* AddProjectionComponentTheatre */]
    },
    {
        path: 'newitemprofile',
        component: __WEBPACK_IMPORTED_MODULE_21__components_fanzone_component_newitemprofile_component_newitemprofile_component_component__["a" /* NewitemprofileComponent */]
    },
    {
        path: 'showbids',
        component: __WEBPACK_IMPORTED_MODULE_22__components_fanzone_component_itembids_component_itembids_component_component__["a" /* ItembidsComponent */]
    },
    {
        path: 'reservation',
        component: __WEBPACK_IMPORTED_MODULE_23__components_reservation_component_reservation_component_component__["a" /* ReservationComponent */]
    },
    {
        path: 'seatings',
        component: __WEBPACK_IMPORTED_MODULE_24__components_seating_chart_component_seating_chart_component__["a" /* SeatingChartComponent */]
    },
    {
        path: 'invitation',
        component: __WEBPACK_IMPORTED_MODULE_26__components_reservation_component_accept_decline_accept_decline_component_component__["a" /* AcceptDeclineComponent */]
    },
    {
        path: 'location',
        component: __WEBPACK_IMPORTED_MODULE_25__components_location_component_location_component_component__["a" /* LocationComponent */]
    },
    {
        path: 'allusers',
        component: __WEBPACK_IMPORTED_MODULE_27__components_allusers_component_allusers_component_component__["a" /* AllusersComponent */]
    },
    {
        path: 'addtheatre',
        component: __WEBPACK_IMPORTED_MODULE_28__components_addtheatre_component_addtheatre_component_component__["a" /* AddtheatreComponent */]
    },
    {
        path: 'addcinema',
        component: __WEBPACK_IMPORTED_MODULE_29__components_addcinema_component_addcinema_component_component__["a" /* AddcinemaComponent */]
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/addProjection-component/addProjection-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <form (ngSubmit)=\"onSubmit(f, currentMovie, currentCinema)\" #f=\"ngForm\" >\r\n            <div class=\"jumbotron\">\r\n                <h1><b>Projection of {{currentMovie.name}} in {{currentCinema.name}} </b></h1> \r\n            </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"col-8\">\r\n                    <h4><b>Date: </b></h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                    <div class=\"col-md-8\">\r\n                            <input type=\"date\" class=\"form-control\" name=\"date\" style=\"text-align:center; margin:1px\" ngModel\r\n                            required>       \r\n                     </div>\r\n\r\n\r\n                    <!--div class=\"col-8\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"date\"\r\n                        ngModel\r\n                            required>\r\n                    </div-->\r\n                </div>\r\n            </div>\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                    <div class=\"col-8\">\r\n                        <h4><b>Time: </b></h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                        <div class=\"col-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"time\"\r\n                            ngModel\r\n                            required>\r\n                        </div>\r\n                    </div>\r\n               \r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"col-8\">\r\n                            <h4><b>Place: </b></h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                            <div class=\"col-8\">\r\n                                <input type=\"text\" class=\"form-control\" name=\"place\"\r\n                                ngModel required>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                            <div class=\"col-8\">\r\n                                <h4><b>Price: </b></h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                                <div class=\"col-8\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"price\"\r\n                                    ngModel\r\n                                    required>\r\n                                </div>\r\n                            </div>\r\n                       \r\n                    </div>\r\n        \r\n                    \r\n            <br>\r\n            <br>\r\n            <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add projection</button>\r\n            </form>\r\n          </div>\r\n"

/***/ }),

/***/ "./src/app/components/addProjection-component/addProjection-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProjectionComponent = (function () {
    function AddProjectionComponent(cinemasService, router, homeService, theatresService) {
        this.cinemasService = cinemasService;
        this.router = router;
        this.homeService = homeService;
        this.theatresService = theatresService;
        this.movies = [];
    }
    AddProjectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cinemasService.currentc.subscribe(function (currentCinema) { return _this.currentCinema = currentCinema; });
        this.cinemasService.currentm.subscribe(function (currentMovie) { return _this.currentMovie = currentMovie; });
        this.cinemasService.getMovies(this.currentCinema.id).subscribe(function (data) {
            return _this.movies = data;
        });
    };
    AddProjectionComponent.prototype.onSubmit = function (f, movie, cinema) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(f.value));
        this.cinemasService.addProjection(body, movie, cinema)
            .subscribe(function (data) {
            _this.currentCinema = data;
            _this.cinemasService.selectCinema(_this.currentCinema);
            console.log(_this.currentCinema + " iz addorojetion");
            _this.router.navigateByUrl('/viewCinema'); //ne radi osvezavanje prikaza
        });
    };
    AddProjectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'addProjection-component',
            template: __webpack_require__("./src/app/components/addProjection-component/addProjection-component.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__["a" /* TheatresService */]])
    ], AddProjectionComponent);
    return AddProjectionComponent;
}());



/***/ }),

/***/ "./src/app/components/addProjectionTheatre-component/addProjectionTheatre-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <form (ngSubmit)=\"onSubmit(f, currentMovie, currentCinema)\" #f=\"ngForm\" >\r\n            <div class=\"jumbotron\">\r\n                <h1><b>Projection of {{currentMovie.name}} in {{currentCinema.name}} </b></h1> \r\n            </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"col-8\">\r\n                    <h4><b>Date: </b></h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n                    <div class=\"col-md-8\">\r\n                            <input type=\"date\" class=\"form-control\" name=\"date\" style=\"text-align:center; margin:1px\" ngModel\r\n                            required>       \r\n                     </div>\r\n\r\n\r\n                    <!--div class=\"col-8\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"date\"\r\n                        ngModel\r\n                            required>\r\n                    </div-->\r\n                </div>\r\n            </div>\r\n        \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                    <div class=\"col-8\">\r\n                        <h4><b>Time: </b></h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                        <div class=\"col-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"time\"\r\n                            ngModel\r\n                            required>\r\n                        </div>\r\n                    </div>\r\n               \r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"col-8\">\r\n                            <h4><b>Place: </b></h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                            <div class=\"col-8\">\r\n                                <input type=\"text\" class=\"form-control\" name=\"place\"\r\n                                ngModel required>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                            <div class=\"col-8\">\r\n                                <h4><b>Price: </b></h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                                <div class=\"col-8\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"price\"\r\n                                    ngModel\r\n                                    required>\r\n                                </div>\r\n                            </div>\r\n                       \r\n                    </div>\r\n        \r\n                    \r\n            <br>\r\n            <br>\r\n            <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add projection</button>\r\n            </form>\r\n          </div>\r\n"

/***/ }),

/***/ "./src/app/components/addProjectionTheatre-component/addProjectionTheatre-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectionComponentTheatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProjectionComponentTheatre = (function () {
    function AddProjectionComponentTheatre(cinemasService, router, homeService, theatresService) {
        this.cinemasService = cinemasService;
        this.router = router;
        this.homeService = homeService;
        this.theatresService = theatresService;
        this.movies = [];
    }
    AddProjectionComponentTheatre.prototype.ngOnInit = function () {
        var _this = this;
        this.theatresService.currentth.subscribe(function (currentCinema) { return _this.currentCinema = currentCinema; });
        this.theatresService.currentp.subscribe(function (currentMovie) { return _this.currentMovie = currentMovie; });
        this.theatresService.getPlays(this.currentCinema.id).subscribe(function (data) {
            return _this.movies = data;
        });
    };
    AddProjectionComponentTheatre.prototype.onSubmit = function (f, movie, cinema) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(f.value));
        this.theatresService.addProjection(body, movie, cinema)
            .subscribe(function (data) {
            _this.currentCinema = data;
            _this.cinemasService.selectCinema(_this.currentCinema);
            console.log(_this.currentCinema + " iz addorojetion");
            _this.router.navigateByUrl('/viewTheatre');
        });
    };
    AddProjectionComponentTheatre = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'addProjectionTheatre-component',
            template: __webpack_require__("./src/app/components/addProjectionTheatre-component/addProjectionTheatre-component.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__["a" /* TheatresService */]])
    ], AddProjectionComponentTheatre);
    return AddProjectionComponentTheatre;
}());



/***/ }),

/***/ "./src/app/components/addcinema-component/addcinema-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n    <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Add new cinema</h1>  \n        \n    <!--<p>Browse and bid on !</p> -->\n    \n  </div>\n  \n</div>\n\n\n<div class=\"container \" >\n        <div class=\"justify-content-center align-items-center\">\n            <div class=\"form-area \">  \n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\n                <br style=\"clear:both\">\n                            \n                            <div class=\"form-group\">\n                                <label>Cinema name</label>\n                                <input type=\"text\" class=\"form-control\" name=\"name\" minlength=\"3\"\n                                [(ngModel)] = \"cinema.name\"   \n                                    required\n                                    >\n\n                            </div>\n                            <div class=\"form-group\">\n                                    <label>Cinema description</label>\n                                    <textarea class=\"form-control\" type=\"textarea\"  minlength=\"10\" maxlength=\"300\" rows=\"3\" name=\"description\"\n                                        [(ngModel)]= \"cinema.description\"\n                                        required>\n                                    </textarea>\n                            </div>  \n                            \n                            <hr>           \n                           \n                            <hr>\n                            <div class=\"form-group\">\n                                    <label> Write down the Cinema address and make sure that it's in  order </label>\n                                    <input type=\"text\" class=\"form-control\"   name=\"image\" \n                                    [(ngModel)]= \"cinema.address\" placeholder=\"(street, city, country)\"\n                                    required\n                                    >\n                                   \n                            </div>\n\n                            <hr><hr>\n                <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add cinema</button>\n                </form>\n            </div>\n        </div>\n        </div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/addcinema-component/addcinema-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcinemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddcinemaComponent = (function () {
    function AddcinemaComponent(homeService) {
        this.homeService = homeService;
        this.cinema = {
            name: '',
            description: '',
            address: ''
        };
    }
    AddcinemaComponent.prototype.ngOnInit = function () {
    };
    AddcinemaComponent.prototype.onSubmit = function () {
        this.homeService.addCinema(this.cinema).subscribe(function (data) {
            console.log(data);
        });
    };
    AddcinemaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addcinema-component',
            template: __webpack_require__("./src/app/components/addcinema-component/addcinema-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_home_service_service__["a" /* HomeService */]])
    ], AddcinemaComponent);
    return AddcinemaComponent;
}());



/***/ }),

/***/ "./src/app/components/addtheatre-component/addtheatre-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n    <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Add new theatre</h1>      \n    <!--<p>Browse and bid on !</p> -->\n    \n  </div>\n  \n</div>\n\n\n<div class=\"container \" >\n        <div class=\"justify-content-center align-items-center\">\n            <div class=\"form-area \">  \n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\n                <br style=\"clear:both\">\n                            \n                            <div class=\"form-group\">\n                                <label>Theatre name</label>\n                                <input type=\"text\" class=\"form-control\" name=\"name\" minlength=\"3\"\n                                [(ngModel)] = \"theatre.name\"   \n                                    required\n                                    >\n\n                            </div>\n                            <div class=\"form-group\">\n                                    <label>Theatre description</label>\n                                    <textarea class=\"form-control\" type=\"textarea\"  minlength=\"10\" maxlength=\"300\" rows=\"3\" name=\"description\"\n                                        [(ngModel)]= \"theatre.description\"\n                                        required>\n                                    </textarea>\n                            </div>  \n                            \n                            <hr>           \n                           \n                            <hr>\n                            <div class=\"form-group\">\n                                    <label> Write down the theatre address and make sure that it's in  order </label>\n                                    <input type=\"text\" class=\"form-control\"   name=\"image\" \n                                    [(ngModel)]= \"theatre.address\" placeholder=\"(street, city, country)\"\n                                    required\n                                    >\n                                   \n                            </div>\n\n                            <hr><hr>\n                <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add theatre</button>\n                </form>\n            </div>\n        </div>\n        </div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/addtheatre-component/addtheatre-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtheatreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddtheatreComponent = (function () {
    function AddtheatreComponent(homeService) {
        this.homeService = homeService;
        this.theatre = {
            name: '',
            description: '',
            address: ''
        };
    }
    AddtheatreComponent.prototype.ngOnInit = function () {
    };
    AddtheatreComponent.prototype.onSubmit = function () {
        this.homeService.addTheatre(this.theatre).subscribe(function (data) {
            console.log(data);
        });
    };
    AddtheatreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addtheatre-component',
            template: __webpack_require__("./src/app/components/addtheatre-component/addtheatre-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_home_service_service__["a" /* HomeService */]])
    ], AddtheatreComponent);
    return AddtheatreComponent;
}());



/***/ }),

/***/ "./src/app/components/allusers-component/allusers-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n<body>\r\n  <a [routerLink]=\"['/login']\">Login </a>\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n      <h1>All registered users and their roles</h1>  \r\n    \r\n  </div>\r\n  <table class=\"table table-hover table-bordered\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col-md-1\">Username</th>\r\n          <th scope=\"col-md-4\">Full name</th>\r\n          <th scope=\"col-md-4\">Role</th>\r\n          <th scope=\"col-md-2\">Add new role</th>\r\n          <th scope=\"col-md-1\"></th>\r\n        </tr>\r\n      </thead>\r\n      \r\n      <tbody>\r\n        <tr *ngFor=\"let u of users; let userIndex = index\">\r\n          \r\n          <td>{{u.username}}</td>\r\n          <td>{{u.name}} {{u.lastName}}</td>\r\n          <td class=\"text-danger\">\r\n            <p *ngFor=\"let r of u.roles\"><b>{{r.role}}<br></b></p>\r\n          </td>\r\n          <td>\r\n            <ul>\r\n              <li  *ngFor=\"let r of roles; let i = index\" [value]=\"i\"  >\r\n                  {{r}}<button  class=\"btn btn-success btn-sm float-right\" (click)=\"onClickPromote(u.username,i)\"> Add  role</button><hr>\r\n              </li>\r\n            </ul>\r\n           \r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>\r\n    \r\n    \r\n            \r\n\r\n  <hr>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/allusers-component/allusers-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllusersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllusersComponent = (function () {
    function AllusersComponent(profileService) {
        this.profileService = profileService;
        this.roles = [
            'ADMIN',
            'FANZONE_ADMIN',
            'SYSTEM_ADMIN'
        ];
    }
    AllusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getAllUsers2().subscribe(function (data) {
            _this.users = data;
        });
    };
    AllusersComponent.prototype.onClickPromote = function (username, index) {
        var _this = this;
        console.log(username + " " + index);
        var user = this.users.filter(function (user) { return user.username == username; })[0];
        console.log(this.roles[index]);
        this.profileService.addRole(user, this.roles[index]).subscribe(function (data) {
            console.log(data);
            if (data == null) {
                console.log("User already has that role");
            }
            else {
                _this.returnedUser = data;
                console.log(_this.returnedUser);
                var foundIndex = _this.users.findIndex(function (user) { return user.username == _this.returnedUser.username; });
                console.log(foundIndex);
                console.log(_this.users[foundIndex]);
                _this.users[foundIndex] = _this.returnedUser;
                console.log("posle");
                console.log(_this.users);
            }
        });
    };
    AllusersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-allusers-component',
            template: __webpack_require__("./src/app/components/allusers-component/allusers-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */]])
    ], AllusersComponent);
    return AllusersComponent;
}());



/***/ }),

/***/ "./src/app/components/cinema-component/cinema-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n      <div class=\"container\">\r\n      \r\n          <a class=\"navbar-brand text-white\"></a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n          <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n              <ul class=\"navbar-nav ml-auto\">\r\n                  <li class=\"nav-item active\">\r\n                      <a class=\"nav-link text-white\" href=\"#\">About Us</a>\r\n                  </li>\r\n                \r\n                \r\n                 \r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </nav>\r\n  <!-- Navigation -->\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"jumbotron col-4\" >\r\n     <h1>Cinemas</h1>\r\n     <button class=\"btn btn-dark\" (click)=\"onClickAddCinema()\">Add cinema</button>\r\n    </div>\r\n    </div>\r\n\r\n \r\n\r\n  <ul class=\"cinemasArray\">\r\n      <li *ngFor=\"let c of cinemasArray\">\r\n<div class=\"item-listing small-padding-bg\">\r\n\r\n    <div class=\"container\">\r\n   \r\n      <div class=\"row\">\r\n  \r\n        <div class=\"col-md-3\"> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7kDX4rN7pDaQcXMzzadNQ0PvMwqnXIKIC7JBpUoh-gK6WABw\" alt=\"\"> \r\n        </div>\r\n        <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc\"> <button type=\"button\" class=\"btn btn-link\" (click)=\"onClickOpenPage(c)\"><h3>{{c.name}}</h3></button>\r\n          <h4></h4> \r\n                        <p><b>Address: </b> {{c.address}} <button class=\"btn btn-dark btn-sm\" (click)=\"onClickShowLocation(c.address)\" >Show on map</button></p> \r\n                        <p> <b>Description: </b>{{c.description}}</p>\r\n            <div class=\"list-number \">\r\n                \r\n      </div>\r\n                  <div class=\"list-enquiry\">\r\n                          <ul>\r\n                            <li class=\"btn btn-md btn-warning\"><button type=\"button\" class=\"btn btn-link\" (click)=\"onClickEditPage(c)\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> Edit cinema </button> </li>\r\n                           \r\n                            <li>\r\n                            <li>\r\n                              {{c.rating}}\r\n                            </li>\r\n                            \r\n                          </ul>\r\n                        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n  </li>\r\n</ul>\r\n\r\n     \r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/components/cinema-component/cinema-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CinemasComponent = (function () {
    function CinemasComponent(cinemasService, dataService, router) {
        var _this = this;
        this.cinemasService = cinemasService;
        this.dataService = dataService;
        this.router = router;
        this.editButtonHidden = true;
        this.cinemasService.getCinemas().subscribe(function (data) { _this.cinemasArray = data; console.log(data); });
    }
    CinemasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cinemasService.getCinemas()
            .subscribe(function (data) {
            _this.cinemasArray = data;
            console.log(data);
        });
    };
    CinemasComponent.prototype.onSelect = function (cinema) {
        this.selectedCinema = cinema;
        // this.editButtonHidden=true;
    };
    CinemasComponent.prototype.onClickOpenPage = function (Cinema) {
        this.selectedCinema = Cinema;
        this.cinemasService.selectCinema(this.selectedCinema);
        this.router.navigateByUrl('/viewCinema');
    };
    CinemasComponent.prototype.onClickEditPage = function (Cinema) {
        this.selectedCinema = Cinema;
        this.cinemasService.selectCinema(this.selectedCinema);
        this.router.navigateByUrl('/editCinema');
    };
    CinemasComponent.prototype.onClickShowLocation = function (address) {
        this.dataService.changeAddress(address);
        this.router.navigateByUrl('location');
    };
    CinemasComponent.prototype.onClickAddCinema = function () {
        console.log("SS");
        this.router.navigateByUrl('/addcinema');
    };
    CinemasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cinemas-component',
            template: __webpack_require__("./src/app/components/cinema-component/cinema-component.component.html"),
            styles: ["\n  .list-number li  {\n    margin-right: 5px;\n    margin-left: 0px;\n    top: 5px;\n    display:inline-block;\n    \n}\n\n.list-enquiry li  {\n    margin-right: 5px;\n    margin-left: 0px;\n    margin-bottom:5px;\n    top: 15px;\n    display:inline-block;\n    \n}\n\nimg{width:80%;}\n\n.small-padding-bg {\n  box-shadow: 3px 3px 5px #c2c2c2, -3px -3px 5px #c2c2c2;\n}\n\n.jumbotron{\n  background: rgba(0, 0, 0, 0.05);\n  border: 1px;\n  }\n\n\n"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CinemasComponent);
    return CinemasComponent;
}());



/***/ }),

/***/ "./src/app/components/cinema-component/editCinema-component/editCinema-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\r\n    <div class=\"jumbotron\">\r\n        <h1><b>Cinema name: </b></h1> \r\n        \r\n           \r\n        <input type=\"text\" class=\"form-control\" name=\"name\"\r\n                                [(ngModel)] = \"currentCinema.name\"   \r\n                                    required>\r\n                                      \r\n    </div>\r\n  <br>\r\n  <br>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"col-8\">\r\n            <h4><b>Address: </b></h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <input type=\"text\" class=\"form-control\" name=\"address\"\r\n                [(ngModel)] = \"currentCinema.address\"   \r\n                    required>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <h4><b>Description: </b></h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n                <div class=\"col-8\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"description\"\r\n                [(ngModel)] = \"currentCinema.description\"   \r\n                    required>\r\n                </div>\r\n            </div>\r\n       \r\n    </div>\r\n    <br>\r\n    <br>\r\n    <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Save changes</button>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/cinema-component/editCinema-component/editCinema-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCinemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCinemaComponent = (function () {
    function EditCinemaComponent(cinemasService, router, homeService) {
        this.cinemasService = cinemasService;
        this.router = router;
        this.homeService = homeService;
    }
    EditCinemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cinemasService.currentc.subscribe(function (currentCinema) { return _this.currentCinema = currentCinema; });
    };
    EditCinemaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.currentCinema);
        this.homeService.sendEdditedCinema(this.currentCinema)
            .subscribe(function (currentCinema) {
            _this.currentCinema = currentCinema;
            _this.router.navigateByUrl('/cinemas');
        });
    };
    EditCinemaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'editCinema-component',
            template: __webpack_require__("./src/app/components/cinema-component/editCinema-component/editCinema-component.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_home_service_service__["a" /* HomeService */]])
    ], EditCinemaComponent);
    return EditCinemaComponent;
}());



/***/ }),

/***/ "./src/app/components/cinema-component/viewCinema-component/viewCinema-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" [hidden]=\"changeSeatingChartHidden\">\r\n    <div class=\"jumbotron\">\r\n        <h1>{{currentCinema.name}}</h1>    \r\n    </div>\r\n  <br>\r\n  <br>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"col-8\">\r\n            <h4><b>Address: </b></h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <p>{{currentCinema.address}}</p>\r\n            </div>\r\n        </div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <h4><b>Description: </b></h4>\r\n            </div>\r\n        </div>\r\n    <div class=\"card-body\">\r\n                <div class=\"col-8\">\r\n                    <p>{{currentCinema.description}}</p>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"card\">\r\n    \r\n    <div class=\"card-body\">\r\n        <div class=\"col-8\">\r\n            <h4><b>Repertoar: </b></h4>\r\n            <button class=\"btn\" (click)=\"addMovieFunct()\">Add movie</button>\r\n\r\n            <div>\r\n                <form  [hidden]=\"addMovie\" (ngSubmit)=\"onSubmitAdd(f, currentc)\" #f=\"ngForm\" >\r\n                    <p>Name: </p><input type=\"text\" class=\"form-control\" \r\n                    name=\"name\" ngModel required>\r\n                    <p>Description: </p><input type=\"text\" class=\"form-control\" name=\"description\"\r\n                        ngModel required> \r\n                        <p>Genre: </p><input type=\"text\" class=\"form-control\" name=\"genre\"\r\n                        ngModel required> \r\n                        <p>Producer: </p><input type=\"text\" class=\"form-control\" name=\"producer\"\r\n                        ngModel required> \r\n                            \r\n            <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add</button>\r\n            </form>\r\n            </div>\r\n        </div>\r\n        <table>\r\n            <tr *ngFor=\"let m of movies; let i = index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{m.name}}</td>\r\n                <td>{{m.genre}}</td>\r\n                <td *ngFor=\"let a of m.actors\">{{a.name}} {{a.lastName}}</td>\r\n                <td><button class=\"btn\" (click)=\"addProjection(m)\"> Add projection</button></td>\r\n                <td><button class=\"btn\" (click)=\"deleteMovie(m.id, currentCinema.id)\"> Delete </button></td>\r\n                <td *ngFor=\" let p1 of currentCinema.projekcije\">\r\n                \r\n                    <div *ngFor=\" let p of m.projekcije\">\r\n                    \r\n                        <div *ngIf=\"p.id==p1.id\">\r\n                        \r\n                        <div class=\"card\" [hidden]=\"!hiddenEditing[p.id]\">\r\n                                \r\n                            <p> {{p.date}}</p>\r\n                            <p> {{p.time}}</p>\r\n                            <p> {{p.place}}</p>\r\n                            <p> {{p.price}}</p>\r\n                            <p> {{p.rating}}</p>\r\n                            <p><button class=\"btn\" (click)=\"changeSeatingChart(p.id)\"> Change seating chart </button></p>\r\n                            <p><button class=\"btn\" [hidden]=\"!hiddenEditing[p.id]\" (click)=\"changeProjection(m.id, p.id, currentCinema.id)\"> Change projection</button></p>\r\n                            <p><button class=\"btn\" (click)=\"deleteProjection(m.id, p.id, currentCinema.id)\"> Delete projection</button></p>\r\n                            <p><button class=\"btn\" (click)=\"openAdding(p.id)\"> Add fast reservation ticket</button></p>\r\n                            <form [hidden]=\"hiddenFastRes[p.id]\" (ngSubmit)=\"onSubmit1(price, seat, m.id, p, currentCinema.id)\" #f1=\"ngForm\">\r\n                                <p>New price</p><input type=\"text\" class=\"form-control\" name=\"price\"\r\n                                    id=\"price\" #price required>\r\n                                <p>Seat number</p><input type=\"text\" class=\"form-control\" name=\"seat\"\r\n                                    id=\"seat\" #seat required> \r\n\r\n                                  <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add</button>\r\n                            </form>\r\n                            \r\n                        </div>\r\n                            <form  [hidden]=\"hiddenEditing[p.id]\" (ngSubmit)=\"onSubmit(f, p.id)\" #f=\"ngForm\" >\r\n                                    <input type=\"text\" class=\"form-control\" name=\"date\"\r\n                                    [(ngModel)] = \"p.date\" required>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"time\"\r\n                                        [(ngModel)] = \"p.time\" required> \r\n                                    <input type=\"text\" class=\"form-control\" name=\"place\"\r\n                                        [(ngModel)] = \"p.place\" required> \r\n                                    <input type=\"text\" class=\"form-control\" name=\"price\"\r\n                                        [(ngModel)] = \"p.price\" required> \r\n                                            \r\n                            <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Save changes</button>\r\n                            </form>\r\n        \r\n                      \r\n                    </div>\r\n                    </div>\r\n                    \r\n                </td>                            \r\n            </tr>\r\n        </table>\r\n         \r\n    </div>\r\n\r\n    <div class=\"card\">\r\n            <div class=\"card-body\">\r\n               \r\n                    <div class=\"col-8\">\r\n                        <h4><b>Tickets for fast reservation: </b></h4>\r\n                    </div>\r\n                </div>\r\n            <div class=\"card-body\">\r\n                        <div class=\"col-8\">\r\n                            <div *ngFor=\"let p of currentCinema.projekcije\">\r\n                            \r\n                           \r\n                            <div *ngFor=\"let t of p.tickets\">\r\n                                    <div *ngIf=\"t.fastRes==true\">\r\n                                            <div *ngIf=\"t.sold==false\">\r\n                                            <p>{{p.id}}</p>\r\n                                            <p>Original price: {{p.price}}</p>\r\n                                            <p><b>New price: {{t.salePrice}}</b> (you will save: {{p.price-t.salePrice}})</p>\r\n                                            <p>Place: {{p.place}}</p>\r\n                                            <p>Time: {{p.time}}</p>\r\n                                            <p>Seat number: {{t.seatNumber}}</p>\r\n\r\n                                            <div *ngFor=\"let m of movies\">\r\n                                                    <div *ngFor=\"let p1 of m.projekcije\">\r\n                                                        <div *ngIf=\"p1.id==p.id\">\r\n                                                            <p>Movie: {{m.name}}</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                <button class=\"btn\" (click)=\"reserve(t, t.id, p.id)\">Reserve</button>\r\n                                                <button class=\"btn\" (click)=\"delete(t, t.id, currentCinema.id)\">Delete</button>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <!-->seating chart<-->\r\n        </div>\r\n    </div>\r\n       \r\n    </div>\r\n\r\n</div>\r\n\r\n</div>\r\n<div [hidden]=\"!changeSeatingChartHidden\">\r\n    <seating-chart \r\n    [currentProjection]=currentProjection\r\n    (selectedSeats)=\"onChangeSelectedSeats($event)\"\r\n    >\r\n\r\n    </seating-chart>\r\n    <button class=\"btn btn-primary\" (click)=\"finishChangingSeats()\">Finish changing seats</button>\r\n</div>\r\n \r\n"

/***/ }),

/***/ "./src/app/components/cinema-component/viewCinema-component/viewCinema-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCinemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCinemaComponent = (function () {
    function ViewCinemaComponent(cinemasService, homeService, router) {
        this.cinemasService = cinemasService;
        this.homeService = homeService;
        this.router = router;
        this.changeSeatingChartHidden = false;
        this.movies = [];
        this.hiddenEditing = [];
        this.hiddenFastRes = [];
        this.numberProjections = 20;
    }
    ViewCinemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cinemasService.currentc.subscribe(function (data) {
            _this.currentCinema = data;
            console.log(_this.currentCinema);
            console.log("ispis iz cinema ngoniit viewcinema ");
            _this.addMovie = true;
        });
        this.cinemasService.getMovies(this.currentCinema.id).subscribe(function (data) {
            return _this.movies = data;
        });
        this.cinemasService.getNotFastProjectionsByCinemaId(this.currentCinema.id).subscribe(function (data) {
            return _this.notFastReservations = data;
        });
        this.cinemasService.initBroj.subscribe(function (numberProjections) { return _this.numberProjections = numberProjections; });
        var data = this.currentCinema.projekcije;
        data.forEach(function (p) {
            _this.hiddenEditing[p.id] = true;
            _this.hiddenFastRes[p.id] = true;
        });
    };
    ViewCinemaComponent.prototype.addProjection = function (movie) {
        console.log(movie.id);
        var cinemaid = this.currentCinema.id;
        this.cinemasService.selectMovie(movie);
        this.router.navigateByUrl('/addProjection');
    };
    ViewCinemaComponent.prototype.deleteProjection = function (movieid, projekcijaid, cinemaid) {
        var _this = this;
        console.log(movieid);
        console.log(projekcijaid);
        console.log(cinemaid);
        this.cinemasService.deleteProjection(movieid, projekcijaid, cinemaid).subscribe(function (data) {
            return _this.movies = data;
        });
    };
    ViewCinemaComponent.prototype.changeProjection = function (movieid, projekcijaid, cinemaid) {
        this.hiddenEditing[projekcijaid] = false;
        this.projekcijaId = projekcijaid;
    };
    ViewCinemaComponent.prototype.openAdding = function (projekcijaid) {
        this.hiddenFastRes[projekcijaid] = false;
    };
    ViewCinemaComponent.prototype.deleteMovie = function (idMovie, idCinema) {
        var _this = this;
        this.cinemasService.deleteMovie(idMovie, idCinema).subscribe(function (data) {
            return _this.movies = data;
        });
    };
    ViewCinemaComponent.prototype.onSubmit = function (form, id) {
        this.hiddenEditing[id] = true;
        this.cinemasService.sendEdditedProjection(form.value, id)
            .subscribe();
    };
    ViewCinemaComponent.prototype.addToFast = function (cinemaid, ticketid, ticket) {
        console.log(ticketid);
        this.cinemasService.addToFast(cinemaid, ticketid, ticket).subscribe();
    };
    ViewCinemaComponent.prototype.reserve = function (ticket, ticketid, projectionId) {
        console.log(projectionId);
        this.cinemasService.reserveFast(ticket, ticketid, projectionId).subscribe();
        console.log(this.currentCinema);
        this.router.navigateByUrl('/viewCinema');
    };
    ViewCinemaComponent.prototype.changeSeatingChart = function (projectionId) {
        var _this = this;
        this.changeSeatingChartHidden = true;
        console.log(this.changeSeatingChartHidden);
        this.cinemasService.getProjectionById(projectionId)
            .subscribe(function (data) { return _this.currentProjection = data; });
    };
    ViewCinemaComponent.prototype.onChangeSelectedSeats = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var seat = array_1[_i];
            this.cinemasService.deleteSeats(this.currentProjection, this.currentProjection.id, seat).subscribe();
        }
    };
    ViewCinemaComponent.prototype.finishChangingSeats = function () {
        this.changeSeatingChartHidden = !this.changeSeatingChartHidden;
    };
    ViewCinemaComponent.prototype.onSubmit1 = function (price, seat, mid, p, cid) {
        console.log(price.value);
        console.log(seat.value);
        this.cinemasService.addFastTicket(price.value, seat.value, mid, p, cid).subscribe();
    };
    ViewCinemaComponent.prototype.delete = function (ticket, ticketid, cinemaid) {
        this.cinemasService.deleteFast(ticket, ticketid).subscribe();
        this.router.navigateByUrl('/viewCinema');
    };
    ViewCinemaComponent.prototype.addMovieFunct = function () {
        this.addMovie = false;
    };
    ViewCinemaComponent.prototype.onSubmitAdd = function (form, cinemaid) {
        var _this = this;
        this.addMovie = true;
        console.log(form.value);
        this.cinemasService.getMovies(this.currentCinema.id).subscribe(function (data) {
            return _this.movies = data;
        });
        this.homeService.addMovie(form.value, cinemaid).subscribe(function (data) { return _this.cinemasService.getMovies(_this.currentCinema.id).subscribe(function (data) {
            return _this.movies = data;
        }); });
    };
    ViewCinemaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'viewCinema-component',
            template: __webpack_require__("./src/app/components/cinema-component/viewCinema-component/viewCinema-component.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */],
            __WEBPACK_IMPORTED_MODULE_3__services_home_service_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewCinemaComponent);
    return ViewCinemaComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/additem-component/additem-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n<body>\r\n    <a [routerLink]=\"['/login']\">Login </a>\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1>Add new item</h1>      \r\n    <!--<p>Browse and bid on !</p> -->\r\n    \r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"container \" >\r\n        <div class=\"justify-content-center align-items-center\">\r\n            <div class=\"form-area \">  \r\n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\r\n                <br style=\"clear:both\">\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <label>Item name</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"name\"\r\n                                [(ngModel)] = \"item.name\"   \r\n                                    required\r\n                                    >\r\n\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                    <label>Item description</label>\r\n                                    <textarea class=\"form-control\" type=\"textarea\"  minlength=\"10\" maxlength=\"300\" rows=\"3\" name=\"description\"\r\n                                        [(ngModel)]= \"item.description\"\r\n                                        required>\r\n                                    </textarea>\r\n                            </div>  \r\n                            \r\n                            <hr>           \r\n                            <div class=\"form-group\">\r\n                                    <label>Expire date</label>\r\n                                <input type=\"date\"  min=\"1000-01-01\" max=\"3000-12-31\" class=\"form-control\" value=\"Expire date\"  name=\"endDate\" \r\n                                [(ngModel)] = \"item.endDate\"\r\n                                required>            \r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"form-group\">\r\n                                    <label> Write down the picture url </label>\r\n                                    <input type=\"text\" class=\"form-control\"   name=\"image\" \r\n                                    [(ngModel)]= \"item.image\"\r\n                                    >\r\n                                   \r\n                            </div>\r\n\r\n                            <hr><hr>\r\n                <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add item</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/additem-component/additem-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fanzone_service__ = __webpack_require__("./src/app/services/fanzone-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdditemComponent = (function () {
    function AdditemComponent(fanzone, router) {
        this.fanzone = fanzone;
        this.router = router;
        this.item = {
            name: "",
            description: "",
            endDate: "",
            image: ""
        };
    }
    AdditemComponent.prototype.ngOnInit = function () {
    };
    AdditemComponent.prototype.onSubmit = function () {
        this.fanzone.sendNewItem(this.item)
            .subscribe();
        this.router.navigateByUrl('/fanzone');
    };
    AdditemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'additem-component',
            template: __webpack_require__("./src/app/components/fanzone-component/additem-component/additem-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fanzone_service__["a" /* FanzoneService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdditemComponent);
    return AdditemComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/addnewitem-component/addnewitem-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Add new item</h1>      \n    <!--<p>Browse and bid on !</p> -->\n    \n  </div>\n  \n</div>\n\n<a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container \" >\n        <div class=\"justify-content-center align-items-center\">\n            <div class=\"form-area \">  \n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\n                <br style=\"clear:both\">\n                            \n                            <div class=\"form-group\">\n                                <label>Item name</label> \n                                <input type=\"text\" class=\"form-control\" name=\"name\"\n                                [(ngModel)] = \"item.name\"   \n                                    required\n                                    minlength=\"3\"\n                                    maxlength=\"100\"\n                                    >\n\n                            </div>\n                            <div class=\"form-group\">\n                                    <label>Item description</label>\n                                    <textarea class=\"form-control\" type=\"textarea\"  minlength=\"10\" maxlength=\"300\" rows=\"3\" name=\"description\"\n                                        [(ngModel)]= \"item.description\"\n                                        required\n                                        >\n                                    </textarea>\n                            </div>\n\n\n                            <label>\n                              Choose where is this item being sold\n                            </label>\n                            <div class=\"radio\" *ngFor=\"let p of places\" >\n                              <input type=\"radio\" [(ngModel)]=\"item.place\" name=\"place\" [value]=\"p\"> {{p}}\n                            </div>  \n                            <hr>\n                            <label *ngIf=\"item.place === 'Cinema'\"> Select cinema</label>\n                            <label *ngIf=\"item.place === 'Theatre'\"> Select theatre</label>\n                            <div class=\"form-group\">\n                                <select required title=\"All cinemas\" class=\"custom-select\"  name=\"cinemas\" [(ngModel)]=\"item.placeID\" *ngIf=\"item.place === 'Cinema'\">\n                                    \n                                    <option [value] =\"c.id\"  *ngFor='let c  of cinemas' >{{c.name}}</option>\n                                    \n                                </select>\n\n                                <select  required title=\"All theatres\" class=\"custom-select\"  name=\"theatres\" [(ngModel)]=\"item.placeID\" *ngIf=\"item.place === 'Theatre'\">\n                                    \n                                    <option [value] = \"t.id\"  *ngFor='let t of theatres' >{{t.name}}</option>\n                                    \n                                </select>\n                            </div>\n\n\n\n                            <div class=\"form-group\">\n                                    <label>Price</label>\n                                    <input type=\"text\" class=\"form-control selected\" name=\"price\" \n                                        [(ngModel)] = \"item.price\" \n                                        required\n                                        pattern=\"[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)\"\n                                    >\n                                </div>  \n                            <hr>\n                                       \n                            \n                            <hr>\n                            <div class=\"form-group\">\n                                    <label> Enter item picture url </label>\n                                    <input type=\"text\" class=\"form-control\"   name=\"image\" \n                                    [(ngModel)]= \"item.image\"\n                                    >\n                                   \n                            </div>\n\n                            <hr><hr>\n                <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add item</button>\n                </form>\n            </div>\n        </div>\n        </div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/addnewitem-component/addnewitem-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_fanzone_service__ = __webpack_require__("./src/app/services/fanzone-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddnewitemComponent = (function () {
    function AddnewitemComponent(cinemaService, theatresService, fanzoneService, router, dataService) {
        this.cinemaService = cinemaService;
        this.theatresService = theatresService;
        this.fanzoneService = fanzoneService;
        this.router = router;
        this.dataService = dataService;
        this.places = [
            'Cinema',
            'Theatre'
        ];
        this.item = {
            name: "",
            description: "",
            price: null,
            image: "",
            place: "Cinema",
            placeID: 1
        };
    }
    AddnewitemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cinemaService.getCinemas().subscribe(function (data) {
            _this.cinemas = data;
            console.log("CINEME");
            console.log(_this.cinemas);
        });
        this.theatresService.getTheatres().subscribe(function (data) {
            _this.theatres = data;
            console.log("TEATREVI");
            console.log(_this.theatres);
        });
    };
    AddnewitemComponent.prototype.onSubmit = function (form) {
        console.log(this.item);
        var newItem;
        var novaLista;
        this.fanzoneService.sendNewNewItem(this.item).subscribe(function (data) { return newItem = data; });
        this.dataService.currentNewItemListForShow.subscribe(function (data) { return novaLista = data; });
        novaLista.push(newItem);
        this.router.navigateByUrl("/fanzone");
    };
    AddnewitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addnewitem-component',
            template: __webpack_require__("./src/app/components/fanzone-component/addnewitem-component/addnewitem-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cinemas_service_service__["a" /* CinemasService */], __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_3__services_fanzone_service__["a" /* FanzoneService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]])
    ], AddnewitemComponent);
    return AddnewitemComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/edititem-component/edititem-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n<body>\r\n    <a [routerLink]=\"['/login']\">Login </a>\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n         <h1>Edit item : {{item.name}}</h1>  \r\n        </div>\r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-2\">\r\n                    <div class=\"container\">\r\n                            <b>Posted: </b>    <br>\r\n                            <b>Has bid: </b> <br>\r\n                            <b>Owner: </b>  <br>\r\n                            <b>Approved: </b>  <br>\r\n            \r\n                        </div>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                {{item.beginDate}}<br>\r\n                <label *ngIf=\"item.someoneBid\">Yes</label>  \r\n                <label *ngIf=\"!item.someoneBid\">No</label>  \r\n                <br>\r\n                    {{item.owner.username}}<br>\r\n                    {{item.approved}}<br>\r\n            </div>\r\n        </div>\r\n            \r\n      \r\n    <!--<p>Browse and bid on !</p> -->\r\n    \r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"container w-75\" >\r\n        <div class=\"justify-content-center align-items-center\">\r\n            <div class=\"form-area \">  \r\n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\r\n                <br style=\"clear:both\">\r\n                            \r\n                            <div class=\"form-group\">\r\n                                <label>Change item name</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"name\"\r\n                                [(ngModel)] = \"item.name\"   \r\n                                    required\r\n                                    >\r\n\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                    <label>Change item description</label>\r\n                                    <textarea class=\"form-control\" type=\"textarea\"  minlength=\"10\" maxlength=\"300\" rows=\"3\" name=\"description\"\r\n                                        [(ngModel)]= \"item.description\"\r\n                                        required\r\n                                        >\r\n                                    </textarea>\r\n                            </div>  \r\n                            \r\n                            <hr>           \r\n                            <div class=\"form-group\">\r\n                                    <label>Change expire date</label>\r\n                                <input type=\"date\"  min=\"1000-01-01\" max=\"3000-12-31\" class=\"form-control\" value=\"Expire date\"  name=\"endDate\" \r\n                                [(ngModel)] = \"item.endDate\"\r\n                                required>            \r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"form-group\">\r\n                                    <label> Change picture </label>\r\n                                    <input type=\"file\" class=\"form-control-file\"   name=\"image\" \r\n                                    [(ngModel)]= \"item.image\"\r\n                                    >\r\n                                   \r\n                            </div>\r\n\r\n                            <hr><hr>\r\n                <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Edit item</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/edititem-component/edititem-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__("./src/app/services/item-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItemComponent = (function () {
    function EditItemComponent(dataService, router, itemService) {
        this.dataService = dataService;
        this.router = router;
        this.itemService = itemService;
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("Isas")
        this.dataService.currentEdditedItem.subscribe(function (item) { return _this.item = item; });
        this.dataService.currentPreownedItemListForShow.subscribe(function (itemList) { return _this.itemList = itemList; });
        //console.log(this.item);
    };
    EditItemComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("ZNACI USAO");
        console.log(this.itemList);
        var updateItem = this.itemList.find(function (i) { return i.itemID == _this.item.itemID; });
        var index = this.itemList.indexOf(updateItem);
        this.itemList[index] = this.item;
        this.itemService.sendEdditedItem(this.item)
            .subscribe(function (data) {
            _this.dataService.changePreownedItemListForShow(_this.itemList);
            _this.router.navigateByUrl('/fanzone');
        });
    };
    EditItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edititem-component',
            template: __webpack_require__("./src/app/components/fanzone-component/edititem-component/edititem-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/editnewitem-component/editnewitem-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n    <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Edit item</h1>      \n    <!--<p>Browse and bid on !</p> -->\n    \n  </div>\n  \n</div>\n\n\n<div class=\"container \" >\n        <div class=\"justify-content-center align-items-center\">\n            <div class=\"form-area \">  \n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\n                <br style=\"clear:both\">\n                            \n                            <div class=\"form-group\">\n                                <label>Change  item name</label> \n                                <input type=\"text\" class=\"form-control\" name=\"name\"\n                                [(ngModel)] = \"item.name\"   \n                                    required\n                                    minlength=\"3\"\n                                    maxlength=\"100\"\n                                    >\n\n                            </div>\n                            <div class=\"form-group\">\n                                    <label>Change  item description</label>\n                                    <textarea class=\"form-control\" type=\"textarea\"  minlength=\"10\" maxlength=\"300\" rows=\"3\" name=\"description\"\n                                        [(ngModel)]= \"item.description\"\n                                        required\n                                        >\n                                    </textarea>\n                            </div>\n\n\n                            <label>\n                              Choose where is this item being sold\n                            </label>\n                            <div class=\"radio\" *ngFor=\"let p of places\" >\n                              <input type=\"radio\" [(ngModel)]=\"item.place\" name=\"place\" [value]=\"p\"> {{p}}\n                            </div>  \n                            <hr>\n                            <label *ngIf=\"item.place === 'Cinema'\"> Select cinema</label>\n                            <label *ngIf=\"item.place === 'Theatre'\"> Select theatre</label>\n                            <div class=\"form-group\">\n                                <select required title=\"All cinemas\" class=\"custom-select\"  name=\"cinemas\" [(ngModel)]=\"item.placeID\" *ngIf=\"item.place === 'Cinema'\">\n                                    \n                                    <option [value] =\"c.id\"  *ngFor='let c  of cinemas' >{{c.name}}</option>\n                                    \n                                </select>\n\n                                <select  required title=\"All theatres\" class=\"custom-select\"  name=\"theatres\" [(ngModel)]=\"item.placeID\" *ngIf=\"item.place === 'Theatre'\">\n                                    \n                                    <option [value] = \"t.id\"  *ngFor='let t of theatres' >{{t.name}}</option>\n                                    \n                                </select>\n                            </div>\n\n\n\n                            <div class=\"form-group\">\n                                    <label>Change  item price</label>\n                                    <input type=\"text\" class=\"form-control selected\" name=\"price\" \n                                        [(ngModel)] = \"item.price\" \n                                        required\n                                        pattern=\"[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)\"\n                                    >\n                                </div>  \n                            <hr>\n                                       \n                            \n                            <hr>\n                            <div class=\"form-group\">\n                                    <label> Change  item picture </label>\n                                    <input type=\"file\" class=\"form-control-file\"   name=\"image\" \n                                    [(ngModel)]= \"item.image\"\n                                    >\n                                   \n                            </div>\n\n                            <hr><hr>\n                <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Edit  item</button>\n                </form>\n            </div>\n        </div>\n        </div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/editnewitem-component/editnewitem-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditnewitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_newitem_service__ = __webpack_require__("./src/app/services/newitem-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditnewitemComponent = (function () {
    // item = {
    //   name : this.originalItem.name,
    //   description : this.originalItem.description,
    //   price : this.originalItem.price,
    //   image : this.originalItem.image,
    //   place : "Cinema",
    //   placeID : 1
    // };
    function EditnewitemComponent(cinemaService, theatresService, dataService, newItemService, router) {
        this.cinemaService = cinemaService;
        this.theatresService = theatresService;
        this.dataService = dataService;
        this.newItemService = newItemService;
        this.router = router;
        this.places = [
            'Cinema',
            'Theatre'
        ];
        this.item = {
            itemID: 0,
            name: "",
            description: "",
            price: null,
            image: "",
            place: 'Cinema',
            placeID: 1
        };
    }
    EditnewitemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSelectedNewItem.subscribe(function (data) {
            _this.originalItem = data;
            console.log(_this.originalItem);
            if (_this.originalItem.cinemaOwner == null) {
                _this.place = 'Theatre';
                _this.placeID = _this.originalItem.theatreOwner.theatre_id;
            }
            else {
                _this.place = 'Cinema';
                _this.placeID = _this.originalItem.cinemaOwner.cinema_id;
            }
            console.log(_this.place);
            console.log(_this.placeID);
            _this.item.itemID = _this.originalItem.itemID;
            _this.item.name = _this.originalItem.name;
            _this.item.description = _this.originalItem.description;
            _this.item.price = _this.originalItem.price;
            _this.item.image = _this.originalItem.image;
            _this.item.place = _this.place;
            _this.item.placeID = _this.placeID;
            console.log(_this.item);
            _this.cinemaService.getCinemas().subscribe(function (data) {
                _this.cinemas = data;
                console.log(_this.cinemas);
            });
            _this.theatresService.getTheatres().subscribe(function (data) {
                _this.theatres = data;
                console.log(_this.theatres);
            });
        });
    };
    EditnewitemComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.item.place === 'Cinema') {
            //znaci da se item moze kupiti u nekom bioskopu
            console.log(this.originalItem);
            console.log("Usao u cinema");
            this.cinemaService.getCinema(this.item.placeID).subscribe(function (data) {
                _this.originalItem.cinemaOwner = data;
                console.log(_this.item);
                console.log(_this.originalItem);
                _this.originalItem.name = _this.item.name;
                _this.originalItem.description = _this.item.description;
                _this.originalItem.price = _this.item.price;
                _this.originalItem.image = _this.item.image;
                _this.newItemService.sendEdditedItem(_this.originalItem).subscribe(function (data) {
                    if (data == false) {
                        alert("This item has changed meanwhile.Please refresh your page");
                        _this.router.navigateByUrl('/fanzone');
                    }
                });
                _this.router.navigateByUrl("/fanzone");
            });
            this.originalItem.theatreOwner = null;
        }
        else {
            //znc da se item moze kupiti u nekom pozoristu
            console.log(this.originalItem);
            console.log("Usao u theatre");
            this.originalItem.cinemaOwner = null;
            this.theatresService.getTheatre(this.item.placeID).subscribe(function (data) {
                _this.originalItem.theatreOwner = data;
                console.log(_this.item);
                console.log(_this.originalItem);
                _this.originalItem.name = _this.item.name;
                _this.originalItem.description = _this.item.description;
                _this.originalItem.price = _this.item.price;
                _this.originalItem.image = _this.item.image;
                _this.newItemService.sendEdditedItem(_this.originalItem).subscribe(function (data) {
                    if (data == false) {
                        alert("This item has changed meanwhile.Please refresh your page");
                        _this.router.navigateByUrl('/fanzone');
                    }
                });
                _this.router.navigateByUrl("/fanzone");
            });
        }
    };
    EditnewitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editnewitem-component',
            template: __webpack_require__("./src/app/components/fanzone-component/editnewitem-component/editnewitem-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */], __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__services_newitem_service__["a" /* NewItemService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], EditnewitemComponent);
    return EditnewitemComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/fanzone-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n<body>\r\n<a [routerLink]=\"['/login']\">Login </a>\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n          <h1>Fanzone</h1>  \r\n          \r\n          <!--<p>Browse and bid on !</p> -->\r\n          \r\n      </div>\r\n      <div class=\"col text-right\">\r\n          <button *ngIf=\"preowned\" class=\"btn btn-dark btn-md\" (click)=\"onClickPending()\">Pending items</button>\r\n          <button class=\"btn btn-dark btn-md\" (click)=\"onClickMyFanzone()\">My fanzone</button>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n</div>\r\n<div class=\"container\" border-bottom>\r\n  <ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item border-right\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\"  (click)=\"onClickPreOwnedItems()\" [routerLink]=\"\">Pre-owned items</a>\r\n    </li>\r\n    <li class=\"nav-item border-right\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" [routerLink]=\"\" (click)=\"onClickNewItems()\">New items</a>\r\n    </li>\r\n    \r\n    <hr> <button *ngIf = \"preowned\" class=\"btn btn-dark\" (click)=\"onClickAddNewItem()\">Add preowned item</button>\r\n         <button *ngIf = \"!preowned\" class=\"btn btn-dark\" (click)=\"onClickAddNewNewItem()\">Add new item</button>\r\n  </ul>\r\n  <br>\r\n  <h2 *ngIf=\"preowned\"> Preowned items for sale</h2>\r\n  <h2 *ngIf=\"!preowned\"> New items for sale</h2>\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"container\" *ngIf = \"preowned\" >\r\n    <item-component [items] = approveditems></item-component>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf = \"!preowned\" >\r\n  <newitem-component [items] = newitems></newitem-component>\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/fanzone-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanzoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fanzone_service__ = __webpack_require__("./src/app/services/fanzone-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FanzoneComponent = (function () {
    function FanzoneComponent(fanzoneService, router, dataService) {
        this.fanzoneService = fanzoneService;
        this.router = router;
        this.dataService = dataService;
        this.preowned = true;
    }
    FanzoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentTypeOfItemForShow.subscribe(function (data) {
            if (data == null) {
                console.log("Usao u null");
                _this.dataService.changeTypeOfItemForShow(true);
            }
            else {
                _this.preowned = data;
            }
        });
        this.fanzoneService.getApprovedItems()
            .subscribe(function (data) {
            _this.approveditems = data;
            _this.dataService.changePreownedItemListForShow(_this.approveditems);
        });
        this.fanzoneService.getNewItems()
            .subscribe(function (data) {
            _this.newitems = data;
            //this.dataService.changeItemListForShow(this.newitems);
        });
    };
    FanzoneComponent.prototype.onClickAddNewItem = function () {
        this.router.navigateByUrl('/additem');
    };
    FanzoneComponent.prototype.onClickAddNewNewItem = function () {
        this.router.navigateByUrl('/addnewitem');
    };
    FanzoneComponent.prototype.onClickPending = function () {
        var _this = this;
        //Poslati zahtev da vidis da li je fanzone admin ili system admin, ako jeste moze, ako ne ne moze
        this.fanzoneService.checkIfOk().subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/pending');
        });
    };
    FanzoneComponent.prototype.onClickMyFanzone = function () {
        this.router.navigateByUrl('/myfanzone');
    };
    FanzoneComponent.prototype.onClickPreOwnedItems = function () {
        if (!this.preowned) {
            this.preowned = true;
            this.dataService.changeTypeOfItemForShow(this.preowned);
        }
    };
    FanzoneComponent.prototype.onClickNewItems = function () {
        if (this.preowned) {
            this.preowned = false;
            this.dataService.changeTypeOfItemForShow(this.preowned);
            console.log(this.newitems);
        }
    };
    FanzoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fanzone-component',
            template: __webpack_require__("./src/app/components/fanzone-component/fanzone-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fanzone_service__["a" /* FanzoneService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], FanzoneComponent);
    return FanzoneComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/item-component/item-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items\" >\r\n    <div class=\"card\" >\r\n        <div class=\"w-100\">\r\n            <div class=\"card-body\" (click)=\"onClickSetSelectedItem(item.itemID)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <img  [src]=\"item.image\" class=\"img-fluid rounded w-60  h-60\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"col-8\">\r\n                        <h4><b>{{item.name}}</b> \r\n                            <span class=\"badge badge-pill badge-primary float-right\">\r\n                                PREOWNED\r\n                            </span>\r\n                            <span *ngIf=\"item.sold\" class=\"badge badge-pill badge-warning float-right\">\r\n                                    SOLD\r\n                                </span></h4>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                            <!-- <div *ngIf=\"!item.sold\" class=\"col\">\r\n                                Current bid: <b>{{item.currentBid}}$</b>\r\n                            </div>\r\n                            <div *ngIf=\"item.sold\" class=\"col\">\r\n                                    Sold for: <b>{{item.currentBid}}$</b>\r\n                            </div>\r\n                             -->\r\n                            \r\n                            \r\n                        </div>\r\n                        <button class=\"btn btn-success\" *ngIf=\"!item.sold && item.approved\">Bid</button>\r\n                        \r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <p>Seller : </p> <p><b>{{item.owner.username}}</b></p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <p>Offer expires on : </p> <p> <b>{{item.endDate}}</b></p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer\">  \r\n                <div class=\"row\">\r\n                    <div class=\"text-left\">\r\n                        <button  class=\"btn btn-dark btn-sm\" (click)=\"onClickDelete(item.itemID)\">Delete</button>\r\n                        <button *ngIf=\"!item.sold\" class=\"btn btn-dark btn-sm\" (click)=\"onClickEdit(item.itemID)\">Edit</button>\r\n                        <button *ngIf=\"!item.approved && !item.sold\" class=\"btn btn-dark btn-sm\" (click)=\"onClickApprove(item)\">Approve</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n    </div>\r\n</div>\r\n<hr>\r\n</div>    \r\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/item-component/item-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("./src/app/services/item-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = (function () {
    function ItemComponent(itemService, dataService, router) {
        this.itemService = itemService;
        this.dataService = dataService;
        this.router = router;
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.dataService.changePreownedItemListForShow(this.items);
    };
    ItemComponent.prototype.onClickDelete = function (id) {
        var _this = this;
        this.itemService.deleteItem(id).subscribe(function (data) {
            console.log(id);
            var index = -1;
            for (var i = 0; i < _this.items.length; i++) {
                if (_this.items[i].itemID === id)
                    index = i;
            }
            _this.items.splice(index, 1);
            console.log(_this.items);
        });
    };
    ItemComponent.prototype.onClickEdit = function (id) {
        var _this = this;
        this.itemService.getItem(id).subscribe(function (data) {
            _this.item = data;
            _this.itemService.checkIfOk(_this.item).subscribe(function (data2) {
                _this.dataService.changeEdditedItem(_this.item);
                _this.router.navigateByUrl('/edititem');
            });
        });
    };
    ItemComponent.prototype.onClickApprove = function (item) {
        var index = this.items.indexOf('itemID', item.itemID);
        this.items.splice(index, 1);
        console.log(item);
        this.itemService.approveItem(item).subscribe();
    };
    ItemComponent.prototype.onClickSetSelectedItem = function (id) {
        var _this = this;
        this.itemService.getItem(id).subscribe(function (data) {
            _this.item = data;
            _this.dataService.changeSelectedItem(_this.item);
            _this.router.navigateByUrl('/itemprofile');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ItemComponent.prototype, "items", void 0);
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'item-component',
            template: __webpack_require__("./src/app/components/fanzone-component/item-component/item-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/itembids-component/itembids-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n  <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n      <h1>Bid preview for {{item.name}}</h1>  <h5> <b> [#{{item.itemID}}]</b> </h5>\n    \n  </div>\n  <table class=\"table table-hover table-bordered\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col-md-1\">#</th>\n          <th scope=\"col-md-4\">Owner</th>\n          <th scope=\"col-md-4\">Bidder</th>\n          <th scope=\"col-md-2\">Value</th>\n          <th scope=\"col-md-1\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let bid of bidList\">\n          <th scope=\"row\">{{bid.bidID}}</th>\n          <td>{{bid.item.owner.username}}</td>\n          <td>{{bid.buyer.username}}</td>\n          <td class=\"text-danger\"><b>{{bid.value}}</b></td>\n          <td> <button class=\"btn btn-success btn-sm\" (click)=\"onClickAcceptBid(bid)\"> Accept bid </button></td>\n        </tr>\n        \n      </tbody>\n    </table>\n    \n    \n            \n\n  <hr>\n</div>\n\n\n\n\n\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/itembids-component/itembids-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItembidsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bid_service__ = __webpack_require__("./src/app/services/bid-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItembidsComponent = (function () {
    function ItembidsComponent(dataService, bidService, router) {
        this.dataService = dataService;
        this.bidService = bidService;
        this.router = router;
    }
    ItembidsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSelectedItem.subscribe(function (data) {
            _this.item = data;
            _this.bidService.getAllByItem(_this.item).subscribe(function (data) {
                _this.bidList = data;
                console.log(_this.bidList);
            });
        });
    };
    ItembidsComponent.prototype.onClickAcceptBid = function (bid) {
        var _this = this;
        console.log("Usao");
        this.bidService.acceptBid(bid).subscribe(function (data) {
            console.log(data);
            if (data == false) {
                alert("Error ocurred");
            }
            _this.router.navigateByUrl("/fanzone");
        });
    };
    ItembidsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-itembids-component',
            template: __webpack_require__("./src/app/components/fanzone-component/itembids-component/itembids-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ItembidsComponent);
    return ItembidsComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/itemprofile-component/itemprofile-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n  <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n      <h1>Item  {{item.name}}</h1>  <h5> <b> [#{{item.itemID}}]</b> </h5>\n    \n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">\n        <img   [src]=\"item.image\" alt=\"\" class=\"img-fluid rounded w-60  h-60\">\n    </div>\n    <div class=\"col-3 border-left border-right\">\n      <h3>Description</h3>\n      <p>{{item.description}}</p>\n    </div>\n    <div class=\"col-6 text-center\" >\n      <h3 >Make your bid</h3> \n      Current bid: <h4><b class=\"text-danger\">{{value}}$</b></h4>\n      \n      <div class=\"justify-content-center align-items-center\">\n        <div class=\"form-area \">  \n          <form *ngIf=\"!item.sold\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\n            <br style=\"clear:both\">            \n            <div class=\"form-group input-lg\">\n              <label>How much money would you bid for {{item.name}}</label> \n              <input type=\"text\" class=\"form-control\" name=\"currentBid\" placeholder=\"Place your bid here\"\n                [(ngModel)]=\"value\"\n                required\n                pattern=\"[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)\"\n                min=\"item.currentBid\">\n            </div>\n            \n            <button type=\"submit\"  class=\"btn btn-success btn-lg\" [disabled] = \"!f.valid\">Bid</button>\n          </form>\n          <hr>\n          <button class=\"btn  btn-dark float-right\" (click)=\"onClickShowAllBids(item)\">Show all bids</button>\n        </div>\n      </div>\n    </div>\n  </div>\n            \n\n  <hr>\n  <h3>Other info about {{item.name}}</h3><br>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      Posted:  <br>\n      Expire date:  <br>\n      Owner:  <br>\n      Approved:  <br>\n      Someone bid: <br>\n    </div>\n    <div class=\"col-md-3\">\n        <b>{{item.beginDate}}</b>  <br>\n        <b>{{item.endDate}}</b>  <br> \n        <b>{{item.owner.username}}</b>  <br>\n        \n       <b><label *ngIf=\"item.approved\">Yes</label>  </b>\n       <b><label *ngIf=\"!item.approved\">No</label>  </b> <br>\n       <b><label *ngIf=\"item.someoneBid\">Yes</label>  </b>\n       <b><label *ngIf=\"!item.someoneBid\">No</label>  </b>\n    </div>\n    \n  </div>\n</div>\n\n\n\n\n\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/itemprofile-component/itemprofile-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__("./src/app/services/item-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bid_service__ = __webpack_require__("./src/app/services/bid-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemprofileComponent = (function () {
    function ItemprofileComponent(dataService, itemService, bidService, router) {
        this.dataService = dataService;
        this.itemService = itemService;
        this.bidService = bidService;
        this.router = router;
        this.dobarUnos = false;
    }
    ItemprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSelectedItem.subscribe(function (data) {
            _this.item = data;
            console.log("VERZIJA: " + data.version);
            var token = _this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
            console.log(token);
        });
        var user = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
        console.log(user);
        this.username = user.user;
        this.bidService.getBid(this.item).subscribe(function (data) {
            console.log(data);
            _this.bid = data;
            _this.value = _this.bid.value;
        });
    };
    ItemprofileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bid.value = this.value;
        console.log(this.bid);
        console.log(this.value);
        this.bidService.changeBidValue(this.bid).subscribe(function (data2) {
            console.log(data2);
            if (data2 == false) {
                alert("Item has  already been sold.Or the owner is trying to bid");
                _this.router.navigateByUrl('/fanzone');
            }
        });
    };
    ItemprofileComponent.prototype.onClickShowAllBids = function (item) {
        var _this = this;
        this.bidService.checkAllBids(this.item).subscribe(function (data) {
            _this.router.navigateByUrl("showbids");
        });
        //proveri da li je owner itema 
    };
    ItemprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-itemprofile-component',
            template: __webpack_require__("./src/app/components/fanzone-component/itemprofile-component/itemprofile-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_3__services_bid_service__["a" /* BidService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ItemprofileComponent);
    return ItemprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/myfanzone-component/myfanzone-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col\">\n          <h1>My Fanzone</h1>  \n      </div>\n    </div>\n  </div>\n</div>\n<a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item border-right\">\n      <a class=\"nav-link\" data-toggle=\"tab\"  (click)=\"onClickMyBids()\" [routerLink]=\"\">My bids</a>\n    </li>\n    <li class=\"nav-item border-right\">\n      <a class=\"nav-link\" data-toggle=\"tab\" [routerLink]=\"\" (click)=\"onClickMyItems()\">My items</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\"  [routerLink]=\"\" (click)=\"onClickBoughtItems()\">Bought items</a>\n    </li>\n    \n  </ul>\n</div>\n\n\n\n<div class=\"container\" >\n  <h1>My bids</h1>\n  <table class=\"table table-hover table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        \n        <th scope=\"col-md-4\">Item</th>\n        <th scope=\"col-md-4\">Owner</th>\n        <th scope=\"col-md-2\">Value</th>\n        \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let bid of bidList\">\n        \n        <td>{{bid.item.name}}</td>\n        <td>{{bid.buyer.username}}</td>\n        <td class=\"text-danger\"><b>{{bid.value}}</b></td>\n        \n      </tr>\n      \n    </tbody>\n  </table>\n</div>\n\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/myfanzone-component/myfanzone-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyfanzoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bid_service__ = __webpack_require__("./src/app/services/bid-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyfanzoneComponent = (function () {
    function MyfanzoneComponent(bidService) {
        this.bidService = bidService;
        this.current = true;
    }
    MyfanzoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bidService.getAllByUser().subscribe(function (data) {
            _this.bidList = data;
        });
    };
    MyfanzoneComponent.prototype.onClickMyBids = function () {
        console.log("Promeno tab");
    };
    MyfanzoneComponent.prototype.onClickMyItems = function () {
        console.log("Promenio tab2");
    };
    MyfanzoneComponent.prototype.onClickBoughtItems = function () {
        console.log("Promenio tab3");
    };
    MyfanzoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myfanzone-component',
            template: __webpack_require__("./src/app/components/fanzone-component/myfanzone-component/myfanzone-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_bid_service__["a" /* BidService */]])
    ], MyfanzoneComponent);
    return MyfanzoneComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/newitem-component/newitem-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of items\" >\n    <div class=\"card\" >\n        <div class=\"w-100\">\n            <div class=\"card-body\" (click)=\"onClickSetSelectedNewItem(item.itemID)\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <img  [src]=\"item.image\" class=\"img-fluid rounded w-100  h-100\" alt=\"\">\n                    </div>\n                    <div class=\"col-8\">\n                        <h4>\n                            <b>{{item.name}} </b> <span class=\"badge badge-pill badge-danger float-right\">NEW</span> \n                            <span class=\"badge badge-pill badge-warning float-right\" *ngIf=\"item.reserved\">RESERVED</span> \n\n                        </h4> \n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                               Item price: <b>{{item.price}}$</b> \n                               <p *ngIf=\"userType == 1\" > Price with discount for bronze user: <font color=\"brown\"><b>{{item.price*0.95}}$</b> </font></p>\n                               <p *ngIf=\"userType == 2\" > Price with discount for silver user: <font color=\"gray\"><b>{{item.price*0.90}}$</b> </font></p>\n                               <p *ngIf=\"userType == 3\" > Price with discount for gold user: <font color=\"gold\"><b>{{item.price*0.85}}$</b> </font></p>\n                            </div>\n                            \n                            \n                            \n                        </div>\n                        <button [disabled]=\"item.reserved\" class=\"btn btn-success\">Click to reserve this item</button>\n                        \n                    </div>\n                    <div class=\"col\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <p *ngIf=\"item.cinemaOwner != null\">Where to buy : </p> <p *ngIf=\"item.cinemaOwner != null\"><b >{{item.cinemaOwner.name}}</b> , {{item.cinemaOwner.address}}</p>\n                                <p *ngIf=\"item.theatreOwner != null\">Where to buy : </p> <p *ngIf=\"item.theatreOwner != null\"><b>{{item.theatreOwner.name}}</b> , {{item.theatreOwner.address}}</p>\n                            </div>\n                        </div>\n                        \n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"card-footer\">  \n                <div class=\"row\">\n                    <div class=\"text-left\">\n                        <button class=\"btn btn-dark btn-sm\" (click)=\"onClickDelete(item.itemID)\">Delete</button>\n                        <button class=\"btn btn-dark btn-sm\" (click)=\"onClickEdit(item.itemID)\">Edit</button>\n                        \n                    </div>\n                </div>\n            </div>\n        \n    </div>\n</div>\n<hr>\n</div>    \n"

/***/ }),

/***/ "./src/app/components/fanzone-component/newitem-component/newitem-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newitem_service__ = __webpack_require__("./src/app/services/newitem-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_userType__ = __webpack_require__("./src/app/model/userType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewitemComponent = (function () {
    function NewitemComponent(newItemService, dataService, router) {
        this.newItemService = newItemService;
        this.dataService = dataService;
        this.router = router;
        this.userType = __WEBPACK_IMPORTED_MODULE_4__model_userType__["a" /* UserType */].regular;
    }
    NewitemComponent.prototype.ngOnInit = function () {
        var token = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
        if (token.activity < 2000) {
            this.userType = 0;
        }
        else if (token.activity >= 2000 && token.activity < 5000) {
            this.userType = 1;
        }
        else if (token.activity >= 5000 && token.activity < 10000) {
            this.userType = 2;
        }
        else {
            this.userType = 3;
        }
        console.log(__WEBPACK_IMPORTED_MODULE_4__model_userType__["a" /* UserType */][this.userType]);
    };
    NewitemComponent.prototype.onClickDelete = function (id) {
        console.log(this.items);
        console.log(id);
        var index = -1;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].itemID === id)
                index = i;
        }
        this.items.splice(index, 1);
        console.log(this.items);
        this.newItemService.deleteItem(id);
    };
    NewitemComponent.prototype.onClickEdit = function (id) {
        var _this = this;
        //Dobijam id itema koji treba da editujem i sa sajta vucem ceo taj item
        console.log(id);
        this.newItemService.getItem(id).subscribe(function (data) {
            _this.item = data;
            _this.dataService.changeSelectedNewItem(_this.item);
            _this.router.navigateByUrl('/editnewitem');
        });
    };
    NewitemComponent.prototype.onClickSetSelectedNewItem = function (id) {
        var _this = this;
        this.newItemService.getItem(id).subscribe(function (data) {
            var item;
            item = data;
            _this.dataService.changeSelectedNewItem(item);
            _this.router.navigateByUrl('/newitemprofile');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], NewitemComponent.prototype, "items", void 0);
    NewitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'newitem-component',
            template: __webpack_require__("./src/app/components/fanzone-component/newitem-component/newitem-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_newitem_service__["a" /* NewItemService */], __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewitemComponent);
    return NewitemComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/newitemprofile-component/newitemprofile-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n  <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n      <h1>Item  {{item.name}}</h1>  <h5> <b> [#{{item.itemID}}]</b> </h5>\n    \n  </div>\n  <div class=\"row\">\n    <div class=\"col-3\">\n        <img   [src]=\"item.image\" alt=\"\" class=\"img-fluid rounded w-100  h-100\" height=100 width=100>\n    </div>\n    <div class=\"col-3 border-left border-right\">\n      <h3>Description</h3>\n      <p>{{item.description}}</p>\n    </div>\n    <div class=\"col-6 text-center\" >\n      <h3 >Reserve this item</h3> \n      Price: <h4><b class=\"text-danger\">{{item.price}}$</b></h4>\n      <p *ngIf=\"userType == 1\" > Price with discount for bronze user: <font color=\"brown\"><b>{{item.price*0.95}}$</b> </font></p>\n      <p *ngIf=\"userType == 2\" > Price with discount for silver user: <font color=\"gray\"><b>{{item.price*0.90}}$</b> </font></p>\n      <p *ngIf=\"userType == 3\" > Price with discount for gold user: <font color=\"gold\"><b>{{item.price*0.85}}$</b> </font></p>\n      <div class=\"justify-content-center align-items-center\">\n        <div class=\"form-area \">  \n          <button type=\"submit\" [disabled]=\"item.reserved\" (click)=\"onClickReserve(item)\"  class=\"btn btn-success btn-lg\" >Reserve</button>\n        </div>\n      </div>\n    </div>\n  </div>\n            \n\n  <hr>\n  <h3>Other info about {{item.name}}</h3><br>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      Posted:  <br>\n      \n      Owner:  <br><br>\n      Reserved:  <br>\n      \n    </div>\n    <div class=\"col-md-3\">\n        <b>{{item.beginDate}}</b>  <br>\n        \n        <b>{{item.cinemaOwner?.name}}</b> \n        \n        <b>{{item.theatreOwner?.name}}</b>  \n        ,  {{item.cinemaOwner?.address}}{{item.theatreOwner?.address}}\n        <br> \n        \n        \n       <b><label *ngIf=\"item.reserved\">Yes</label>  </b> \n       <b><label *ngIf=\"!item.reserved\">No</label>  </b> <br>\n       \n    </div>\n    \n  </div>\n</div>\n\n\n\n\n\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/newitemprofile-component/newitemprofile-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewitemprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_newitem_service__ = __webpack_require__("./src/app/services/newitem-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_userType__ = __webpack_require__("./src/app/model/userType.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewitemprofileComponent = (function () {
    function NewitemprofileComponent(dataService, newItemService, router) {
        this.dataService = dataService;
        this.newItemService = newItemService;
        this.router = router;
        this.userType = 0;
    }
    NewitemprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSelectedNewItem.subscribe(function (data) {
            _this.item = data;
        });
        var token = this.dataService.getDecodedAccessToken(localStorage.getItem('token'));
        if (token.activity < 2000) {
            this.userType = 0;
        }
        else if (token.activity >= 2000 && token.activity < 5000) {
            this.userType = 1;
        }
        else if (token.activity >= 5000 && token.activity < 10000) {
            this.userType = 2;
        }
        else {
            this.userType = 3;
        }
        console.log(__WEBPACK_IMPORTED_MODULE_4__model_userType__["a" /* UserType */][this.userType]);
    };
    NewitemprofileComponent.prototype.onClickReserve = function (item) {
        this.newItemService.reserveItem(item).subscribe(function (data) { return console.log(data); });
        this.router.navigateByUrl('/fanzone');
    };
    NewitemprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newitemprofile-component',
            template: __webpack_require__("./src/app/components/fanzone-component/newitemprofile-component/newitemprofile-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_newitem_service__["a" /* NewItemService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NewitemprofileComponent);
    return NewitemprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/fanzone-component/pending-component/pending-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n<body>\n  <a [routerLink]=\"['/login']\">Login </a>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n      <h1>Pending items</h1>      \n    \n  </div>\n  \n</div>\n\n\n\n<div class=\"container\" >\n    <item-component [items] = unapproveditems></item-component>\n    \n</div>\n\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/fanzone-component/pending-component/pending-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fanzone_service__ = __webpack_require__("./src/app/services/fanzone-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PendingComponent = (function () {
    function PendingComponent(fanzoneService, dataService) {
        this.fanzoneService = fanzoneService;
        this.dataService = dataService;
    }
    PendingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fanzoneService.getUnApprovedItems()
            .subscribe(function (data) {
            _this.unapproveditems = data;
            _this.dataService.changePreownedItemListForShow(_this.unapproveditems);
            console.log(data);
        });
    };
    PendingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pendingitem-component',
            template: __webpack_require__("./src/app/components/fanzone-component/pending-component/pending-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fanzone_service__["a" /* FanzoneService */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], PendingComponent);
    return PendingComponent;
}());



/***/ }),

/***/ "./src/app/components/home-component/home-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n</head>\r\n<body>\r\n\r\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand text-white\"></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link text-white\" [routerLink]=\"['/home']\">About Us</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-white\" [routerLink]=\"['/login']\"href=\"login\">Log in</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-white\" [routerLink]=\"['/registration']\"href=\"registration\">Register</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-white\" [routerLink]=\"['/allusers']\">All users</a>\r\n                </li>\r\n               \r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navigation -->\r\n\r\n <!-- Card -->\r\n <br>\r\n <br>\r\n <br>\r\n <div class=\"container container mt-4 mb-5\">\r\n  <h2 class=\"display-4 text-center\">Cinema and theatre tickets reservation</h2>\r\n  <hr class=\"bg-dark mb-4 w-25\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n              <img class=\"card-img-top\" height=\"280\" width=\"40\" src=\"https://www.monumentnational.com/image/1/934/464//uploads/salles/ludgey-4-web.jpg\" alt=\"Card image cap\">\r\n              <div class=\"card-block p-3\">\r\n                  <h4 class=\"card-title\">THEATRES</h4>\r\n                  <p class=\"card-text\"></p>\r\n                  <a href=\"theatres\" class=\"btn btn-primary rounded-0 mb-2\" [routerLink]=\"['/theatres']\">See all theatres</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n              <img class=\"card-img-top\" height=\"280\" width=\"40\" src=\"https://www.giraldacenter.com/wp-content/uploads/2016/12/161764433_hi-res.jpg\" alt=\"Card image cap\">\r\n              <div class=\"card-block p-3\">\r\n                  <h4 class=\"card-title\">CINEMAS</h4>\r\n                  <p class=\"card-text\"></p>\r\n                  <a href=\"cinemas\" class=\"btn btn-primary rounded-0 mb-2\" [routerLink]=\"['/cinemas']\">See all cinemas</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n   \r\n  </div>\r\n</div>\r\n<!-- Card -->\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/components/home-component/home-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(homeService, router) {
        this.homeService = homeService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onClickSignInLogIn = function () {
        this.router.navigateByUrl('/login');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home-component',
            template: __webpack_require__("./src/app/components/home-component/home-component.component.html"),
            styles: ['./home-component.component.css']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_home_service_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/location-component/location-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <p>To see the location of the object click on the red field below, and choose the suggested address. If nothing is suggested, there is no such address.</p>\n  <div class=\"form-group\" id=\"inputDiv\">\n    <input #locationInput [(ngModel)]=\"address\" placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control \" #search [formControl]=\"searchControl\">\n  </div>\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"true\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/components/location-component/location-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationComponent = (function () {
    function LocationComponent(mapsAPILoader, ngZone, dataService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.dataService = dataService;
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentAddress.subscribe(function (data) {
            _this.address = data;
            console.log(_this.address);
        });
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 13;
                    var el = _this.locationInput.nativeElement;
                    console.log("Izvrsio click");
                    el.click();
                });
            });
        });
    };
    LocationComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('locationInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LocationComponent.prototype, "locationInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LocationComponent.prototype, "searchElementRef", void 0);
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-component',
            styles: ["\n  agm-map {\n    height: 500px;\n  }\n  #inputDiv {\n    border: 1px solid red;\n  }\n"],
            template: __webpack_require__("./src/app/components/location-component/location-component.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/login-component/login-component.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  @import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n  .login-block{\r\n      background: #DE6262;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#FFB88C), to(#DE6262));\r\n  background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  float:left;\r\n  width:100%;\r\n  padding : 50px 0;\r\n  }\r\n  .banner-sec{background:url(https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}\r\n  .container{background:#fff; border-radius: 10px; -webkit-box-shadow:15px 20px 0px rgba(0,0,0,0.1); box-shadow:15px 20px 0px rgba(0,0,0,0.1);}\r\n  .carousel-inner{border-radius:0 10px 10px 0;}\r\n  .carousel-caption{text-align:left; left:5%;}\r\n  .login-sec{padding: 50px 30px; position:relative;}\r\n  .login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}\r\n  .login-sec .copy-text i{color:#FEB58A;}\r\n  .login-sec .copy-text a{color:#E36262;}\r\n  .login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}\r\n  .login-sec h2:after{content:\" \"; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}\r\n  .btn-login{background: #DE6262; color:#fff; font-weight:600;}\r\n  .banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}\r\n  .banner-text h2{color:#fff; font-weight:600;}\r\n  .banner-text h2:after{content:\" \"; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}\r\n  .banner-text p{color:#fff;}\r\n "

/***/ }),

/***/ "./src/app/components/login-component/login-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\">\r\n\r\n\r\n    <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" method=\"POST\">\r\n      <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n      <input type=\"email\" id=\"username\" name=\"username\"\r\n       [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\"\r\n      [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n      <a href=\"registration\">Register here</a>\r\n    </form>\r\n\r\n  </div> /container -->\r\n\r\n  <section class=\"login-block\">\r\n    <div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-4 login-sec\">\r\n\t\t    <h2 class=\"text-center\">Login Now</h2>\r\n\t\t    <form class=\"login-form\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"email\" class=\"text-uppercase\">Username</label>\r\n    <input type=\"email\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"email\">\r\n    \r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\" class=\"text-uppercase\">Password</label>\r\n    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"password\">\r\n  </div>\r\n  \r\n  \r\n    <div class=\"form-check\">\r\n    <label class=\"form-check-label\">\r\n      <!-- <input type=\"checkbox\" class=\"form-check-input\"> -->\r\n      <small><a href=\"registration\">Register here</a></small>\r\n    </label>\r\n    <button type=\"submit\" class=\"btn btn-login float-right\">Submit</button>\r\n  </div>\r\n  \r\n</form>\r\n<div class=\"copy-text\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-8 banner-sec\">\r\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                 <ol class=\"carousel-indicators\">\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n                  </ol>\r\n            <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"d-block img-fluid\" src=\"https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg\" alt=\"First slide\">\r\n      <div class=\"carousel-caption d-none d-md-block\">\r\n        <div class=\"banner-text\">\r\n            </div>\t\r\n  </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block img-fluid\" src=\"https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg\" alt=\"First slide\">\r\n      <div class=\"carousel-caption d-none d-md-block\">\r\n        <div class=\"banner-text\">\r\n            <h2>This is Heaven</h2>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n        </div>\t\r\n    </div>\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block img-fluid\" src=\"https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg\" alt=\"First slide\">\r\n      <div class=\"carousel-caption d-none d-md-block\">\r\n        <div class=\"banner-text\">\r\n            <h2>This is Heaven</h2>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\r\n        </div>\t\r\n    </div>\r\n  </div>\r\n            </div>\t   \r\n\t\t    \r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n</div>\r\n</section>\r\n  "

/***/ }),

/***/ "./src/app/components/login-component/login-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(loginService, profileService, router, dataService) {
        this.loginService = loginService;
        this.profileService = profileService;
        this.router = router;
        this.dataService = dataService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.setItem('token', 'asfas');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.getLogin(this.password, this.email)
            .subscribe(function (data) {
            if (data.token != null) {
                localStorage.setItem('token', data.token);
                _this.profileService.getLoggedUser().subscribe(function (data) {
                    _this.user = data;
                });
                _this.moveOn();
            }
        });
    };
    LoginComponent.prototype.moveOn = function () {
        this.router.navigateByUrl("profile");
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-component',
            template: __webpack_require__("./src/app/components/login-component/login-component.component.html"),
            styles: [__webpack_require__("./src/app/components/login-component/login-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-component/change-password/change-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile-component/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n    <h1 style=\"text-align: center\"> Change your password here </h1>\r\n    <br>\r\n<br>\r\n    <form>\r\n            <div class=\"form-group row\">\r\n                <label for=\"password\" class=\"col-sm-2 col-form-label\">New password</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"password\" #password>\r\n                </div>\r\n                </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"passwordRepeat\" class=\"col-sm-2 col-form-label\">Repeat password</label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"passwordRepeat\" #passwordRepeat>\r\n                </div>\r\n                </div>\r\n\r\n            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-primary\" (click)=\"changePassword(password.value, passwordRepeat.value)\">Change password</button>\r\n    </form>\r\n    \r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/profile-component/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(profileService) {
        this.profileService = profileService;
        //@Input() selectedSeats : any[];
        this.onPasswordChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.changePassword = function (password, passwordRepeat) {
        console.log(password + " " + passwordRepeat);
        if (password === passwordRepeat) {
            this.profileService.changePassword(password, passwordRepeat).subscribe();
            this.onPasswordChanged.emit(true);
            alert("Successfully changed password!");
        }
        else {
            alert("Passwords don't match!");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "onPasswordChanged", void 0);
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'change-password-component',
            template: __webpack_require__("./src/app/components/profile-component/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/components/profile-component/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-component/profile-component.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding: 0px;\r\n    }\r\n    .container {\r\n      width: auto;\r\n      margin-left: 200px;\r\n      margin-right: 200px;\r\n    }\r\n    ​\r\n    .center {\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      }\r\n    .center.navbar .nav,\r\n      .center.navbar .nav > li {\r\n      float:none;\r\n      display:inline-block;\r\n      *display:inline; /* ie7 fix */\r\n      *zoom:1; /* hasLayout ie7 trigger */\r\n      vertical-align: top;\r\n      }\r\n    .center.navbar-inner {\r\n      text-align:center;\r\n      }\r\n    .center .dropdown-menu {\r\n      text-align: left;\r\n      }\r\n    .navbar-inner {\r\n      margin: 0 auto;\r\n      }\r\n    body{\r\n        background: #DAE3E7;\r\n      }\r\n    .row{\r\n        margin-top: 40px;\r\n      }\r\n    html,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\r\n    div.card {\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n    .header {\r\n        padding: 10px 0;\r\n        background: #f5f5f5;\r\n        border-top: 3px solid #3AAA64;\r\n      }\r\n    .list-group {\r\n          list-style: disc inside;\r\n      \r\n      }\r\n    .list-group-item {\r\n          display: list-item;\r\n      }\r\n    .find-more{\r\n         text-align: right;\r\n       }\r\n    .label-theme{\r\n        background: #3AAA64;\r\n        font-size: 14px;\r\n        padding: .3em .7em .3em;\r\n        color: #fff;\r\n        border-radius: .25em;\r\n      }\r\n    .label a{\r\n        color: inherit;\r\n      }"

/***/ }),

/***/ "./src/app/components/profile-component/profile-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [hidden]=\"adminLoggedFirstTime\">\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" \r\n      style=\"text-align: center;\">\r\n      \r\n\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" >------------------</a>\r\n              </li>\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/theatres']\">Pozorista</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/cinemas']\">Bioskopi</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\"[routerLink]=\"['/friends']\">Prijatelji</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/reservations']\">Rezervacije</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/allusers']\">All users</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/fanzone']\">Fan zona</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\">-------------------</a>\r\n            </li>\r\n          \r\n          \r\n        </ul>\r\n\r\n      </div>\r\n  </nav>\r\n\r\n  <header class=\"header\">\r\n    <div class=\"container\" *ngIf=\"loggedUser!==undefined\">\r\n      <div class=\"teacher-name\" style=\"padding-top:20px;\">\r\n\r\n        <div class=\"row\" style=\"margin-top:0px;\">\r\n        <div class=\"col-md-3\"> <!-- Image -->\r\n          <a href=\"#\"> <img  class=\"rounded-circle mx-auto d-block\" src=\"https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png\" alt=\"Kamal\" style=\"width:100px;height:100px\"></a>\r\n        </div>\r\n\r\n        <div class=\"col-md-7\" *ngIf=\"editClicked\">\r\n          <h2 style=\"font-size:38px\"><strong>{{loggedUser.firstName}} {{loggedUser.lastName}} </strong></h2>\r\n          <span style=\"font-size:18px\">Email: {{loggedUser.username}}</span>\r\n          <br>\r\n          <span  style=\"font-size:18px\">Phone: {{loggedUser.phoneNumber}}</span>\r\n          <br>\r\n          <span  style=\"font-size:18px\">Address: {{loggedUser.city}}</span>\r\n\r\n \r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-7\" *ngIf=\"!editClicked\">\r\n            <h2 style=\"font-size:38px\"><strong>{{loggedUser.firstName}} {{loggedUser.lastName}} </strong></h2>\r\n           \r\n            <div class=\"form-group\">\r\n                <label for=\"firstName\" style=\"width:60px\">Name:</label>\r\n                <input [(ngModel)]=\"firstName\" name=\"firstName\" style=\"font-size:18px; width:170px;\" value=\"{{loggedUser.firstName}}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"lastName\" style=\"width:60px\">Surname:</label>\r\n                <input [(ngModel)]=\"lastName\" name=\"lastName\" style=\"font-size:18px; width:170px;\" value=\"{{loggedUser.lastName}}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"phoneNumber\" style=\"width:60px\">Phone:</label>\r\n                <input [(ngModel)]=\"phoneNumber\" name=\"phoneNumber\"  style=\"font-size:18px; width:170px;\" value=\"{{loggedUser.phoneNumber}}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"city\" style=\"width:60px\">Address:</label>\r\n                <input [(ngModel)]=\"city\" name=\"city\"  style=\"font-size:18px; width:170px;\" value=\"{{loggedUser.city}}\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" style=\"width:115px; padding-right:1px;\" class=\"btn btn-primary\" (click)=\"confirmEdit()\">Edit</button>\r\n                <button type=\"button\" style=\"width:115px;\" class=\"btn btn-danger\" (click)=\"editButtonClicked()\" >Cancel</button>\r\n            </div>\r\n           \r\n            <change-password-component [hidden]=\"canChangePassword\"\r\n            (onPasswordChanged)=\"onPasswordChanged($event)\"\r\n            >\r\n            </change-password-component>\r\n    \r\n          </div>\r\n\r\n        <div class=\"col-md-2\">\r\n          <div class=\"button\" style=\"float:right;\">\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"editButtonClicked()\">Edit Profile</button>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </header>\r\n    <!--End of Header-->\r\n\r\n<!-- Main container r -->\r\n\r\n<!-- Section:Friends -->\r\n  <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <div class=\"card card-block\">\r\n            <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" ><i class=\"fa fa-trophy fa-fw\"></i> My Friends</h2>\r\n            <div style=\"height: 15px\"></div>\r\n            <table class=\"table table-bordered table-hover\">\r\n              <thead class=\"thead-default\">\r\n              <tr>\r\n                <th scope=\"col\">#</th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Surname</th>\r\n                <th scope=\"col\">Email</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let f of userFriends; let i = index;\">\r\n                <tr *ngIf=\"f.enabled === true\">\r\n                  <th scope=\"row\">{{i+1}}</th>\r\n                  <td>{{f.friendUsername}}</td>\r\n                  <td>{{f.friendFirstName}}</td>\r\n                  <td>{{f.friendLastName}} <button class=\"btn btn-danger\" style=\"float:right\" (click)=\"removeFriend(f.friendId)\"> Remove </button> </td>\r\n                  \r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n<!-- End:Awards -->\r\n\r\n<!-- Section:Notifications -->\r\n<div class=\"row\" >\r\n  <div class=\"col-md-12\">\r\n      <div class=\"card card-block\">\r\n        <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" ><i class=\"fa fa-trophy fa-fw\"></i> Notifications </h2>\r\n        <div style=\"height: 15px\"></div>\r\n        <table class=\"table table-bordered table-hover\" *ngIf=\"notifications?.length>0\" >\r\n          <thead class=\"thead-default\">\r\n          \r\n          </thead>\r\n          <tbody *ngFor=\"let n of notifications\">\r\n            <tr >\r\n              \r\n              <td>{{n.text}}</td>\r\n              <td><button  *ngIf=\"!n.read\" class=\"btn btn-success\" (click)=\"onClickRead(n.notificationID)\"> Mark as read </button>\r\n                  </td>\r\n            </tr>\r\n            \r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- End:Notifications -->\r\n\r\n<!-- Section:Friend requests -->\r\n<div class=\"row\" >\r\n  <div class=\"col-md-12\">\r\n      <div class=\"card card-block\">\r\n        <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" ><i class=\"fa fa-trophy fa-fw\"></i> Friend requests </h2>\r\n        <div style=\"height: 15px\"></div>\r\n        <table class=\"table table-bordered table-hover\" *ngIf=\"userFriendRequests?.length>0\" >\r\n          <thead class=\"thead-default\">\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Surname</th>\r\n            <th scope=\"col\">Email</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let f of userFriendRequests; let i = index;\">\r\n            <tr *ngIf=\"!f.sender\">\r\n              <th scope=\"row\">{{i+1}}</th>\r\n              <td>{{f.friendUsername}}</td>\r\n              <td>{{f.friendFirstName}}</td>\r\n              <td>{{f.friendLastName}}\r\n                   <button class=\"btn btn-danger\" style=\"float:right\" (click)=\"declineFriend(f.friendId)\"> Decline </button>\r\n                   <button class=\"btn btn-success\" style=\"float:right\" (click)=\"acceptFriend(f.friendId)\"> Accept </button>\r\n                  </td>\r\n            </tr>\r\n            \r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- End:Friend requests -->\r\n\r\n<!-- Section:My visits history -->\r\n<div class=\"row\" >\r\n  <div class=\"col-md-12\">\r\n      <div class=\"card card-block\">\r\n        <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" ><i class=\"fa fa-trophy fa-fw\"></i> History of visits </h2>\r\n        <div style=\"height: 15px\"></div>\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead class=\"thead-default\">\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Date</th>\r\n            <th scope=\"col\">Time</th>\r\n            <th scope=\"col\">Place</th>\r\n            <th scope=\"col\">Seat number</th>\r\n            <th scope=\"col\">Rate ambient</th>\r\n            <th scope=\"col\">Rate play</th>\r\n\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let p of projectionsReserved; let i = index;\">\r\n            <tr *ngIf=\"p.enabled && p.approved\">\r\n              <th scope=\"row\">{{i+1}}</th>\r\n              <td>{{p.name}}</td>\r\n              <td>{{p.date}}</td>\r\n              <td>{{p.time}}</td>\r\n              <td>{{p.place}}</td>\r\n              <td>{{p.seatNumber}}</td>\r\n            \r\n              <td> \r\n                <select *ngIf=\"p.gradeAmb==0\" class=\"form-control\" (change)=\"onChangeRateAmb($event.target.value, p.id, p)\">\r\n                    <option hidden selected value=\"\">\r\n                        -- select grade --\r\n                    </option>\r\n                    <option [value]=\"1\">1</option>\r\n                    <option [value]=\"2\">2</option>\r\n                    <option [value]=\"3\">3</option>\r\n                    <option [value]=\"4\">4</option>\r\n                    <option [value]=\"5\">5</option>\r\n                </select></td>\r\n              \r\n                <td> \r\n                    <select *ngIf=\"p.gradeMov==0\" class=\"form-control\" (change)=\"onChangeRatePlay($event.target.value, p.id, p)\">\r\n                        <option hidden selected value=\"\">\r\n                            -- select grade --\r\n                        </option>\r\n                        <option [value]=\"1\">1</option>\r\n                        <option [value]=\"2\">2</option>\r\n                        <option [value]=\"3\">3</option>\r\n                        <option [value]=\"4\">4</option>\r\n                        <option [value]=\"5\">5</option>\r\n                    </select></td>\r\n                \r\n              \r\n            <!--/tr-->\r\n            \r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- End:My reservations -->\r\n\r\n<!-- Section:My reservations -->\r\n<div class=\"row\" >\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card card-block\">\r\n          <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" ><i class=\"fa fa-trophy fa-fw\"></i> My reservations </h2>\r\n          <div style=\"height: 15px\"></div>\r\n          <table class=\"table table-bordered table-hover\">\r\n            <thead class=\"thead-default\">\r\n            <tr>\r\n              <th scope=\"col\">#</th>\r\n              <th scope=\"col\">Name</th>\r\n              <th scope=\"col\">Date</th>\r\n              <th scope=\"col\">Time</th>\r\n              <th scope=\"col\">Place</th>\r\n              <th scope=\"col\">Seat number</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let p of projectionsReserved; let i = index;\">\r\n              <tr *ngIf=\"!p.enabled && p.approved\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{p.name}}</td>\r\n                <td>{{p.date}}</td>\r\n                <td>{{p.time}}</td>\r\n                <td>{{p.place}}</td>\r\n                <td>{{p.seatNumber}}\r\n                     <button class=\"btn btn-danger\" style=\"float:right\" (click)=\"cancelReservation(p.id, p.seatNumber)\"> Cancel reservation </button>\r\n                </td>\r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- End:My reservations -->\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card card-block\">\r\n          <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" >\r\n            <i class=\"fa fa-trophy fa-fw\"></i> Find friends</h2>\r\n            \r\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"getAllUsers()\">Show all</button>\r\n\r\n          <div style=\"height: 15px\"></div>\r\n          <table *ngIf=\"allUsers?.length > 0\" class=\"table table-bordered table-hover\">\r\n            <thead class=\"thead-default\">\r\n            <tr>\r\n              <th scope=\"col\">#</th>\r\n              <th scope=\"col\">Name</th>\r\n              <th scope=\"col\">Surname</th>\r\n              <th scope=\"col\">Email</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr [hidden]=\"searchButtonClicked\" *ngFor=\"let u of allUsers; let i = index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{u.username}}</td>\r\n                <td>{{u.firstName}}</td>\r\n                <td>{{u.lastName}} <button class=\"btn btn-success\" style=\"float:right\" (click)=\"addFriend(u.username)\"> Add </button> </td>\r\n              </tr>\r\n\r\n              <tr [hidden]=\"!searchButtonClicked\" *ngFor=\"let u of filteredArray; let i = index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{u.username}}</td>\r\n                <td>{{u.firstName}}</td>\r\n                <td>{{u.lastName}}  </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <input [(ngModel)]=\"searchName\" type=\"text\" class=\"form-control\" id=\"nameSearch\" style=\"text-align:center\" placeholder=\"Enter first name\">\r\n          <input [(ngModel)]=\"searchLastName\" type=\"text\" class=\"form-control\" id=\"lastNameSearch\" style=\"text-align:center\" placeholder=\"Enter last name\">       \r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchClicked()\">Search</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n</div> <!--End of Container-->\r\n\r\n<change-password-component [hidden]=\"!adminLoggedFirstTime\"\r\n(onPasswordChanged)=\"onPasswordChanged($event)\"\r\n>\r\n</change-password-component>"

/***/ }),

/***/ "./src/app/components/profile-component/profile-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_dto_userDTO__ = __webpack_require__("./src/app/model/dto/userDTO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/services/notification-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(profileService, location, notificationService) {
        this.profileService = profileService;
        this.location = location;
        this.notificationService = notificationService;
        this.userFriends = [];
        this.allUsers = [];
        this.userFriendRequests = [];
        this.filteredArray = [];
        this.projectionsReserved = [];
        this.editClicked = true;
        this.searchButtonClicked = true;
        this.adminLoggedFirstTime = false;
        this.canChangePassword = true;
        this.searchName = "";
        this.searchLastName = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //TODO: Uzmi sve notifikacije sa servera
        var _this = this;
        this.profileService.getLoggedUser().subscribe(function (data) {
            _this.loggedUser = data;
            _this.firstName = data.firstName;
            _this.lastName = data.lastName;
            _this.username = data.username;
            _this.phoneNumber = data.phoneNumber;
            _this.city = data.city;
            console.log("Roles : " + data.roles);
            for (var i = 0; i < data.roles.length; i++) {
                console.log("Roles : " + data.roles[i].role);
                if ((data.roles[i].role === "ADMIN" || data.roles[i].role == "FANZONE_ADMIN") && data.firstTimeLogged) {
                    _this.adminLoggedFirstTime = true;
                }
                if ((data.roles[i].role === "ADMIN" || data.roles[i].role == "FANZONE_ADMIN")) {
                    _this.canChangePassword = !_this.canChangePassword;
                }
            }
        });
        this.profileService.getFriends().subscribe(function (data) {
            return _this.userFriends = data;
        });
        this.profileService.getAllUsers().subscribe(function (data) {
            return _this.allUsers = data;
        });
        this.profileService.getFriendRequests().subscribe(function (data) {
            _this.userFriendRequests = data;
        });
        this.notificationService.getAllNotifications().subscribe(function (data) {
            _this.notifications = data;
        });
        this.profileService.getReservations().subscribe(function (data) {
            _this.projectionsReserved = data;
            console.log(_this.projectionsReserved);
        });
    };
    ProfileComponent.prototype.editButtonClicked = function () {
        this.editClicked = !this.editClicked;
        this.firstName = this.loggedUser.firstName;
        this.lastName = this.loggedUser.lastName;
        this.username = this.loggedUser.username;
        this.phoneNumber = this.loggedUser.phoneNumber;
        this.city = this.loggedUser.city;
    };
    ProfileComponent.prototype.confirmEdit = function () {
        var _this = this;
        this.editClicked = !this.editClicked;
        var user = new __WEBPACK_IMPORTED_MODULE_2__model_dto_userDTO__["a" /* User */](this.firstName, this.lastName, this.username, this.phoneNumber, this.city);
        this.profileService.editUser(user).subscribe(function (data) { return _this.loggedUser = data; });
    };
    ProfileComponent.prototype.removeFriend = function (i) {
        var _this = this;
        this.profileService.removeFriend(i.toString()).subscribe(function (data) {
            return _this.userFriends = data;
        });
    };
    ProfileComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.profileService.getAllUsers().subscribe(function (data) {
            return _this.allUsers = data;
        });
        this.searchButtonClicked = false;
        this.filteredArray = [];
    };
    ProfileComponent.prototype.searchClicked = function () {
        var _this = this;
        this.filteredArray = [];
        this.profileService.searchUsers(this.searchName, this.searchLastName)
            .subscribe(function (data) { return _this.filteredArray = data; });
        //   if(this.searchLastName !== "" && this.searchName !== "")
        //   {
        //     this.allUsers.forEach((user,index) => {
        //         if(user.firstName == this.searchName && user.lastName == this.searchLastName)
        //         {
        //           if(this.filteredArray
        //             .find(x => (x.username == user.username))
        //              === undefined) {
        //               this.filteredArray.push(user);
        //             }
        //         }
        //     });
        //   }
        //   if((this.searchLastName === undefined || this.searchLastName === "") && this.searchName !== "")
        //   {
        //     this.allUsers.forEach((user,index) => {
        //       if(user.firstName == this.searchName)
        //       {
        //         if(this.filteredArray
        //           .find(x => (x.username == user.username))
        //            === undefined) {
        //             this.filteredArray.push(user);
        //           }       
        //       }
        //   });
        //   }
        //   if(this.searchLastName !== "" && (this.searchName === undefined || this.searchName === ""))
        //   {
        //     this.allUsers.forEach((user,index) => {
        //       if(user.lastName == this.searchLastName)
        //       {
        //         if(this.filteredArray
        //           .find(x => (x.username == user.username))
        //            === undefined) {
        //             this.filteredArray.push(user);
        //           } 
        //       }
        //   });
        //   }
        this.searchButtonClicked = true;
    };
    ProfileComponent.prototype.addFriend = function (friendUsername) {
        var _this = this;
        this.filteredArray = [];
        this.profileService.sendFriendRequest(friendUsername)
            .subscribe(function (data) {
            _this.allUsers = data;
        });
        alert("Friend request sent!");
    };
    ProfileComponent.prototype.acceptFriend = function (friendId) {
        var _this = this;
        this.profileService.acceptFriend(friendId.toString())
            .subscribe(function (data) {
            _this.userFriends = data;
            _this.userFriendRequests = [];
            _this.profileService.getFriendRequests().subscribe(function (data) {
                _this.userFriendRequests = data;
            });
        });
        alert("Friend request accepted!");
    };
    ProfileComponent.prototype.declineFriend = function (friendId) {
        var _this = this;
        this.profileService.declineFriend(friendId.toString())
            .subscribe(function (data) {
            _this.userFriends = data;
            _this.userFriendRequests = [];
            _this.profileService.getFriendRequests().subscribe(function (data) {
                _this.userFriendRequests = data;
            });
        });
        alert("Friend request denied!");
    };
    ProfileComponent.prototype.onClickRead = function (id) {
        this.notificationService.readNotification(id).subscribe(function (data) {
        });
    };
    ProfileComponent.prototype.onPasswordChanged = function (passwordChanged) {
        if (passwordChanged)
            this.adminLoggedFirstTime = false;
    };
    ProfileComponent.prototype.cancelReservation = function (id, seatNumber) {
        var _this = this;
        console.log(id + "  " + seatNumber);
        this.profileService.cancelProjectionReservation(id, seatNumber)
            .subscribe(function (data) {
            _this.projectionsReserved = data;
            console.log(data + " ispis iz cancelRes");
        });
    };
    ProfileComponent.prototype.onChangeRatePlay = function (ratevalue, id, p) {
        console.log(ratevalue);
        console.log("idprojekcije" + id);
        this.profileService.ratePlay(id, ratevalue, p).subscribe();
        this.selectedRateMov.emit(ratevalue);
    };
    ProfileComponent.prototype.onChangeRateAmb = function (ratevalue, id, p) {
        console.log(ratevalue);
        this.profileService.rateAmb(id, ratevalue, p).subscribe();
        this.selectedRateAmb.emit(ratevalue);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-component',
            template: __webpack_require__("./src/app/components/profile-component/profile-component.component.html"),
            styles: [__webpack_require__("./src/app/components/profile-component/profile-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/registration-component/registration-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin: 0 auto; width: 50%;\">\r\n        <div class=\"row\">\r\n           <div class=\"col-md-6\">\r\n              \r\n            <form (ngSubmit)=\"onSubmit(registrationForm)\" #registrationForm=\"ngForm\">   \r\n                 <fieldset>\r\n                    <legend class=\"text-center\">Valid information is required to register. <span class=\"req\"><small> required *</small></span></legend>\r\n\r\n                    <div class=\"form-group\">\r\n                            <label for=\"email\"><span class=\"req\">* </span> Email Address: </label> \r\n                            <input ngModel #email=\"ngModel\" class=\"form-control\" required type=\"email\" id=\"email\" name=\"email\" />   \r\n                            <div [hidden]=\"email.valid || email.pristine\"\r\n                                class=\"alert alert-danger\">\r\n                            Invalid email. Please fill in the email correctly.\r\n                            </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\"><span class=\"req\">* </span> Password: </label>\r\n                        <input ngModel required type=\"password\" id=\"password\" name=\"password\" class=\"form-control inputpass\" minlength=\"4\" maxlength=\"16\"/> \r\n                        <label for=\"password\"><span class=\"req\">* </span> Password Confirm: </label>\r\n                        <input ngModel required  type=\"password\" id=\"passwordRepeat\" name=\"passwordRepeat\" class=\"form-control inputpass\" minlength=\"4\" maxlength=\"16\" placeholder=\"Enter again to validate\"/>\r\n                        <span id=\"confirmMessage\" class=\"confirmMessage\"></span>\r\n                    </div>     \r\n\r\n                    <div class=\"form-group\">\r\n                       <label for=\"firstname\"><span class=\"req\">* </span> First name: </label>\r\n                       <input ngModel class=\"form-control\"  type=\"text\" id=\"firstName\" name=\"firstName\" required /> \r\n                       <div id=\"errFirst\"></div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                       <label for=\"lastname\"><span class=\"req\">* </span> Last name: </label> \r\n                       <input ngModel class=\"form-control\" type=\"text\" id=\"lastName\" name=\"lastName\" placeholder=\"hyphen or single quote OK\" required />  \r\n                       <div id=\"errLast\"></div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                       <label for=\"username\"><span class=\"req\">* </span> City:  </label> \r\n                       <input ngModel class=\"form-control\" type=\"text\" id=\"city\" name=\"city\" placeholder=\"minimum 6 letters\" required />  \r\n                       <div id=\"errLast\"></div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                            <label for=\"phonenumber\"><span class=\"req\">* </span> Phone Number: </label>\r\n                            <input ngModel required type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\"  class=\"form-control phone\" maxlength=\"28\" placeholder=\"not used for marketing\"/> \r\n                    </div>\r\n\r\n                   \r\n                    <div class=\"form-group\">\r\n                       <input class=\"btn btn-success\" type=\"submit\" name=\"submit_reg\" value=\"Register\">\r\n                    </div>\r\n                    <h5>You will receive an email to complete the registration and validation process. </h5>\r\n                    <h5>Be sure to check your spam folders. </h5>\r\n                 </fieldset>\r\n              </form>\r\n              <!-- ends register form -->\r\n           </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/components/registration-component/registration-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__ = __webpack_require__("./src/app/services/login-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = (function () {
    function RegistrationComponent(loginService) {
        this.loginService = loginService;
        this.email = "fsaf";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onClick = function () {
    };
    RegistrationComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
        this.loginService.submitRegistration(form.value).subscribe(function (data) { return console.log("Poslato"); });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'registration-component',
            template: __webpack_require__("./src/app/components/registration-component/registration-component.component.html"),
            styles: [" .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n\n  .ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/accept-decline/accept-decline-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <h1> Here you can accept or decline your invitation</h1>\r\n\r\n    <br>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n        \r\n        <button style=\"width:50%;\" class=\"btn btn-success\" (click)=\"acceptInvitation()\"> Accept </button>\r\n\r\n        <button style=\"width:50%;\" class=\"btn btn-danger\" (click)=\"declineInvitation()\"> Decline </button>\r\n     </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/reservation-component/accept-decline/accept-decline-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptDeclineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ProjectionUserTicketId__ = __webpack_require__("./src/app/model/ProjectionUserTicketId.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcceptDeclineComponent = (function () {
    function AcceptDeclineComponent(activatedRoute, router, profileService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.profileService = profileService;
        this.projectionId = 0;
        this.userId = 0;
        this.ticketId = 0;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.projectionId = params['projection_id'];
            _this.userId = params['user_id'];
            _this.ticketId = params['ticket_id'];
        });
    }
    AcceptDeclineComponent.prototype.ngOnInit = function () {
    };
    AcceptDeclineComponent.prototype.acceptInvitation = function () {
        this.projectionUserTicketId =
            new __WEBPACK_IMPORTED_MODULE_2__model_ProjectionUserTicketId__["a" /* ProjectionUserTicketId */](this.projectionId, this.userId, this.ticketId);
        this.profileService.acceptORdeclineInvitation(this.projectionUserTicketId, "accept").subscribe(function (data) {
            return console.log(data);
        });
        this.router.navigateByUrl('/profile');
    };
    AcceptDeclineComponent.prototype.declineInvitation = function () {
        this.projectionUserTicketId =
            new __WEBPACK_IMPORTED_MODULE_2__model_ProjectionUserTicketId__["a" /* ProjectionUserTicketId */](this.projectionId, this.userId, this.ticketId);
        this.profileService.acceptORdeclineInvitation(this.projectionUserTicketId, "decline").subscribe(function (data) {
            return console.log(data);
        });
        this.router.navigateByUrl('/profile');
    };
    AcceptDeclineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'accept-decline-component',
            template: __webpack_require__("./src/app/components/reservation-component/accept-decline/accept-decline-component.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_profile_service__["a" /* ProfileService */]])
    ], AcceptDeclineComponent);
    return AcceptDeclineComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/reservation-component.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  .body-content {\r\n    width:100%; \r\n }\r\n  \r\n  .wizard {\r\n    margin: 20px auto;\r\n    background: #fff;\r\n}\r\n  \r\n  .wizard .nav-tabs {\r\n    position: relative;\r\n    margin: 40px auto;\r\n    margin-bottom: 0;\r\n    border-bottom-color: #e0e0e0;\r\n}\r\n  \r\n  .wizard > div.wizard-inner {\r\n    position: relative;\r\n}\r\n  \r\n  .connecting-line {\r\n    height: 2px;\r\n    background: #e0e0e0;\r\n    position: absolute;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: 1;\r\n}\r\n  \r\n  .wizard .nav-tabs > li.active > a,\r\n.wizard .nav-tabs > li.active > a:hover,\r\n.wizard .nav-tabs > li.active > a:focus {\r\n    color: #555555;\r\n    cursor: default;\r\n    border: 0;\r\n    border-bottom-color: transparent;\r\n}\r\n  \r\n  span.round-tab {\r\n    width: 70px;\r\n    height: 70px;\r\n    line-height: 70px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    background: #fff;\r\n    border: 2px solid #e0e0e0;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n  \r\n  span.round-tab i {\r\n    color: #555555;\r\n}\r\n  \r\n  .wizard li a.active span.round-tab {\r\n    background: #fff;\r\n    border: 2px solid #5bc0de;\r\n\r\n}\r\n  \r\n  .wizard li a.active span.round-tab i {\r\n    color: #5bc0de;\r\n}\r\n  \r\n  span.round-tab:hover {\r\n    color: #333;\r\n    border: 2px solid #333;\r\n}\r\n  \r\n  .wizard .nav-tabs > li {\r\n    width: 19%;\r\n}\r\n  \r\n  .wizard li a:after {\r\n    content: \" \";\r\n    position: relative;\r\n    left: 46%;\r\n    top: -20px;\r\n    opacity: 0;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 5px solid transparent;\r\n    border-bottom-color: #5bc0de;\r\n    -webkit-transition: 0.1s ease-in-out;\r\n    transition: 0.1s ease-in-out;\r\n}\r\n  \r\n  .wizard li.active.nav-item:after {\r\n    content: \" \";\r\n    position: relative;\r\n    left: 46%;\r\n    top: -20px;\r\n    opacity: 1;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #5bc0de;\r\n}\r\n  \r\n  .wizard .nav-tabs > li a {\r\n    width: 70px;\r\n    height: 70px;\r\n    margin: 20px auto;\r\n    border-radius: 100%;\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n  \r\n  .wizard .nav-tabs > li a:hover {\r\n    background: transparent;\r\n}\r\n  \r\n  .wizard .tab-pane {\r\n    position: relative;\r\n    padding-top: 50px;\r\n}\r\n  \r\n  .wizard h3 {\r\n    margin-top: 0;\r\n}\r\n  \r\n  @media( max-width: 585px) {\r\n\r\n    .wizard {\r\n        width: 90%;\r\n        height: auto !important;\r\n    }\r\n\r\n    span.round-tab {\r\n        font-size: 16px;\r\n        width: 50px;\r\n        height: 50px;\r\n        line-height: 50px;\r\n    }\r\n\r\n    .wizard .nav-tabs > li a {\r\n        width: 50px;\r\n        height: 50px;\r\n        line-height: 50px;\r\n    }\r\n\r\n    .wizard li.active:after {\r\n        content: \" \";\r\n        position: absolute;\r\n        left: 35%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/reservation-component/reservation-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"wizard\">\r\n        <div class=\"wizard-inner\">\r\n            <div class=\"connecting-line\"></div>\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"nav-item\">\r\n                    <a data-toggle=\"tab\" aria-controls=\"step1\" role=\"tab\" title=\"Step 1\" [class]=\"makeOneInactive()\" class=\"nav-link active\">\r\n                <span class=\"round-tab\">\r\n                    1\r\n                </span>\r\n            </a>\r\n                </li>\r\n                <li role=\"presentation\" class=\"nav-item\">\r\n                    <a data-toggle=\"tab\" aria-controls=\"step2\" role=\"tab\" title=\"Step 2\" [class]=\"makeTwoActive()\" class=\"nav-link disabled\">\r\n                <span class=\"round-tab\">\r\n                    2\r\n                </span>\r\n            </a>\r\n                </li>\r\n                <li role=\"presentation\" class=\"nav-item\">\r\n                    <a data-toggle=\"tab\" aria-controls=\"step3\" role=\"tab\" title=\"Step 3\" [class]=\"makeThreeActive()\" class=\"nav-link disabled\">\r\n                <span class=\"round-tab\">\r\n                    3\r\n                </span>\r\n            </a>\r\n                </li>\r\n                <li role=\"presentation\" class=\"nav-item\">\r\n                    <a data-toggle=\"tab\" aria-controls=\"step4\" role=\"tab\" title=\"Step 4\" [class]=\"makeFourActive()\" class=\"nav-link disabled\">\r\n                <span class=\"round-tab\">\r\n                        4\r\n                </span>\r\n                \r\n            </a>\r\n                </li>\r\n                <li role=\"presentation\" class=\"nav-item\">\r\n                    <a data-toggle=\"tab\" aria-controls=\"step5\" role=\"tab\" title=\"Step 5\" [class]=\"makeFiveActive()\" class=\"nav-link disabled\">\r\n                <span class=\"round-tab\">\r\n                    5\r\n                </span>\r\n            </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"tab-content\">\r\n            <div class=\"tab-pane active text-center\" role=\"tabpanel\" id=\"step1\">\r\n                \r\n                \r\n                  \r\n                <step-one-component *ngIf=\"step===1\"\r\n                    (onTheatreChanged)=\"onChangeTheatre($event)\"\r\n                    (onCinemaChanged)=\"onChangeCinema($event)\"\r\n                    (onCinemaSelectedChanged)=\"onChangeCinemaSelected($event)\"\r\n                    [cinemasArray]=cinemasArray [theatresArray]=theatresArray  >\r\n                </step-one-component>\r\n\r\n                <step-two-component *ngIf=\"step===2\"\r\n                [moviesArray]=moviesArray\r\n                [cinemaSelected]=cinemaSelected>\r\n\r\n                </step-two-component>\r\n\r\n\r\n                <step-three-component *ngIf=\"step===3\"\r\n                (selectedSeats)=\"onChangeSelectedSeats($event)\"\r\n                ></step-three-component>\r\n\r\n\r\n                <step-four-component *ngIf=\"step===4\"\r\n                [selectedSeats]=selectedSeats\r\n                [cinemaSelected]=cinemaSelected\r\n                (invitedFriendsArray)=\"onFriendsInvitedChanged($event)\"\r\n                >\r\n\r\n\r\n                </step-four-component>\r\n\r\n\r\n                <step-five-component *ngIf=\"step===5\"\r\n                    [selectedSeats]=selectedSeats\r\n                    (movieReservationOutput)=\"onMovieReservationChanged($event)\"\r\n                ></step-five-component>\r\n                \r\n                <br>\r\n                <br>\r\n\r\n                \r\n                <br>\r\n                <br>\r\n                \r\n                <ul class=\"list-inline text-md-center\">\r\n                    <li>   \r\n                        <button type=\"button\" class=\"btn btn-lg btn-primary next-step next-button\" (click)=\"previousStep()\"> Back </button> \r\n                        <button [hidden]=\"step===5\" type=\"button\" class=\"btn btn-lg btn-primary next-step next-button\" (click)=\"nextStep()\"> Next step </button> \r\n                        <button [hidden]=\"!(step===5)\" type=\"button\" class=\"btn btn-lg btn-primary next-step next-button\" (click)=\"finishReservation()\"> Finish </button>                    \r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"tab-pane\" role=\"tabpanel\" id=\"step2\">\r\n               \r\n                <step-two-component *ngIf=\"step>1\"></step-two-component>\r\n                <br>\r\n                <br>\r\n                    \r\n\r\n                <ul class=\"list-inline text-md-center\">\r\n                    <li><button type=\"button\" class=\"btn btn-lg btn-common next-step next-button\">Next Step</button></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"tab-pane\" role=\"tabpanel\" id=\"step3\">\r\n                <h1 class=\"text-md-center\">Step 3</h1>\r\n                <div class=\"row\">\r\n                    \r\n                </div>\r\n                <ul class=\"list-inline text-md-center\">\r\n                    <li><button type=\"button\" class=\"btn btn-lg btn-common next-step next-button\">Next Step</button></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"tab-pane\" role=\"tabpanel\" id=\"step4\">\r\n                <h1 class=\"text-md-center\">Step 4</h1>\r\n                <div class=\"row\">\r\n                    \r\n                </div>\r\n                <ul class=\"list-inline text-md-center\">\r\n                    <li><button type=\"button\" class=\"btn btn-lg btn-common next-step next-button\">Next Step</button></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"tab-pane\" role=\"tabpanel\" id=\"step5\">\r\n                <h1 class=\"text-md-center\">Complete</h1>\r\n                <div class=\"row\">\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n    </div>\r\n</div>>\r\n"

/***/ }),

/***/ "./src/app/components/reservation-component/reservation-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReservationComponent = (function () {
    function ReservationComponent(router, cinemaService, theatreService, homeService) {
        this.router = router;
        this.cinemaService = cinemaService;
        this.theatreService = theatreService;
        this.homeService = homeService;
        this.step = 1;
        this.friendsInvited = [];
        this.cinemaSelected = false;
        this.selectedSeats = [];
        // for transactional
        this.projectionSeats = [];
    }
    ReservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cinemaService.getCinemas()
            .subscribe(function (data) { return _this.cinemasArray = data; });
        this.theatreService.getTheatres()
            .subscribe(function (data) { return _this.theatresArray = data; });
    };
    ReservationComponent.prototype.onChangeTheatre = function (theatre) {
        this.theatreId = theatre;
    };
    ReservationComponent.prototype.onChangeCinema = function (cinema) {
        this.cinemaId = cinema;
    };
    ReservationComponent.prototype.onChangeCinemaSelected = function (cinemaSelected) {
        console.log("Trenutni cinemasel: " + this.cinemaSelected);
        console.log("dosao cinemasel: " + cinemaSelected);
        this.cinemaSelected = cinemaSelected;
        //cinema je true, theatre je false
        console.log("Posle : " + this.cinemaSelected);
    };
    ReservationComponent.prototype.onChangeSelectedSeats = function (selectedSeats) {
        this.selectedSeats = selectedSeats;
        console.log("Iz reservationa : " + selectedSeats);
        // for transactional
        // for transactional
    };
    ReservationComponent.prototype.onMovieReservationChanged = function (movieReservation) {
        var _this = this;
        this.movieReservation = movieReservation;
        this.homeService.getProjectionSeats(this.movieReservation.projectionId, this.movieReservation.movieORplayID)
            .subscribe(function (data) {
            _this.projectionSeats = data;
            console.log(_this.projectionSeats + "ispis sedista");
        });
    };
    ReservationComponent.prototype.onFriendsInvitedChanged = function (friendsInvited) {
        console.log("onFriendsInvitedChanged : ispis ");
        console.log(friendsInvited);
        this.friendsInvited = friendsInvited;
    };
    ReservationComponent.prototype.nextStep = function () {
        var _this = this;
        this.step++;
        if (this.step == 2) {
            if (!this.cinemaSelected) {
                console.log("usao u nadji movies ");
                this.cinemaService.getMovies(this.cinemaId)
                    .subscribe(function (data) { return _this.moviesArray = data; });
            }
            else {
                console.log("usao u nadji plays ");
                this.theatreService.getPlays(this.theatreId)
                    .subscribe(function (data) { return _this.moviesArray = data; });
            }
        }
    };
    ReservationComponent.prototype.previousStep = function () {
        this.step--;
    };
    ReservationComponent.prototype.finishReservation = function () {
        this.movieReservation.invitedFriends = this.friendsInvited;
        var seats = [];
        for (var i = 0; i < this.movieReservation.seatsTaken.length; i++) {
            seats.push(this.projectionSeats[this.movieReservation.seatsTaken[i] - 1]);
            //this.homeService.reserveSeat(this.projectionSeats[this.movieReservation.seatsTaken[i]-1])
            //.subscribe(data => console.log(data));
        }
        this.movieReservation.seats = seats;
        console.log("finishReservation : ispis ");
        console.log(this.movieReservation.seats);
        if (!this.cinemaSelected) {
            console.log("Saljem iz cinema!");
            this.cinemaService.makeCinemaReservation(this.movieReservation)
                .subscribe(function (data) { return console.log(data); });
        }
        else {
            console.log("Saljem iz theatre!");
            this.theatreService.makeTheatreReservation(this.movieReservation)
                .subscribe(function (data) { return console.log(data); });
        }
        this.step = 1;
    };
    ReservationComponent.prototype.makeOneActive = function () {
        this.step = 1;
    };
    ReservationComponent.prototype.makeTwoActive = function () {
        if (this.step === 2)
            return "nav-link active";
        return "nav-link disabled";
    };
    ReservationComponent.prototype.makeThreeActive = function () {
        if (this.step === 3)
            return "nav-link active";
        return "nav-link disabled";
    };
    ReservationComponent.prototype.makeFourActive = function () {
        if (this.step === 4)
            return "nav-link active";
        return "nav-link disabled";
    };
    ReservationComponent.prototype.makeFiveActive = function () {
        if (this.step === 5)
            return "nav-link active";
        return "nav-link disabled";
    };
    ReservationComponent.prototype.makeOneInactive = function () {
        if (this.step > 1)
            return "nav-link disabled";
        return "nav-link active";
    };
    ReservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reservation-component',
            template: __webpack_require__("./src/app/components/reservation-component/reservation-component.component.html"),
            styles: [__webpack_require__("./src/app/components/reservation-component/reservation-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */],
            __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__["a" /* HomeService */]])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/step-five/step-five.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding: 0px;\r\n    }\r\n    .container {\r\n      width: auto;\r\n      margin-left: 200px;\r\n      margin-right: 200px;\r\n    }\r\n    ​\r\n    .center {\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      }\r\n    .center.navbar .nav,\r\n      .center.navbar .nav > li {\r\n      float:none;\r\n      display:inline-block;\r\n      *display:inline; /* ie7 fix */\r\n      *zoom:1; /* hasLayout ie7 trigger */\r\n      vertical-align: top;\r\n      }\r\n    .center.navbar-inner {\r\n      text-align:center;\r\n      }\r\n    .center .dropdown-menu {\r\n      text-align: left;\r\n      }\r\n    .navbar-inner {\r\n      margin: 0 auto;\r\n      }\r\n    body{\r\n        background: #DAE3E7;\r\n      }\r\n    .row{\r\n        margin-top: 40px;\r\n      }\r\n    html,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\r\n    div.card {\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n    .header {\r\n        padding: 10px 0;\r\n        background: #f5f5f5;\r\n        border-top: 3px solid #3AAA64;\r\n      }\r\n    .list-group {\r\n          list-style: disc inside;\r\n      \r\n      }\r\n    .list-group-item {\r\n          display: list-item;\r\n      }\r\n    .find-more{\r\n         text-align: right;\r\n       }\r\n    .label-theme{\r\n        background: #3AAA64;\r\n        font-size: 14px;\r\n        padding: .3em .7em .3em;\r\n        color: #fff;\r\n        border-radius: .25em;\r\n      }\r\n    .label a{\r\n        color: inherit;\r\n      }"

/***/ }),

/***/ "./src/app/components/reservation-component/step-five/step-five.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n    <div class=\"progress-bar\" style=\"width:100%\"></div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n  <blockquote class=\"blockquote text-center\">\r\n      <p class=\"mb-0\">Cinema at its best can express something of the pure irreducible fact of things.</p>\r\n      <footer class=\"blockquote-footer\"> <cite title=\"Source Title\">Lenny Abrahamson</cite></footer>\r\n  </blockquote>\r\n</div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card card-block\">\r\n          <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px; text-align:left;\" ><i class=\"fa fa-trophy fa-fw\"></i> Reservation </h2>\r\n          <div style=\"height: 15px\"></div>\r\n          <table class=\"table table-bordered table-hover\">\r\n            <thead class=\"thead-default\">\r\n            <tr>\r\n              <th scope=\"col\">Title</th>\r\n              <th scope=\"col\">Date</th>\r\n              <th scope=\"col\">time</th>\r\n              <th scope=\"col\">Place</th>\r\n              <th scope=\"col\">Tickets reserved</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td> {{movieReservation?.movieName}} </td>\r\n                <td> {{movieReservation?.date}} </td>\r\n                <td> {{movieReservation?.time}} </td>\r\n                <td> {{movieReservation?.place}} </td>\r\n                <td> {{selectedSeatsString}}   </td>\r\n                \r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/reservation-component/step-five/step-five.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepFiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepFiveComponent = (function () {
    function StepFiveComponent(dataService) {
        this.dataService = dataService;
        this.movieReservationOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedSeatsString = "[";
    }
    StepFiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMovieReservation
            .subscribe(function (data) { return _this.movieReservation = data; });
        console.log(this.selectedSeats + " iz step five");
        for (var i = 0; i < this.selectedSeats.length; i++) {
            if (i != this.selectedSeats.length - 1)
                this.selectedSeatsString += this.selectedSeats[i] + ", ";
            else
                this.selectedSeatsString += this.selectedSeats[i] + "]";
        }
        this.movieReservation.seatsTaken = this.selectedSeats;
        this.movieReservationOutput.emit(this.movieReservation);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], StepFiveComponent.prototype, "selectedSeats", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], StepFiveComponent.prototype, "movieReservationOutput", void 0);
    StepFiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'step-five-component',
            template: __webpack_require__("./src/app/components/reservation-component/step-five/step-five.component.html"),
            styles: [__webpack_require__("./src/app/components/reservation-component/step-five/step-five.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], StepFiveComponent);
    return StepFiveComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/step-four/step-four.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n        <div class=\"progress-bar\" style=\"width:80%\"></div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <blockquote class=\"blockquote text-center\">\r\n            <p class=\"mb-0\">Cinema at its best can express something of the pure irreducible fact of things.</p>\r\n            <footer class=\"blockquote-footer\"> <cite title=\"Source Title\">Lenny Abrahamson</cite></footer>\r\n        </blockquote>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n\r\n<br>\r\n\r\n<!-- Section:Friends -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card card-block\">\r\n          <h2 class=\"card-title\"  style=\"color:#009688; padding-top:15px; padding-left: 10px;\" ><i class=\"fa fa-trophy fa-fw\"></i> My Friends</h2>\r\n          <div style=\"height: 15px\"></div>\r\n          <table class=\"table table-bordered table-hover\">\r\n            <thead class=\"thead-default\">\r\n            <tr>\r\n              <th scope=\"col\">#</th>\r\n              <th scope=\"col\">Name</th>\r\n              <th scope=\"col\">Surname</th>\r\n              <th scope=\"col\">Email</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let f of userFriends; let i = index;\">\r\n              <tr *ngIf=\"f.enabled === true\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{f.friendUsername}}</td>\r\n                <td>{{f.friendFirstName}}</td>\r\n                <td>{{f.friendLastName}} <button [class]=\"inviteButtonClass(f.friendId)\" [disabled]=\"disableInvites\" class=\"btn btn-success\" style=\"float:right\" (click)=\"inviteFriend(f.friendId)\"> Invite </button> </td>\r\n                \r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End:Awards -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/reservation-component/step-four/step-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepFourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_service__ = __webpack_require__("./src/app/services/profile-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StepFourComponent = (function () {
    function StepFourComponent(profileService, theatresService, dataService) {
        this.profileService = profileService;
        this.theatresService = theatresService;
        this.dataService = dataService;
        this.userFriends = [];
        this.invitedFriendsArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.friendsInvited = 1;
        this.disableInvites = false;
        this.invitedFriends = [];
    }
    StepFourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getFriends().subscribe(function (data) {
            return _this.userFriends = data;
        });
        if (this.friendsInvited === this.selectedSeats.length)
            this.disableInvites = true;
        this.dataService.currentMovieReservation
            .subscribe(function (data) { return _this.movieReservation = data; });
    };
    StepFourComponent.prototype.inviteFriend = function (friendId) {
        this.movieReservation.seatsTaken = [];
        this.movieReservation.seatsTaken.push(this.selectedSeats[this.friendsInvited]);
        this.friendsInvited++;
        this.invitedFriends.push(friendId);
        console.log("invited firends 53 : + " + this.invitedFriends);
        this.invitedFriendsArray.emit(this.invitedFriends);
        if (this.friendsInvited === this.selectedSeats.length)
            this.disableInvites = true;
        if (!this.cinemaSelected) {
        }
        else {
        }
    };
    StepFourComponent.prototype.inviteButtonClass = function (id) {
        if (this.invitedFriends.includes(id))
            return "invisible";
        return "btn btn-primary";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepFourComponent.prototype, "selectedSeats", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepFourComponent.prototype, "cinemaSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], StepFourComponent.prototype, "invitedFriendsArray", void 0);
    StepFourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'step-four-component',
            template: __webpack_require__("./src/app/components/reservation-component/step-four/step-four.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]])
    ], StepFourComponent);
    return StepFourComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/step-one/step-one.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n        <div class=\"progress-bar\" style=\"width:20%\"></div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <blockquote class=\"blockquote text-center\">\r\n            <p class=\"mb-0\">Cinema is the most beautiful fraud in the world.</p>\r\n            <footer class=\"blockquote-footer\"> <cite title=\"Source Title\">Jean-Luc Godard</cite></footer>\r\n        </blockquote>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n<div class=\"row\">\r\n    \r\n        <div class=\"col-lg-6\">\r\n                <button type=\"button\" [class]=\"changeClassCinema()\" [disabled]=\"!cinemaSelected\" style=\"width:100%\" class=\"btn btn-primary\" (click)=\"changeSelected()\">Select Cinema</button>                \r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n            <button type=\"button\" [class]=\"changeClassTheatre()\" [disabled]=\"cinemaSelected\" style=\"width:100%\" class=\"btn btn-common\" (click)=\"changeSelected()\">Select Theatre</button>               \r\n        </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\" [hidden]=\"!cinemaSelected\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\"> <h2>Select theatre</h2></label>\r\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"onChangeTheatre($event.target.value)\">\r\n                    <option hidden selected value=\"\">\r\n                        -- select a theatre --\r\n                    </option>\r\n                    <option *ngFor=\"let t of theatresArray\" [value]=\"t?.id\">{{t?.name}}</option>\r\n                </select>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    \r\n    <div class=\"col-md-12\">\r\n            <label for=\"theatreSearch\"> <h2>Search theatre</h2></label>\r\n            <input [(ngModel)]=\"searchTheatreInput\" type=\"text\" class=\"form-control\" id=\"theatreSearch\" style=\"text-align:center; margin:1px\" placeholder=\"Enter name of the theatre\">   \r\n            <button type=\"button\" style=\"width:100%\" class=\"btn btn-primary\" (click)=\"searchTheatre()\"><span class=\"glyphicon glyphicon-search\"></span>Search theatre</button>\r\n            \r\n            <br>\r\n            <br>\r\n            <label [hidden]=\"searchTheatreClicked\" for=\"searchTheatreResult\"> <h2>Search results</h2></label>\r\n            <select [hidden]=\"searchTheatreClicked\" class=\"form-control\" id=\"searchTheatreResult\" (change)=\"onChangeTheatre($event.target.value)\">\r\n                    <option hidden selected value=\"\">\r\n                        -- select a theatre --\r\n                    </option>\r\n                    <option *ngFor=\"let t of theatresSearchArray\" [value]=\"t?.id\">{{t?.name}}</option>\r\n            </select>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" [hidden]=\"cinemaSelected\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlSelect1\"> <h2>Select cinema</h2></label>\r\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"onChangeCinema($event.target.value)\">\r\n                        <option hidden selected value=\"\">\r\n                            -- select a cinema --\r\n                        </option>\r\n                        <option *ngFor=\"let c of cinemasArray\" [value]=\"c?.id\">{{c?.name}}</option>\r\n                    </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n            <label for=\"cinemaSearch\"> <h2>Search cinema</h2></label>\r\n            <input [(ngModel)]=\"searchCinemaInput\" type=\"text\" class=\"form-control\" id=\"cinemaSearch\" style=\"text-align:center; margin:1px\" placeholder=\"Enter name of the cinema\">   \r\n\r\n            <button type=\"button\" style=\"width:100%\" class=\"btn btn-primary\" (click)=\"searchCinema()\">Search cinema</button>                    \r\n        \r\n            <br>\r\n            <br>\r\n            <label [hidden]=\"searchCinemaClicked\" for=\"searchCinemaResult\"> <h2>Search results</h2></label>\r\n            <select [hidden]=\"searchCinemaClicked\" class=\"form-control\" id=\"searchCinemaResult\" (change)=\"onChangeCinema($event.target.value)\">\r\n                    <option hidden selected value=\"\">\r\n                        -- select a cinema --\r\n                    </option>\r\n                    <option *ngFor=\"let c of cinemasSearchArray\" [value]=\"c?.id\">{{c?.name}}</option>\r\n            </select>\r\n\r\n        </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/reservation-component/step-one/step-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepOneComponent = (function () {
    function StepOneComponent(cinemaService, theatreService) {
        this.cinemaService = cinemaService;
        this.theatreService = theatreService;
        this.cinemaSelected = false;
        this.searchTheatreClicked = true;
        this.searchCinemaClicked = true;
        this.searchTheatreInput = "";
        this.searchCinemaInput = "";
        this.onTheatreChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onCinemaChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onCinemaSelectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    StepOneComponent.prototype.ngOnInit = function () {
    };
    StepOneComponent.prototype.onChangeTheatre = function (theatreValue) {
        this.onTheatreChanged.emit(theatreValue);
    };
    StepOneComponent.prototype.onChangeCinema = function (cinemaValue) {
        this.onCinemaChanged.emit(cinemaValue);
    };
    StepOneComponent.prototype.changeSelected = function () {
        this.cinemaSelected = !this.cinemaSelected;
        this.onCinemaSelectedChanged.emit(this.cinemaSelected);
        if (!this.cinemaSelected)
            return "btn btn-primary";
        return "btn btn-common";
    };
    StepOneComponent.prototype.changeClassTheatre = function () {
        if (this.cinemaSelected)
            return "btn btn-common";
        return "btn btn-dark";
    };
    StepOneComponent.prototype.changeClassCinema = function () {
        if (!this.cinemaSelected)
            return "btn btn-common";
        return "btn btn-dark";
    };
    StepOneComponent.prototype.searchTheatre = function () {
        var _this = this;
        this.searchTheatreClicked = false;
        this.theatreService.searchTheatres(this.searchTheatreInput)
            .subscribe(function (data) { return _this.theatresSearchArray = data; });
    };
    StepOneComponent.prototype.searchCinema = function () {
        var _this = this;
        this.searchCinemaClicked = false;
        this.cinemaService.searchCinemas(this.searchCinemaInput)
            .subscribe(function (data) { return _this.cinemasSearchArray = data; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepOneComponent.prototype, "cinemasArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepOneComponent.prototype, "theatresArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], StepOneComponent.prototype, "onTheatreChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], StepOneComponent.prototype, "onCinemaChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], StepOneComponent.prototype, "onCinemaSelectedChanged", void 0);
    StepOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'step-one-component',
            template: __webpack_require__("./src/app/components/reservation-component/step-one/step-one.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cinemas_service_service__["a" /* CinemasService */],
            __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__["a" /* TheatresService */]])
    ], StepOneComponent);
    return StepOneComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/step-three/step-three.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n        <div class=\"progress-bar\" style=\"width:60%\"></div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <blockquote class=\"blockquote text-center\">\r\n            <p class=\"mb-0\">Great theatre is about challenging how we think and encouraging us to fantasize about a world we aspire to.</p>\r\n            <footer class=\"blockquote-footer\"> <cite title=\"Source Title\">Willem Dafoe</cite></footer>\r\n        </blockquote>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n\r\n\r\n<seating-chart\r\n[currentProjection]=currentProjection\r\n(selectedSeats)=\"onChangeSelectedSeats($event)\">\r\n\r\n</seating-chart>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/reservation-component/step-three/step-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepThreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepThreeComponent = (function () {
    function StepThreeComponent(dataService, cinemaService) {
        this.dataService = dataService;
        this.cinemaService = cinemaService;
        this.selectedSeats = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ;
    StepThreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMovieReservation
            .subscribe(function (data) { return _this.currentMovie = data; });
        this.cinemaService.getProjectionById(this.currentMovie.projectionId)
            .subscribe(function (data) { return _this.currentProjection = data; });
    };
    StepThreeComponent.prototype.onChangeSelectedSeats = function (array) {
        console.log(array);
        this.selectedSeats.emit(array);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], StepThreeComponent.prototype, "selectedSeats", void 0);
    StepThreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'step-three-component',
            template: __webpack_require__("./src/app/components/reservation-component/step-three/step-three.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_cinemas_service_service__["a" /* CinemasService */]])
    ], StepThreeComponent);
    return StepThreeComponent;
}());



/***/ }),

/***/ "./src/app/components/reservation-component/step-two/step-two.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n        <div class=\"progress-bar\" style=\"width:40%\"></div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <blockquote class=\"blockquote text-center\">\r\n            <p class=\"mb-0\">I have always thought that, of all the arts, the cinema is the most complete art.</p>\r\n            <footer class=\"blockquote-footer\"> <cite title=\"Source Title\">Alejandro Jodorowsky</cite></footer>\r\n        </blockquote>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n\r\n\r\n<br>\r\n          <!-- *********************************** THEATRE ****************************************** -->\r\n\r\n<div class=\"row\" [hidden]=\"!cinemaSelected\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                            <label for=\"plays\"> <h2>Select play</h2></label>\r\n                            <select class=\"form-control\" id=\"plays\" (change)=\"onChangePlay($event.target.value)\">\r\n                                    <option hidden selected value=\"\">\r\n                                            -- select a play --\r\n                                        </option>\r\n                            <option *ngFor=\"let m of moviesArray\" value=\"{{m?.id}}\"> {{m?.name}}</option>\r\n                            </select>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                \r\n                <div class=\"col-md-12\">\r\n                        <label for=\"playDate\"> <h2>Projection date</h2></label>\r\n                        <select class=\"form-control\" id=\"playDate\" (change)=\"onChangeDate($event.target.value)\">\r\n                                <option hidden selected value=\"\">\r\n                                        -- select a date --\r\n                                    </option>\r\n                        <option *ngFor=\"let d of datesAvailable\"> {{d}}</option>\r\n                        </select>\r\n                </div>\r\n            \r\n                <div class=\"col-md-12\">\r\n                        <label for=\"playPlace\"> <h2>Projection place</h2></label>\r\n                        <select class=\"form-control\" id=\"playPlace\" (change)=\"onChangePlace($event.target.value)\">\r\n                                <option hidden selected value=\"\">\r\n                                        -- select a place --\r\n                                    </option>\r\n                        <option *ngFor=\"let p of placesAvailable\"> {{p}}</option>\r\n                        </select>\r\n                </div>\r\n            \r\n                <div class=\"col-md-12\">\r\n                        <label for=\"playTime\"> <h2>Projection time</h2></label>\r\n                        <select class=\"form-control\" id=\"playTime\" (change)=\"onChangeTime($event.target.value)\">\r\n                                <option hidden selected value=\"\">\r\n                                        -- select a time --\r\n                                    </option>\r\n                        <option *ngFor=\"let t of timesAvailable\"> {{t}}</option>\r\n                        </select>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                        <label for=\"playPrice\"> <h4>Projection price</h4></label>\r\n                        <input disabled  class=\"form-control\" id=\"playPrice\" value=\"{{projectionPrice}}\" />\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n        <!-- *********************************** THEATRE ****************************************** -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- *********************************** CINEMA ****************************************** -->\r\n\r\n<div class=\"row\" [hidden]=\"cinemaSelected\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n                <label for=\"movies\"> <h2>Select projection</h2></label>\r\n                <select class=\"form-control\" id=\"movies\" (change)=\"onChangeMovie($event.target.value)\">\r\n                        <option hidden selected value=\"\">\r\n                                -- select a movie --\r\n                            </option>\r\n                <option *ngFor=\"let m of moviesArray\" value=\"{{m?.id}}\"> {{m?.name}}</option>\r\n                </select>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    \r\n    <div class=\"col-md-12\">\r\n            <label for=\"movieDate\"> <h2>Projection date</h2></label>\r\n            <select class=\"form-control\" id=\"movieDate\" (change)=\"onChangeDate($event.target.value)\">\r\n                    <option hidden selected value=\"\">\r\n                            -- select a date --\r\n                        </option>\r\n            <option *ngFor=\"let d of datesAvailable\"> {{d}}</option>\r\n            </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n            <label for=\"moviePlace\"> <h2>Projection place</h2></label>\r\n            <select class=\"form-control\" id=\"moviePlace\" (change)=\"onChangePlace($event.target.value)\">\r\n                    <option hidden selected value=\"\">\r\n                            -- select a place --\r\n                        </option>\r\n            <option *ngFor=\"let p of placesAvailable\"> {{p}}</option>\r\n            </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n            <label for=\"movieTime\"> <h2>Projection time</h2></label>\r\n            <select class=\"form-control\" id=\"movieTime\" (change)=\"onChangeTime($event.target.value)\">\r\n                    <option hidden selected value=\"\">\r\n                            -- select a time --\r\n                        </option>\r\n            <option *ngFor=\"let t of timesAvailable\"> {{t}}</option>\r\n            </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n                <label for=\"moviePrice\"> <h4>Projection price</h4></label>\r\n                <input disabled  class=\"form-control\" id=\"moviePrice\" value=\"{{projectionPrice}}\" />\r\n        </div>\r\n</div>\r\n\r\n      <!-- *********************************** CINEMA ****************************************** -->\r\n"

/***/ }),

/***/ "./src/app/components/reservation-component/step-two/step-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_movieReservation__ = __webpack_require__("./src/app/model/movieReservation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StepTwoComponent = (function () {
    function StepTwoComponent(dataService, theatreService, cinemaService) {
        this.dataService = dataService;
        this.theatreService = theatreService;
        this.cinemaService = cinemaService;
        this.projectionsArray = [];
        this.projectionPrice = 0;
        this.datesAvailable = [];
        this.placesAvailable = [];
        this.timesAvailable = [];
    }
    StepTwoComponent.prototype.ngOnInit = function () {
    };
    StepTwoComponent.prototype.onChangeMovie = function (movieSelected) {
        var _this = this;
        this.placesAvailable = [];
        this.datesAvailable = [];
        this.timesAvailable = [];
        this.projectionPrice = 0;
        this.cinemaService.getProjectionDate(movieSelected)
            .subscribe(function (data) {
            _this.projectionsArray = data;
            _this.datesAvailable = [];
            for (var i = 0; i < _this.projectionsArray.length; i++) {
                if (!_this.datesAvailable.includes(_this.projectionsArray[i].date)) {
                    _this.datesAvailable.push(_this.projectionsArray[i].date);
                }
            }
        });
        for (var i = 0; i < this.moviesArray.length; i++) {
            console.log(this.moviesArray[i].id);
            if (this.moviesArray[i].id == movieSelected) {
                console.log(this.moviesArray[i].name);
                this.projectionName = this.moviesArray[i].name;
                this.movieORplayID = this.moviesArray[i].id;
                console.log(this.projectionName);
            }
        }
    };
    StepTwoComponent.prototype.onChangeDate = function (projectionDate) {
        this.projectionDate = projectionDate;
        this.placesAvailable = [];
        for (var i = 0; i < this.projectionsArray.length; i++) {
            if (this.projectionsArray[i].date === projectionDate) {
                if (!this.placesAvailable.includes(this.projectionsArray[i].place))
                    this.placesAvailable.push(this.projectionsArray[i].place);
            }
        }
    };
    StepTwoComponent.prototype.onChangePlace = function (projectionPlace) {
        this.projectionPlace = projectionPlace;
        this.timesAvailable = [];
        this.projectionPrice = 0;
        for (var i = 0; i < this.projectionsArray.length; i++) {
            if (this.projectionsArray[i].date === this.projectionDate &&
                this.projectionsArray[i].place === this.projectionPlace) {
                if (!this.placesAvailable.includes(this.projectionsArray[i].time))
                    this.timesAvailable.push(this.projectionsArray[i].time);
            }
        }
    };
    StepTwoComponent.prototype.onChangePlay = function (playSelected) {
        var _this = this;
        this.placesAvailable = [];
        this.datesAvailable = [];
        this.timesAvailable = [];
        this.projectionPrice = 0;
        this.theatreService
            .getProjectionDate(playSelected)
            .subscribe(function (data) {
            _this.projectionsArray = data;
            _this.datesAvailable = [];
            for (var i = 0; i < _this.projectionsArray.length; i++) {
                if (!_this.datesAvailable.includes(_this.projectionsArray[i].date)) {
                    _this.datesAvailable.push(_this.projectionsArray[i].date);
                }
            }
        });
        for (var i = 0; i < this.moviesArray.length; i++) {
            console.log(this.moviesArray[i].id);
            if (this.moviesArray[i].id == playSelected) {
                console.log(this.moviesArray[i].name);
                this.projectionName = this.moviesArray[i].name;
                this.movieORplayID = this.moviesArray[i].id;
                console.log(this.projectionName);
            }
        }
    };
    StepTwoComponent.prototype.onChangeTime = function (projectionTime) {
        this.projectionTime = projectionTime;
        for (var i = 0; i < this.projectionsArray.length; i++) {
            if (this.projectionsArray[i].date === this.projectionDate &&
                this.projectionsArray[i].place === this.projectionPlace &&
                this.projectionsArray[i].time === projectionTime) {
                this.projectionPrice = this.projectionsArray[i].price;
                break;
            }
        }
        for (var i = 0; i < this.projectionsArray.length; i++) {
            if (this.projectionsArray[i].date === this.projectionDate
                && this.projectionsArray[i].time === this.projectionTime
                && this.projectionsArray[i].place === this.projectionPlace) {
                this.projectionId = this.projectionsArray[i].id;
                break;
            }
        }
        console.log(this.projectionName + " name");
        this.dataService.changeMovieReservation(new __WEBPACK_IMPORTED_MODULE_2__model_movieReservation__["a" /* MovieReservation */](this.projectionId, this.projectionName, this.projectionDate, this.projectionTime, this.projectionPlace, this.projectionPrice, this.movieORplayID));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepTwoComponent.prototype, "moviesArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepTwoComponent.prototype, "playsArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StepTwoComponent.prototype, "cinemaSelected", void 0);
    StepTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'step-two-component',
            template: __webpack_require__("./src/app/components/reservation-component/step-two/step-two.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_4__services_cinemas_service_service__["a" /* CinemasService */]])
    ], StepTwoComponent);
    return StepTwoComponent;
}());



/***/ }),

/***/ "./src/app/components/seating-chart-component/seating-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-secondary\" style=\"text-align: center\"> Front </h3> \r\n<br>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\"> <button [class]=\"checkClass(1)\" (click)=\"buttonClicked(1)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 1 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(2)\" (click)=\"buttonClicked(2)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 2 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(3)\" (click)=\"buttonClicked(3)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 3 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(4)\" (click)=\"buttonClicked(4)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 4 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(5)\" (click)=\"buttonClicked(5)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 5 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(6)\" (click)=\"buttonClicked(6)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 6 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(7)\" (click)=\"buttonClicked(7)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 7 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(8)\" (click)=\"buttonClicked(8)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 8 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(9)\" (click)=\"buttonClicked(9)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 9 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(10)\" (click)=\"buttonClicked(10)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 10 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(11)\" (click)=\"buttonClicked(11)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 11 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(12)\"  (click)=\"buttonClicked(12)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 12 </button></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\"> <button [class]=\"checkClass(13)\" (click)=\"buttonClicked(13)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 13 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(14)\" (click)=\"buttonClicked(14)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 14 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(15)\" (click)=\"buttonClicked(15)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 15 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(16)\" (click)=\"buttonClicked(16)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 16 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(17)\" (click)=\"buttonClicked(17)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 17 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(18)\" (click)=\"buttonClicked(18)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 18 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(19)\" (click)=\"buttonClicked(19)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 19 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(20)\" (click)=\"buttonClicked(20)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 20 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(21)\" (click)=\"buttonClicked(21)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 21 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(22)\" (click)=\"buttonClicked(22)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 22 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(23)\" (click)=\"buttonClicked(23)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 23 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(24)\" (click)=\"buttonClicked(24)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 24 </button></div>\r\n</div><div class=\"row\">\r\n  <div class=\"col\"> <button [class]=\"checkClass(25)\" (click)=\"buttonClicked(25)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 25 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(26)\" (click)=\"buttonClicked(26)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 26 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(27)\" (click)=\"buttonClicked(27)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 27 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(28)\" (click)=\"buttonClicked(28)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 28 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(29)\" (click)=\"buttonClicked(29)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 29 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(30)\" (click)=\"buttonClicked(30)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 30 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(31)\" (click)=\"buttonClicked(31)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 31 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(32)\" (click)=\"buttonClicked(32)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 32 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(33)\" (click)=\"buttonClicked(33)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 33 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(34)\" (click)=\"buttonClicked(34)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 34 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(35)\" (click)=\"buttonClicked(35)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 35 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(36)\" (click)=\"buttonClicked(36)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 36 </button></div>\r\n</div><div class=\"row\">\r\n  <div class=\"col\"> <button [class]=\"checkClass(37)\" (click)=\"buttonClicked(37)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 37 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(38)\" (click)=\"buttonClicked(38)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 38 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(39)\" (click)=\"buttonClicked(39)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 39 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(40)\" (click)=\"buttonClicked(40)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 40 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(41)\" (click)=\"buttonClicked(41)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 41 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(42)\" (click)=\"buttonClicked(42)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 42 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(43)\" (click)=\"buttonClicked(43)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 43 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(44)\" (click)=\"buttonClicked(44)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 44 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(45)\" (click)=\"buttonClicked(45)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 45 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(46)\" (click)=\"buttonClicked(46)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 46 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(47)\" (click)=\"buttonClicked(47)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 47 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(48)\" (click)=\"buttonClicked(48)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 48 </button></div>\r\n</div>\r\n\r\n<hr> \r\n\r\n<div class=\"row\">\r\n  <div class=\"col\"> <button [class]=\"checkClass(49)\" (click)=\"buttonClicked(49)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 49 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(50)\" (click)=\"buttonClicked(50)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 50 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(51)\" (click)=\"buttonClicked(51)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 51 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(52)\" (click)=\"buttonClicked(52)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 52 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(53)\" (click)=\"buttonClicked(53)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 53 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(54)\" (click)=\"buttonClicked(54)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 54 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(55)\" (click)=\"buttonClicked(55)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 55 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(56)\" (click)=\"buttonClicked(56)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 56 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(57)\" (click)=\"buttonClicked(57)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 57 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(58)\" (click)=\"buttonClicked(58)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 58 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(59)\" (click)=\"buttonClicked(59)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 59 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(60)\" (click)=\"buttonClicked(60)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 60 </button></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(61)\" (click)=\"buttonClicked(61)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 61 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(62)\" (click)=\"buttonClicked(62)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 62 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(63)\" (click)=\"buttonClicked(63)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 63 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(64)\" (click)=\"buttonClicked(64)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 64 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(65)\" (click)=\"buttonClicked(65)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 65 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(66)\" (click)=\"buttonClicked(66)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 66 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(67)\" (click)=\"buttonClicked(67)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 67 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(68)\" (click)=\"buttonClicked(68)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 68 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(69)\" (click)=\"buttonClicked(69)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 69 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(70)\" (click)=\"buttonClicked(70)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 70 </button></div>\r\n  <div class=\"col\"> </div>\r\n</div><div class=\"row\">\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(71)\" (click)=\"buttonClicked(71)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 71 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(72)\" (click)=\"buttonClicked(72)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 72 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(73)\" (click)=\"buttonClicked(73)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 73 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(74)\" (click)=\"buttonClicked(74)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 74 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(75)\" (click)=\"buttonClicked(75)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 75 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(76)\" (click)=\"buttonClicked(76)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 76 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(77)\" (click)=\"buttonClicked(77)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 77 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(78)\" (click)=\"buttonClicked(78)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 78 </button></div>\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(79)\" (click)=\"buttonClicked(79)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 79 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(80)\" (click)=\"buttonClicked(80)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 80 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(81)\" (click)=\"buttonClicked(81)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 81 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(82)\" (click)=\"buttonClicked(82)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 82 </button></div>\r\n  <div class=\"col\"> <button [class]=\"checkClass(83)\" (click)=\"buttonClicked(83)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 83 </button></div>\r\n  \r\n  <div class=\"col\"> <button [class]=\"checkClass(84)\" (click)=\"buttonClicked(84)\" class=\"btn btn-success\" style=\"width:100%; margin:1px\"> 84 </button></div>\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> </div>\r\n  <div class=\"col\"> </div>\r\n</div>\r\n\r\n<br>\r\n<h3 class=\"text-secondary\" style=\"text-align: center\"> Back </h3>\r\n<br>\r\n<div class=\"row\" style=\"text-align: center\">\r\n  <div class=\"col-sm-4\"> \r\n      <div class=\"form-group\">\r\n          <label for=\"buttonAvailable\"> Available </label>\r\n          <button id=\"buttonAvailable\" class=\"btn btn-success rounded-circle\"> </button>\r\n        </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-4\"> \r\n      <div class=\"form-group\">\r\n          <label for=\"buttonAvailable\"> Selected </label>\r\n          <button class=\"btn btn-primary rounded-circle\"> </button>\r\n      </div>  \r\n  </div>\r\n\r\n  <div class=\"col-sm-4\"> \r\n          <div class=\"form-group\">\r\n              <label for=\"buttonAvailable\"> Booked </label>\r\n              <button class=\"btn btn-secondary rounded-circle\"> </button>\r\n          </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/seating-chart-component/seating-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeatingChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeatingChartComponent = (function () {
    function SeatingChartComponent(router) {
        this.router = router;
        this.buttonClickedId = -1;
        this.buttonsArray = [];
        this.selectedSeats = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SeatingChartComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 85; i++) {
            this.buttonsArray[i] = 2;
        }
    };
    SeatingChartComponent.prototype.ngOnChanges = function () {
        if (this.currentProjection !== undefined) {
            for (var i = 0; i < this.currentProjection.tickets.length; i++) {
                console.log(this.currentProjection.tickets + " " + i);
                if (this.currentProjection.tickets[i].deleted)
                    this.buttonsArray[this.currentProjection.tickets[i].seatNumber] = -2;
                else
                    this.buttonsArray[this.currentProjection.tickets[i].seatNumber] = -1;
            }
        }
    };
    SeatingChartComponent.prototype.buttonClicked = function (id) {
        this.buttonClickedId = id;
        var seatsSelected = [];
        console.log(id + " buttonClicked");
        console.log("pre ifa " + this.buttonsArray[id]);
        if (this.buttonsArray[id] != -1)
            this.buttonsArray[id]++;
        for (var i = 0; i < this.buttonsArray.length; i++) {
            if (this.buttonsArray[i] % 2 === 1) {
                seatsSelected.push(i);
                console.log(i);
            }
        }
        console.log(seatsSelected);
        this.selectedSeats.emit(seatsSelected);
        console.log("posle ifa " + this.buttonsArray[id]);
    };
    SeatingChartComponent.prototype.checkClass = function (idButton) {
        if (this.buttonsArray[idButton] === -2) {
            return "invisible";
        }
        if (this.buttonsArray[idButton] === -1) {
            return "btn btn-secondary disabled";
        }
        if (this.buttonsArray[idButton] % 2 === 0) {
            return "btn btn-success";
        }
        return "btn btn-primary";
    };
    SeatingChartComponent.prototype.nextStep = function () {
        var seatsSelected = [];
        for (var i = 0; i < this.buttonsArray.length; i++) {
            if (this.buttonsArray[i] % 2 === 1) {
                seatsSelected.push(i);
                console.log(i);
            }
        }
        console.log(seatsSelected);
        this.selectedSeats.emit(seatsSelected);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SeatingChartComponent.prototype, "currentProjection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SeatingChartComponent.prototype, "selectedSeats", void 0);
    SeatingChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'seating-chart',
            template: __webpack_require__("./src/app/components/seating-chart-component/seating-chart.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SeatingChartComponent);
    return SeatingChartComponent;
}());



/***/ }),

/***/ "./src/app/components/theatre-component/editTheatre-component/editTheatre-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" >\r\n    <div class=\"jumbotron\">\r\n        <h1><b>Theatre name: </b></h1> \r\n        <input type=\"text\" class=\"form-control\" name=\"name\"\r\n                                [(ngModel)] = \"currentCinema.name\"   \r\n                                    required>\r\n                                      \r\n    </div>\r\n  <br>\r\n  <br>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"col-8\">\r\n            <h4><b>Address: </b></h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <input type=\"text\" class=\"form-control\" name=\"address\"\r\n                [(ngModel)] = \"currentCinema.address\"   \r\n                    required>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <h4><b>Description: </b></h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n                <div class=\"col-8\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"description\"\r\n                [(ngModel)] = \"currentCinema.description\"   \r\n                    required>\r\n                </div>\r\n            </div>\r\n       \r\n    </div>\r\n    <br>\r\n    <br>\r\n    <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Save changes</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/theatre-component/editTheatre-component/editTheatre-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTheatreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTheatreComponent = (function () {
    function EditTheatreComponent(theatresService, router, homeService) {
        this.theatresService = theatresService;
        this.router = router;
        this.homeService = homeService;
    }
    EditTheatreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.theatresService.currentth.subscribe(function (currentCinema) { return _this.currentCinema = currentCinema; });
    };
    EditTheatreComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("theatre" + this.currentCinema);
        this.homeService.sendEdditedTheatre(this.currentCinema)
            .subscribe(function (data) { return _this.router.navigateByUrl('/theatres'); });
    };
    EditTheatreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'editTheatre-component',
            template: __webpack_require__("./src/app/components/theatre-component/editTheatre-component/editTheatre-component.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_home_service_service__["a" /* HomeService */]])
    ], EditTheatreComponent);
    return EditTheatreComponent;
}());



/***/ }),

/***/ "./src/app/components/theatre-component/theatre-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n    \r\n        <a class=\"navbar-brand text-white\"></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link text-white\" href=\"#\">About Us</a>\r\n                </li>\r\n              \r\n              \r\n               \r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navigation -->\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"jumbotron col-4\" >\r\n   <h1>Theatres</h1>\r\n   <button class=\"btn btn-dark\" (click)=\"onClickAddTheatre()\">Add theatre</button>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n<ul class=\"theatreArray\">\r\n    <li *ngFor=\"let c of theatresArray\">\r\n<div class=\"item-listing small-padding-bg\">\r\n\r\n  <div class=\"container\">\r\n \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-3\"> <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7kDX4rN7pDaQcXMzzadNQ0PvMwqnXIKIC7JBpUoh-gK6WABw\" alt=\"\"> \r\n      </div>\r\n      <div class=\"col-md-9 home-list-pop-desc inn-list-pop-desc\"> <button type=\"button\" class=\"btn btn-link\" (click)=\"onClickOpenPage(c)\"><h3>{{c.name}}</h3></button>\r\n        <h4></h4> \r\n                      <p><b>Address: </b> {{c.address}} <button class=\"btn btn-dark btn-sm\" (click)=\"onClickShowLocation(c.address)\"> Show on map</button></p> \r\n                      <p> <b>Description: </b>{{c.description}}</p>\r\n          <div class=\"list-number \">\r\n              \r\n    </div>\r\n                <div class=\"list-enquiry\">\r\n                        <ul>\r\n                          <li class=\"btn btn-md btn-warning\"><button type=\"button\" class=\"btn btn-link\" (click)=\"onClickEditPage(c)\"><i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> Edit theatre </button> </li>\r\n                         \r\n                          <li>\r\n                          <li>\r\n                            {{c.rating}}\r\n                          </li>\r\n                          \r\n                        </ul>\r\n                      </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</li>\r\n</ul>\r\n\r\n   \r\n \r\n\r\n"

/***/ }),

/***/ "./src/app/components/theatre-component/theatre-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheatresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./src/app/services/data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TheatresComponent = (function () {
    function TheatresComponent(theatresService, dataService, router) {
        this.theatresService = theatresService;
        this.dataService = dataService;
        this.router = router;
        this.editButtonHidden = true;
    }
    TheatresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.theatresService.getTheatres()
            .subscribe(function (data) {
            _this.theatresArray = data;
        });
    };
    TheatresComponent.prototype.onSelect = function (theatre) {
        this.selectedTheatre = theatre;
    };
    TheatresComponent.prototype.onClickOpenPage = function (theatre) {
        this.selectedTheatre = theatre;
        this.theatresService.selectTheatre(this.selectedTheatre);
        this.router.navigateByUrl('/viewTheatre');
    };
    TheatresComponent.prototype.onClickEditPage = function (theatre) {
        this.selectedTheatre = theatre;
        this.theatresService.selectTheatre(this.selectedTheatre);
        this.router.navigateByUrl('/editTheatre');
    };
    TheatresComponent.prototype.onClickShowLocation = function (address) {
        this.dataService.changeAddress(address);
        this.router.navigateByUrl('location');
    };
    TheatresComponent.prototype.onClickAddTheatre = function () {
        console.log("SS");
        this.router.navigateByUrl('/addtheatre');
    };
    TheatresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'theatres-component',
            template: __webpack_require__("./src/app/components/theatre-component/theatre-component.component.html"),
            styles: ["\n  .list-number li  {\n    margin-right: 5px;\n    margin-left: 0px;\n    top: 5px;\n    display:inline-block;\n    \n}\n\n.list-enquiry li  {\n    margin-right: 5px;\n    margin-left: 0px;\n    margin-bottom:5px;\n    top: 15px;\n    display:inline-block;\n    \n}\n\nimg{width:80%;}\n\n.small-padding-bg {\n  box-shadow: 3px 3px 5px #c2c2c2, -3px -3px 5px #c2c2c2;\n}\n\n.jumbotron{\n  background: rgba(0, 0, 0, 0.05);\n  border: 1px;\n  }\n\n\n"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__["a" /* TheatresService */], __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TheatresComponent);
    return TheatresComponent;
}());



/***/ }),

/***/ "./src/app/components/theatre-component/viewTheatre-component/viewTheatre-component.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" [hidden]=\"changeSeatingChartHidden\">\r\n    <div class=\"jumbotron\">\r\n        <h1>{{currentCinema.name}}</h1>    \r\n    </div>\r\n  <br>\r\n  <br>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"col-8\">\r\n            <h4><b>Address: </b></h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <p>{{currentCinema.address}}</p>\r\n            </div>\r\n        </div>\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n            <div class=\"col-8\">\r\n                <h4><b>Description: </b></h4>\r\n            </div>\r\n        </div>\r\n    <div class=\"card-body\">\r\n                <div class=\"col-8\">\r\n                    <p>{{currentCinema.description}}</p>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"card\">\r\n    \r\n    <div class=\"card-body\">\r\n        <div class=\"col-8\">\r\n            <h4><b>Repertoar: </b></h4>\r\n            <button class=\"btn\" (click)=\"addMovieFunct()\">Add movie</button>\r\n\r\n            <div>\r\n                <form  [hidden]=\"addMovie\" (ngSubmit)=\"onSubmitAdd(f, currentCinema.id)\" #f=\"ngForm\" >\r\n                    <p>Name: </p><input type=\"text\" class=\"form-control\" \r\n                    name=\"name\" ngModel required>\r\n                    <p>Description: </p><input type=\"text\" class=\"form-control\" name=\"description\"\r\n                        ngModel required> \r\n                        <p>Genre: </p><input type=\"text\" class=\"form-control\" name=\"genre\"\r\n                        ngModel required> \r\n                        <p>Producer: </p><input type=\"text\" class=\"form-control\" name=\"producer\"\r\n                        ngModel required> \r\n                            \r\n            <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add</button>\r\n            </form>\r\n            </div>\r\n        </div>\r\n        <table>\r\n            <tr *ngFor=\"let m of plays; let i = index;\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>{{m.name}}</td>\r\n                <td>{{m.genre}}</td>\r\n                <td *ngFor=\"let a of m.actors\">{{a.name}} {{a.lastName}}</td>\r\n                <td><button class=\"btn\" (click)=\"addProjection(m)\"> Add projection</button></td>\r\n                <td><button class=\"btn\" (click)=\"deletePlay(m.id, currentCinema.id)\"> Delete </button></td>\r\n                <td *ngFor=\" let p1 of currentCinema.projekcije\">\r\n                \r\n                    <div *ngFor=\" let p of m.projekcije\">\r\n                    \r\n                        <div *ngIf=\"p.id==p1.id\">\r\n                        \r\n                        <div class=\"card\" [hidden]=\"!hiddenEditing[p.id]\">\r\n                                \r\n                            <p> {{p.date}}</p>\r\n                            <p> {{p.time}}</p>\r\n                            <p> {{p.place}}</p>\r\n                            <p> {{p.price}}</p>\r\n                            <p> {{p.rating}}</p>\r\n                            <p><button class=\"btn\" (click)=\"changeSeatingChart(p.id)\"> Change seating chart </button></p>\r\n                            <p><button class=\"btn\" [hidden]=\"!hiddenEditing[p.id]\" (click)=\"changeProjection(m.id, p.id, currentCinema.id)\"> Change projection</button></p>\r\n                            <p><button class=\"btn\" (click)=\"deleteProjection(m.id, p.id, currentCinema.id)\"> Delete projection</button></p>\r\n                            <p><button class=\"btn\" (click)=\"openAdding(p.id)\"> Add fast reservation ticket</button></p>\r\n                            <form [hidden]=\"hiddenFastRes[p.id]\" (ngSubmit)=\"onSubmit1(price, seat, m.id, p, currentCinema.id)\" #f1=\"ngForm\">\r\n                                <p>New price</p><input type=\"text\" class=\"form-control\" name=\"price\"\r\n                                    id=\"price\" #price required>\r\n                                <p>Seat number</p><input type=\"text\" class=\"form-control\" name=\"seat\"\r\n                                    id=\"seat\" #seat required> \r\n\r\n                                  <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Add</button>\r\n                            </form>\r\n                            \r\n                        </div>\r\n                            <form  [hidden]=\"hiddenEditing[p.id]\" (ngSubmit)=\"onSubmit(f, p.id)\" #f=\"ngForm\" >\r\n                                    <input type=\"text\" class=\"form-control\" name=\"date\"\r\n                                    [(ngModel)] = \"p.date\" required>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"time\"\r\n                                        [(ngModel)] = \"p.time\" required> \r\n                                    <input type=\"text\" class=\"form-control\" name=\"place\"\r\n                                        [(ngModel)] = \"p.place\" required> \r\n                                    <input type=\"text\" class=\"form-control\" name=\"price\"\r\n                                        [(ngModel)] = \"p.price\" required> \r\n                                            \r\n                            <button type=\"submit\"  class=\"btn btn-dark btn-lg\" [disabled] = \"!f.valid\">Save changes</button>\r\n                            </form>\r\n        \r\n                      \r\n                    </div>\r\n                    </div>\r\n                    \r\n                </td>                            \r\n            </tr>\r\n        </table>\r\n         \r\n    </div>\r\n\r\n    <div class=\"card\">\r\n            <div class=\"card-body\">\r\n               \r\n                    <div class=\"col-8\">\r\n                        <h4><b>Tickets for fast reservation: </b></h4>\r\n                    </div>\r\n                </div>\r\n            <div class=\"card-body\">\r\n                        <div class=\"col-8\">\r\n                            <div *ngFor=\"let p of currentCinema.projekcije\">\r\n                            \r\n                           \r\n                            <div *ngFor=\"let t of p.tickets\">\r\n                                    <div *ngIf=\"t.fastRes==true\">\r\n                                            <div *ngIf=\"t.sold==false\">\r\n                                            <p>{{p.id}}</p>\r\n                                            <p>Original price: {{p.price}}</p>\r\n                                            <p><b>New price: {{t.salePrice}}</b> (you will save: {{p.price-t.salePrice}})</p>\r\n                                            <p>Place: {{p.place}}</p>\r\n                                            <p>Time: {{p.time}}</p>\r\n                                            <p>Seat number: {{t.seatNumber}}</p>\r\n\r\n                                            <div *ngFor=\"let m of plays\">\r\n                                                    <div *ngFor=\"let p1 of m.projekcije\">\r\n                                                        <div *ngIf=\"p1.id==p.id\">\r\n                                                            <p>Play: {{m.name}}</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                <button class=\"btn\" (click)=\"reserve(t, t.id, currentCinema.id)\">Reserve</button>\r\n                                                <button class=\"btn\" (click)=\"delete(t, t.id, currentCinema.id)\">Delete</button>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <!-->seating chart<-->\r\n        </div>\r\n    </div>\r\n       \r\n    </div>\r\n\r\n</div>\r\n\r\n</div>\r\n<div [hidden]=\"!changeSeatingChartHidden\">\r\n    <seating-chart \r\n    [currentProjection]=currentProjection\r\n    (selectedSeats)=\"onChangeSelectedSeats($event)\"\r\n    >\r\n\r\n    </seating-chart>\r\n    <button class=\"btn btn-primary\" (click)=\"finishChangingSeats()\">Finish changing seats</button>\r\n</div>\r\n \r\n"

/***/ }),

/***/ "./src/app/components/theatre-component/viewTheatre-component/viewTheatre-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTheatreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__ = __webpack_require__("./src/app/services/theatres-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cinemas_service_service__ = __webpack_require__("./src/app/services/cinemas-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__ = __webpack_require__("./src/app/services/home-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTheatreComponent = (function () {
    function ViewTheatreComponent(theatresService, cinemasService, homeService, router) {
        this.theatresService = theatresService;
        this.cinemasService = cinemasService;
        this.homeService = homeService;
        this.router = router;
        this.changeSeatingChartHidden = false;
        this.plays = [];
        this.hiddenEditing = [];
        this.hiddenFastRes = [];
        this.numberProjections = 20;
    }
    ViewTheatreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addMovie = true;
        this.theatresService.currentth.subscribe(function (data) { return _this.currentCinema = data; });
        this.theatresService.getPlays(this.currentCinema.id).subscribe(function (data) {
            return _this.plays = data;
        });
        this.theatresService.getNotFastProjectionsByTheatreId(this.currentCinema.id).subscribe(function (data) {
            return _this.notFastReservations = data;
        });
        this.theatresService.initBroj.subscribe(function (numberProjections) { return _this.numberProjections = numberProjections; });
        var data = this.currentCinema.projekcije;
        data.forEach(function (p) {
            _this.hiddenEditing[p.id] = true;
            _this.hiddenFastRes[p.id] = true;
        });
    };
    ViewTheatreComponent.prototype.addProjection = function (play) {
        console.log(play.id);
        var cinemaid = this.currentCinema.id;
        this.theatresService.selectPlay(play);
        this.router.navigateByUrl('/addProjectionTheatre');
    };
    ViewTheatreComponent.prototype.deleteProjection = function (playid, projekcijaid, theatreid) {
        var _this = this;
        this.theatresService.deleteProjection(playid, projekcijaid, theatreid).subscribe(function (data) {
            return _this.plays = data;
        });
    };
    ViewTheatreComponent.prototype.changeProjection = function (movieid, projekcijaid, cinemaid) {
        this.hiddenEditing[projekcijaid] = false;
        this.projekcijaId = projekcijaid;
    };
    ViewTheatreComponent.prototype.openAdding = function (projekcijaid) {
        this.hiddenFastRes[projekcijaid] = false;
    };
    ViewTheatreComponent.prototype.onSubmit = function (form, id) {
        this.hiddenEditing[id] = true;
        this.theatresService.sendEdditedProjection(form.value, id)
            .subscribe();
    };
    ViewTheatreComponent.prototype.addToFast = function (theatreid, ticketid, ticket) {
        console.log("****************addto fast");
        this.theatresService.addToFast(theatreid, ticketid, ticket).subscribe();
    };
    ViewTheatreComponent.prototype.reserve = function (ticket, ticketid, cinemaid) {
        console.log("ooooooooljacinemaid");
        this.theatresService.reserveFast(ticket, ticketid).subscribe();
        console.log(this.currentCinema);
        this.router.navigateByUrl('/viewTheatre');
    };
    ViewTheatreComponent.prototype.changeSeatingChart = function (projectionId) {
        var _this = this;
        this.changeSeatingChartHidden = true;
        console.log(this.changeSeatingChartHidden);
        this.cinemasService.getProjectionById(projectionId)
            .subscribe(function (data) { return _this.currentProjection = data; });
    };
    ViewTheatreComponent.prototype.onChangeSelectedSeats = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var seat = array_1[_i];
            this.cinemasService.deleteSeats(this.currentProjection, this.currentProjection.id, seat).subscribe();
        }
    };
    ViewTheatreComponent.prototype.finishChangingSeats = function () {
        this.changeSeatingChartHidden = !this.changeSeatingChartHidden;
    };
    /*  onSubmit1(price: any, seat: any, mid: any, p: any, cid: any){
        console.log(price.value);
        console.log(seat.value);
        this.theatresService.addFastTicket(price.value, seat.value, mid, p, cid).subscribe();
      }

      delete(ticket:any, ticketid: any, cinemaid: any){
 
        this.theatresService.deleteFast(ticket, ticketid).subscribe();
        this.router.navigateByUrl('/viewCinema');

      }*/
    ViewTheatreComponent.prototype.addMovieFunct = function () {
        this.addMovie = false;
    };
    ViewTheatreComponent.prototype.onSubmitAdd = function (form, cinemaid) {
        var _this = this;
        this.addMovie = true;
        console.log(form.value);
        this.theatresService.getPlays(this.currentCinema.id).subscribe(function (data) {
            return _this.plays = data;
        });
        this.homeService.addPlay(form.value, cinemaid).subscribe(function (data) {
            return _this.theatresService.getPlays(_this.currentCinema.id).subscribe(function (data) {
                return _this.plays = data;
            });
        });
    };
    ViewTheatreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'viewTheatre-component',
            template: __webpack_require__("./src/app/components/theatre-component/viewTheatre-component/viewTheatre-component.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_theatres_service_service__["a" /* TheatresService */],
            __WEBPACK_IMPORTED_MODULE_3__services_cinemas_service_service__["a" /* CinemasService */], __WEBPACK_IMPORTED_MODULE_4__services_home_service_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ViewTheatreComponent);
    return ViewTheatreComponent;
}());



/***/ }),

/***/ "./src/app/model/ProjectionUserTicketId.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectionUserTicketId; });
var ProjectionUserTicketId = (function () {
    function ProjectionUserTicketId(projectionId, userId, ticketId) {
        this.projectionId = projectionId;
        this.userId = userId;
        this.ticketId = ticketId;
    }
    return ProjectionUserTicketId;
}());



/***/ }),

/***/ "./src/app/model/bidDTO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidDTO; });
var BidDTO = (function () {
    function BidDTO(item, bidvalue) {
        this.item = item;
        this.bid = bidvalue;
    }
    return BidDTO;
}());



/***/ }),

/***/ "./src/app/model/dto/userDTO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(firstName, lastName, username, phoneNumber, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.city = city;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(obj) {
        this.itemID = obj.itemID;
        this.name = obj.name;
        this.description = obj.description;
        this.currentBid = obj.currentBid;
        this.beginDate = obj.beginDate;
        this.endDate = obj.endDate;
        this.owner = obj.owner;
        this.buyer = obj.buyer;
        this.approved = obj.approved;
        this.sold = obj.sold;
        this.someoneBid = obj.someoneBid;
        this.version = obj.version;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/model/movieReservation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieReservation; });
var MovieReservation = (function () {
    function MovieReservation(projectionId, movieName, date, time, place, price, movieORplayID) {
        this.projectionId = projectionId;
        this.movieName = movieName;
        this.date = date;
        this.time = time;
        this.place = place;
        this.price = price;
        this.movieORplayID = movieORplayID;
    }
    return MovieReservation;
}());



/***/ }),

/***/ "./src/app/model/newitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewItem; });
var NewItem = (function () {
    function NewItem(obj) {
        this.itemID = obj.itemID;
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.beginDate = obj.beginDate;
        this.reserved = obj.reserved;
        this.buyer = obj.buyer;
        this.cinema = obj.cinema;
        this.sold = obj.sold;
        this.theatre = obj.theatre;
    }
    return NewItem;
}());



/***/ }),

/***/ "./src/app/model/userType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserType; });
var UserType;
(function (UserType) {
    UserType[UserType["regular"] = 0] = "regular";
    UserType[UserType["bronze"] = 1] = "bronze";
    UserType[UserType["silver"] = 2] = "silver";
    UserType[UserType["gold"] = 3] = "gold";
})(UserType || (UserType = {}));


/***/ }),

/***/ "./src/app/services/bid-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BidService = (function () {
    function BidService(http, router) {
        this.http = http;
        this.router = router;
    }
    BidService.prototype.sendNewBid = function (bid) {
        var body = JSON.parse(JSON.stringify(bid));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/bid/add', body, { headers: headers });
    };
    BidService.prototype.getAllByItem = function (item) {
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/bid/getallbyitem', body, { headers: headers });
    };
    BidService.prototype.acceptBid = function (bid) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(bid));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/bid/accept', body, { headers: headers }).catch(function (err) {
            alert(err.status + "You are not allowed to accept bids on this item");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    BidService.prototype.getBid = function (item) {
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/bid/getbid', body, { headers: headers });
    };
    BidService.prototype.changeBidValue = function (value) {
        var body = JSON.parse(JSON.stringify(value));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('value', value);
        return this.http.post('http://localhost:8080/bid/changevalue', body, { params: params, headers: headers });
    };
    BidService.prototype.getAllByUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/bid/getallbyuser', { headers: headers });
    };
    BidService.prototype.checkAllBids = function (item) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/bid/checkallbids', body, { headers: headers }).catch(function (err) {
            alert(err.status + "You are not allowed to see bids on this item");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    BidService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BidService);
    return BidService;
}());



/***/ }),

/***/ "./src/app/services/cinemas-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CinemasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CinemasService = (function () {
    function CinemasService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/cinemas/test";
        this.c = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object(new Object()));
        this.currentc = this.c.asObservable();
        this.m = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object(new Object()));
        this.currentm = this.m.asObservable();
        this.cList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Array());
        this.currentcList = this.cList.asObservable();
        this.initBrojprivate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object(new Object()));
        this.initBroj = this.initBrojprivate.asObservable();
    }
    CinemasService.prototype.getCinemas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get("http://localhost:8080/api/home/getCinemas", { headers: headers }).map(function (data) { return data; })
            .catch(function (err) {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    CinemasService.prototype.selectCinema = function (cinema) {
        this.c.next(cinema);
        this.initBrojprivate.next(cinema.projekcije.length);
    };
    CinemasService.prototype.selectMovie = function (movie) {
        this.m.next(movie);
    };
    CinemasService.prototype.selectedList = function (cinemaList) {
        this.cList.next(cinemaList);
    };
    CinemasService.prototype.getMovies = function (cinemaId) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().append('cinema', cinemaId);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getMovies", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    CinemasService.prototype.deleteMovie = function (movieId, cinemaId) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('movieid', movieId);
        params = params.set('cinemaid', cinemaId);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .delete("http://localhost:8080/api/home/deleteMovie", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    CinemasService.prototype.deleteProjection = function (movieid, projekcijaid, cinemaid) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('movieid', movieid);
        params = params.set('projekcijaid', projekcijaid);
        params = params.set('cinemaid', cinemaid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .delete("http://localhost:8080/api/home/deleteProjection", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    CinemasService.prototype.sendEdditedProjection = function (projekcija, id) {
        projekcija.id = id;
        var body = JSON.parse(JSON.stringify(projekcija));
        console.log("sendeditedprojection" + body.price);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/editProjection', body, {
            headers: headers
        }).map(function (data) { return data; });
    };
    CinemasService.prototype.addProjection = function (projekcija, movie, cinema) {
        var body = JSON.parse(JSON.stringify(projekcija));
        var movieid = movie.id;
        var cinemaid = cinema.id;
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('movieid', movieid);
        params = params.set('cinemaid', cinemaid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addProjection', body, {
            params: params,
            headers: headers
        });
    };
    CinemasService.prototype.getProjectionById = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('projectionId', id.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getProjectionById", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    CinemasService.prototype.getNotFastProjectionsByCinemaId = function (cinemaid) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('cinemaid', cinemaid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getFastProjectionTicketsCinema", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    CinemasService.prototype.addToFast = function (cinemaid, ticketid, ticket) {
        ticket.fastRes = true;
        var body = JSON.parse(JSON.stringify(ticket));
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('cinemaid', cinemaid);
        params = params.set('ticketid', ticketid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addProjectionToFast', body, {
            params: params,
            headers: headers
        });
    };
    CinemasService.prototype.makeCinemaReservation = function (movieReservation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .post('http://localhost:8080/api/home/makeCinemaReservation', movieReservation, { headers: headers })
            .catch(function (err) {
            alert(err.status + "GDE SI POSAO? TRANSACTINAL SAM JA I TO SVAKO ZNA!");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    CinemasService.prototype.reserveFast = function (ticket, ticketid, projectionId) {
        ticket.sold = true;
        var body = JSON.parse(JSON.stringify(ticket));
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('ticketid', ticketid);
        params = params.set('projectionId', projectionId.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/reserveFast', body, {
            params: params,
            headers: headers
        })
            .catch(function (err) {
            alert(err.status + "Transactional error. Somebody else reserved before you!");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    CinemasService.prototype.deleteSeats = function (projection, projectionid, seat) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('seat', seat);
        console.log(seat);
        var body = JSON.parse(JSON.stringify(projection));
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .post("http://localhost:8080/api/home/deleteSeats", body, { params: params, headers: headers });
    };
    CinemasService.prototype.addFastTicket = function (price, seat, mid, p, cid) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('seat', seat);
        params = params.set('cid', cid);
        params = params.set('mid', mid);
        params = params.set('price', price);
        var body = JSON.parse(JSON.stringify(p));
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .post("http://localhost:8080/api/home/addFastTicket", body, { params: params, headers: headers });
    };
    CinemasService.prototype.deleteFast = function (ticket, ticketid) {
        ticket.sold = true;
        var body = JSON.parse(JSON.stringify(ticket));
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('ticketid', ticketid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/deleteFast', body, {
            params: params,
            headers: headers
        });
    };
    CinemasService.prototype.getCinema = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().append('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/api/home/getcinema', { headers: headers, params: params });
    };
    CinemasService.prototype.searchCinemas = function (cinema) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('cinema', cinema.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/searchCinemas", { params: params, headers: headers });
    };
    CinemasService.prototype.getProjectionDate = function (movieId) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('movieId', movieId.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getMovieDates", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    CinemasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], CinemasService);
    return CinemasService;
}());



/***/ }),

/***/ "./src/app/services/data-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_item__ = __webpack_require__("./src/app/model/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_newitem__ = __webpack_require__("./src/app/model/newitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);




var DataService = (function () {
    function DataService() {
        this.edditedItem = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_1__model_item__["a" /* Item */](new Object()));
        this.currentEdditedItem = this.edditedItem.asObservable();
        this.preownedItemListForShow = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Array());
        this.currentPreownedItemListForShow = this.preownedItemListForShow.asObservable();
        this.newItemListForShow = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Array());
        this.currentNewItemListForShow = this.newItemListForShow.asObservable();
        this.unapproveditemListForShow = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Array());
        this.currentUnapprovedItemListForShow = this.unapproveditemListForShow.asObservable();
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_1__model_item__["a" /* Item */](new Object()));
        this.currentSelectedItem = this.selectedItem.asObservable();
        this.selectedNewItem = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_2__model_newitem__["a" /* NewItem */](new Object()));
        this.currentSelectedNewItem = this.selectedNewItem.asObservable();
        this.preowned = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentTypeOfItemForShow = this.preowned;
        this.address = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentAddress = this.address;
        this.loginJWT = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentloginJWT = this.loginJWT;
        this.movieReservation = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentMovieReservation = this.movieReservation.asObservable();
    }
    DataService.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    DataService.prototype.changeEdditedItem = function (item) {
        this.edditedItem.next(item);
    };
    DataService.prototype.changePreownedItemListForShow = function (itemListForShow) {
        this.preownedItemListForShow.next(itemListForShow);
    };
    DataService.prototype.changeNewItemListForShow = function (itemListForShow) {
        this.newItemListForShow.next(itemListForShow);
    };
    DataService.prototype.changeUnapprovedItemListForShow = function (unapprovedItemListForShow) {
        this.unapproveditemListForShow.next(unapprovedItemListForShow);
    };
    DataService.prototype.changeSelectedItem = function (item) {
        this.selectedItem.next(item);
    };
    DataService.prototype.changeSelectedNewItem = function (item) {
        this.selectedNewItem.next(item);
    };
    DataService.prototype.changeTypeOfItemForShow = function (preowned) {
        this.preowned.next(preowned);
    };
    DataService.prototype.changeAddress = function (address) {
        this.address.next(address);
    };
    DataService.prototype.changeLoginJWT = function (jwt) {
        this.loginJWT.next(jwt);
    };
    DataService.prototype.changeMovieReservation = function (movieRes) {
        this.movieReservation.next(movieRes);
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/fanzone-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanzoneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FanzoneService = (function () {
    function FanzoneService(http, router) {
        this.http = http;
        this.router = router;
    }
    FanzoneService.prototype.getApprovedItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get("http://localhost:8080/fanzone/", { headers: headers });
    };
    FanzoneService.prototype.getUnApprovedItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get("http://localhost:8080/fanzone/unapproved", { headers: headers });
    };
    FanzoneService.prototype.getNewItems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get("http://localhost:8080/fanzone/new", { headers: headers });
    };
    FanzoneService.prototype.sendNewItem = function (item) {
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/fanzone/additem', body, { headers: headers });
    };
    FanzoneService.prototype.sendNewNewItem = function (item) {
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/fanzone/addofficialitem', body, { headers: headers });
    };
    FanzoneService.prototype.checkIfOk = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/fanzone/checkIfPendingAvialable', { headers: headers }).catch(function (err) {
            alert(err.status + "You are not allowed to see pending items");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    FanzoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FanzoneService);
    return FanzoneService;
}());



/***/ }),

/***/ "./src/app/services/home-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/home/test";
    }
    //  getTheatres(){
    //      return this.http.get("http://localhost:8080/api/home/getTheatres");
    //  }
    HomeService.prototype.getCinemas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getCinemas", { headers: headers })
            .map(function (data) { return data; })
            .catch(function (err) {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    HomeService.prototype.sendEdditedCinema = function (cinema) {
        var body = JSON.parse(JSON.stringify(cinema));
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        console.log("sendeditedcinema" + body.name);
        return this.http.post('http://localhost:8080/api/home/editC', body, {
            headers: headers
        });
    };
    HomeService.prototype.sendEdditedTheatre = function (theatre) {
        var body = JSON.parse(JSON.stringify(theatre));
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        console.log("sendeditedtheatre" + body.name);
        return this.http.post('http://localhost:8080/api/home/editTh', body, {
            headers: headers
        });
    };
    HomeService.prototype.addTheatre = function (theatre) {
        var body = JSON.stringify(theatre);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addtheatre', body, {
            headers: headers
        }).catch(function (err) {
            alert("Unauthorized");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    HomeService.prototype.addCinema = function (cinema) {
        var body = JSON.stringify(cinema);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addcinema', body, {
            headers: headers
        }).catch(function (err) {
            alert("Unauthorized");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    HomeService.prototype.getProjectionSeats = function (projectionId, movieORplayId) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('projectionId', projectionId);
        params = params.set('movieORplayId', movieORplayId);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getProjectionSeats", { headers: headers, params: params })
            .map(function (data) { return data; });
    };
    HomeService.prototype.reserveSeat = function (seatTaken) {
        var body = JSON.parse(JSON.stringify(seatTaken));
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/reserveSeat', body, {
            headers: headers
        });
    };
    HomeService.prototype.addMovie = function (movie, cinemaid) {
        var body = JSON.stringify(movie);
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('cinemaid', cinemaid);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addmovie', body, {
            headers: headers, params: params
        }).catch(function (err) {
            alert("Unauthorized");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    HomeService.prototype.addPlay = function (movie, cinemaid) {
        var body = JSON.stringify(movie);
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('theatreid', cinemaid);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addplay', body, {
            headers: headers, params: params
        }).catch(function (err) {
            alert("Unauthorized");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/item-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_bidDTO__ = __webpack_require__("./src/app/model/bidDTO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemService = (function () {
    function ItemService(http, router) {
        this.http = http;
        this.router = router;
    }
    ItemService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/fanzone/deleteitem', {
            params: params, headers: headers
        }).catch(function (err) {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    ItemService.prototype.approveItem = function (item) {
        var body = JSON.parse(JSON.stringify(item));
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        console.log("USAO U APPROVE ITEM");
        return this.http.post('http://localhost:8080/item/approve', body, { headers: headers })
            .catch(function (err) {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    ItemService.prototype.getItem = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/fanzone/getitem', {
            params: params, headers: headers
        });
    };
    ItemService.prototype.sendEdditedItem = function (item) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/item/edit', body, { headers: headers })
            .catch(function (err) {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
        ;
    };
    ItemService.prototype.changeCurrentBid = function (bid, id, version) {
        var body = JSON.stringify(new __WEBPACK_IMPORTED_MODULE_3__model_bidDTO__["a" /* BidDTO */](id, bid));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/item/bid', body, { headers: headers });
    };
    ItemService.prototype.checkIfOk = function (item) {
        var _this = this;
        var body = JSON.stringify(item);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/item/checkifok', body, { headers: headers }).catch(function (err) {
            alert(err.status + "You are not allowed to edit this item");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/login-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/login/test";
    }
    LoginService.prototype.getLogin = function (password, username) {
        var vraceno = "";
        var user = {
            "username": username,
            "password": password
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post("http://localhost:8080/api/login/login", user, { headers: headers })
            .catch(function (err) {
            alert(err.status + "Unauthorized.");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    LoginService.prototype.submitRegistration = function (user) {
        // if(localStorage.getItem('token') == null)
        // return new Observable<any>();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var json = JSON.parse(JSON.stringify(user));
        return this.http.post("http://localhost:8080/api/login/registrationMessage", json, { headers: headers });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/newitem-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewItemService = (function () {
    function NewItemService(http, router) {
        this.http = http;
        this.router = router;
    }
    NewItemService.prototype.deleteItem = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.delete('http://localhost:8080/fanzone/deleteofficialitem', {
            params: params, headers: headers
        }).subscribe(function (data) { return console.log(data); });
    };
    NewItemService.prototype.getItem = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/fanzone/getofficialitem', {
            params: params, headers: headers
        });
    };
    NewItemService.prototype.sendEdditedItem = function (item) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/officialitem/edit', body, {
            headers: headers
        }).catch(function (err) {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    NewItemService.prototype.reserveItem = function (item) {
        var _this = this;
        var body = JSON.parse(JSON.stringify(item));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/officialitem/reserve', body, {
            headers: headers
        }).catch(function (err) {
            alert(err.status + "This item has changed meanwhile.Please refresh your page");
            _this.router.navigateByUrl('/fanzone');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    NewItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], NewItemService);
    return NewItemService;
}());



/***/ }),

/***/ "./src/app/services/notification-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.getAllNotifications = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/api/profile/getnotifications', { headers: headers });
    };
    NotificationService.prototype.readNotification = function (id) {
        var body = JSON.stringify(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().append('id', id);
        return this.http.post('http://localhost:8080/api/profile/readnotification', body, { headers: headers, params: params });
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/profile-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'X-Auth-Token': localStorage.getItem('token')
    }),
};
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/profile/";
    }
    ProfileService.prototype.getLoggedUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get(this.url, { headers: headers }).map(function (data) { return data; });
    };
    ProfileService.prototype.editUser = function (user) {
        console.log("ispis iz profile servisa token : \n" + localStorage.getItem('token'));
        console.log(httpOptions);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post(this.url + "editUser", user, { headers: headers });
    };
    ProfileService.prototype.getFriends = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "getFriends", { headers: headers })
            .map(function (data) { return data; });
    };
    ProfileService.prototype.removeFriend = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().append('friendId', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "removeFriend", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    ProfileService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "getAllUsers", { headers: headers })
            .map(function (data) { return data; });
    };
    ProfileService.prototype.getAllUsers2 = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "getallusers", { headers: headers });
    };
    ProfileService.prototype.sendFriendRequest = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .post(this.url + "friendRequest", username, { headers: headers })
            .map(function (data) { return data; });
        ;
    };
    ProfileService.prototype.getFriendRequests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "getFriendRequests", { headers: headers })
            .map(function (data) { return data; });
    };
    ProfileService.prototype.acceptFriend = function (friendId) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().append('friendId', friendId);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "acceptFriend", { params: params, headers: headers }).map(function (data) { return data; });
    };
    ProfileService.prototype.declineFriend = function (friendId) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().append('friendId', friendId);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "declineFriend", { params: params, headers: headers }).map(function (data) { return data; });
    };
    ProfileService.prototype.changePassword = function (password, passwordRepeat) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().append('password', password);
        params = params.set('passwordRepeat', passwordRepeat);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "changePassword", { params: params, headers: headers })
            .catch(function (err) {
            alert(err.status + "Passwords don`t match error!");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ProfileService.prototype.searchUsers = function (searchName, searchLastName) {
        console.log(searchLastName, searchName);
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('searchName', searchName);
        params = params.set('searchLastName', searchLastName);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "searchUsers", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    ProfileService.prototype.addRole = function (user, role) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().append('role', role);
        return this.http.post('http://localhost:8080/api/profile/addrole', body, { params: params, headers: headers }).catch(function (err) {
            alert(err.status + "Unauthorized");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ProfileService.prototype.acceptORdeclineInvitation = function (projectionUserTicketId, accept) {
        var body = JSON.parse(JSON.stringify(projectionUserTicketId));
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().append('accept', accept);
        console.log("acceptORdecline" + body.projectionId + " ispis iz ");
        return this.http.post('http://localhost:8080/api/profile/acceptORdeclineInvitation', body, {
            headers: headers, params: params
        });
    };
    ProfileService.prototype.getReservations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get(this.url + "getReservations", { headers: headers })
            .map(function (data) { return data; });
    };
    ProfileService.prototype.cancelProjectionReservation = function (projectionId, seatNumber) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('projectionId', projectionId);
        params = params.set('seatNumber', seatNumber);
        return this.http
            .get(this.url + "cancelProjectionReservation", { headers: headers, params: params })
            .catch(function (err) {
            alert(err.status + "You can't delete 30 minutes before the projection!");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ProfileService.prototype.ratePlay = function (id, ratevalue, p) {
        var body = JSON.stringify(p);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('ratevalue', ratevalue);
        return this.http.post('http://localhost:8080//api/profile/ratePlay', body, { params: params, headers: headers });
    };
    ProfileService.prototype.rateAmb = function (id, ratevalue, p) {
        var body = JSON.stringify(p);
        console.log("usli" + ratevalue);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpParams */]().set('ratevalue', ratevalue);
        return this.http.post('http://localhost:8080//api/profile/rateAmb', body, { params: params, headers: headers });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/theatres-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheatresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TheatresService = (function () {
    function TheatresService(http) {
        this.http = http;
        this.url = "http://localhost:8080/api/theatres/test";
        this.th = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object(new Object()));
        this.currentth = this.th.asObservable();
        this.p = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object(new Object()));
        this.currentp = this.p.asObservable();
        this.initBrojprivate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new Object(new Object()));
        this.initBroj = this.initBrojprivate.asObservable();
    }
    TheatresService.prototype.getTheatres = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get("http://localhost:8080/api/home/getTheatres", { headers: headers }).map(function (data) { return data; })
            .catch(function (err) {
            alert(err.status + " " + err.error.error + " \n" + err.error.message);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
        ;
    };
    TheatresService.prototype.selectTheatre = function (theatre) {
        this.th.next(theatre);
        this.initBrojprivate.next(theatre.projekcije.length);
    };
    TheatresService.prototype.searchTheatres = function (theatre) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('theatre', theatre.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/searchTheatres", { params: params, headers: headers });
    };
    TheatresService.prototype.getPlays = function (theatreId) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('theatreId', theatreId.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getPlays", { params: params, headers: headers }).map(function (data) { return data; });
    };
    TheatresService.prototype.getProjectionDate = function (playId) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('playId', playId.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/api/home/getPlayDates", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    TheatresService.prototype.getNotFastProjectionsByTheatreId = function (theatreid) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('theatreid', theatreid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .get("http://localhost:8080/theatres/home/getFastProjectionTicketsTheatre", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    TheatresService.prototype.selectPlay = function (play) {
        console.log(play);
        this.p.next(play);
    };
    TheatresService.prototype.makeTheatreReservation = function (movieReservation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .post('http://localhost:8080/api/home/makeTheatreReservation', movieReservation, { headers: headers })
            .catch(function (err) {
            alert(err.status + "GDE SI POSAO? TRANSACTINAL SAM JA I TO SVAKO ZNA!");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    TheatresService.prototype.sendFriendTheatreInvitation = function (movieReservation, friendId) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('friendId', friendId.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .post('http://localhost:8080/api/home/sendFriendTheatreInvitation', movieReservation, { headers: headers, params: params });
    };
    TheatresService.prototype.getTheatre = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().append('id', id);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.get('http://localhost:8080/api/home/gettheatre', { headers: headers, params: params });
    };
    TheatresService.prototype.deleteProjection = function (movieid, projekcijaid, theatreid) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('movieid', movieid);
        params = params.set('projekcijaid', projekcijaid);
        params = params.set('theatreid', theatreid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http
            .delete("http://localhost:8080/theatres/home/deleteProjection", { params: params, headers: headers })
            .map(function (data) { return data; });
    };
    TheatresService.prototype.sendEdditedProjection = function (projekcija, id) {
        projekcija.id = id;
        var body = JSON.parse(JSON.stringify(projekcija));
        console.log("sendeditedprojection" + body.price);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/editProjection', body, {
            headers: headers
        }).map(function (data) { return data; });
    };
    TheatresService.prototype.addToFast = function (theatreid, ticketid, ticket) {
        ticket.fastRes = true;
        var body = JSON.parse(JSON.stringify(ticket));
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('theatreid', theatreid);
        params = params.set('ticketid', ticketid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/theatres/home/addProjectionToFast', body, {
            params: params,
            headers: headers
        });
    };
    TheatresService.prototype.addProjection = function (projekcija, movie, cinema) {
        console.log("oujoihiog");
        var body = JSON.parse(JSON.stringify(projekcija));
        var playid = movie.id;
        var theatreid = cinema.id;
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('playid', playid);
        params = params.set('theatreid', theatreid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/api/home/addProjectionTheatre', body, {
            params: params,
            headers: headers
        });
    };
    TheatresService.prototype.reserveFast = function (ticket, ticketid) {
        ticket.sold = true;
        var body = JSON.parse(JSON.stringify(ticket));
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpParams */]().set('ticketid', ticketid);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'X-Auth-Token': localStorage.getItem('token')
        });
        return this.http.post('http://localhost:8080/theatres/home/reserveFast', body, {
            params: params,
            headers: headers
        });
    };
    TheatresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], TheatresService);
    return TheatresService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map