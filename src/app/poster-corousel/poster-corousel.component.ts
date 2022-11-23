import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-poster-corousel',
  templateUrl: './poster-corousel.component.html',
  styleUrls: ['./poster-corousel.component.css'],
})
export class PosterCorouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() MovieData: any;





  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 9,
      },
    },
    nav: true,
  };
}
