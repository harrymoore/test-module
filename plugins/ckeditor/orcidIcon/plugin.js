/**
 * @license Copyright (c) CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
( function() {
    
CKEDITOR.plugins.add("orcidIcon", {
    /*onLoad: function() {
        CKEDITOR.document.appendStyleSheet(this.path + "css/orcidIcon.css");
    },*/
    init: function(editor) {
        editor.addCommand('InsertImage', 
        { exec: function(editor){
            editor.insertHtml('<img class = "floatLeft" alt="ORCID logo" src="https://orcid.org/sites/default/files/images/orcid_16x16.png"/>'); 
        }
        });
        editor.ui.addButton("orcidIcon", { // add new button and bind our command
            label: "Orcid Icon",
            command: 'InsertImage',
            toolbar: 'orcidIcon',
            icon: this.path + "icons/orcidIcon.png"
        });
    }
});
})()
  
  