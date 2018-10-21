import { Batting } from './batting.model';
import { Bowling } from './bowling.model';

export interface Players{
	batting: Batting;
	bowling: Bowling;
	profile: string;
	imageURL: string;
	country: string;
}