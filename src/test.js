function rotateArrays(first, second){
	let len1 = first.length
	let len2 = second.length
	let firstInFirst = first[0];
	let lastInFirst = first[len1 - 1];
	
	let firstInSecond = second[0];
	
	let slicedFirst = first.slice(1, -1);
	let slicedSecond = second.slice(1);
	
	first = [firstInFirst, firstInSecond, ...slicedFirst];
	second = [...slicedSecond, lastInFirst];

	const x = 2;
	
	return [first, second];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//const fs = require('node:fs');

const teamNames = ['Manchester United', 'AFC Bournemouth', 'Arsenal', 'Aston Villa', 'Brentford', 'Brighton & Hov', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Ipswich Town', 'Leicester City', 'Liverpool', 'Manchester City', 'Newcastle United', 'Nottingham Forest', 'Southampton', 'Tottenham Hotspur', 'West Ham United', 'Wolverhampton'/**/];
const teams = [];
for(let i in teamNames){
	console.log(i, teamNames[i]);
	teams.push({
		id: (i*1+1),
		name: teamNames[i]
	});
}


//console.log(teams, teams.length);

let max = teams.length;
let smax = max/2;
let first = [];
let second = [];
let tours = max - 1;
let pairs = [];
let fulltours = tours*2;
for(let i = 1; i <= fulltours; i++){
	pairs[i] = [];
}

for(let i = 1; i <= smax; i++){
	first.push(i);
}
for(let i = smax + 1; i <= max; i++){
	second.push(i);
}
second = second.reverse();

for(let i = 1; i <= fulltours; i++){
	console.log(first, second);
	for(let j = 0; j < first.length; j++){
		if(i > tours){
			pairs[i].push([second[j], first[j]]);
		}else{
			pairs[i].push([first[j], second[j]]);
		}		
	}
	[first, second] = rotateArrays(first, second);
}


function testPairs(pairs){
	//console.log(pairs);
	let $cnts = [];
	for(let tour of pairs){
		//console.log(tour);
		if(!tour){
			continue;
		}
		for(let pair of tour){
			if(!$cnts[pair[0]]){
				$cnts[pair[0]] = 0;
			}
			if(!$cnts[pair[1]]){
				$cnts[pair[1]] = 0;
			}
			$cnts[pair[0]] += 1;
			$cnts[pair[1]] += 1;
		}
	}
	/*for(let i in pairs){
		console.log(pairs[i]);
		if(!$cnts[pairs[i][0]]){
			$cnts[pairs[i][0]] = 0;
		}
		if(!$cnts[pairs[i][1]]){
			$cnts[pairs[i][1]] = 0;
		}

		$cnts[pairs[i][0]] += 1;
		$cnts[pairs[i][1]] += 1;
	}*/
	return $cnts;
}

console.table(testPairs(pairs));

//console.log(testPairs(pairs));



let fixtures = [];
// [tour, t1, t2, g1, g2]
for(let i = 1; i <= fulltours; i++){
	let matches = pairs[i];
	for(let j in matches){
		//console.log(matches[j]);
		fixtures.push([i, matches[j][0], matches[j][1], getRandomInt(3), getRandomInt(3)]);
	}
}
console.log(fixtures);
const fs = require('node:fs');
const content = {
	teams: teams,
	fixtures: fixtures
};
fs.writeFile('./data.json', JSON.stringify(content), err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});


//return;
