import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() ownerName: string;
  @Input() isUser: boolean;
  @Output() complate: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() resume: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  doComplate() {
    this.complate.emit(this.task);
  }

  doResume() {
    this.resume.emit(this.task);
  }

  doDelete() {
    this.delete.emit(this.task);
  }

}
