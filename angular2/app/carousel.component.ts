import {Component, ElementRef, Renderer, Input, OnChanges, SimpleChange} from '@angular/core'
import {CarouselItem} from './carousel-item.component'

@Component({
    selector: 'carousel',
    templateUrl: 'app/carousel.component.html',
    styleUrls: ['app/carousel.component.css'],
    directives: [CarouselItem]
})
export class CarouselComponent {

    _current_index = 0;
    _inc_step: number;
    _radius: number;
    @Input('item-width')
    _item_width: number;
    
    @Input('items')
    _items: Object[];

    constructor(private el: ElementRef) {
    }
    
    ngOnInit() {
        let length = this._items.length;

        this._inc_step = 360 / length;
        this._radius = (this._item_width / 1.9) / Math.tan(Math.PI / length);

        this.set_child_radii();
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    }

    private set_child_radii() {
        if(!this._items) {
            return false;
        }
        this._items.forEach((item, index) => {
            let radius = index * this._inc_step;
            // item.setRadius(radius)
        });
    }

    next() {
        this._current_index++;
        this.update();
    }

    prev() {
        this._current_index--;
        this.update();
    }

    private update() {
        // update amount of component rotation based on index and inc_step
    }

}