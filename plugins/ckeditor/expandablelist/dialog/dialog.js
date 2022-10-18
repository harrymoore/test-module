CKEDITOR.dialog.add( 'expandableDialog', function( editor ) {
    return {

		// Basic properties of the dialog window: title, minimum size.
		title: 'Bsic Properties',
        minWidth:     400,
        minHeight:    200 ,
        contents: [
            {
                id:         'tab1',
                label:      'Settings',
                title:      'Besic Settings',
                elements: [
                    {
                        type:           'text',
                        label:          'Text displayed in expandable list button',
                        id:             'buttontext'  
                    },
                    {
                        type:           'text',
                        label:          'Expandable list ID / button trigger value (not displayed)',
                        id:             'trigger-for'                       
                    }/*,
                    {
                        type: 'checkbox',
                        id: 'ul',
                        label: 'Add list (always tick this box)',
                        'default': 'checked'                     
                    }*/
                ]
            }
        ],
        onOk: function() {
           var dialog = this;
           var exapndableButton = editor.document.createElement( 'button' );
           exapndableButton.setAttribute( 'class','expandableSectionToggle')
           exapndableButton.setAttribute( 'aria-expanded',false);
           exapndableButton.setAttribute( 'type','button');
           exapndableButton.setAttribute( 'trigger-for', dialog.getValueOf( 'tab1', 'trigger-for' ));
           exapndableButton.setText( dialog.getValueOf( 'tab1', 'buttontext' ) );
           editor.insertElement( exapndableButton );
         //  console.log(dialog.getValueOf( 'tab1', 'ul' ))
         //  if( dialog.getValueOf( 'tab1', 'ul' ) === true){
                
            var exapndableList = editor.document.createElement( 'ul' );
            exapndableList.setAttributes( {
                                'id'   : dialog.getValueOf( 'tab1', 'trigger-for' ),
                                'class': 'expandableSection'
                            });
            var  li = editor.document.createElement( 'li' );
            exapndableList.append(li);
            editor.insertElement( exapndableList );
          //  }
        }

    /*    contents: [
            {
                id: 'info',
                label: 'Basic Settings',
                elements: [
                    {
                        id: 'button',
                        type: 'button',
                        class: 'expandableSectionToggle',
                        setup: function( element ) {
                            this.setValue( element.getAttribute( "button" ) );

                        },
                        commit: function( element ) {
                            element.setAttribute( "trigger-for", this.getValue() );
                        }
                    },
                    {
                        id: 'li',
                        type: 'li',
                        class: 'expandableSection',
                        setup: function( element ) {
                            this.setValue( element.getAttribute( "li" ) );

                        },
                        commit: function( element ) {
                            element.setAttribute( "id", this.getValue() );
                        }
                    }
                ]
            }
        ],
        onOk: function() {

            // Create a new > element.
            var expandablelist = this.element;

            // Invoke the commit methods of all dialog window elements, so the <expandablelist> element gets modified.
            this.commitContent( expandablelist );

            // Finally, if in insert mode, insert the element into the editor at the caret position.
            if ( this.insertMode )
                editor.insertElement( expandablelist );
        }*/
    }
    
});
