require('expose?$!expose?jQuery!jquery');
require('expose?Hammer!hammerjs');
require("expose?_!underscore");
window.jQuery = require("jquery");
window.$ = require("jquery");

require("backbone");
require("materialize");
var tpl = _.template(require('html!./../templates/template.html'));
console.log(tpl({test: '123123123'}));
var ViewManager = require('./viewManager');
alert('Hello world');
$('p').html('test');
Materialize.toast('I am a toast!', 4000);
