import { Component, Input } from '@angular/core';



@Component({
	selector: 'player-detail',
	templateUrl: './profile.html',
	styleUrls: ['./profile.scss']
})

export class ProfileDetail{

	private _playerInfo: Object;

	@Input()
	set playerInfo(playerInfo){
		this._playerInfo = playerInfo ? playerInfo : {};
	}


}