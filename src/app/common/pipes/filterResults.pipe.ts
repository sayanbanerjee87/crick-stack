import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform{

	transform(items: any[], searchText: string){
		if(!items) return [];
		if(!searchText) return items;
		let srchText = searchText.toLowerCase();
		return items.filter( itm => {
			if(itm.name.toLowerCase().startsWith(srchText)){
				return itm;
			}
		});
	}
}