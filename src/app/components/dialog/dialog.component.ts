import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchResultService } from './../../common/service/fetchResults.service';
import { TeamNames } from './../../models/teams.model';

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog.html'
})
export class DialogContentDialog implements OnInit{
	registerForm : FormGroup;
	teamsList: TeamNames; 
	playerName: string;
	profile: string;
	role: string;
	teams: string;
	constructor(private ftchService: FetchResultService, private formBuilder: FormBuilder){}

	ngOnInit(){
		this.registerForm = this.formBuilder.group({
			playerName: ['', Validators.required],
			profile: ['', Validators.required],
			role: ['', Validators.required],
			teams: ['', Validators.required]
		})
		this.ftchService.teamsList()
		.subscribe(res => this.teamsList = res);
	}

	savePlayer(){
		if (this.registerForm.invalid) {
            return;
        }
		console.log("Inside this api");
	}
}