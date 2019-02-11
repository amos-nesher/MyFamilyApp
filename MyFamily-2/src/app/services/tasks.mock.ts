import { Tasks, Task } from "./tasks.service";
import { fakeAsync } from "@angular/core/testing";

let tasksMockIndex = 0;

export const tasksMock: Tasks = [
    {   
        id: "id-" + tasksMockIndex++,
        text: "Clean the kitchen",
        time: Date.now(),
        complate: false,
        memberId: "id-3"
    },
    {
        id: "id-" + tasksMockIndex++,
        text: "Clean the room",
        time: Date.now(),
        complate: true,
        memberId: "id-4"
    }
];

export function addTaskMock(text: string, memeberId: string): Tasks {
    const task: Task = {
        id: "id-" + tasksMockIndex++,
        text: text,
        time: Date.now(),
        complate: false,
        memberId: memeberId
      };

      tasksMock.push(task);
      return tasksMock;
}

export function deleteTaskMock(taskId: string) {

}

export function complateTaskMock(taskId: string, complate: boolean) {

}