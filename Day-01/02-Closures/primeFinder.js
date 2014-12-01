/*create a function that can be used to check if the given number is a prime number or not
the algorithm should not be run again and again for the same number*/


function getPrimeFinder(){
	var cache = {}
	function checkPrime(n){
		if (n <= 3) return true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0) return false
		return true;
	}
	function isPrime(n){
		if (typeof cache[n] !== "undefined"){
			console.log("from cache..");
			return cache[n];
		}
		console.log("juz processed..");
		cache[n] = checkPrime(n);
		return cache[n]
	}
	return isPrime;
}