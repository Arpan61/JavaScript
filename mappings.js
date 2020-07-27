const weapons = ["candle sticks", "lead pipe", "revolver"]
const makeBroken = function (item) {
    return 'broken ${item}';
}

function CreatesuspectObjects(name) {
    return {
        name: name,
        color: name.split(" ")[1],
        speak() { log('My name is ${this.name}') }
    }
}

var suspects = ["Miss Scarlet", "Colonel Mustard"];

var suspectList = _.map(suspects, function (name) {
    return CreatesuspectObjects(name);
});

_.each(suspects, function (suspect) {
    suspect.speak();
})

//Map cannot returnanything but foreach can return


