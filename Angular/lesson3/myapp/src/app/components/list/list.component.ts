import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/task';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    tasks: Task[];

    constructor(
      public server: JsonplaceholderService,
      public flashMessage: FlashMessagesService
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

     // subscribe on new task event
     this.server.newTask.subscribe((data: Task) => {
      console.log('task', data);
       if (data['body']) {
         const newTask = Object.assign({}, data['body'], {id: data.id})
         console.log(newTask);
         this.tasks.unshift(newTask);
         this.server.updateCount(this.tasks.length);
       }
 });
      // Subscribe on update task
      this.server.updatingTask.subscribe((task: Task) => {
        if (task['body']) {
          this.tasks = this.tasks.map(item => {
            if (item.id === task.id) {
            //  this.isEdit = false;
              item.title = task['body'].title;
            }
            return item;
          })
        }
      })
  }

  identify(index) {
      return index;
  }

  editTask(task: Task) {
      console.log(task);
      this.server.emitEditTask(task);
  }

  deleteTask(id) {
      this.server.deleteTask(id).subscribe(data => {
          this.tasks = this.tasks.filter(task => task.id !== id);
        this.server.updateCount(this.tasks.length);
          this.flashMessage.show('Deleted', {
            cssClass: 'alert-success',
            showCloseBtn: true,
            closeOnClick: true,
            timeout: 10000
          })
      }, error => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
        });
      });
  }

  switchTask(task) {
      this.server.switchTask(task).subscribe((data: Task) => {
          this.tasks.forEach(item => {
              if (item.id === data.id) {
                  item.completed = data.completed;
              }
          })
      })
  }

}
