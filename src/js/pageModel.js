module.exports = Backbone.Model.extend({
    url: 'http://api.makedev.org/v1/page/',
    defaults: {
        code: null,
        message: '',
        data: {},
        errors: [],
        notices: [],
        page: 1,
        limit: 0,
        allrecords: 0
    }
});