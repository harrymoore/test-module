define(function (require, exports, module) {

    var $ = require("jquery");
    var Alpaca = require("alpaca");
    var OneTeam = require("oneteam");

    window.CKEDITOR.config.disableNativeSpellChecker = false;
    window.CKEDITOR.config.forcePasteAsPlainText = true;

    let configempty = {
        "height": 50,
        "toolbar": []
    };
    let config1 = {
        "toolbar": [
            [
                "Cut",
                "Copy",
                "PasteText",
                "-",
                "Undo",
                "Redo"
            ],
            [
                "Link",
                "Unlink",
                "Anchor",
                "cloudcms-link"
            ],
            [
                "Table",
                "SpecialChar",                
                "expandablelist"
            ],
            [
                "Maximize",
                "ShowBlocks",
                "Source",
                "A11ychecker",
                "Preview"
            ],
            [
                "Italic",
                "Strike",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat"
            ],
            [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "Blockquote"
            ],
            [
                "Format",
                "Styles"
            ],
            [
                "cloudcms-image"
            ],
            [
                "cloudcms-iframe"
            ],
            [
                "orcidIcon"
            ],
            [
                "taglangcode"
            ]
        ],
        "removeButtons": null,
        "stylesSet": [{
                "name": "Paragraph",
                "element": "p"
            },
            {
                "name": "OUP Notice",
                "element": "div",
                "attributes": {
                    "class": "notice"
                }
            },
            {
                "name": "OUP unbulleted list",
                "element": "ul",
                "attributes": {
                    "class": "unbulleted"
                }
            },
            {
                "name": "OUP horizontal list",
                "element": "ul",
                "attributes": {
                    "class": "inline"
                }
            },
            {
                "name": "OUP floatLeft Image",
                "element": "img",
                "attributes": {
                    "class": "floatLeft"
                }
            },
            {
                "name": "OUP floatRight Image",
                "element": "img",
                "attributes": {
                    "class": "floatRight"
                }
            }

        ],
        "cloudcms-image": {
            "enableSize": false,
            "enableAltText": false,
            "imagePickerType": "oup-file-picker",
            "hideUploadButton": true,
            "imagePickerConfig": {
                "rootContainerPath": "../../..",
                "initialContainerPath": "{{nearestJournalFolderPath}}/Image Library",
            }
        },
        "cloudcms-link": {
            "linkPickerType": "oup-file-picker",
            "hideUploadButton": true,
            "linkPickerConfig": {
                "rootContainerPath": "../../..",
                "initialContainerPath": "{{nearestJournalFolderPath}}/Row Containers, Content Blocks, and Widgets",
            }
        }
    };
    let config2 = {
        "height": 50,
        "toolbar": [
            [
                "SpecialChar",
                "Italic",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat"
            ]
        ]
    };
    let config11 = {
        "height": 50,
        "toolbar": [
            [
                
                "Bold",
                "Italic"
               
            ]
        ]
    };
    let config9 = {
        "height": 50,
        "toolbar": [
            [
                "SpecialChar",
                "Italic",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat"
            ],
            [
                "Link",
                "Unlink"
            ]
        ]
    };
    let config3 = {
        "height": 100,
        "toolbar": [
            [
                "Cut",
                "Copy",
                "Paste",
                "-",
                "Undo",
                "Redo"
            ],
            [
                "Link",
                "Unlink"
            ],
            [
                "Italic",
                "BulletedList",
                "Strike",
                "Subscript",
                "Superscript",
                "SpecialChar",
                "-",
                "RemoveFormat",
                "-",
                "ShowBlocks",
                "Source"
            ],
            [
                "Format",
                "Styles"
            ],
            [
                "cloudcms-image"
            ],
        ],
        "removeButtons": null,
        "stylesSet": [{
                "name": "Paragraph",
                "element": "p"
            },
            {
                "name": "OUP unbulleted list",
                "element": "ul",
                "attributes": {
                    "class": "unbulleted"
                }
            },
            {
                "name": "OUP horizontal list",
                "element": "ul",
                "attributes": {
                    "class": "inline"
                }
            },            
            {
                "name": "OUP floatLeft Image",
                "element": "img",
                "attributes": {
                    "class": "floatLeft"
                }
            },
            {
                "name": "OUP floatRight Image",
                "element": "img",
                "attributes": {
                    "class": "floatRight"
                }
            }
        ],
        "cloudcms-image": {
            "enableSize": false,
            "enableAltText": false,
            "imagePickerType": "oup-file-picker",
            "hideUploadButton": true,
            "imagePickerConfig": {
                "rootContainerPath": "../../..",
                "initialContainerPath": "{{nearestJournalFolderPath}}/Image Library",
            }
        }
    };

    let config4 = {
        "toolbar": [
            [
                "Link",
                "Unlink"
            ]
        ]
    };
    let config5 = {
        "height": 100,
        "toolbar": [
            [
                "Format",
                "-",
                "Italic",
                "SpecialChar",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat",
                "-",
                "Link",
                "Unlink",
                "-",
                "ShowBlocks"
            ]
        ],
        "removeButtons": null
    };
    let config6 = {
        "toolbar": [
            [
                "Cut",
                "Copy",
                "Paste",
                "-",
                "Undo",
                "Redo"
            ],
            [
                "Link",
                "Unlink",
                "Anchor"
            ],
            [
                "Table",
                "HorizontalRule",
                "SpecialChar"
            ],
            [
                "Maximize",
                "ShowBlocks",
                "Source",
                "Preview"
            ],
            [
                "Italic",
                "Strike",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat"
            ],
            [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "Blockquote",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock"
            ],
            [
                "Format",
                "Styles"
            ],
            [
                "cloudcms-image"
            ],
            [
                "cloudcms-iframe"
            ]
        ],
        "removeButtons": null,
        "stylesSet": [{
                "name": "Paragraph",
                "element": "p"
            },
            {
                "name": "OUP unbulleted list",
                "element": "ul",
                "attributes": {
                    "class": "unbulleted"
                }
            },
            {
                "name": "OUP horizontal list",
                "element": "ul",
                "attributes": {
                    "class": "inline"
                }
            },
            {
                "name": "OUP floatLeft Image",
                "element": "img",
                "attributes": {
                    "class": "floatLeft"
                }
            },
            {
                "name": "OUP floatRight Image",
                "element": "img",
                "attributes": {
                    "class": "floatRight"
                }
            }
        ],
        "cloudcms-image": {
            "enableSize": false,
            "enableAltText": false,
            "imagePickerType": "oup-file-picker",
            "hideUploadButton": true,
            "imagePickerConfig": {
                "rootContainerPath": "../../..",
                "initialContainerPath": "{{nearestJournalFolderPath}}/Image Library",
            }
        }
    };
    let config7 = {
        "height": 100,
        "toolbar": [
            [
                "Cut",
                "Copy",
                "Paste",
                "-",
                "Undo",
                "Redo"
            ],
            [
                "Link",
                "Unlink"
            ],
            [
                "Italic",
                "BulletedList",
                "Strike",
                "Subscript",
                "Superscript",
                "SpecialChar",
                "-",
                "RemoveFormat",
                "-",
                "ShowBlocks"
            ],
            [
                "Format",
                "Styles"
            ]
        ],
        "removeButtons": null,
        "stylesSet": [{
                "name": "Paragraph",
                "element": "p"
            },
            {
                "name": "OUP unbulleted list",
                "element": "ul",
                "attributes": {
                    "class": "unbulleted"
                }
            },
            {
                "name": "OUP horizontal list",
                "element": "ul",
                "attributes": {
                    "class": "inline"
                }
            },
            {
                "name": "OUP floatLeft Image",
                "element": "img",
                "attributes": {
                    "class": "floatLeft"
                }
            },
            {
                "name": "OUP floatRight Image",
                "element": "img",
                "attributes": {
                    "class": "floatRight"
                }
            }
        ]
    };
    let config10 = {
        "height": 100,
        "toolbar": [
            [
                "Cut",
                "Copy",
                "Paste",
                "-",
                "Undo",
                "Redo"
            ],
            [
                "Link",
                "Unlink"
            ],
            [
                "Italic",
                "NumberedList",
                "BulletedList",
                "Strike",
                "Subscript",
                "Superscript",
                "SpecialChar",
                "-",
                "RemoveFormat",
                "-",
                "ShowBlocks"
            ],
            [
                "Format",
                "Styles"
            ]
        ],
        "removeButtons": null,
        "stylesSet": [{
                "name": "Paragraph",
                "element": "p"
            },
            {
                "name": "OUP unbulleted list",
                "element": "ul",
                "attributes": {
                    "class": "unbulleted"
                }
            },
            {
                "name": "OUP horizontal list",
                "element": "ul",
                "attributes": {
                    "class": "inline"
                }
            },
            {
                "name": "OUP floatLeft Image",
                "element": "img",
                "attributes": {
                    "class": "floatLeft"
                }
            },
            {
                "name": "OUP floatRight Image",
                "element": "img",
                "attributes": {
                    "class": "floatRight"
                }
            }
        ]
    };
    let config8 = {
        "toolbar": [
            [
                "Format"
            ],
            [
                "SpecialChar",
                "Subscript",
                "Superscript",
                "-",
                "RemoveFormat",
            ],
            [
                "Link",
                "Unlink"
            ],
            [
                "cloudcms-image"
            ]
        ],
        "removeButtons": null,
        "cloudcms-image": {
            "enableSize": false,
            "enableAltText": false,
            "imagePickerType": "oup-file-picker",
            "hideUploadButton": true,
            "imagePickerConfig": {
                "rootContainerPath": "../../..",
                "initialContainerPath": "{{nearestJournalFolderPath}}/Image Library",
            }
        }
    };
    
    

    Alpaca.Fields.OUPCKEditorField = Alpaca.Fields.CKEditorField.extend(
        /**
         * @lends Alpaca.Fields.OUPCKEditorField.prototype
         */
        {
            toolbarOptions: {
                "config1": Object.create(config1),
                "config2": Object.create(config2),
                "configAbtPnlHead": Object.create(config2),
                "configAbtPnlLinkText": Object.create(config2),
                "configMainTitleHP": Object.create(config2),
                "configHeadCB": Object.create(config2),
                "configSecTitleHP": Object.create(config2),
                "configSnippet": Object.create(config2),
                "configSnippetPodHP": Object.create(configempty),
                "configSnippetBR": Object.create(configempty),
                "configSnippetPodHP2": Object.create(config2),
                "configSnippetPodHP3": Object.create(config9),
                "config3": Object.create(config3),
                "configSecDescHP": Object.create(config3),
                "configMainDescHP": Object.create(config3),
                "config4": Object.create(config4),
                "config5": Object.create(config5),
                "configSpnsrSP": Object.create(config5),
                "config6": Object.create(config6),
                "config7": Object.create(config7),
                "configAbtPnlTxtHP": Object.create(config7),
                "configTextCB": Object.create(config10),
                "config8": Object.create(config8),
                "config11": Object.create(config11)
                
            },

            /**
             * @see Alpaca.Fields.TextField#getFieldType
             */
            getFieldType: function () {
                return "oup-ckeditor-field";
            },

            /**
             * @see Alpaca.Fields.TextField#setup
             */
            setup: function () {

                if (this.options.ckeditor && this.toolbarOptions[this.options.ckeditor]) {
                    var type = this.options.ckeditor;
                    this.options.ckeditor = this.toolbarOptions[this.options.ckeditor];
                    if (type && type == "config5") {
                        this.options.ckeditor.format_tags = 'p;h4;pre;links';
                        this.options.ckeditor.format_links = {
                            name: 'callToAction',
                            element: 'p',
                            "attributes": {
                                "class": 'callToAction'
                            }
                        };
                        this.options.ckeditor.format_h4 = {
                            name: 'Normal',
                            element: 'p',
                            "attributes": {
                                "class": ''
                            }
                        };
                        this.options.ckeditor.format_h4 = {
                            name: 'Heading 4',
                            element: 'h4',
                            "attributes": {
                                "class": ''
                            }
                        };
                        this.options.ckeditor.format_pre = {
                            name: 'Formatted',
                            element: 'pre',
                            "attributes": {
                                "class": ''
                            }
                        };
                    } else if (type && (type == "config1" || type == "config6" || type == "config8")) {
                        this.options.ckeditor.format_tags = 'p;h2;h3;h4;pre';
                    } else {
                        this.options.ckeditor.format_tags = 'p;h2;h3;pre';
                    }

                    if (type && (type == "configMainTitleHP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 32,
                        }
                    }

                    if (type && (type == "configAbtPnlHead")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 35,
                        }
                        this.options.ckeditor.autoParagraph = false;
                        this.options.ckeditor.enterMode = window.CKEDITOR.ENTER_BR ;
                    }

                    if (type && (type == "configAbtPnlLinkText")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 35,
                        }
                        this.options.ckeditor.autoParagraph = false;
                        this.options.ckeditor.enterMode = window.CKEDITOR.ENTER_BR ;
                    }

                    if (type && (type == "configHeadCB")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 150,
                        }
                    }

                    if (type && (type == "configSecTitleHP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 36,
                        }
                    }

                    if (type && (type == "configSecDescHP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 100
                        }
                    }

                    if (type && (type == "configMainDescHP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 150
                        }
                    }

                    if (type && type == "configSnippet" ) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 400
                        }
                        this.options.ckeditor.height = "100";
                    }
                    if (type && type == "configSnippetPodHP3") {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 325
                        }
                        this.options.ckeditor.height = "100";
                    }

                    if (type && (type == "configSnippetBR")) {
                        this.options.ckeditor.height = "100";
                        this.options.ckeditor.autoParagraph = false;
                        this.options.ckeditor.enterMode = window.CKEDITOR.ENTER_BR ;
                    }


                    if (type && (type == "configSnippetPodHP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 325
                        }
                        this.options.ckeditor.height = "100";
                        this.options.ckeditor.autoParagraph = false;
                        this.options.ckeditor.enterMode = window.CKEDITOR.ENTER_BR ;
                    }

                    if (type && (type == "configSnippetPodHP2")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 325
                        }
                        this.options.ckeditor.height = "100";
                        this.options.ckeditor.autoParagraph = false;
                        this.options.ckeditor.enterMode = window.CKEDITOR.ENTER_BR ;
                    }

                    if (type && (type == "configSpnsrSP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 400
                        }
                    }

                    if (type && (type == "configAbtPnlTxtHP")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 210
                        }
                    }

                    if (type && (type == "configTextCB")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: false,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            warnOnLimitOnly: true,
                            maxCharCount: 450
                        }
                    }

                }

                // TODO: REMOVE BUTTON BASED ON USER TEAM
                if (this.isUserInTeam("academic-editors")) {
                    this.options.ckeditor.removeButtons = 'Source';
                }


                this.base();
            },

            /**
             * Check if user has role
             * @param {string} role 
             */
            isUserInTeam: function (role) {
                var self = this;
                var observableHolder = self.top().options.observableHolder;

                var teamKeys = [];

                var project = observableHolder.observable("project").get();
                if (project) {
                    teamKeys = observableHolder.observable("projectUserTeamKeys").get();
                } else {
                    teamKeys = observableHolder.observable("oneteamUserTeamKeys").get();
                }

                if (!teamKeys) {
                    return false;
                }

                var x = teamKeys.indexOf(role);
                if (x > -1) {
                    return true;
                }

                return false;
            },
           
            afterRenderControl: function (model, callback) {
                var self = this;
                self.base(model, function () {
                    callback();
                });
            },

            /**
             * @see Alpaca.Fields.TextField#handleValidate
             */
            handleValidate: function () {
                    return this.base();
                }

                /* builder_helpers */
                ,

            /**
             * @see Alpaca.Fields.TextField#getTitle
             */
            getTitle: function () {
                return "OUP ckeditor Field";
            },

            /**
             * @see Alpaca.Fields.TextField#getDescription
             */
            getDescription: function () {
                return "Allow output markup rule overrides to ckeditor";
            },

            /* end_builder_helpers */
        });



    Alpaca.registerMessages({
        "noDependentField": "No local config found"
    });

    //window.CKEDITOR.config.extraPlugins+=",devtools";

    window.CKEDITOR.on('instanceReady', function (ck) {
        ck.editor.removeMenuItem('image');
    });
    //window.CKEDITOR.on('instanceReady', function(ck) { ck.editor.removeMenuItem('table'); });
    window.CKEDITOR.on('instanceReady', function (ck) {
        ck.editor.removeMenuItem('tablecell');
    });


    window.CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        ev.editor.getCommand('table').allowedContent = "table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr;table[id,dir](*){*}";
        if (dialogName == "table" || dialogName == "tableProperties") {
            var infoTab = dialogDefinition.getContents("info");
            dialogDefinition.getContents("info").elements.pop();
            dialogDefinition.getContents("info").elements.pop();
            dialogDefinition.contents[1].elements[0].children.shift();
            dialogDefinition.contents[1].elements[0].children[0].children.shift();
            infoTab.elements[0].children[0].children.pop();
            infoTab.elements[0].children[0].children.pop();
            infoTab.elements[0].children.pop();

            infoTab.get("selHeaders")["items"].pop();
            infoTab.get("selHeaders")["items"].pop();
        }
        if (dialogName == "bulletedListStyle") {
            dialogDefinition.getContents("info").get("type")["items"].pop();
            dialogDefinition.getContents("info").get("type")["items"].pop();
        }
        if (dialogName == "image") {
            dialogDefinition.getContents("info").elements.pop();
            dialogDefinition.getContents("info").elements.pop();
            dialogDefinition.contents.pop();
        }
    });

    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});
