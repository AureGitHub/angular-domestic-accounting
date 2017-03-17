import { Route } from '@angular/router';
import { AuthGuard }            from '../_guard/auth-guard.service';
import { AuthService }          from '../auth.service';
import { LoginComponent }       from './login.component';

export const LoginRoutes: Route[] = [  
	{ path: 'login',component: LoginComponent }
]; 
 


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/