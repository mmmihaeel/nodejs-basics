process.on('message', (msg) => {
	if (msg == 'disconnect') {
		process.disconnect();
		return;
	}
	console.log(`CLient get: ${msg}`);
	process.send('Pong!');
})