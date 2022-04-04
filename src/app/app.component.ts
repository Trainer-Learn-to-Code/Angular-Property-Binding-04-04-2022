import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Project';
  isUnchanged=true;
  itemImageUrl='https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?s=612x612';
  imagefromasset='../assets/assetimage.jpg';

}
