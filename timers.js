// ------ 1
const start = performance.now();
setTimeout(() => {
	console.log('Second passed?');
	console.log(performance.now() - start);
}, 1000);

// ------ 2
function myFunc(arg) {
	console.log(`Argument => ${arg}`);
}

setTimeout(myFunc, 1500, 'Хороший');

// ------ 3
const timerId = setTimeout(() => {
	console.log('BOOM!');
}, 6000);

setTimeout(() => {
	clearTimeout(timerId);
	console.log('Cleaned!');
}, 1000);

// ------ 4
const intervalId = setInterval(() => {
	console.log(performance.now());
}, 1000);

setTimeout(() => {
	clearInterval(intervalId);
}, 3000);

// ------ 5
console.log('Before');

setImmediate(() => {
	console.log('After all');
});

console.log('After');


// ------ 6
const timerObj = setTimeout(() => {
	console.log('Will i be called?');
}, 2000);
timerObj.unref();
setImmediate(() => {
	timerObj.ref();
});
