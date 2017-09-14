import { Component, ViewChild, Input, OnInit, Renderer } from 'angular2/core';
import {CarouselService} from '../shared/carousel-service.service';

@Component({
    selector: 'carousel-item',
    templateUrl: 'app/carousel-item/carousel-item.component.html',
    styleUrls: ['app/carousel-item/carousel-item.component.css']
})
export class CarouselItem implements OnInit {
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

    constructor(private carouselService: CarouselService) { }
    
    ngOnInit() {
        this._transform_string = this.carouselService.buildTransformString(this._radius, this._angle);
        this._width_string = this._width + 'px';
    }
    
    select() {
        if (!this.carouselService.options().radiusOnSelect()) {
            this._transform_string = this.carouselService.buildTransformString(0, this._angle);
        }
        this._selected = true;
    }
    
    deselect() {
        this._transform_string = this.carouselService.buildTransformString(this._radius, this._angle);
        this._selected = false;
    }
}