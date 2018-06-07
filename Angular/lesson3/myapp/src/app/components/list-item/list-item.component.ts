import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/task'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    @Input() task: Task;
    @Output() delete = new EventEmitter;
    @Output() changeStatus = new EventEmitter;
    @Output() edit = new EventEmitter;

    editStatus: boolean;

  constructor(
      public server: JsonplaceholderService
  ) { }
  ngOnInit() {
    // Subscribe on update task
    this.server.updatingTask.subscribe((task: Task) => {
      if (task['body']) {
        this.editStatus = false;
        }
      })
  }

  deleteOneTask() {
      // Generate Event
      this.delete.emit(this.task.id);
  }

  editTask() {
    this.editStatus = true;
    const updateTask = Object.assign({}, this.task);
    this.edit.emit(updateTask);
  }

  switchOneTask() {
      this.changeStatus.emit(this.task);
  }

  }
