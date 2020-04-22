const HelloWorld = artifacts.require('Helloworld');

contract('HelloWorld', () => {
	it('Should return hello world', async () => {
		const helloWorld = await HelloWorld.deployed();
		const result = await helloWorld.hello();
		assert(result === 'Hello World');
	});
});

