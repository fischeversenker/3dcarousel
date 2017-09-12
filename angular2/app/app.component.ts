import {Component, OnInit, ViewChild} from 'angular2/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselItem} from './carousel-item/carousel-item.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [CarouselComponent]
})
export class AppComponent {
    _width = 500;
    _width_string = this._width + 'px';
    carousel_items = [
        {title: 'Item1', body: '<p>Blaubären!</p>'}, 
        {title: 'Item2', body: '<p>Graubären!</p>'}, 
        {title: 'Item3', body: '<p>Grünbären!</p>'}, 
        {title: 'Item4', body: '<p>Orangebären!</p>'}, 
        {title: 'Item5', body: '<p>Lilabären!</p>'}, 
        {title: 'Item6', body: '<p>Blingbong</p><p>Blongbing!</p>'}];

    @ViewChild('carousel')
    _carousel;

    constructor() { }

    next() {
        this._carousel.next();
    }
    prev() {
        this._carousel.prev();
    }
}