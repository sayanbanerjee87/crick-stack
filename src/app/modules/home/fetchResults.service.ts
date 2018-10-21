import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TeamNames } from './../../models/teams.model';


@Injectable()
export class FetchResultService{
	private teamUrl = "./assets/resources/testTeam.json";
	private rolesUrl = "./assets/resources/roles.json";
	constructor(private http: HttpClient){}

	teamsList(): Observable<TeamNames>{
		return this.http.get<TeamNames>(this.teamUrl);
	}

	rolesList(): Observable<TeamNames>{
		return this.http.get<TeamNames>(this.rolesUrl);
	}

	getPlayers(url: string): Observable<Object>{
		return this.http.get<Object>(url);
	}
}