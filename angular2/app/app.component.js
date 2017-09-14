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
                    this._width = 300;
                    this._width_string = this._width + 'px';
                    var items = [
                        { body: '<p>Blaubären!</p>' },
                        { body: '<p>Grünbären!</p>' },
                        { body: '<p>Blaubären!</p>' },
                        { body: '<p>Grünbären!</p>' },
                        { body: '<p>Orangebären!</p>' },
                        { body: '<p>Lilabären!</p>' },
                        { body: '<p>Orangebären!</p>' },
                        { body: '<p>Lilabären!</p>' },
                        { body: '<p>Goldbären!</p>' },
                        { body: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122954014&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>' },
                        { body: '<p>Goldbären!</p>' },
                        { body: '<h3>Blaubären</h3><div>Das ist die erste Karte. Oder die letzte. Weiss nicht.</div>' }];
                    items.forEach(function (item) { return _this.carouselService.addItem(item); });
                }
                AppComponent.prototype.next = function () {
                    this._carousel.next();
                };
                AppComponent.prototype.prev = function () {
                    this._carousel.prev();
                };
                AppComponent.prototype.goto = function (nr) {
                    this._carousel.goto(parseInt(nr, 10));
                };
                __decorate([
                    core_1.ViewChild('carousel'), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "_carousel", void 0);
                __decorate([
                    core_1.ViewChild('items'), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "_items", void 0);
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