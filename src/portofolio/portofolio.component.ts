import { Component } from '@angular/core';

@Component({
  selector: 'portofolio-root',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  title = 'app';

  imgArr: string[] = [
    "assets/port3.png", "assets/port2.png", "assets/port3.png",
    "assets/port2.png", "assets/port3.png", "assets/port2.png"
  ];
  imgFlag: boolean = false;
  imgSrc: string = ''
  imgIndexAlt: string = ''

  showModal(src: string, index: number) {
    this.imgSrc = src
    this.imgIndexAlt = `portImgModal${++index}`
    console.log(this.imgSrc);
  }

  nextModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const nextIndex = (currentIndex + 1) % this.imgArr.length;
    this.imgSrc = this.imgArr[nextIndex];
  }

  prevModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const prevIndex = (currentIndex - 1 + this.imgArr.length) % this.imgArr.length;
    this.imgSrc = this.imgArr[prevIndex];
  }
}

