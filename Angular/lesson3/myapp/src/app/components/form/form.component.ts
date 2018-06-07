import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { FlashMessagesService} from "angular2-flash-messages";
import { Task } from '../../models/task';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    title: string;
    isEdit: boolean;
    currentTaskId: number;
    currentTitle: string;
    @ViewChild('form') form;

  constructor(
      public server: JsonplaceholderService,
      public flashMessage: FlashMessagesService
  ) {}

  ngOnInit(
  ) {
    // Subscribe on edit
    this.server.editingTask.subscribe((task: Task) => {
      if (task.title) {
        this.isEdit = true;
        this.title = task.title;
        this.currentTaskId = task.id;
        this.currentTitle = task.title;
      }
    })
    // Subscribe on update
    this.server.updatingTask.subscribe(() => {
        this.isEdit = false;
    })
  }

  addTask() {
      const newTask = {
          userId: 1,
          completed: false,
          title: this.title
      };
      this.server.addTask(newTask).subscribe((data: Task) => {
          console.log('Add task', data);
          this.form.reset();
          this.server.emitNewTask(data);
          this.flashMessage.show('Task added successfully!', {
            cssClass: 'alert-success',
            showCloseBtn: true,
            closeOnClick: true,
            timeout: 10000
          });
      }, error => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
        });
      });
  }

  editTask() {
    const updateTask = {
      id: this.currentTaskId,
      userId: 1,
      completed: false,
      title: this.title
    };
    // update task
    this.server.editTask(updateTask).subscribe((task: Task) => {
      console.log('Edit task', task);
      this.form.reset();
      this.server.emitUpdateTask(task);
      this.flashMessage.show('Edit success', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    }, error => {
      this.flashMessage.show(error.message, {
        cssClass: 'alert-danger',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    })
  }
    // cancel task
  cancelTask() {
    const cancelTask = {
      id: this.currentTaskId,
      userId: 1,
      completed: false,
      title: this.currentTitle
    };
    // update task
    this.server.editTask(cancelTask).subscribe((task: Task) => {
      console.log('Edit task', task);
      this.form.reset();
      this.server.emitUpdateTask(task);
      this.flashMessage.show('Editing cancelled', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    }, error => {
      this.flashMessage.show(error.message, {
        cssClass: 'alert-danger',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    })
  }
}
