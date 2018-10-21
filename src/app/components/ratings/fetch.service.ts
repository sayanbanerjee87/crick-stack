import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';
import { RatedPlayer } from './../../models/rating.model';


@Injectable()
export class FetchRatedPlayers{
	private url = "./assets/resources/rating.json";
	constructor(private http: HttpClient){

	}

	getRatedPlayers(): Observable<RatedPlayer>{
		return this.http.get<RatedPlayer>(this.url);
	}
}