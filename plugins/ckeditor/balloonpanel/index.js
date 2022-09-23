define(function (require, exports, module) {

    var Helper = require("../helper.js");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    Helper.registerPlugin2("balloonpanel", moduleId);
});