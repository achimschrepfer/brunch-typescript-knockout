import greeter from './hello';
import * as $ from 'jquery';
import * as ko from 'knockout';
import greetingModel from './greetingmodel';
import structuremodule from './structureexporttest';

class App {

	constructor() {
		console.log('TS App initialized.')
		this.hello()
	}

	private hello() {
		console.log(`Hello ${this.who} !`)

        $(document).ready(() => {
            $("#greeting").html("Greeting refreshed by JQuery :-)");
        })

        var g = new greeter();
        g.Greet();

        ko.components.register("my-component", structuremodule);
        ko.applyBindings(null, document.getElementById("component-space"));

        ko.applyBindings(new greetingModel(), document.getElementById("boundgreeting"));
	}

	private who = 'World'
}

export = new App

