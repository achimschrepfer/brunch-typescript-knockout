import greeter from './hello';

class App {

	constructor() {
		console.log('TS App initialized.')
		this.hello()
	}

	private hello() {
		console.log(`Hello ${this.who} !`)

        var g = new greeter();
        g.Greet();
	}

	private who = 'World'
}

export = new App

