import greeter from './hello';
import * as $ from 'jquery';
import * as ko from 'knockout';
//import greetingModel from './greetingmodel';
//import structuremodule from './structureexporttest';
import greetComponent from './components/greeter/greeter-model';
import cl from './component-loader';

class App {

	constructor() {
		console.log('TS App initialized.')
        cl.init();

		this.hello()
	}

	private hello() {
		console.log(`Hello ${this.who} !`)

        $(document).ready(() => {
            $("#greeting").html("Greeting refreshed by JQuery :-)");
        })

        var g = new greeter();
        g.Greet();

        //ko.components.register("my-component", structuremodule);
        ko.components.register("greeter", greetComponent);
        ko.applyBindings();

        //ko.applyBindings(new greetingModel(), document.getElementById("boundgreeting"));
	}

	private who = 'World'
}

export = new App

