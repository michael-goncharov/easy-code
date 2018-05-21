import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    title: string;
    @ViewChild('form') form;

  constructor(
      public server: JsonplaceholderService
  ) {}

  ngOnInit() {
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
      })
  }
}
