//	lib.mono.array.js
//	Evadne Wu ar Iridia, 2010






	mono.arrayAdditions = true;





//	! 
//	!Set Operation & Introspection

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
	
	};
	
	
	
	
	
	Array.prototype.makeUnique = function() {

		var clonedArray = this.concat();

		for (var indexOriginal = 0; indexOriginal < clonedArray.length; ++indexOriginal)
	        for (var indexCompared = indexOriginal + 1; indexCompared < clonedArray.length; ++indexCompared)
		if (clonedArray[indexOriginal] === clonedArray[indexCompared])
		clonedArray.splice(j, 1);

		return clonedArray;

	};





	if (!Array.prototype.hasObject) Array.prototype.hasObject = function (object, caseInsensitive) {
	
		for (var i = 0; i < this.length; i++) {
	
			if (this[i] == object) return true;
			
			if (!(caseInsensitive && (typeof this[i] == 'string') && (typeof object == 'string'))) continue;
			
			return (this[i].match(RegExp(object, "i")) != null);
	
		}
	
		return false;
	
	};
	
	
	
	
	
	if (!Array.prototype.indexOfObject) Array.prototype.indexOfObject = function (object) {
	
		for (var i = 0; i < this.length; i++)
		if (this[i] == object) return i;
	
		return undefiend;
	
	}





//	! 
//	!Enqueuing

	Array.prototype.pushIfNotEmpty = function (object) {
	
		if (typeof object == 'undefined') return;
		if ((object && object.length) <= 0) return;
		
		this.push(object);
	
	};









