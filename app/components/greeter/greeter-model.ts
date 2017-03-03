import * as ko from 'knockout';

class GreeterViewModel {
    public Text = ko.observable("Yay.");
    public Message = "Yo man. This is a text from the greeter model.";

    public doAction() {
        this.Text("Whooha. You clicked.");
    }
}

export default { 
    viewModel: GreeterViewModel, 
    template: 'components/greeter/greeter-template.html'
};