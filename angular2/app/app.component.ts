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
    @ViewChild('items')
    _items;

    _width = 300;
    _width_string = this._width + 'px';

    constructor(private carouselService: CarouselService) { 
        let items = [
            {body: '<p>Blaubären!</p>'},
            {body: '<p>Grünbären!</p>'},
            {body: '<p>Blaubären!</p>'},
            {body: '<p>Grünbären!</p>'},
            {body: '<p>Orangebären!</p>'},
            {body: '<p>Lilabären!</p>'},
            {body: '<p>Orangebären!</p>'},
            {body: '<p>Lilabären!</p>'},
            {body: '<p>Goldbären!</p>'},
            {body: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122954014&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'},
            {body: '<p>Goldbären!</p>'},
            {body: '<h3>Blaubären</h3><div>Das ist die erste Karte. Oder die letzte. Weiss nicht.</div>'}];
        items.forEach(item => this.carouselService.addItem(item));
    }

    next() {
        this._carousel.next();
    }

    prev() {
        this._carousel.prev();
    }

    goto(nr: string) {
        this._carousel.goto(parseInt(nr, 10));
    }
}