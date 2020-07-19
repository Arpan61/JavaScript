
//Basic for loop
function foo() {
    for (let i = 0; i < 5, i++) {
        console.log(i);
    }
}
foo()


const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "Orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

var gameloop = function () {
    for (var i = 0; i < game.suspects.length; i++) {
        console.log("Outer Loop")
        for (var key in game.suspects[i]) {
            console.log("Inner Loop")
            if (game.suspects[i][key] === "Rusty") {
                console.log("Found Them!")
            } else {
                console.log("Next Time!")
            }
        }
    }
}


//Destructuring
const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

var [col1, col2] = [suspects[0].color, suspects[1].color];
var [{ color: firstColor }, { color: secondColor }] = suspects