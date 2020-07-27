//input to the reducce is the colletion and the callback function
//reduce always return one function
//reduce will call the function on each value of the collection 


//eachRight looks the value from right to left



const notInRoom = (suspect, memo) => {
    const emptyRooms = reduce(suspect.rooms, (room, memo) => {
        if (room === false) memo.push(room)
        return memo
    }, []);
    return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom) // returns the room in which the character will not be there

_.intersection(...notInRooms)// returns the intersection of the room in which all the people/characters were not present




//currying allows sending the arguments one by one. The function waits for all the arguments and then executes and sends the result


