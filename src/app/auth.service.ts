import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { User } from './_models/user';

import { API_CONFIG } from './_config/config';

@Injectable()
export class AuthService {

public token: string;
//private Url = 'http://localhost:51098/login';
//private Url = 'https://euromillones-angular-node-auregithub.c9users.io/login';
private Url = 'http://localhost:3000/loginN';

 private localStorage_currentUser = 'currentUser';
 
 public userConnect : User =null;

 isLoggedIn:boolean = false;

 isAdmin:boolean = false;


  // store the URL so we can redirect after logging in
  redirectUrl: string;

constructor(@Inject(API_CONFIG) private apiConfig: any,private http: Http) {
  console.log(this.apiConfig);
  this.Url = apiConfig.url + apiConfig.pathLogin;
  alert(this.Url);
 }

SetEntornoUser(){
    if(this.userConnect)
    {
       this.isLoggedIn = true;
       this.isAdmin= this.userConnect.idRol==1;
      
    }
    else{  
       this.isLoggedIn = false;
       this.isAdmin=false; 
      
    }
  
 } 

  login(username : string,password:string): Observable<boolean> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });



    return this.http
               .post(this.Url,JSON.stringify({email:username,password : password}),options)
                .map((response: Response) => {
                   console.log(response);
                   let token = response.json() && response.json().Security  &&  response.json().Security.token;
                if (token) {
                    // set token property
                    this.token = token;
                   
                    this.userConnect  =new User(
                      response.json().Security.user.id,
                      response.json().Security.user.username,
                      response.json().Security.user.Nombre,
                      response.json().Security.user.IdRol,
                      
                      response.json().Security.expires,
                      response.json().Security.token
                    );
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.userConnect));

                  this.SetEntornoUser();
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                   
                    return false;
                    
                }

                })
                .catch(this.handleError);
              
    
  }



 private handleError (error: Response | any) {

  if(error.statusText)
    return Observable.throw(error.statusText);

   let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
   this.isLoggedIn = false;
   this.isAdmin= false;
    return Observable.throw(errMsg);
  }
 

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin= false;
    localStorage.removeItem(this.localStorage_currentUser);
    this.userConnect=null;
     this.SetEntornoUser();
  }

  reload():void{
    if(localStorage.getItem(this.localStorage_currentUser)){
      this.userConnect=JSON.parse(localStorage.getItem(this.localStorage_currentUser));
    }
    else{
      this.userConnect=null;
    }
    this.SetEntornoUser();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/