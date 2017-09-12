import {Component, ElementRef, Renderer, Input, OnInit, OnChanges, QueryList, ViewChildren} from 'angular2/core';
import {CarouselItem} from '../carousel-item/carousel-item.component';

@Component({
    selector: 'carousel',
    templateUrl: 'app/carousel/carousel.component.html',
    styleUrls: ['app/carousel/carousel.component.css'],
    directives: [CarouselItem]
})
export class CarouselComponent {

    _current_index = 0;
    _inc_step: number;
    _radius: number;
    @Input('item-width')
    _item_width: number;
    
    @Input('items')
    _raw_items: Object[];

    @ViewChildren(CarouselItem)
    _items: QueryList<CarouselItem>

    _transform_string: string = '';

    constructor(private el: ElementRef, public renderer: Renderer) { }
    
    ngOnInit() {
        let length = this._raw_items.length;

        this._inc_step = 360 / length;
        this._radius = Math.ceil((this._item_width / 1.9) / Math.tan(Math.PI / length));
        this._transform_string = this.buildTransformString(-this._radius, 0);
        this.update();
    }
    
    ngAfterViewInit() {
        setTimeout(() => this.goto(0), 20);
    }
    
    private select(index) {
        this._current_index = index;
        while (index < 0) {
            index += this._items.length;
        }
        while (index >= this._items.length) {
            index -= this._items.length;
        }
        this._items.toArray().forEach(function(inst, i) {
            if (i === index) {
                inst.select();
            } else {
                inst.deselect();
            }
        });
    }

    goto(i: number) {
        // logic for direction of rotation
        // current_index = -13, ci % length = -1, made positive: ci + length = 5
        this.select(i);
        this.update();
    }

    next() {
        this.select(this._current_index+1);
        this.update();
    }

    prev() {
        this.select(this._current_index-1);
        this.update();
    }

    private update() {
        this._transform_string = this.buildTransformString(-this._radius, -this._inc_step * this._current_index);
    }

    angleForIndex(index: number) {
        if (index < 0 || index >= this._raw_items.length) {
            throw(Error());
        }
        return index * this._inc_step;
    }

    private buildTransformString(radius: number, angle: number) {
        return 'translateZ(' + radius + 'px) rotateY(' + angle + 'deg)';
    }

}