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

  constructor(
      public server: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  deleteOneTask() {
      // Generate Event
      this.delete.emit(this.task.id);
  }

  switchOneTask() {
      this.changeStatus.emit(this.task);
  }

  }
