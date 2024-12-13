import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  isVisible = true;

  constructor(private route:Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
}

  login(){
     /** spinner starts on init */
     debugger
     this.spinner.show();
    
   
     this.route.navigate(['/dashboard'])

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();

     }, 2000);

   
      }


}
