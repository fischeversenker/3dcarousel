System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CarouselItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarouselItem = (function () {
                function CarouselItem() {
                    this._radius = 0;
                    this._angle = 0;
                    this._selected = false;
                    this._transform_string = '';
                    this._width_string = '';
                }
                CarouselItem.prototype.ngOnInit = function () {
                    this._transform_string = this.buildTransformString(this._radius, this._angle);
                    this._width_string = this._width + 'px';
                };
                CarouselItem.prototype.select = function () {
                    this._selected = true;
                };
                CarouselItem.prototype.deselect = function () {
                    this._selected = false;
                };
                CarouselItem.prototype.buildTransformString = function (radius, angle) {
                    if (radius === void 0) { radius = 0; }
                    if (angle === void 0) { angle = 0; }
                    return 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)';
                };
                __decorate([
                    core_1.Input('title'), 
                    __metadata('design:type', String)
                ], CarouselItem.prototype, "_title", void 0);
                __decorate([
                    core_1.Input('body'), 
                    __metadata('design:type', String)
                ], CarouselItem.prototype, "_body", void 0);
                __decorate([
                    core_1.Input('radius'), 
                    __metadata('design:type', Number)
                ], CarouselItem.prototype, "_radius", void 0);
                __decorate([
                    core_1.Input('angle'), 
                    __metadata('design:type', Number)
                ], CarouselItem.prototype, "_angle", void 0);
                __decorate([
                    core_1.Input('width'), 
                    __metadata('design:type', Number)
                ], CarouselItem.prototype, "_width", void 0);
                CarouselItem = __decorate([
                    core_1.Component({
                        selector: 'carousel-item',
                        templateUrl: 'app/carousel-item/carousel-item.component.html',
                        styleUrls: ['app/carousel-item/carousel-item.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarouselItem);
                return CarouselItem;
            }());
            exports_1("CarouselItem", CarouselItem);
        }
    }
});
//# sourceMappingURL=carousel-item.component.js.map