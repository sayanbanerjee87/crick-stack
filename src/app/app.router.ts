import { HomeComponent } from './modules/home/home.component';
import { ListOfPlayers } from './modules/players/players.component';

export const appRoutes = [{
	path: "home",
	component: HomeComponent,
	children: [
      { path: 'details/:tabId', component: ListOfPlayers }
    ]
},
{ 
	path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}];