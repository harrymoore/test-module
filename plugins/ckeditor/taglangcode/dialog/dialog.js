CKEDITOR.dialog.add( 'getLangCode', function( editor ) {
    return {
		title: 'Set Language',
        minWidth:     400,
        minHeight:    100 ,
        contents: [
            {
                id:         'tab',
                label:      'Settings',
                title:      'Basic Settings',
                elements: [
                    {
                        type:           'text',
                        label:          'Language Code:',
                        id:             'langCode'  
                    }
                ]
            }
        ],
        onOk: function() {
           var dialog = this;
           var selectedText = "";
           var langCode = dialog.getValueOf( 'tab', 'langCode');
            var mySelection = editor.getSelection();

            if (CKEDITOR.env.ie) {
                mySelection.unlock(true);
                selectedText = mySelection.getNative().createRange().text;
            } else {
                selectedText = mySelection.getNative();
            }

            editor.insertHtml("<span lang="+langCode+">" + selectedText + "</span>")
        }
    }
});
