import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchRatedPlayers } from './fetch.service';
import { RatedPlayer } from "./../../models/rating.model";


@Component({
	selector: 'player-ratings',
	templateUrl: './rating.html',
	styleUrls: ['./rating.scss'],
	providers: [FetchRatedPlayers]
})

export class RatedPlayers implements OnInit{
	private rating: RatedPlayer;
	constructor(private ftchPlayers: FetchRatedPlayers){

	}

	ngOnInit(){
		this.ftchPlayers.getRatedPlayers()
		.subscribe(res => this.rating = res);
	}

	@Output() playerDetails: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
	openPlayerDetails(ev, player: Array<any>){
		ev.stopPropagation();
		this.playerDetails.emit(player);
	}
}