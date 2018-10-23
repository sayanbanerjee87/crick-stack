import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';
import { RatedPlayer } from './../../models/rating.model';


@Injectable()
export class FetchRatedPlayers{
	private url = "./assets/resources/rating.json";
	constructor(private http: HttpClient){

	}

	getRatedPlayers(): Observable<RatedPlayer>{
		if(localStorage.getItem('playersRatings')){
			//let list = JSON.parse(localStorage.getItem('playersRatings'));
			return of(JSON.parse(localStorage.getItem('playersRatings')))
		}else{
			return this.http.get<RatedPlayer>(this.url)
			.pipe(map(res => {
				localStorage.setItem('playersRatings',JSON.stringify(res));
				return res;
			}));
		}
	}
}