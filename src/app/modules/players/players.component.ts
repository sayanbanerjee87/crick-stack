import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './players.html',
	styleUrls: ['players.scss']
})

export class ListOfPlayers implements OnInit{
	private sub;
	private tabName: string;
	constructor(private _activatedRoute: ActivatedRoute){}

	ngOnInit(){
		this.sub = this._activatedRoute.params.subscribe(params => {
			this.tabName=params['tabId'];
		})
	}

	// ngOnDestroy() {
 //    	this.sub.unsubscribe();
	// }
}