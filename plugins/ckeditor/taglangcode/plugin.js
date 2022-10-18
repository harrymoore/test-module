
(function() {
 
    var CKEDITOR = window.CKEDITOR;
 
    var pluginName = "taglangcode";
 
    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        init: function (editor) {
            CKEDITOR.dialog.add( 'getLangCode', this.path + 'dialog/dialog.js' );
			CKEDITOR.config.autoParagraph= false;
			CKEDITOR.config.enterMode= CKEDITOR.ENTER_BR;
			editor.addCommand(pluginName,new CKEDITOR.dialogCommand( 'getLangCode'));
            
			// editor.addCommand(pluginName,{
            //     exec: function(editor) {
            //         var selectedText = "";
            //         var langCode = prompt("Language Code:");
            //         var mySelection = editor.getSelection();

            //         if (CKEDITOR.env.ie) {
            //             mySelection.unlock(true);
            //             selectedText = mySelection.getNative().createRange().text;
            //         } else {
            //             selectedText = mySelection.getNative();
            //         }
            //         editor.insertHtml("<span lang="+langCode+">" + selectedText + "</span>")
            //     }
            // });			
            // button
            editor.ui.addButton(pluginName, {
                label: 'Tag text with language code',
                command: pluginName,
                toolbar: 'taglangcode',
				icon: this.path + "icons/translate.png"
            });          
        }
    });
   
})();