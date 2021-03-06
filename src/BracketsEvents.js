define(function (require) {
    "use strict";

    // Local modules
    var Events        = require("src/Events"),
        EventEmitter  = require("src/EventEmitter"),
        Git           = require("src/Git/Git");

    function refreshStatus() {
        // Extension parts should listen to GIT_STATUS_RESULTS
        Git.status();
    }

    function attachGitOnlyEvents() {
        $("#open-files-container").on("contentChanged", refreshStatus);
    }

    function detachGitOnlyEvents() {
        $("#open-files-container").off("contentChanged", refreshStatus);
    }

    EventEmitter.on(Events.GIT_ENABLED, function () {
        attachGitOnlyEvents();
    });
    EventEmitter.on(Events.GIT_DISABLED, function () {
        detachGitOnlyEvents();
    });

});
