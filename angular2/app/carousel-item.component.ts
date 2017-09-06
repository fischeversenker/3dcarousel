import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'carousel-item',
    templateUrl: 'app/carousel-item.component.html',
    styleUrls: ['app/carousel-item.component.css']
})
export class CarouselItem {
    @Input('title')
    _title: string;
    @Input('body')
    _body: string;
    @Input('radius')
    _radius: number;

    _translateZ: string;

    constructor(private el: ElementRef, private sanitizer: DomSanitizer) {
    }

    ngOnInt() {
        let safeTransform = this.sanitizer.bypassSecurityTrustStyle("translateZ(' + this._radius +'px)")
        
        this._translateZ = safeTransform;
    }
}