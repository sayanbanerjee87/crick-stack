import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TeamNames } from './../../models/teams.model';
import { Players } from './../../models/players.model';


@Injectable({
	providedIn: 'root'
})
export class FetchResultService{
	private teamUrl = "./assets/resources/testTeam.json";
	private rolesUrl = "./assets/resources/roles.json";
	constructor(private http: HttpClient){}

	teamsList(): Observable<TeamNames>{
		if(localStorage.getItem('teamNames')){
			//let teams: Observable<TeamNames>;
			//teams = JSON.parse(localStorage.getItem('teamNames'));
			return of(JSON.parse(localStorage.getItem('teamNames')))

		}else{
			return this.http.get<TeamNames>(this.teamUrl)
			.pipe(map(res => {
				localStorage.setItem('teamNames', JSON.stringify(res));
				return res;
			}));
		}	
	}

	rolesList(): Observable<TeamNames>{
		if(localStorage.getItem('playersRoles')){
			let roles: Observable<TeamNames>;
			//roles = JSON.parse(localStorage.getItem('playersRoles'));
			return of(JSON.parse(localStorage.getItem('playersRoles')))
		}else{
			return this.http.get<TeamNames>(this.rolesUrl)
			.pipe(map(res => {
				localStorage.setItem('playersRoles',JSON.stringify(res));
				return res;
			}));
		}
	}

	getPlayers(url: string): Observable<Players>{
		return this.http.get<Players>(url);
	}
}