import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';  // Import Task model


@Component({
  selector: 'app-customgroup',
  templateUrl: './customgroup.component.html',
  styleUrls: ['./customgroup.component.css']
})
export class CustomgroupComponent implements OnInit  {
  taskForm: FormGroup;
  tasks: Task[] = [];
  isEditing: boolean = false;
  currentTaskId: number | null = null;


  constructor(private spinner: NgxSpinnerService,private fb: FormBuilder) { 
     // Initialize the form group
     this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();

    }, 2000);
    this.loadTasksFromLocalStorage(); // Load tasks from local storage on init

  }

// Load tasks from Local Storage
loadTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  this.tasks = tasks ? JSON.parse(tasks) : [];
}

// Create or Update task
onSubmit() {
  if (this.taskForm.invalid) return;

  const { name, description } = this.taskForm.value;
  const newTask: Task = {
    id: this.isEditing ? this.currentTaskId! : Date.now(),  // If editing, retain the ID
    name,
    description,
  };

  if (this.isEditing) {
    this.updateTask(newTask);
  } else {
    this.createTask(newTask);
  }
  this.taskForm.reset();
}

// Create task
createTask(task: Task) {
  this.tasks.push(task);
  this.saveTasksToLocalStorage();
}

// Update task
updateTask(updatedTask: Task) {
  const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
  if (index !== -1) {
    this.tasks[index] = updatedTask;
    this.saveTasksToLocalStorage();
  }
  this.isEditing = false; // Reset edit mode
  this.currentTaskId = null;
}

// Delete task
deleteTask(id: number) {
  this.tasks = this.tasks.filter((task) => task.id !== id);
  this.saveTasksToLocalStorage();
}

// Set the task in edit mode
editTask(task: Task) {
  this.isEditing = true;
  this.currentTaskId = task.id;
  this.taskForm.setValue({
    name: task.name,
    description: task.description,
  });
}

// Save tasks to local storage
saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}
}


  

