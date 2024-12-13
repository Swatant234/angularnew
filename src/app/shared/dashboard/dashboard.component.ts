import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  // imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formValue:any;
  studentList:any[]=[];
  constructor(private http:HttpClient) {
    this.getAllStudents();
  }

  ngOnInit(): void {
  }



studentForm: FormGroup = new FormGroup({
fullName: new FormControl("",[Validators.required,Validators.minLength(6) ]),
city: new FormControl("",[Validators.required]),
isActive: new FormControl(),


  });

  
  getAllStudents(){
    debugger
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger
      this.studentList=result;})
    
  }
 


  onSave(){
    debugger
    this.formValue=this.studentForm.value;
    console.log(this.formValue);
  }

    // Handle form reset
    onReset() {
      this.studentForm.reset({
        fullName: '',
        city: '',
        isActive: ''
      });
    }

    SaveData(){

    }
}
