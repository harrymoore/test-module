define(function(require, exports, module) {
    var $ = require("jquery");

    $(document).on('cloudcms-ready', function(ev) {
        // find the "All Journals button"

        try {
            var url = window.location.href;
            if (url && -1 !== url.indexOf('/tasks/') && $("a[data-item-key='content/all-journals']").length !== 0) {
                // current view is in a task context so update the All Jounals link to use the same context
                var task = url.substring(url.indexOf('/tasks/')+7);
                task = task.substring(0, task.indexOf('/'));
 
                var branch = $("a[data-item-key='content/all-journals']").attr('href').substring($("a[data-item-key='content/all-journals']").attr('href').indexOf('/branches/')+10);;
                branch = branch.substring(0, branch.indexOf('/'));
                 
                $("a[data-item-key='content/all-journals']").attr('href', $("a[data-item-key='content/all-journals']").attr('href').replace("/branches/"+branch, "/tasks/"+task));
            }
        } finally {}
    });

});