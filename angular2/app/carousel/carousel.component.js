System.register(['angular2/core', '../carousel-item/carousel-item.component'], function(exports_1, context_1) {
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
                function CarouselComponent(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this._current_index = 0;
                    this._transform_string = '';
                }
                CarouselComponent.prototype.ngOnInit = function () {
                    var length = this._raw_items.length;
                    this._inc_step = 360 / length;
                    this._radius = Math.ceil((this._item_width / 1.9) / Math.tan(Math.PI / length));
                    this._transform_string = this.buildTransformString(-this._radius, 0);
                    this.update();
                };
                CarouselComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    setTimeout(function () { return _this.goto(0); }, 20);
                };
                CarouselComponent.prototype.select = function (index) {
                    this._current_index = index;
                    while (index < 0) {
                        index += this._items.length;
                    }
                    while (index >= this._items.length) {
                        index -= this._items.length;
                    }
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
                    // logic for direction of rotation
                    // current_index = -13, ci % length = -1, made positive: ci + length = 5
                    this.select(i);
                    this.update();
                };
                CarouselComponent.prototype.next = function () {
                    this.select(this._current_index + 1);
                    this.update();
                };
                CarouselComponent.prototype.prev = function () {
                    this.select(this._current_index - 1);
                    this.update();
                };
                CarouselComponent.prototype.update = function () {
                    this._transform_string = this.buildTransformString(-this._radius, -this._inc_step * this._current_index);
                };
                CarouselComponent.prototype.angleForIndex = function (index) {
                    if (index < 0 || index >= this._raw_items.length) {
                        throw (Error());
                    }
                    return index * this._inc_step;
                };
                CarouselComponent.prototype.buildTransformString = function (radius, angle) {
                    return 'translateZ(' + radius + 'px) rotateY(' + angle + 'deg)';
                };
                __decorate([
                    core_1.Input('item-width'), 
                    __metadata('design:type', Number)
                ], CarouselComponent.prototype, "_item_width", void 0);
                __decorate([
                    core_1.Input('items'), 
                    __metadata('design:type', Array)
                ], CarouselComponent.prototype, "_raw_items", void 0);
                __decorate([
                    core_1.ViewChildren(carousel_item_component_1.CarouselItem), 
                    __metadata('design:type', core_1.QueryList)
                ], CarouselComponent.prototype, "_items", void 0);
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'carousel',
                        templateUrl: 'app/carousel/carousel.component.html',
                        styleUrls: ['app/carousel/carousel.component.css'],
                        directives: [carousel_item_component_1.CarouselItem]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map