//	lib.mono.array.js
//	Evadne Wu ar Iridia, 2010





Array.prototype.supersets = function (anArray) {

	for (plausibleItemIndex in this) {

		if (!this.hasOwnProperty(plausibleItemIndex)) continue; 
		if (this[plausibleItemIndex] != anArray[0]) continue; 
		
		if ((this.length - plausibleItemIndex) < anArray.length) break;
		
		var subArrayMatched = true;	//	assertion

		for (itemIndexDelta in anArray) {
		
			if (!anArray.hasOwnProperty(itemIndexDelta)) continue; 
		
			var comparingElement = this[Number(plausibleItemIndex) + Number(itemIndexDelta)];
			var comparedElement = anArray[itemIndexDelta];
		
			if (comparingElement != comparedElement) {
			
				subArrayMatched = false;
				break;
			
			}
		
		}
		
		if (subArrayMatched) return true;
		
	}

	return false;

}




