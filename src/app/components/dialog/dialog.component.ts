import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchResultService } from './../../common/service/fetchResults.service';
import { TeamNames } from './../../models/teams.model';
import { Router, ActivatedRoute, NavigationEnd, RouteReuseStrategy } from '@angular/router';

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
	navigationSubscription;
	constructor(private ftchService: FetchResultService, 
		private formBuilder: FormBuilder, 
		private router: Router){
		this.router.routeReuseStrategy.shouldReuseRoute = function() {
	    	return false;
		};
	}

	ngOnInit(){
		this.registerForm = this.formBuilder.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			category: ['', Validators.required],
			country: ['', Validators.required]
		})
		this.ftchService.teamsList()
		.subscribe(res => this.teamsList = res);
		this.navigationSubscription = this.router.events.subscribe((e: any) => {
	     // If it is a NavigationEnd event re-initalise the component
		     if (e instanceof NavigationEnd) {
		       
		     }
		});
	}

	savePlayer(){
		if (this.registerForm.invalid) {
            return;
        }
        let ratings = JSON.parse(localStorage.getItem('playersRatings'));
        let teams = JSON.parse(localStorage.getItem('teamNames'));
        let roles = JSON.parse(localStorage.getItem('playersRoles'));
        ratings.players.push({
        	"name": this.playerName,
        	"id": "-",
        	"country": this.teams,
        	"test": "-",
        	"odi": "-",
        	"t20": "-"
        })
        for(let k=0;  k<teams.firstLevel.length; k++{
        	if(teams.firstLevel[k].name === this.teams){
        		teams.firstLevel[k].players.push({
        			"name": this.playerName,
        			"id": "",
        			"country": this.teams
        		});
        	}
        }
        localStorage.setItem('teamNames', JSON.stringify(teams));
        localStorage.setItem('playersRatings', JSON.stringify(ratings));
        this.router.navigate(['home']);
		console.log("Inside this api");
	}
}