import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FamilyMemebersService } from "./family-memebers.service";
import { tasksMock, addTaskMock, deleteTaskMock, complateTaskMock } from "./tasks.mock";

export interface Task {
    id: string;
    text: string;
    time: number;
    complate: boolean;
    memberId: string; // assign to memeber
}

export type Tasks = Array<Task>;

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasksSubject = new BehaviorSubject<Tasks>([]);

  constructor(private familyMemebersService: FamilyMemebersService) { 
    this.tasksSubject.next(tasksMock);
  }

  public getTasksSubject() {
    return this.tasksSubject;
  }

  public addTask(text: string) {
    addTaskMock(text, this.familyMemebersService.getUser().id);
    this.tasksSubject.next(tasksMock);
  }

  public deleteTask(taskId: string) {
    deleteTaskMock(taskId);
    this.tasksSubject.next(tasksMock);
  }

  public complateTask(taskId: string, complate: boolean) {
    complateTaskMock(taskId, complate);
    this.tasksSubject.next(tasksMock);
  }
}
