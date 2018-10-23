import { Component, OnInit } from '@angular/core';
import { FetchResultService } from './../../common/service/fetchResults.service';
import { TeamNames } from './../../models/teams.model';

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog.html'
})
export class DialogContentDialog implements OnInit{
	private teamsList: TeamNames; 
	constructor(private ftchService: FetchResultService){}

	ngOnInit(){
		this.ftchService.teamsList()
		.subscribe(res => this.teamsList = res);
	}
}