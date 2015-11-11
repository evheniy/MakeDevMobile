var ViewManager = require('./viewManager'),
    MainView = require('./mainView');
module.exports = Backbone.Router.extend({
    initialize: function () {
        Materialize.toast('I am a toast!', 4000);
        Backbone.history.start({
            root: '/',
            pushState: true
        });
    },
    routes: {
        '' : 'main'
    },
    main: function(){
        ViewManager.showView(new MainView());
    }
});