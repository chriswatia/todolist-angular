import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }
  // Set Dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  // onToggle method
  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server.
    // tslint:disable-next-line: no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

   // onDelete method
   onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
