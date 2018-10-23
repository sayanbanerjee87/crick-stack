import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../common/auth-helper/auth.service'

@Component({
	selector: 'app-header',
	templateUrl: './header.html',
	styleUrls: ['./header.scss']
})

export class HeaderComponent implements OnInit{
	private userName: string;

	constructor(private auth: AuthService, private router: Router){}

	ngOnInit(){
		let user = JSON.parse(localStorage.getItem('currentUser'));
		this.userName = user && user.userName ? user.userName : "";
	}

	logoutApp(){
		let res = this.auth.logout();
		if(res){
			this.router.navigate(['login']);
		}
	}
}