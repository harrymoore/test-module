define(function (require, exports, module) {

    var Alpaca = require("alpaca");

    Alpaca.Fields.Custom1Field = Alpaca.Fields.SelectField.extend({

        getFieldType: function () {
            return "custom-oup-type-select";
        },
        setValue: function (data) {
            var self = this;
            this.base(data);
            if (!$("#media-kit-div").length) { 
                $(self.getFieldEl()).append("<div id='media-kit-div'><br/><legend>Media Kit Top Region</legend></div>");
            }
            if(!self.getValue()){
                self.setDefault();
            }
            console.log("show -value is working")
            if (self.getValue() == 'Media Kit' || self.getValue() == 'Media Kit Collection') {
                $("#media-kit-div").show();
              //  $("#media-kit-div").html("<legend>Media Kit Top Region</legend>");
            } else {
                $("#media-kit-div").hide();
            }
        },
        afterRenderControl: function (model, callback) {
            var self = this;
            this.base(model, function () {
                console.log(" after render controll call *********** >>>", self.getValue())
                if (self.getValue() && (self.getValue() == "Media Kit" || self.getValue() == "Media Kit Collection")) {
                  //  $("#media-kit-div").show();
                    $(self.getFieldEl()).append("<div id='media-kit-div'><br/><legend>Media Kit Top Region</legend></div>");
                  // $("#media-kit-div").html("<legend>Media Kit Top Region</legend>");
                } else {
                    $("#media-kit-div").hide();
                }
                callback();
            });
        }
    });

    Alpaca.registerFieldClass("custom-oup-type-select", Alpaca.Fields.Custom1Field);

});