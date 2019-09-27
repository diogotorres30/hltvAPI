const { HLTV } = require('hltv')

HLTV.getTeamRanking({ year: '2017', month: 'may', day: '29' }).then((res) => {
    console.log(res);
})

// HLTV.getMatch({ id: 2306295 }).then(res => {
//     console.log(res.players);
// })


// HLTV.getEvent({ id: 3389 }).then(res => {
//     console.log(res);
// })

// HLTV.getStreams().then((res) => {
//     console.log(res);
// })