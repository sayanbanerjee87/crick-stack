import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { LoginModel } from './../../models/login.model';
import { UserDetail } from './../../models/user.model';


@Injectable({
	providedIn: 'root'
})

export class AuthService{
	url: string = './assets/resources/login/loginInfo.json';
	user: UserDetail;
	constructor(private http: HttpClient){

	}

    validateLogin(username: string, password: string): Observable<UserDetail>{
    	// let userName = username;
    	// let passWord = password;
    	return this.http.get<LoginModel>(this.url)
    	.pipe(map(res => {
    		let users = res && res.user_detail ? res.user_detail : [];
			let i=0;
			for(i=0; i<users.length; i++){
				if(users[i].userName === username && users[i].password === password){
					localStorage.setItem("currentUser", JSON.stringify(users[i]));
					this.user = users[i];
				}
			}
			return this.user;
    	}));
    }
}