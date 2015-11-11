var tpl = _.template(require('html!./../templates/template.html'));
module.exports = Backbone.View.extend({
    el: $('#main'),
    render:function () {
        this.$el.html(tpl({test: '123123123'}));
        return this;
    }
});