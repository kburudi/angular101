import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from '../models/Todo';

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "_limit=6";

  constructor(private http: HttpClient) { }

  getTodos():Observable <Todo []> {
    return this.http.get<Todo[]>(`${this.todosUrl}?${this.todosLimit}`);
  }

  createTodo(todo: Todo):Observable <Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  updateTodo(todo: Todo):Observable <Todo> {
    return this.http.put<Todo>(`${this.todosUrl}/${todo.id}`, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable <Todo> {
    return this.http.delete<Todo>(`${this.todosUrl}/${todo.id}`, httpOptions);
  }
}
