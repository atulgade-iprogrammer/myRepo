import { Component, HostListener } from '@angular/core';
import { MovieDataService } from './services/movie-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'OTT-Platform';

  popular: any;
  topRated: any;
  trending: any;
  n1=0
  n2=0
  n3=0
  constructor(private service: MovieDataService) {}
  ngOnInit(): void {
    //  this.service.nowPlaying().subscribe(e=>{
    //   this.data=e;
    // })
    // this.service.topRated().subscribe(e=>{
    //   this.topRated=e;
    // })
    this.service.api('trending/all/day').subscribe((e) => {
      this.trending = e;
    });

    setTimeout(() => {
      this.isVisible1 = true;
    }, 3000);
  }
  isVisible1 = false;
  isVisible2 = false;
  isVisible3 = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  @HostListener('document:scroll')
  scrollFunction() {
    if (
      document.body.scrollTop > 165 ||
      document.documentElement.scrollTop > 165 && this.n1==0
    ) {
      this.service.api('trending/all/day').subscribe((e) => {
        this.trending = e;
      });
      this.n1=1
    }
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150 && this.n2==0
    ) {
      this.service.api('movie/top_rated').subscribe((e) => {
        this.topRated = e;
      });

      setTimeout(() => {
        this.isVisible2 = true;
      }, 1000);
      this.n2=1;
    }

    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450 && this.n3==0
    ) {

      this.service.api('movie/popular').subscribe((e) => {
        this.popular = e;
      });
      setTimeout(() => {
        this.isVisible3 = true;
      }, 1000);
      this.n3=1
    }
  }
}
