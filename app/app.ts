import greeter from './hello';
import * as $ from 'jquery';
import * as ko from 'knockout';
import greetingModel from './greetingmodel';


class App {

	constructor() {
		console.log('TS App initialized.')
		this.hello()
	}

	private hello() {
		console.log(`Hello ${this.who} !`)

        $(document).ready(() => {
            $("#greeting").html("Refreshed greeting :-)");
        })

        var g = new greeter();
        g.Greet();

        ko.applyBindings(new greetingModel(), document.getElementById("boundgreeting"));
	}

	private who = 'World'
}

export = new App

