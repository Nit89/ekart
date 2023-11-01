import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskArray = [{ taskname: 'Brush teeth', isCompleted: false }];
  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskname: form.controls['task'].value,
      isCompleted: false,
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
}
