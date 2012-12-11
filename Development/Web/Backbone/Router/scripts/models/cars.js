var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RouterExample;
(function (RouterExample) {
    var Cars = (function (_super) {
        __extends(Cars, _super);
        function Cars(cars) {
                _super.call(this);
            this.models = cars;
        }
        return Cars;
    })(Backbone.Collection);
    RouterExample.Cars = Cars;    
})(RouterExample || (RouterExample = {}));

