define(function(require, exports, module) {

    var Ratchet = require("ratchet/web");
    var Actions = require("ratchet/actions");
    var $ = require("jquery");

    var OneTeam = require("oneteam");

    return Actions.register("upload-bulk-image", Ratchet.AbstractAction.extend({

        defaultConfiguration: function()
        {
            var config = this.base();

            config.title = "Upload Images";
            config.iconClass = "glyphicon glyphicon-upload";
   
            return config;
        },

        execute: function(config, actionContext, callback)
        {
            var parentFolderPath = actionContext.model.path;
            var typeQName = "type:image0";// actionContext.model.type;
            var ratchet = actionContext.ratchet;

            this.doAction(actionContext, parentFolderPath, typeQName, ratchet, function(err, result) {
                callback(err, result);
            });
        },

        doAction: function(actionContext, parentFolderPath, typeQName, ratchet, callback)
        {
            var self = this;
            
            // store nodeIds generated with uploaded files	
            actionContext.data = [];

            OneTeam.projectBranch(actionContext, function() {

                var branch = this;

                var uploadUri = "/proxy" + branch.getUri() + "/nodes";
                var maxFileSize = actionContext.model.maxFileSize;

                var enhanceFiles = function(fileUploadConfig, data)
                {
                    // remove any rows that are associations
                    OneTeam.filterAssociationsFromUploadRows(data.result.rows);

                    // convert to files
                    var files = [];
                    $.each(data.result.rows, function(index, gitanaResult) {
                        
                        actionContext.data.push(gitanaResult);	
                        console.log("******  gitanaResult",JSON.stringify(gitanaResult));
                        
                        var file = data.files[index];

                        var resultUri = uploadUri + "/" + gitanaResult["_doc"];
                        var fallbackUrl = OneTeam.modulePath("app", "images/doclib/document-64.png");
                        var thumbnailUrl = resultUri + "/preview/icon64?size=64&mimetype=" + OneTeam.DEFAULT_PREVIEW_MIMETYPE + "&fallback=" + fallbackUrl;
                        files.push({
                            "id": gitanaResult["_doc"],
                            "name": file.name,
                            "size": file.size,
                            "type": file.type,
                            "url": resultUri,
                            "thumbnailUrl": thumbnailUrl,
                            "deleteUrl": resultUri,
                            "deleteType": "DELETE"
                        });
                    });

                    data.result.files = files;
                };

                var parentFolderPathFriendly = null;
                if (parentFolderPath)
                {
                    parentFolderPathFriendly = parentFolderPath.trim();
                    if (parentFolderPathFriendly.indexOf("/") === 0) {
                        parentFolderPathFriendly = parentFolderPathFriendly.substring(1);
                    }
                    if (parentFolderPathFriendly)
                    {
                        parentFolderPathFriendly = "Root/" + parentFolderPathFriendly;
                    }
                    else
                    {
                        parentFolderPathFriendly = "Root";
                    }
                    var parts = parentFolderPathFriendly.split("/");
                    for (var q = 0; q < parts.length; q++)
                    {
                        parts[q] = OneTeam.toPathTitle(actionContext, parts[q]);
                    }
                    parentFolderPathFriendly = parts.join("/");
                    parentFolderPathFriendly = OneTeam.replaceAll(parentFolderPathFriendly, "/", "&nbsp;/&nbsp;");
                }

                // modal dialog
                Ratchet.fadeModal({
                    "title": "Upload Documents",
                    "cancel": false
                }, function(div, renderCallback) {

                    // append the "Create" button
                    $(div).find('.modal-footer').append("<button class='btn btn-primary pull-right done'>Done</button>");

                    // append the "Cancel" button -- will delete nodes generated with uploaded files	
                    $(div).find('.modal-footer').append("<button class='btn btn-danger pull-left cancel'>Cancel</button>");

                    // body
                    $(div).find(".modal-body").html("");

                    if (parentFolderPath)
                    {
                        $(div).find(".modal-body").append("<p class='upload-path'><i class='fa fa-folder'></i>&nbsp;&nbsp;" + parentFolderPathFriendly + "</p>");
                    }

                    $(div).find(".modal-body").append("<div class='form'></div>");

                    // form definition
                    var c = {
                        "data": {
                        },
                        "schema": {
                            "type": "object",
                            "properties": {
                                "files": {
                                    "type": "string"
                                }
                            }
                        },
                        "options": {
                            "fields": {
                                "files": {
                                    "type": "upload",
                                    "multiple": true,
                                    "directory": true,
                                    "upload": {
                                        "url": uploadUri,
                                        "method": "POST",
                                        "autoUpload": true,
                                        "maxFileSize": maxFileSize,
                                        "maxNumberOfFiles": 10,
                                        "showSubmitButton": false,
                                        "processQueue": []
                                    },
                                    "enhanceFiles": enhanceFiles,
                                    "parameters": {
                                        "rootNodeId": "root",
                                        "associationType": "a:child"
                                    },
                                    "showUploadPreview": true,
                                    "showHeaders": true,
                                    "progressall":  function (e, data) {
                                     
                                        var showProgressBar = false;
                                        if (data.loaded < data.total)
                                        {
                                            showProgressBar = true;
                                        }
                                        if (showProgressBar)
                                        {
                                            //$(div).find(".progress").css("display", "block");
                                            $("#progress").css("display", "block");
                                            var progress = parseInt(data.loaded / data.total * 100, 10);
                                            $('#progress .progress-bar').css(
                                                'width',
                                                progress + '%'
                                            );
                                        }
                                        else
                                        {
                                            $("#progress").css("display", "none");
                                             // $(div).find(".progress").css("display", "none");
                                        }
                                    },
                                    "errorHandler": function(data)
                                    {
                                        // filesize too big
                                        if (data && Array.isArray(data) && data[0]) {
                                            OneTeam.showError(data[0]);
                                        }

                                        // if we get back more information in the underlying jqXHR, show that
                                        if (data && data.files && data.files.length > 0)
                                        {
                                            for (var i = 0; i < data.files.length; i++)
                                            {
                                                if (data.jqXHR && data.jqXHR.responseJSON)
                                                {
                                                    var errMsg = data.jqXHR.responseJSON.message;
                                                    if (errMsg)
                                                    {
                                                        data.files[i].error = errMsg;
                                                        
                                                        var showMessageModalConfig = {
                                                            "message": errMsg,
                                                            "proceedBtnTitle": "Delete the existing one"
                                                        };

                                                        var deleteExistingDocument = function() 
                                                        {
                                                            var targetMark = "The other node ID is: ";
                                                            try {
                                                                var targetDocumentId = errMsg.split(targetMark)[1].trim();

                                                                Chain(branch).readNode(targetDocumentId).then(function() {
                                                                    actionContext.document = this;

                                                                    Actions.execute("delete-document", null, actionContext);
                                                                });

                                                            }
                                                            catch(err) {
                                                                OneTeam.showError(err); 
                                                            }
                                                        };

                                                        OneTeam.showMessageAdvanced(showMessageModalConfig, deleteExistingDocument);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "beforeFileUploadSubmitHandler": function(data) {
                                        if (data.files && data.files.length > 0)
                                        {
                                            for (var i = 0; i < data.files.length; i++)
                                            {
                                                // add charset
                                                data.files[i].type += ";charset=utf-8";

                                                // if this has a relative path (from directory support), apply it
                                                if (data.files[i].relativePath)
                                                {
                                                    if (!data.formData) {
                                                        data.formData = {};
                                                    }

                                                    var key = "param" + i + "__parentFolderPath";

                                                    var uploadPath = data.formData[key];
                                                    if (uploadPath) {
                                                        uploadPath = [uploadPath, data.files[i].relativePath].join("/");
                                                    } else {
                                                        uploadPath = data.files[i].relativePath
                                                    }

                                                    data.formData[key] = uploadPath;
                                                }

                                                // typeQName
                                                if (typeQName)
                                                {
                                                    data.formData["property" + i + "___type"] = typeQName;
                                                }
                                            }
                                        }
                                    },
                                    "beforeAddValidator": function(file)
                                    {
                                        // prevent MacOS .ds_store files from uploading
                                        if (file.name.toLowerCase() === ".ds_store")
                                        {
                                            return false;
                                        }

                                        return true;
                                    }
                                }
                            }
                        }
                    };

                    if (parentFolderPath)
                    {
                        c.options.fields.files.parameters.parentFolderPath = parentFolderPath;
                    }

                    c.postRender = function(control)
                    {
                        $(div).off('hidden.bs.modal');
                        $(div).on('hidden.bs.modal', function() {

                            var uploadedFileIds = [];

                            var v = control.getValue();
                            if (v && v.files)
                            {
                                for (var i = 0; i < v.files.length; i++) {
                                    uploadedFileIds.push(v.files[i].id);
                                }
                            }

                            callback(null, uploadedFileIds);
                        });

                        // done button
                        $(div).find('.done').click(function() {
                            $(div).modal('hide');
                        });

                        // cancel button	
                        $(div).find('.cancel').click(function() {	
                            if (actionContext.data.length == 0 || $('tbody.files').children().length == 0) {	
                                $(div).modal('hide');	
                            }	
                            else {	
                                // remove all nodes	
                                Actions.execute("delete_documents", null, actionContext, function(err, result) {	
                                    $(div).modal('hide');	
                                });	
                            }	
                        });	

                            // prevent clicking outside of modal	
                        $(div).modal({	
                            backdrop: 'static',	
                            keyboard: false	
                        });

                        renderCallback(function() {

                        });
                    };

                    var _form = $(div).find(".form");
                    OneTeam.formCreate(_form, c, actionContext);
                });

            });
        }


    }));

});