import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './../../models/login.model';
import { AuthService } from './../../common/auth-helper/auth.service'

@Component({
	templateUrl: './login.html',
	styleUrls: ['login.scss']
})

export class LoginComponent{
	login: object;
	userName: string;
	password: string;
	returnUrl: string;

	constructor(private auth: AuthService,
		private route: ActivatedRoute,
        private router: Router){

	}

	ngOnInit(){
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
	}

	onSubmit(){
		this.auth.validateLogin(this.userName, this.password)
		.subscribe(res => {
			this.router.navigate([this.returnUrl]);
		},
		error => {
			console.log("error!!")
		})
	}
}