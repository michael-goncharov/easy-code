import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/task'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    tasks: Task[];

    constructor(
      public server: JsonplaceholderService
  ) { }

  ngOnInit() {
      // Get all tasks
      this.server.getTasks().subscribe(data => {
         if (data) {
             this.tasks = data;
         }
     }, error => {
         console.log(error)
     })
  }

  identify(index) {
      return index;
  }

  deleteTask(id) {
      this.server.deleteTask(id).subscribe(data => {
          this.tasks = this.tasks.filter(task => task.id !== id);
      });
  }

  switchTask(task) {
      this.server.switchTask(task).subscribe(data => {
          this.tasks.forEach(item => {
              if (item.id === data.id) {
                  item.completed = data.completed;
              }
          })
      })
  }

}
