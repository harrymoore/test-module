define(function(require) {

    //customs
    require("./fields/oup-secondarypage-select.js")
    require("./fields/oup-checkbox.js")
    require("./fields/oup-common.js")
    require("./fields/oup-select-mediakit.js");

    // Instanciate Actions
    require("./actions/documents/new_folder.js");
    require("./actions/attachments/add-attachment.js");
    require("./actions/attachments/upload-bulk-image.js");
    require("./actions/create-journal/create-secondaryPage.js");
    require("./actions/create-journal/edit-secondaryPage.js");
    require("./actions/create-journal/delete-secondaryPage.js");
    require("./actions/create-journal/upload-content-page.js");
    require("./actions/create-journal/get-oversized-image-details.js");
    require("./actions/create-journal/upload-image-alt-text.js");

    // new pages
    require("./gadgets/all-journals-list.js");
    require("./gadgets/content-instances-for-oup-editors-team.js");
    require("./gadgets/journal-site-folder.js");
    require("./gadgets/secondary-pages-list.js");
    require("./gadgets/custom-documents-list.js");
    
    // new fields
    require("./fields/oup-file-picker.js");

    require("./media-types/brightcove-link.js");
    require("./media-types/youtube-link.js");
    require("./media-types/surveygizmo-link.js");
    require("./media-types/thinglink-link.js");
    require("./media-types/panopto-link.js");
    require("./media-types/qzzr-link.js");

    require("./gadgets/help/help.js");
    
    // oup-ckeditor
    require("./plugins/ckeditor/wordcount/index.js");
    require("./plugins/ckeditor/a11ychecker/index.js");
    require("./plugins/ckeditor/balloonpanel/index.js");
    require("./plugins/ckeditor/orcidIcon/index.js");
    require("./plugins/ckeditor/expandablelist/index.js");
    require("./plugins/ckeditor/taglangcode/index.js");

    require("./fields/oup-ckeditor-field.js");

    // use this to globally control the position of helper text
    Alpaca.defaultHelpersPosition = "above";  

    
});
