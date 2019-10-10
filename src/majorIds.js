const { HLTV } = require('hltv');
const fs = require('fs');

function jsonify(ctnt, filename) {
	var jsonContent = JSON.stringify(ctnt);
	// console.log(jsonContent);

	fs.writeFile(filename + '.json', jsonContent, 'utf8', function (err) {
		if (err) {
			console.log('An error occured while writing JSON Object to File.');
			return console.log(err);
		}
	});
}
var idArray = [];

function getEvent(eventId) {
    HLTV.getEvent({id: eventId}).then(res => {
        console.log(eventId);

        if(res.prizePool == '$1,000,000' || res.prizePool == '$250,000') {
            console.log(res.name);
            idArray.push(
                {eventId: eventId,
                 eventName: res.name});
            console.log(idArray);
            jsonify(idArray,"EventIds");
        }
    });
}

var countdown = 4443;

setInterval(() => {
    getEvent(countdown--);
    if(countdown == 1260) {
        console.log(idArray);
        process.exit();
    }
}, 150);

/* 
Result:
[
  { eventId: 4443, eventName: 'StarLadder Major Berlin 2019' },
  { eventId: 4328, eventName: 'BLAST Pro Series Madrid 2019' },
  { eventId: 4327, eventName: 'BLAST Pro Series Miami 2019' },
  { eventId: 4326, eventName: 'BLAST Pro Series São Paulo 2019' },
  { eventId: 4236, eventName: 'IEM Sydney 2019' },
  { eventId: 4205, eventName: 'BLAST Pro Series Lisbon 2018' },
  { eventId: 4177, eventName: 'DreamHack Masters Dallas 2019' },
  { eventId: 3954, eventName: 'IEM Chicago 2018' },
  { eventId: 3883, eventName: 'IEM Katowice 2019' },
  { eventId: 3833, eventName: 'IEM Shanghai 2018' },
  { eventId: 3703, eventName: 'ESL One New York 2018' },
  { eventId: 3701, eventName: 'BLAST Pro Series Copenhagen 2018' },
  { eventId: 3647, eventName: 'BLAST Pro Series Istanbul 2018' },
  { eventId: 3564, eventName: 'FACEIT Major 2018' },
  { eventId: 3530, eventName: 'IEM Sydney 2018' },
  { eventId: 3515, eventName: 'ELEAGUE CS:GO Premier 2018' },
  { eventId: 3491, eventName: 'DreamHack Masters Marseille 2018' },
  { eventId: 3389, eventName: 'DreamHack Masters Stockholm 2018' },
  { eventId: 3247, eventName: 'ELEAGUE Major 2018' },
  { eventId: 3016, eventName: 'ELEAGUE CS:GO Premier 2017' },
  { eventId: 2998, eventName: 'BLAST Pro Series Copenhagen 2017' },
  { eventId: 2853, eventName: 'ELEAGUE Clash for Cash' },
  { eventId: 2720, eventName: 'PGL Major Krakow 2017' },
  { eventId: 2684, eventName: 'DreamHack Masters Malmö 2017' },
  { eventId: 2637, eventName: 'IEM Katowice 2017' },
  { eventId: 2636, eventName: 'ESL One New York 2017' },
  { eventId: 2635, eventName: 'ESL One Cologne 2017' },
  { eventId: 2471, eventName: 'ELEAGUE Major 2017' },
  { eventId: 2239, eventName: 'ESL One New York 2016' },
  { eventId: 2099, eventName: 'DreamHack Masters Malmö 2016' },
  { eventId: 2062, eventName: 'ESL One Cologne 2016' },
  { eventId: 2036, eventName: 'IEM Katowice 2016' },
  { eventId: 2027, eventName: 'MLG Columbus 2016' },
  { eventId: 1986, eventName: 'ESL ESEA Pro League Season 2 Finals' },
  { eventId: 1882, eventName: 'ESL ESEA Dubai Invitational 2015' },
  { eventId: 1753, eventName: 'ESL ESEA Pro League Season 1 Finals' },
  { eventId: 1666, eventName: 'ESL One Cologne 2015' },
  { eventId: 1617, eventName: 'DreamHack Open Cluj-Napoca 2015' },
  { eventId: 1615, eventName: 'FACEIT League 2015 Stage 3 Finals at DH Winter 2015' },
  { eventId: 1611, eventName: 'ESL One Katowice 2015' },
  { eventId: 1553, eventName: 'DreamHack Winter 2014' },
  { eventId: 1444, eventName: 'ESL One Cologne 2014' },
  { eventId: 1333, eventName: 'EMS One Katowice 2014' },
  { eventId: 1270, eventName: 'DreamHack Winter 2013' }
]

Majors: (from https://liquipedia.net/counterstrike/Majors#List_of_CS:GO_Major_Championships)
[ 1270, 1333, 1444, 1553, 1611, 1666, 1617, 2027, 2062, 2471, 2720, 3247, 3564, 3883, 4443 ]

*/