define(function (require, exports, module) {
    exports.overlayBaseURL = "https://alb.primary.prod.gcms.the-infra.com/";

    if (window.location.host == "oup40.cloudcms.net") {
        exports.overlayBaseURL = "https://oup-overlay.herokuapp.com/";
    } else if (window.location.host == "localhost.com") {
        exports.overlayBaseURL = "http://localhost.com:2999/";
    }
});