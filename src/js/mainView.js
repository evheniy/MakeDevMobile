var tpl = _.template(require('html!./../templates/main.html'));
module.exports = Backbone.View.extend({
    el: $('#main'),
    render:function () {
        this.$el.html(tpl({test: 'main'}));
        return this;
    }
});