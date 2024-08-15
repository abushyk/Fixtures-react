let teams = [];
teams[1] = 'Aston Villa';
teams[2] = 'Manchester United';
teams[3] = 'Chelsea';
teams[4] = 'Fulham';
teams[5] = 'Liverpool';
teams[6] = 'Manchester City';
teams[7] = 'Tottenham Hotspur';
teams[8] = 'West Ham United';

let fixtures = [
	{ h_team_id: 1, v_team_id: 2, h_team_g: 3, v_team_g: 0 },
	{ h_team_id: 2, v_team_id: 1, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 1, v_team_id: 3, h_team_g: 2, v_team_g: 2 },
	{ h_team_id: 3, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 4, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 4, v_team_id: 1, h_team_g: 2, v_team_g: 2 },
	{ h_team_id: 1, v_team_id: 5, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 5, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 6, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 6, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 7, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 7, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 8, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 8, v_team_id: 1, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 2, v_team_id: 3, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 3, v_team_id: 2, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 2, v_team_id: 4, h_team_g: 3, v_team_g: 2 },
	{ h_team_id: 4, v_team_id: 2, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 2, v_team_id: 5, h_team_g: 0, v_team_g: 1 },
	{ h_team_id: 5, v_team_id: 2, h_team_g: 0, v_team_g: 1 },
	{ h_team_id: 2, v_team_id: 6, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 6, v_team_id: 2, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 2, v_team_id: 7, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 7, v_team_id: 2, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 2, v_team_id: 8, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 8, v_team_id: 2, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 3, v_team_id: 4, h_team_g: 0, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 3, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 3, v_team_id: 5, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 5, v_team_id: 3, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 3, v_team_id: 6, h_team_g: 3, v_team_g: 2 },
	{ h_team_id: 6, v_team_id: 3, h_team_g: 1, v_team_g: 2 },
	{ h_team_id: 3, v_team_id: 7, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 7, v_team_id: 3, h_team_g: 2, v_team_g: 0 },
	{ h_team_id: 3, v_team_id: 8, h_team_g: 0, v_team_g: 3 },
	{ h_team_id: 8, v_team_id: 3, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 5, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 5, v_team_id: 4, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 6, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 6, v_team_id: 4, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 4, v_team_id: 7, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 7, v_team_id: 4, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 8, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 8, v_team_id: 4, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 5, v_team_id: 6, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 6, v_team_id: 5, h_team_g: 1, v_team_g: 2 },
	{ h_team_id: 5, v_team_id: 7, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 7, v_team_id: 5, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 5, v_team_id: 8, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 8, v_team_id: 5, h_team_g: 3, v_team_g: 0 },
	{ h_team_id: 6, v_team_id: 7, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 7, v_team_id: 6, h_team_g: 0, v_team_g: 1 },
	{ h_team_id: 6, v_team_id: 8, h_team_g: 2, v_team_g: 2 },
	{ h_team_id: 8, v_team_id: 6, h_team_g: 3, v_team_g: 2 },
	{ h_team_id: 7, v_team_id: 8, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 8, v_team_id: 7, h_team_g: 3, v_team_g: 1 }
  ]
/*
Правила сортування
 Якщо в команди більша к-ть очок, то вона займає вищу позицію
  Якщо очок рівна к-ть, то вищу позицію займає команда з більшою к-ть перемог
  Якщо к-ть перемог рівна, то вищу позицію займає команда з більшою різницею забитих та пропущених голів
  Якщо різниця голів рівна, то вищу позицію займає команда з більшою к-тю забитих голів
*/



function teamsData(teamName){
	return {
		name: teamName,
		MP: 0,
		W: 0,
		D: 0,
		L: 0,
		G: 0,
		P: 0,
	}
}


const getScores = function(teams, fixtures){

	let scores = []

	for(let x = 1; x < 9; x++){
		scores[x] = teamsData(teams[x])
	}

	for(let x = 0; x < fixtures.length; x++){
		scores[fixtures[x].h_team_id].MP ++
		scores[fixtures[x].v_team_id].MP ++
		scores[fixtures[x].h_team_id].G += fixtures[x].h_team_g
		scores[fixtures[x].v_team_id].G += fixtures[x].v_team_g
		if (fixtures[x].h_team_g > fixtures[x].v_team_g){
			scores[fixtures[x].h_team_id].W ++
			scores[fixtures[x].h_team_id].P += 3
			scores[fixtures[x].v_team_id].L ++
		}
		else if (fixtures[x].h_team_g < fixtures[x].v_team_g){
			scores[fixtures[x].v_team_id].W ++
			scores[fixtures[x].v_team_id].P += 3
			scores[fixtures[x].h_team_id].L ++
		}
		else {
			scores[fixtures[x].h_team_id].D ++
			scores[fixtures[x].v_team_id].D ++
			scores[fixtures[x].h_team_id].P ++
			scores[fixtures[x].v_team_id].P ++
		}
	}
	return scores;
}

const sortP = function(a, b){
	if(a.P > b.P){
		return -1;
	}else if(a.P < b.P){
		return 1;
	}
	return 0;
}

const sortW = function(a, b){
	if(a.W > b.W){
		return -1;
	}else if(a.W < b.W){
		return 1;
	}
	return 0;
}

const sortD = function(a, b){
	if(a.D > b.D){
		return -1;
	}else if(a.D < b.D){
		return 1;
	}
	return 0;
}

const sortL = function(a, b){
	if(a.L > b.L){
		return -1;
	}else if(a.L < b.L){
		return 1;
	}
	return 0;
}


const drawTable = function(scores, sort){

	console.log(sort);

	if(sort === 'W'){
		scores.sort(sortW);
	}else if(sort === 'D'){
		scores.sort(sortD);
	}else if(sort === 'L'){
		scores.sort(sortL);
	}else{
		scores.sort(sortP);
	}
	

	let container = document.getElementById('results');

	container.innerHTML = '';

	scores.forEach((item, i) => {
		let tr = document.createElement('tr');
		tr.innerHTML += '<td>'+i+'</td>';
		tr.innerHTML += '<td>'+item.name+'</td>';
		tr.innerHTML += '<td>'+item.MP+'</td>';
		tr.innerHTML += '<td>'+item.W+'</td>';
		tr.innerHTML += '<td>'+item.D+'</td>';
		tr.innerHTML += '<td>'+item.L+'</td>';
		tr.innerHTML += '<td>'+item.G+'</td>';
		tr.innerHTML += '<td></td>';
		tr.innerHTML += '<td></td>';
		tr.innerHTML += '<td>'+item.P+'</td>';


		container.appendChild(tr);
	})
}


let scores = getScores(teams, fixtures);

document.getElementById('sW').addEventListener("click", () => {drawTable(scores, 'W');});
document.getElementById('sD').addEventListener("click", () => {drawTable(scores, 'D');});
document.getElementById('sL').addEventListener("click", () => {drawTable(scores, 'L');});
document.getElementById('sP').addEventListener("click", () => {drawTable(scores, 'P');});

drawTable(scores, 'points')



//console.log(scores)
//console.table(scores)