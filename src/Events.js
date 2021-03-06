define(function (require, exports) {
    "use strict";

    /**
     * List of Events to be used in the extension.
     * Events should be structured by file who emits them.
     */

    // Brackets events
    exports.BRACKETS_CURRENT_DOCUMENT_CHANGE = "brackets.current.document.change";
    exports.BRACKETS_PROJECT_CHANGE = "brackets.project.change";
    exports.HANDLE_PROJECT_REFRESH = "handle.project.refresh";

    // Git events
    exports.GITIGNORE_MISSING = "gitignore.file.missing";
    exports.GIT_USERNAME_CHANGED = "git.username.changed";
    exports.GIT_EMAIL_CHANGED = "git.email.changed";

    // Startup events
    exports.REFRESH_ALL = "git.refresh.all";
    exports.GIT_ENABLED = "git.enabled";
    exports.GIT_DISABLED = "git.disabled";

    // Panel.js
    exports.HANDLE_GIT_INIT = "handle.git.init";
    exports.HANDLE_GIT_CLONE = "handle.git.clone";
    exports.HANDLE_PUSH = "handle.push";
    exports.HANDLE_PULL = "handle.pull";
    exports.HANDLE_REMOTE_PICK = "handle.remote.pick";
    exports.HANDLE_REMOTE_DELETE = "handle.remote.delete";
    exports.HANDLE_REMOTE_CREATE = "handle.remote.create";
    exports.HANDLE_FTP_PUSH = "handle.ftp.push";
    exports.HISTORY_SHOW = "history.show";

    // Git results
    exports.GIT_STATUS_RESULTS = "git.status.results";

    // Remotes.js
    exports.GIT_REMOTE_AVAILABLE = "git.remote.available";
    exports.GIT_REMOTE_NOT_AVAILABLE = "git.remote.not.available";
    exports.PULL_STARTED = "pull.started";
    exports.PULL_FINISHED = "pull.finished";
    exports.PUSH_STARTED = "push.started";
    exports.PUSH_FINISHED = "push.finished";
    exports.REMOTES_REFRESH_PICKER = "remotes.refresh.picker";
});
