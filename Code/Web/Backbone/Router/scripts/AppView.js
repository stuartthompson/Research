var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RouterExample;
(function (RouterExample) {
    var AppView = (function (_super) {
        __extends(AppView, _super);
        function AppView(el, options) {
                _super.call(this, options);
            this.$el = el;
            this.appRouter = new RouterExample.AppRouter(this.$el);
        }
        AppView.prototype.render = function () {
            this.appRouter.navigate('CarList', {
                trigger: true
            });
        };
        return AppView;
    })(Backbone.View);
    RouterExample.AppView = AppView;    
})(RouterExample || (RouterExample = {}));

