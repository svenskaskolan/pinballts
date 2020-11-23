// repeats function every 3 seconds and kills it using the callback after 25 seconds.

let count = 0;
console.log('Current user is', process.env.USER);
console.log('VAL1 is equal to ' + process.env.VAL1);
const theOncFunc = () => {
    count += 1;
    console.log('Hello world');
    if (count === 5) {
        console.log('done');
        clearInterval(intervalCallback);
    }
}

const intervalCallback = setInterval(theOncFunc, 3000);
