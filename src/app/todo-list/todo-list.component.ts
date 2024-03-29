import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})


export class TodoListComponent {
  
  newTaskText = '';

  tasks : Task[]=[];
  addTask(): void {
    const trimmedText = this.newTaskText.trim();
    if (trimmedText === '') {
      alert('Please enter a task.');
      return;
    }

    this.tasks.push({ text: trimmedText, completed: false });
    this.newTaskText = '';
  }
  toggleTask(task: Task): void {
    task.completed = !task.completed;
  }
}
