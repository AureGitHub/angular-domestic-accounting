import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from '../auth.service';
import { User } from '../_models/user';
import 'rxjs/add/observable/throw';

@Component({
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
 public errorMessage:string;

VerBoton :boolean = true;


  constructor(public authService: AuthService, public router: Router) {

    
   
  }

public model = new User(null,null,null,null,null,null);
 comoNoAdmin(){
    this.model.username='aalvare9';
   this.model.password='123456';
 }

 comoAdmin(){
   this.model.username='jdesande';
   this.model.password='123456';
 }

  onSubmit() {
    this.errorMessage ="";
    this.VerBoton = false;

  //this.router.navigate(['inicio']);

  //return;


    this.authService.login(this.model.username,this.model.password).subscribe(
    
       TodoOK=> {
      
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    },
    error => {
      this.VerBoton = true;
      this.errorMessage = <any>error
    }
    );
  }

 
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/