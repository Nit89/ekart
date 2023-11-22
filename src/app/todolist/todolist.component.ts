import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Task {
  taskname: string;
  isCompleted: boolean;
  priority: string;
  dueDate?: Date;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  SearchText: string = '';
  taskArray = [
    {
      taskname: 'Brush teeth',
      isCompleted: false,
      priority: 'low',
      dueDate: 'Nov 17, 2023',
    },
  ];
  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskname: form.controls['task'].value,
      isCompleted: false,
      priority: form.controls['priority'].value,
      dueDate: form.controls['dueDate'].value,
    });

    form.reset();
  }
  setSearchText(value: string) {
    this.SearchText = value;
  }

  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
  }
  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  editTask(index: number, newTaskName: string) {
    this.taskArray[index].taskname = newTaskName;
  }

  markAllAsCompleted() {
    this.taskArray.forEach((task) => {
      task.isCompleted = true;
    });
  }
}
