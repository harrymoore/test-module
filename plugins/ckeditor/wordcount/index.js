define(function (require, exports, module) {

    var Helper = require("../helper.js");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    Helper.registerPlugin("wordcount", moduleId);
    window.CKEDITOR.config.wordcount = {
        showParagraphs: false,
        showWordCount: false,
        showCharCount: false,
        countSpacesAsChars: false,
        countHTML: false
        //maxWordCount: 10,
        //maxCharCount: 10
    };
});