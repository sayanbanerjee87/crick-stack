import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { NeedAuthGuard } from './common/auth-helper/auth.guard';

export const appRoutes = [{
	path: "home",
	component: HomeComponent,
	canActivate: [NeedAuthGuard]
},
{
	path: "login",
	component: LoginComponent
},
{ 
	path: '',
    redirectTo: '/login',
    pathMatch: 'full'
}];