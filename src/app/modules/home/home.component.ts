
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './home.html',
	styleUrls: ['home.scss']
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

	activateLink(index: number){
		let len = this.tabList.length;

		for(let i=0; i< len; i++){
			if(i === index){
				this.tabList[i].isActive = true;
			}else{
				this.tabList[i].isActive = false;
			}
		}
	}
}
