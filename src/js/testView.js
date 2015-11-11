var tpl = _.template(require('html!./../templates/test.html'));
module.exports = Backbone.View.extend({
    el: $('#main'),
    render:function () {
        this.$el.html(tpl({test: 'test'}));
        return this;
    }
});