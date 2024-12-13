import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the current route is '/login'
    if (state.url === '/login') {
      // Allow navigation to login page without the layout
      return true;
    } else {
      // If the user is not on login page, redirect to home or another route (show layout)
      return true; // Or check for authentication logic here
    }
  }
}
