class Form {
    constructor() { }

    display() {
        var title = createElement('h1')
        title.html("Car Racing Game!!");
        title.position(430, 0)

        var input = createInput("Enter Name")
        var button = createButton("Play")
        var greeting = createElement("h3")
        button.position(450, 200)
        input.position(430, 160)
        button.mousePressed(function () {
            input.hide()
            button.hide()
            var name = input.value()
            // playerCount=playerCount+1;
            playerCount += 1;
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello " + name)
            greeting.position(530, 160)
            
        })

    }
}

