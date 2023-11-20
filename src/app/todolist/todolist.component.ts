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
  SearchText: string = '';
  taskArray = [
    { taskname: 'Brush teeth', isCompleted: false, priority: 'low' },
  ];
  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskname: form.controls['task'].value,
      isCompleted: false,
      priority: form.controls['priority'].value,
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

  markAllAsCompleted() {
    this.taskArray.forEach((task) => {
      task.isCompleted = true;
    });
  }
}
