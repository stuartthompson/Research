var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RouterExample;
(function (RouterExample) {
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(id, name) {
                _super.call(this);
            this.set("id", id);
            this.set("name", name);
        }
        return Car;
    })(Backbone.Model);
    RouterExample.Car = Car;    
})(RouterExample || (RouterExample = {}));

