import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = ['work 1', 'work 2', 'work 3'];
  done = ['work 4'];

  drag(event) {
    if (event.previousContainer.data === event.container.data) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.todo);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
