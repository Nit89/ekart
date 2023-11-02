import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Task {
  taskname: string;
  isCompleted: boolean;
  priority: string;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskArray = [
    { taskname: 'Brush teeth', isCompleted: false, priority: 'low' },
  ];
  onSubmit(form: NgForm) {
    console.log(this.taskArray);
    this.taskArray.push({
      taskname: form.controls['task'].value,
      isCompleted: false,
      priority: form.controls['priority'].value,
    });
    form.reset();
  }
  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  markAllAsCompleted() {
    this.taskArray.forEach((task) => {
      task.isCompleted = true;
    });
  }
}
