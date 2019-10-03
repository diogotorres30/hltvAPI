const { HLTV } = require('hltv');

const fs = require('fs');

function jsonify(ctnt) {
	var jsonContent = JSON.stringify(ctnt);
	// console.log(jsonContent);

	fs.writeFile('output.json', jsonContent, 'utf8', function (err) {
		if (err) {
			console.log('An error occured while writing JSON Object to File.');
			return console.log(err);
		}
	});
}

// HLTV.getMatch({ id: 2306295 }).then((res) => {
// 	jsonify(res.players);
// });

// HLTV.getTeamRanking({ year: '2017', month: 'may', day: '29' }).then((res) => {
//     jsonify(res);
// })

// HLTV.getMatchMapStats({ id: 49968 }).then((res) => {
// 	jsonify(res);
// })

// HLTV.getEvents().then(res => {
// 	jsonify(res);
// })
var countdown = 4443;

var myVar = setInterval(hltvThrottle, 250);

var idArray = [];

function hltvThrottle(){
	HLTV.getEvent({ id: countdown }).then(res => {
		console.log(countdown);
		if (res.prizePool == '$1,000,000' || res.prizePool == '$250,000') {
			idArray.push[res.id];
			console.log(res.name);
			console.log(res.prizePool);
		}
		countdown--;
		if (countdown == 0){
			console.log(idArray);
			fs.write('idArray.txt', idArray, 'utf8');
			process.exit();
		}
	})
}



// HLTV.getStreams().then((res) => {
//     console.log(res);
// })
