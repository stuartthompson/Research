var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Views;
(function (Views) {
    var AppView = (function (_super) {
        __extends(AppView, _super);
        function AppView(el, options) {
                _super.call(this, options);
            this.$el = el;
            this.carListView = new Views.CarListView(this.$el);
        }
        AppView.prototype.render = function () {
            this.carListView.render();
        };
        return AppView;
    })(Backbone.View);
    Views.AppView = AppView;    
})(Views || (Views = {}));
