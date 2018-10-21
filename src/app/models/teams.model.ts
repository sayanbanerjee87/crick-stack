"use strict";
import { Players } from './players.model';
export interface TeamNames{
	name: string;
	id: number;
	ranking: number;
	isExpanded: boolean;
	players: Players[];
}
