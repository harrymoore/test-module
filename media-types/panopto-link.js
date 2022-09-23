define(function (require, exports, module) {

    var Registry = require("medialink-builder/medialink-registry");
    var MediaLinkBuilder = require("medialink-builder/medialink-builder");

    return Registry.registerMediaLinkClass(MediaLinkBuilder.extend({

        /**
         * @override
         */
        getSchema: function () {
            return {

            };
        },

        /**
         * @override
         */
        getOptions: function () {
            return {

            };
        },

        /**
         * @override
         */
        generateLink: function (control, template, callback) {
            var el = MediaLinkBuilder.prototype.generateLink(control, template, callback);
            var mediaId = control.childrenByPropertyId["mediaId"].getValue();
            var height = control.childrenByPropertyId["Panopto"] && control.childrenByPropertyId["Panopto"].getValue()["height"] ?
                control.childrenByPropertyId["Panopto"].getValue()["height"] : "";

            el.attr("src", "https://oup.cloud.panopto.eu/Panopto/Pages/EmbeddedList.aspx?embedded=1&folderID=" + mediaId);
            el.attr("width", "800");
            el.attr("height", height);
            el.attr("frameborder", "0");

            callback(null, el);
        },

        /**
         * @override
         */
        canHandle: function (mediaType) {
            return mediaType == "panopto";
        }

    }));

});