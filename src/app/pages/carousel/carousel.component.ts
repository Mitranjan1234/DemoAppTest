import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
  }

  images = [
    {title: '1st Slide', short: '1st Slide Short', src: "https://mdbootstrap.com/img/Photos/Slides/img%20(28).webp"},
    {title: '2nd Slide', short: '2nd Slide Short', src:"https://mdbootstrap.com/img/Photos/Slides/img%20(29).webp"},
    {title: '3rd Slide', short: '3rd Slide Short', src:"https://mdbootstrap.com/img/Photos/Slides/img%20(8).webp"},
  ];

}
