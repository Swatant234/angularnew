import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoginPage = false;

  
  constructor( private spinner: NgxSpinnerService,private router: Router) { }


  ngOnInit() {
    // Check the route and update the isLoginPage flag
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      // Assume the login route is '/login'
      this.isLoginPage = currentUrl === '';
    });
  }
}
