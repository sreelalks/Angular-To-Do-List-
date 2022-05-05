import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { todoListService } from 'src/app/services/todoListService';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  title = '';
  todoList: any;

  constructor(public todoListService: todoListService) {}
  
  ngOnInit() {
    if (localStorage.getItem('todoData') != null) {
      this.todoList = JSON.parse(localStorage.getItem('todoData') || '{}');
    }
  }
  sortList() {
    this.todoListService.sort();
    this.todoList = this.todoListService.findAll();
  }

  submitValue(newTitle: string): void {
    if (newTitle != '') {
      const Task: Task = {
        title: newTitle,
        status: false,
      };
      this.todoListService.add(Task);
      this.todoList = this.todoListService.findAll();
    }
  }

  removeTask(index: number): void {
    this.todoListService.delete(index);
    this.todoList = this.todoListService.findAll();
  }
  
  completeItem(index: number): void {
    this.todoListService.update(index, '');
    this.todoList = this.todoListService.findAll();
  }

  contentChange(index: number, event: any) {
    const value = event.target.value;
    if (value != '') {
      this.todoListService.update(index, value);
    }
    this.todoList = this.todoListService.findAll();
  }
}
