var MainView = require('./mainView'),
    TestView = require('./testView'),
    ContentModel = require('./contentModel'),
    PageModel = require('./pageModel'),
    Router = Backbone.Router.extend({
        view: null,
        initialize: function () {
            'use strict';
            Materialize.toast('Started!', 4000);
            Backbone.history.start({
                root: '/',
                pushState: true
            });
            $(document).on('click', 'a', function (e) {
                e.preventDefault();
                Backbone.history.navigate($(this).attr('href'), true);
            });
        },
        routes: {
            '' : 'main',
            'test': 'test'
        },
        loadView : function (view) {
            'use strict';
            if (this.view) {
                this.view.remove();
            }
            this.view = view;
            this.view.render();
        },
        main: function () {
            'use strict';
            Materialize.toast('Main!', 4000);
            this.loadView(new MainView());
        },
        test: function () {
            'use strict';
            var contentModel = new ContentModel();
            contentModel.fetch().complete(function () {
                console.log(contentModel.get('data'));
                var pageModel = new PageModel();
                pageModel.url += 'books/javascript_pocket_guide.json';
                pageModel.fetch().complete(function () {
                    console.log(pageModel.get('data'));
                });
            });
            Materialize.toast('Test!', 4000);
            this.loadView(new TestView());
        }
    });
module.exports = new Router();