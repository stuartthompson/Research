var ViewMessenger = (function () {
    function ViewMessenger() {
        this._subscribers = new Array();
    }
    ViewMessenger.getViewMessenger = function getViewMessenger() {
        return this._viewMessenger;
    }
    ViewMessenger.prototype.subscribe = function (callback) {
        this._subscribers.push(callback);
    };
    ViewMessenger.prototype.unsubscribe = function (callback) {
        for(var i = 0; i < this._subscribers.length; i++) {
            if(this._subscribers[i] === callback) {
                this._subscribers.splice(i, 1);
                return;
            }
        }
    };
    ViewMessenger.prototype.sendMessage = function (message, data) {
        for(var i = 0; i < this._subscribers.length; i++) {
            this._subscribers[i](message, data);
        }
    };
    ViewMessenger._viewMessenger = new ViewMessenger();
    return ViewMessenger;
})();
