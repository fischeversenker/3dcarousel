System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CarouselItemObject, CarouselService;
    return {
        setters:[],
        execute: function() {
            CarouselItemObject = (function () {
                function CarouselItemObject(title, body) {
                    this.title = title;
                    this.body = body;
                }
                ;
                return CarouselItemObject;
            }());
            exports_1("CarouselItemObject", CarouselItemObject);
            CarouselService = (function () {
                function CarouselService() {
                    this._carousel_items = [];
                }
                CarouselService.prototype.getCarouselItems = function (limit) {
                    if (limit === void 0) { limit = this._carousel_items.length; }
                    var res = this._carousel_items.slice(0, limit);
                    return res;
                };
                CarouselService.prototype.addItem = function (item) {
                    this._carousel_items.push(item);
                };
                CarouselService.prototype.angleForIndex = function (index, count) {
                    var step = 360 / count;
                    if (index < 0 || index >= count) {
                        throw (Error());
                    }
                    return index * step;
                };
                CarouselService.prototype.buildTransformString = function (radius, angle, reverse) {
                    if (reverse === void 0) { reverse = false; }
                    var string;
                    if (reverse) {
                        string = 'translateZ(' + radius + 'px) rotateY(' + angle + 'deg)';
                    }
                    else {
                        string = 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)';
                    }
                    return string;
                };
                return CarouselService;
            }());
            exports_1("CarouselService", CarouselService);
        }
    }
});
//# sourceMappingURL=carousel-service.service.js.map