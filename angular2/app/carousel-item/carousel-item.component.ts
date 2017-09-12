import { Component, ViewChild, Input, OnInit, Renderer } from 'angular2/core';

@Component({
    selector: 'carousel-item',
    templateUrl: 'app/carousel-item/carousel-item.component.html',
    styleUrls: ['app/carousel-item/carousel-item.component.css']
})
export class CarouselItem implements OnInit {
    @Input('title')
    _title: string;
    @Input('body')
    _body: string;
    @Input('radius')
    _radius: number = 0;
    @Input('angle')
    _angle: number = 0;
    @Input('width')
    _width: number;

    _selected: boolean = false;
    _transform_string: string = '';
    _width_string: string = '';

    constructor() { }
    
    ngOnInit() {
        this._transform_string = this.buildTransformString(this._radius, this._angle);
        this._width_string = this._width + 'px';
    }

    select() {
        this._selected = true;
    }

    deselect() {
        this._selected = false;
    }

    private buildTransformString(radius: number = 0, angle: number = 0) {
        return 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)';
    }
}