import {Component, OnInit, ViewChild} from 'angular2/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselItem} from './carousel-item/carousel-item.component';
import {CarouselService} from './shared/carousel-service.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [CarouselComponent],
    providers: [CarouselService]
})
export class AppComponent {
    @ViewChild('carousel')
    _carousel;

    _width = 600;
    _width_string = this._width + 'px';

    constructor(private carouselService: CarouselService) { 
        let items = [
            {title: 'Item0', body: '<p>Blaubären!</p>'}, 
            {title: 'Item1', body: '<p>Blaubären!</p>'}, 
            {title: 'Item2', body: '<p>Graubären!</p>'}, 
            {title: 'Item3', body: '<p>Grünbären!</p>'}, 
            {title: 'Item4', body: '<p>Orangebären!</p>'}, 
            {title: 'Item5', body: '<p>Lilabären!</p>'}, 
            {title: 'Item6', body: '<p>Lilabären!</p>'}, 
            {title: 'Item7', body: '<p>Lilabären!</p>'}, 
            {title: 'Item8', body: '<p>Lilabären!</p>'}, 
            {title: 'Item9', body: '<p>Blingbong</p><p>Blongbing!</p>'}];
        items.forEach(item => this.carouselService.addItem(item));
    }

    next() {
        this._carousel.next();
    }

    prev() {
        this._carousel.prev();
    }
}