function repeat( fn, n ) {

    let name = 'Codey';

    for( let i = 1; i <= n; i++) {
        fn(name);
    }
}


const hello = () => console.log('Hello world');

const hi = (name) => {
    console.log(`Hi, ${name}`);
}

function goodbye() {
    console.log('Goodbye world');
}

repeat( hi, 5 );
repeat(hello, 5);
repeat(goodbye, 5);