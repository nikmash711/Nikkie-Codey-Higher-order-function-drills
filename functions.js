'use strict';

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const filteredMovements = turtleMovements.filter(movement => movement[0]>=0 && movement[1]>=0);

console.log(filteredMovements);

const totalMovements = turtleMovements.map(movement => Math.abs(movement[0])+ Math.abs(movement[1]));

console.log(totalMovements);

totalMovements.forEach(element => {
    console.log(element);
});