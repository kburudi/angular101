import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(todo:Todo) {
    this.todoService.createTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
