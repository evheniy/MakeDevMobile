var MainView = require('./mainView'),
    TestView = require('./testView');
module.exports = Backbone.Router.extend({
    initialize: function () {
        Materialize.toast('Started!', 4000);
        Backbone.history.start({
            root: '/',
            pushState: true
        });
        $(document).on("click","a",function(e){
            e.preventDefault();
            Backbone.history.navigate($(this).attr("href"),true);
        });
    },
    routes: {
        '' : 'main',
        'test': 'test'
    },
    main: function() {
        console.log('main');
        Materialize.toast('Main!', 4000);
        new MainView().render();
    },
    test: function () {
        console.log('test');
        Materialize.toast('Test!', 4000);
        new TestView().render();
    }
});