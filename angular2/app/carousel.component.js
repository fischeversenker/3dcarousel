System.register(['@angular/core', './carousel-item.component'], function(exports_1, context_1) {
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
    var core_1, carousel_item_component_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_item_component_1_1) {
                carousel_item_component_1 = carousel_item_component_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                function CarouselComponent(el) {
                    this.el = el;
                    this._current_index = 0;
                }
                CarouselComponent.prototype.ngOnInit = function () {
                    var length = this._items.length;
                    this._inc_step = 360 / length;
                    this._radius = (this._item_width / 1.9) / Math.tan(Math.PI / length);
                    this.set_child_radii();
                };
                CarouselComponent.prototype.ngOnChanges = function (changes) {
                };
                CarouselComponent.prototype.set_child_radii = function () {
                    var _this = this;
                    if (!this._items) {
                        return false;
                    }
                    this._items.forEach(function (item, index) {
                        var radius = index * _this._inc_step;
                        // item.setRadius(radius)
                    });
                };
                CarouselComponent.prototype.next = function () {
                    this._current_index++;
                    this.update();
                };
                CarouselComponent.prototype.prev = function () {
                    this._current_index--;
                    this.update();
                };
                CarouselComponent.prototype.update = function () {
                    // update amount of component rotation based on index and inc_step
                };
                __decorate([
                    core_1.Input('item-width'), 
                    __metadata('design:type', Number)
                ], CarouselComponent.prototype, "_item_width", void 0);
                __decorate([
                    core_1.Input('items'), 
                    __metadata('design:type', Array)
                ], CarouselComponent.prototype, "_items", void 0);
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'carousel',
                        templateUrl: 'app/carousel.component.html',
                        styleUrls: ['app/carousel.component.css'],
                        directives: [carousel_item_component_1.CarouselItem]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map