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

for (i = 4400; i < 4443; i--) {
	HLTV.getEvent({ id: i }).then(res => {
		if(res.prizePool == '$1,000,000' || res.prizePool == '$250,000') {
			console.log(res.name);
		}
	})

  }

// HLTV.getStreams().then((res) => {
//     console.log(res);
// })
