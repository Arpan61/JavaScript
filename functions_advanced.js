//Arrow functions

var nameImprover = (name, adj) => {
    return 'Col ${name} Mc ${adj} pants';
};

MimeTypeArray.forEach(val => console.log(val));


//Projecting
//filter  data and then map data

const suspects = _.filter(videodata, function (suspectObject) {
    return suspectObject.present;
});

const suspectNames = _.mop(suspects, suspect => {
    return suspects.name;
});


//Spread Operator and arguments
const createTuple = (a, b, c, ...d) => {
    console.log(arguments);  //["Hi", "How", "are", "doing", "today", "?"]
    return [[a, b], [c, d]];
}

createTuple("Hi", "How", "are", "doing", "today", "?")

//arguments keywork does not take into account the default parameters

