function divideArray(arr) {
    let nums = arr;
    arr.sort(function(a, b) {
   return a - b;
});
    let evenNums = [];
	let oddNums = [];
	var i;
    
    for(i=0;i<nums.length;i++){
		if(arr[i] % 2 == 0) {
			evenNums.push(arr[i]);
		}
		else {
			oddNums.push(arr[i]);
		}
	}
	
	console.log("Even numbers:");
	for(i=0;i<evenNums.length;i++) {
		console.log(evenNums[i]);
	}
	if(evenNums.length == 0) {
		console.log("None");
    }
		
	console.log("Odd numbers:");
	for(i=0;i<oddNums.length;i++) {
		console.log(oddNums[i]);
	}
	if(oddNums.length == 0) {
		console.log("None");
	} 
}