const { HLTV } = require('hltv');
const EVENTS = [ 1270, 1333, 1444, 1553, 1611, 1666, 1617, 2027, 2062, 2471, 2720, 3247, 3564, 3883, 4443 ];

var events = [];

for(const eventId of EVENTS) {
  HLTV.getEvent({id: eventId}).then(res => {
    var event = {};

    event.id = res.id;
    event.name = res.name;
    event.date = res.dateEnd;
    event.prizePool = Number(res.prizePool.substr(1).replace(/,/g, ''));
    event.maps = res.mapPool;

    event.teams = [];
    for(const team of res.teams) {
      event.teams.push(team.name);
    }

    events.push(event);

    console.log(events);
  });
}