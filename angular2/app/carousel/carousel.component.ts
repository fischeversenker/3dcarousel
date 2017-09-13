import {Component, HostListener, Renderer, Input, OnInit, OnChanges, QueryList, ViewChildren} from 'angular2/core';
import {CarouselItem} from '../carousel-item/carousel-item.component';
import {CarouselService} from '../shared/carousel-service.service';
import {CarouselItemObject} from '../shared/carousel-service.service';

@Component({
    selector: 'carousel',
    templateUrl: 'app/carousel/carousel.component.html',
    styleUrls: ['app/carousel/carousel.component.css'],
    directives: [CarouselItem]
})
export class CarouselComponent {

    @Input('item-width')
    _item_width: number;
    @ViewChildren(CarouselItem)
    _items: QueryList<CarouselItem>
    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        switch(event.keyCode) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
        }
    }

    _raw_items: CarouselItemObject[];
    _current_index: number;
    _inc_step: number;
    _radius: number;
    _transform_string: string;

    constructor(private carouselService: CarouselService) { }
    
    ngOnInit() {
        this._raw_items = this.carouselService.getCarouselItems(5);
        let count = this._raw_items.length;
        this._inc_step = 360 / count;
        this._radius = (this._item_width / 1.9) / Math.tan(Math.PI / count);
        this._current_index = 0;
    }
    
    ngAfterViewInit() {
        setTimeout(this.update.bind(this), 0);
    }

    private markSelected(index) {
        index = this.cleanedIndex(index);
        this._items.toArray().forEach(function(inst, i) {
            if (i === index) {
                inst.select();
            } else {
                inst.deselect();
            }
        });
    }

    goto(i: number) {
        let ci = this.cleanedIndex(this._current_index);
        let count = this._raw_items.length;
        let halfDistance = Math.floor(count / 2);
        let inc = i - ci;
        if (inc > halfDistance) {
            inc = inc - count;
        } else if (inc < -halfDistance) {
            inc = count + inc;
        }
        this._current_index += inc;
        this.update();
    }

    next() {
        this._current_index++;
        this.update();
    }

    prev() {
        this._current_index--;
        this.update();
    }

    private cleanedIndex(index: number, lower: number = 0, upper: number = this._items.length, count: number = this._items.length) {
        while (index < lower) {
            index += count;
        }
        while (index >= upper) {
            index -= count;
        }
        return index;
    }

    private update() {
        this.markSelected(this._current_index);
        this._transform_string = this.carouselService.buildTransformString(-this._radius, -this._inc_step * this._current_index, true);
    }

    private angleForIndex(index: number) {
        return this.carouselService.angleForIndex(index, this._raw_items.length);
    }
}