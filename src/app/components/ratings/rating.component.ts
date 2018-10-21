import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import { FetchRatedPlayers } from './fetch.service';
import { RatedPlayer } from "./../../models/rating.model";
import { DialogContentDialog } from "./../../components/dialog/dialog.component";


@Component({
	selector: 'player-ratings',
	templateUrl: './rating.html',
	styleUrls: ['./rating.scss'],
	providers: [FetchRatedPlayers]
})

export class RatedPlayers implements OnInit{
	private rating: RatedPlayer;
	constructor(private ftchPlayers: FetchRatedPlayers, public dialog: MatDialog){

	}

	openDialog() {
	const dialogRef = this.dialog.open(DialogContentDialog,{
		"width": "500px"
	});

		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		});
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