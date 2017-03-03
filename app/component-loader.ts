import * as ko from 'knockout';
import * as $ from 'jquery';

class ComponentLoader {
    public static init() {
        var templateFromUrlLoader = {
            loadTemplate: function (name, templateConfig, callback) {
                let t: string = templateConfig;

                if (t.startsWith('components/')) {
                    // Uses jQuery's ajax facility to load the markup from a file
                    var fullUrl = '/' + templateConfig;
                    console.log("Loading template: " + fullUrl);

                    $.get(fullUrl, function (markupString) {
                        // We need an array of DOM nodes, not a string.
                        // We can use the default loader to convert to the
                        // required format.
                        ko.components.defaultLoader.loadTemplate(name, markupString, callback);
                    });
                } else {
                    // Unrecognized config format. Let another loader handle it.
                    callback(null);
                }
            }
        };

        // Register it
        ko.components.loaders.unshift(templateFromUrlLoader);
    }
}

export default ComponentLoader;
