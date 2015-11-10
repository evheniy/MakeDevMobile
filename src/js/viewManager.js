module.export = {
    currentView: null,
    showView: function (view) {
        'use strict';
        if (this.currentView !== null && this.currentView.cid != view.cid) {
            this.currentView.remove();
        }
        this.currentView = view;
        return view.render();
    }
};