import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.4) {
      return true;
    } else {
      this.router.navigate(['/principal']);
      return false;
    }
  }

}
