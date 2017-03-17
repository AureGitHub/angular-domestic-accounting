
import { Routes } from '@angular/router';
import { LoginRoutes } from './login/login.routes';
import { TiposGestosRoutes } from './tiposgastos/tiposgastos.routes';


export const routes: Routes = [   
	...LoginRoutes,
	...TiposGestosRoutes,
];