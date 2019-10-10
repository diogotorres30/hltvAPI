const { HLTV } = require('hltv');
const EVENTS = [ 1270, 1333, 1444, 1553, 1611, 1666, 1617, 2027, 2062, 2471, 2720, 3247, 3564, 3883, 4443 ];

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

var events = [];

for(const eventId of EVENTS) {
  HLTV.getEvent({id: eventId}).then(res => {
    var event = {};

    event.id = res.id;
    event.name = res.name;
    event.date = new Date(res.dateEnd);
    event.prizePool = Number(res.prizePool.substr(1).replace(/,/g, ''));
    event.maps = res.mapPool;

    event.teams = [];
    for(const team of res.teams) {
      event.teams.push(team.name);
    }

    events.push(event);
    jsonify(events,"EventsData");
    
  });
}

