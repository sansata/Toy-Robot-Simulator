import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleRobot = 'Toy Robot Simulator';
  constructor(private title:Title) {
   }
   ngOnInit() {
    this.title.setTitle(this.titleRobot);
 }
 
}
