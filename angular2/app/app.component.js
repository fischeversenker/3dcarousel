System.register(['angular2/core', './carousel/carousel.component', './shared/carousel-service.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, carousel_component_1, carousel_service_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (carousel_service_service_1_1) {
                carousel_service_service_1 = carousel_service_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(carouselService) {
                    var _this = this;
                    this.carouselService = carouselService;
                    this._width = 600;
                    this._width_string = this._width + 'px';
                    var items = [
                        { title: 'Item0', body: '<p>Blaubären!</p>' },
                        { title: 'Item1', body: '<p>Blaubären!</p>' },
                        { title: 'Item2', body: '<p>Graubären!</p>' },
                        { title: 'Item3', body: '<p>Grünbären!</p>' },
                        { title: 'Item4', body: '<p>Orangebären!</p>' },
                        { title: 'Item5', body: '<p>Lilabären!</p>' },
                        { title: 'Item6', body: '<p>Lilabären!</p>' },
                        { title: 'Item7', body: '<p>Lilabären!</p>' },
                        { title: 'Item8', body: '<p>Lilabären!</p>' },
                        { title: 'Item9', body: '<p>Blingbong</p><p>Blongbing!</p>' }];
                    items.forEach(function (item) { return _this.carouselService.addItem(item); });
                }
                AppComponent.prototype.next = function () {
                    this._carousel.next();
                };
                AppComponent.prototype.prev = function () {
                    this._carousel.prev();
                };
                __decorate([
                    core_1.ViewChild('carousel'), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "_carousel", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [carousel_component_1.CarouselComponent],
                        providers: [carousel_service_service_1.CarouselService]
                    }), 
                    __metadata('design:paramtypes', [carousel_service_service_1.CarouselService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map