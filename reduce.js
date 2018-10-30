const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const words = input.split(" ");

const reducer = ( decodedMessage, word ) => {
    if( word.length === 3 ) {
        return decodedMessage + ' ';
    }
    else {
      return decodedMessage += word[word.length -1].toUpperCase();
    }

}

// reducer function -> .reduce( function , starting value );
let message = words.reduce( reducer, "" );

console.log(message);