import { Component, Input, Output, EventEmitter} from '@angular/core';



@Component({
	selector: 'tree-view',
	templateUrl: 'tree.html',
	styleUrls: ['tree.scss']
})


export class TreeView{
	private _treeData: Array<any>;
	@Input()
	set treeData(treeData){
		this._treeData = treeData ? treeData : [];
	}

	@Output() playerDetails: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
	openPlayerDetails(ev, player: Array<any>){
		ev.stopPropagation();
		this.playerDetails.emit(player);
	}
}