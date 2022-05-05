import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class todoListService {
  taskList: Task[] = [];
  constructor() {}

  findAll() {
    if (localStorage.getItem('todoData') != null) {
      return JSON.parse(localStorage.getItem('todoData') || '{}');
    }
    return null;
  }

  add(data: any): void {
    if (localStorage.getItem('todoData') != null) {
      this.taskList = JSON.parse(localStorage.getItem('todoData') || '{}');
      this.taskList.push(data);
      localStorage.setItem('todoData', JSON.stringify(this.taskList));
    } else {
      this.taskList.push(data);
      localStorage.setItem('todoData', JSON.stringify(this.taskList));
    }
  }
  sort(): void {
    let list = JSON.parse(localStorage.getItem('todoData') || '{}');
    list.sort((a: any, b: any) => (a.status > b.status ? 1 : -1));
    localStorage.setItem('todoData', JSON.stringify(list));
  }

  delete(index: number): void {
    let list: string[] = JSON.parse(localStorage.getItem('todoData') || '{}');
    list.splice(index, 1);
    localStorage.setItem('todoData', JSON.stringify(list));
  }

  update(index: number, value: string): void {
    let list = JSON.parse(localStorage.getItem('todoData') || '{}');
    let status = list[index].status;
    let title = list[index].title;
    if (title != value && value != '') {
      list[index].title = value;
    }
    if (value == '') {
      if (status === true) {
        list[index].status = false;
      } else {
        list[index].status = true;
      }
    }
    localStorage.setItem('todoData', JSON.stringify(list));
  }
}
