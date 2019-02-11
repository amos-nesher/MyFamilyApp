import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks, TasksService, Task } from '../services/tasks.service';
import { FamilyMemebersService } from '../services/family-memebers.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public $tasks: Observable<Tasks>;
  
  constructor(private tasksService: TasksService,
              private familyMemeberService: FamilyMemebersService) {
    this.$tasks = this.tasksService.getTasksSubject();
  }

  ngOnInit() {
  }

  public getOwnerName(task: Task): string {
    return this.familyMemeberService.getFamilyMember(task.memberId).name;
  }

  public isUser(task: Task): boolean {
    return this.familyMemeberService.isUser(task.memberId);
  }
}
