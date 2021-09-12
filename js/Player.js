class Player {
    constructor() { }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", function (data) {
            playerCount = data.val()
        })
    }

    update(playerName){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:playerName
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
}