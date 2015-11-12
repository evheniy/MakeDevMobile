var tpl = _.template(require('html!./../templates/test.html'));
module.exports = Backbone.View.extend({
    render: function () {
        'use strict';
        $('#main').html(this.$el.html(tpl({test: 'test'})));
        return this;
    }
});