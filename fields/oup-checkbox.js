define(function (require, exports, module) {

    var $ = require("jquery");
    var Alpaca = require("alpaca");
    var OneTeam = require("oneteam");

    $.alpaca.Fields.CustomField = Alpaca.Fields.CheckBoxField.extend({
        getFieldType: function() {
            return "custom-check-box";
        },
        onChange: function (data) {
            var self = this;
            this.base(data);    
            if(!self.getFieldEl()){
              $(self.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'></span>");
            }
            if(!self.getValue()){
                self.setDefault();
            }
            if (self.getValue() === true) {
                $("#warning-message-checkbox").empty();
                $("#warning-message-checkbox").html("Note, this option is not permitted for standard Journals secondary pages.");
            } else {
                $("#warning-message-checkbox").empty();
            }
        },
        afterRenderControl: function (model, callback) {
            var self = this;
            this.base(model, function () {
                if (self.getValue() && self.getValue() == true) {
                    $(self.getFieldEl()).remove("#warning-message-checkbox");
                    $(self.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'>Note, this option is not permitted for standard Journals secondary pages.</span>");
                } else {
                    $(self.getFieldEl()).append("<span id='warning-message-checkbox' style='color:red'></span>");
                }
                callback();
            });
        }
     });
    Alpaca.registerFieldClass("custom-check-box", Alpaca.Fields.CustomField);

});