import {Component} from '@angular/core';
import {CarouselComponent} from './carousel.component'
import {CarouselItem} from './carousel-item.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello, Angular</h1>
        <carousel [items]="carousel_items" [item-width]="200"></carousel>`,
    directives: [CarouselComponent]
})
export class AppComponent {
    carousel_items = [
        {title: 'Item1', body: '<p>Blaubären!</p>'}, 
        {title: 'Item2', body: '<p>Graubären!</p>'}, 
        {title: 'Item3', body: '<p>Grünbären!</p>'}, 
        {title: 'Item4', body: '<p>Orangebären!</p>'}, 
        {title: 'Item5', body: '<p>Lilabären!</p>'}, 
        {title: 'Item6', body: '<p>Blingbong</p><p>Blongbing!</p>'}];
    constructor() {
        // this.carousel_items[0].
    }
}