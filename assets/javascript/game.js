var randomNum = 0;
var wins = 0;
var losses = 0;
var totalScore = [];
var gemNum = [{
	b1: 0,
	b2: 0,
	b3: 0,
	b4: 0
}];

document.onkeyup = function(event) { 
	randomNum = Math.floor(Math.random() * 101) + 19;
	console.clear();
	console.log(randomNum);
	document.getElementById("randomNum").innerHTML = randomNum;


	// genNum[] = Math.floor(Math.random() * 12) + 1;
	// console.log(genNum.b1);
	// console.log(genNum.b2);
	// console.log(genNum.b3);
	// console.log(genNum.b4);


}

