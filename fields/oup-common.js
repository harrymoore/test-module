define(function (require, exports, module) {

    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    
    
    var cssPath1 = "https://fonts.googleapis.com/css?family=Merriweather:300,400,400italic,700,700italic|Source+Sans+Pro:400,400italic,700,700italic";

    var cssPath2 = "../../../" + moduleId + "/oup-ui/resources/contents.css";

    var cssPath3 = "../../../" + moduleId + "/oup-ui/resources/ckeditorCstm.css";


    window.CKEDITOR.config.contentsCss = [cssPath1, cssPath2 , cssPath3];
});