#	`lib.mono.array.js`

##	Usage

	var anArray = [2046, 1048576, 1024];	
	var anOtherArray = [1048576, 1024];
	var aThirdArray = [undefined];

	var result = anArray.supersets(anOtherArray);		// true
	var anOtherResult = anArray.supersets(aThirdArray);	// false
	
	
	
	
	
##	Known Issues

It’s not very fast.




