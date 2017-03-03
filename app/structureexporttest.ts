class ModelClass {
    public Text = "Yay. This comes from a KO model.";
}

export default { 
    viewModel: ModelClass, 
    template: '<h1 data-bind="text: Text">original text in template</h1>'
};