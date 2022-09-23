define(function (require, exports, module) {

    var Alpaca = require("alpaca");

    Alpaca.Fields.Custom1Field = Alpaca.Fields.SelectField.extend({

        getFieldType: function () {
            return "custom-oup-sp-select";
        },
        setValue: function (data) {
            var self = this;
            this.base(data);
            if (!$("#warning-message").length) { $(self.getFieldEl()).append("<span id='warning-message' style='color:red'></span>"); }
            if(!self.getValue()){
                self.setDefault();
            }
            if (self.getValue() == 'Yes') {
                $("#warning-message").empty();
                $("#warning-message").html("Warning: Please consult with your key user. Pages set to Yes will not be indexed and will not appear in Google or other search engines.");
            } else {
                $("#warning-message").empty();
            }
        },
        afterRenderControl: function (model, callback) {
            var self = this;
            this.base(model, function () {
                if (self.getValue() && self.getValue() == "Yes") {
                    $(self.getFieldEl()).remove("#warning-message");
                    $(self.getFieldEl()).append("<span id='warning-message' style='color:red'>Warning: Please consult with your key user. Pages set to Yes will not be indexed and will not appear in Google or other search engines.</span>");
                } else {
                    $(self.getFieldEl()).append("<span id='warning-message' style='color:red'></span>");
                }
                callback();
            });
        }
    });

    Alpaca.registerFieldClass("custom-oup-sp-select", Alpaca.Fields.Custom1Field);

});