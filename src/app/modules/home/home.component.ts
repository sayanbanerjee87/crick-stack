
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamNames } from './../../models/teams.model';
import { FetchResultService } from './fetchResults.service';
import { Players } from './../../models/players.model';
// import { PlayersListService } from './players.service';

@Component({
	templateUrl: './home.html',
	styleUrls: ['home.scss'],
	providers: [FetchResultService]
})

export class HomeComponent{
	private tabList: Array<any> = [{
		name: "Teams",
		link: "teams",
		label: "Teams",
		id: "tab01",
		isActive: true
	},{
		name: "Roles",
		link: "roles",
		label: "Roles",
		id: "tab21",
		isActive: false
	}];
	private sub;
	private tabName: string;
	private dataSet: TeamNames;
	private playerDetail: Players;

	constructor(private fetchList: FetchResultService){
		this.activateLink(0);
	}

	activateLink(index: number){
		let len = this.tabList.length;
		this.tabName=this.tabList[index].link;
		this.fetchList[this.tabName+'List']()
		.subscribe(res => {
			this.dataSet = res;
		});
		for(let i=0; i< len; i++){
			if(i === index){
				this.tabList[i].isActive = true;
			}else{
				this.tabList[i].isActive = false;
			}
		}
	}

	displayDetailedStats(player){
		this.fetchList.getPlayers(`./assets/resources/players/${player.id}.json`)
		.subscribe(res => {
			this.playerDetail = res;
		})
	}
}
