function memoize(fn){
	var cache={};
	return function(){
		var key = JSON.stringify(arguments);
		console.log(cache[key] ? "from cache.." : "juz processed..");
		if (typeof cache[key] === "undefined")
			cache[key] = fn.apply(this, arguments);
		return cache[key];
	}
}