
(function() {
 
    var CKEDITOR = window.CKEDITOR;
 
    var pluginName = "expandablelist";
 
    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        init: function (editor) {
			CKEDITOR.dialog.add( 'expandableDialog', this.path + 'dialog/dialog.js' );
			CKEDITOR.config.autoParagraph= false;
			CKEDITOR.config.enterMode= CKEDITOR.ENTER_BR;
			editor.addCommand(pluginName,new CKEDITOR.dialogCommand( 'expandableDialog'));			
            // button
            editor.ui.addButton(pluginName, {
                label: 'Expandable Bulleted List',
                command: pluginName,
                toolbar: 'expandablelist',
				icon: this.path + "icons/chevron-down.svg"
            });
			
           
        }
    });
   
})();