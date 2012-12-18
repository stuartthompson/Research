// View messenger
// Provides a mechanisms for JavaScript views to communicate
class ViewMessenger {
    constructor () {
        this._subscribers = new Array();
    }

    static getViewMessenger() : ViewMessenger {
        return this._viewMessenger;
    }

    subscribe(callback: any): void { 
        this._subscribers.push(callback);
    }
     
    unsubscribe(callback: any): void {
        for (var i = 0; i < this._subscribers.length; i++) {
            if (this._subscribers[i] === callback) {
                this._subscribers.splice(i, 1);
                return;
            }
        }
    } 

    sendMessage(message: string, data: any): void {
        for (var i = 0; i < this._subscribers.length; i++) {
            this._subscribers[i](message, data);
        }
    }

    private _subscribers: any[];
    private static _viewMessenger: ViewMessenger = new ViewMessenger();
}