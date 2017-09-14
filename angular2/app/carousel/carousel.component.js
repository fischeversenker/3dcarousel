System.register(['angular2/core', '../carousel-item/carousel-item.component', '../shared/carousel-service.service'], function(exports_1, context_1) {
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
    var core_1, carousel_item_component_1, carousel_service_service_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_item_component_1_1) {
                carousel_item_component_1 = carousel_item_component_1_1;
            },
            function (carousel_service_service_1_1) {
                carousel_service_service_1 = carousel_service_service_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                function CarouselComponent(el, carouselService) {
                    this.el = el;
                    this.carouselService = carouselService;
                }
                CarouselComponent.prototype.keyboardInput = function (event) {
                    switch (event.keyCode) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                    }
                };
                CarouselComponent.prototype.ngOnInit = function () {
                    this._raw_items = this.carouselService.getCarouselItems();
                    var count = this._raw_items.length;
                    this.el.nativeElement.style.perspective = (count * 100) + "px";
                    this._inc_step = 360 / count;
                    this._radius = (this._item_width / 1.9) / Math.tan(Math.PI / count);
                    this._current_index = 0;
                };
                CarouselComponent.prototype.ngAfterViewInit = function () {
                    setTimeout(this.update.bind(this), 0);
                };
                CarouselComponent.prototype.markSelected = function (index) {
                    index = this.cleanedIndex(index);
                    this._items.toArray().forEach(function (inst, i) {
                        if (i === index) {
                            inst.select();
                        }
                        else {
                            inst.deselect();
                        }
                    });
                };
                CarouselComponent.prototype.goto = function (i) {
                    var ci = this.cleanedIndex(this._current_index);
                    var count = this._raw_items.length;
                    var halfDistance = Math.floor(count / 2);
                    var inc = i - ci;
                    if (inc > halfDistance) {
                        inc = inc - count;
                    }
                    else if (inc < -halfDistance) {
                        inc = count + inc;
                    }
                    this._current_index += inc;
                    this.update();
                };
                CarouselComponent.prototype.next = function () {
                    this._current_index++;
                    this.update();
                };
                CarouselComponent.prototype.prev = function () {
                    this._current_index--;
                    this.update();
                };
                CarouselComponent.prototype.cleanedIndex = function (index, lower, upper, count) {
                    if (lower === void 0) { lower = 0; }
                    if (upper === void 0) { upper = this._items.length; }
                    if (count === void 0) { count = this._items.length; }
                    while (index < lower) {
                        index += count;
                    }
                    while (index >= upper) {
                        index -= count;
                    }
                    return index;
                };
                CarouselComponent.prototype.update = function () {
                    this.markSelected(this._current_index);
                    this._transform_string = this.carouselService.buildTransformString(-this._radius, -this._inc_step * this._current_index, true);
                };
                CarouselComponent.prototype.angleForIndex = function (index) {
                    return this.carouselService.angleForIndex(index, this._raw_items.length);
                };
                __decorate([
                    core_1.Input('item-width'), 
                    __metadata('design:type', Number)
                ], CarouselComponent.prototype, "_item_width", void 0);
                __decorate([
                    core_1.ViewChildren(carousel_item_component_1.CarouselItem), 
                    __metadata('design:type', core_1.QueryList)
                ], CarouselComponent.prototype, "_items", void 0);
                __decorate([
                    core_1.HostListener('window:keydown', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [KeyboardEvent]), 
                    __metadata('design:returntype', void 0)
                ], CarouselComponent.prototype, "keyboardInput", null);
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'carousel',
                        templateUrl: 'app/carousel/carousel.component.html',
                        styleUrls: ['app/carousel/carousel.component.css'],
                        directives: [carousel_item_component_1.CarouselItem]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, carousel_service_service_1.CarouselService])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map