import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{

  
  images = ['9.jpg','10.jpg','14.jpg'];
  text = ['Bring engineering','to the next','Level']



  
  currentImage = 0
  showImage = true;


  ngOnInit(){
    this.updateImage();
  }

updateImage() {

  setInterval(() => {
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;
    this.showImage = false;
  

    setTimeout(() => {
      this.showImage = true;
    }, 8);
  }, 8000)
  } 

}
