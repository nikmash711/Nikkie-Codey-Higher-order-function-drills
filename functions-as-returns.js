function hazardWarningCreator( typeOfWarning ) {
    let warningCounter = 0;

    return ( location ) =>  {
        warningCounter++;

        let time = 'times';
        if( warningCounter === 1) {
            time = 'time'
        }
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the road');
const tornadoWarning = hazardWarningCreator('Tornado on the road');
const sharkWarning = hazardWarningCreator('Sharks on the road');

rocksWarning('Arizona');
tornadoWarning('California');
rocksWarning('LA');