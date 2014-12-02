var products = [
	{id : 7, name : "Pen", cost : 10, units : 20, category : 1},
	{id : 5, name : "Ten", cost : 20, units : 70, category : 2},
	{id : 8, name : "Den", cost : 22, units : 40, category : 1},
	{id : 3, name : "Zen", cost : 15, units : 30, category : 2},
	{id : 9, name : "Hen", cost : 70, units : 50, category : 1},
	{id : 2, name : "Ken", cost : 60, units : 20, category : 2}
];

console.log("Default list");
console.table(products);

var sort = function(){
	for(var i=0;i<products.length-1;i++)
		for(var j=i+1; j<products.length;j++)
			if (products[i].id > products[j].id){
				var temp = products[i];
				products[i] = products[j];
				products[j] = temp;
				
			}
}


console.log("After sorting (default)");
sort();
console.table(products);

var sort = function(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1; j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
				
			}
}

console.log("After sorting (name)");
sort(products,"name");
console.table(products);

console.log("After sorting (cost)");
sort(products,"cost");
console.table(products);

var sort = function(list,comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1; j<list.length;j++)
			if (comparerFn(list[i], list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

var compareProductByValue = function(p1,p2){
	var p1Value = p1.cost * p1.units,
		p2Value = p2.cost * p2.units;
	if (p1Value < p2Value) return -1;
	if (p1Value === p2Value) return 0;
	return 1;
}

console.log("After sorting (product value)");
sort(products,compareProductByValue);
console.table(products);


//min
var min = function(list, valueSelector){
	var result = valueSelector(list[0]);
	for(var i=1;i<list.length;i++){
		var value = valueSelector(list[i]);
		if (value < result) result = value;
	}
	return result;
}

//max
//avg
//sum

//filter
var filter = function(list, predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}

var costlyProductPredicate = function(p){ return p.cost > 50 ;}

var notPredicate = function(predicate){
	return function(){
		return !predicate.apply(this,arguments);
	}
}

var affordableProductPredicate = notPredicate(costlyProductPredicate);
var affordableProducts = filter(products,affordableProductPredicate);
//groupBy

var groupBy = function(list,keySelector){
	var result = {};
	for(var i=0;i<list.length;i++){
		var item = list[i];
		var key = keySelector(item);
		if (typeof result[key] === "undefined")
			result[key] = [];
		result[key].push(item);
	}
	return result;
}

var categoryKeySelector = function(p){ return p.category; };
var producstByCategory = groupBy(products, categoryKeySelector);

var costKeySelector = function(p){ return p.cost < 50 ? "affordable" : "costly" ;};
var productsByCost = groupBy(products,costKeySelector);

//any
var any = function(list,predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i])) return true;
	return false;
}

//all
var all = function(list,predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i])) return false;
	return true;
}

