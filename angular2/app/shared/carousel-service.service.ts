export class CarouselItemObject {
    constructor(public body: string) { };
}

export class CarouselService {

    private _carousel_items: CarouselItemObject[];
    private opts: Object;

    constructor() {
        this._carousel_items = [];
        this.opts = {
            radiusOnSelect: false
        };
    }

    public getCarouselItems(limit: number = this._carousel_items.length) {
        let res = this._carousel_items.slice(0, limit);
        return res;
    }

    public addItem(item: CarouselItemObject) {
        this._carousel_items.push(item);
    }

    public angleForIndex(index: number, count: number) {
        let step: number = 360 / count;
        if (index < 0 || index >= count) {
            throw(Error());
        }
        return index * step;
    }

    public buildTransformString(radius: number, angle: number, reverse: boolean = false) {
        let string: string;
        if (reverse) {
            string = 'translateZ(' + radius + 'px) rotateY(' + angle + 'deg)';
        } else {
            string = 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)';
        }
        return string;
    }

    public options() {
        let self = this;
        return {
            radiusOnSelect: function() {
                return self.opts.radiusOnSelect;
            }
        };
    }
}