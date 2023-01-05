import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  images = ['9.jpg','10.jpg','14.jpg']
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
