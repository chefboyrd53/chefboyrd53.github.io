function struct(track, avgFinish, timesPlayed) {
    this.track = track;
    this.avgFinish = avgFinish;
    this.timesPlayed = timesPlayed;
}

var allTracks = [new struct('mariokartstadium', 0, 0),
                 new struct('waterpark', 0, 0),
                 new struct('sweetsweetcanyon', 0, 0),
                 new struct('thwompruins', 0, 0)];

alert('did it');

function test(track, placement) {
    for (let i = 0; i < 4; i++) {
        if (allTracks[i].track == track) {
            alert('in loop');
            allTracks[i].timesPlayed++;
            allTracks[i].avgFinish = ((allTracks[i].avgFinish * (allTracks[i].timesPlayed - 1)) + placement.value) / allTracks[i].timesPlayed;
        }
    }

    // Update the demo paragraph after the loop
    alert(track + '<br>Avgerage Placement: ' + allTracks[i].avgFinish + '<br>Times Played: ' + allTracks[i].timesPlayed);
}
