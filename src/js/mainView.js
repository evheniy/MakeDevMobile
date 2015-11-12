var tpl = _.template(require('html!./../templates/main.html'));
module.exports = Backbone.View.extend({
    render: function () {
        'use strict';
        $('#main').html(this.$el.html(tpl({test: 'main'})));
        return this;
    }
});