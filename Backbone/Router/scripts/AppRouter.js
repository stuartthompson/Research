var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RouterExample;
(function (RouterExample) {
    var AppRouter = (function (_super) {
        __extends(AppRouter, _super);
        function AppRouter(el, options) {
                _super.call(this, options);
            this.listView = new RouterExample.ListView(el);
            this.detailView = new RouterExample.DetailView(el);
            this.RegisterRoutes();
            Backbone.history.start();
        }
        AppRouter.prototype.Route_CarList = function () {
            this.listView.render();
        };
        AppRouter.prototype.Route_CarDetail = function (carId) {
            this.detailView.setCarId(carId);
            this.detailView.render();
        };
        AppRouter.prototype.RegisterRoutes = function () {
            this.route('CarList', 'Route_CarList', this.Route_CarList);
            this.route('Car/:id', 'Route_CarDetail', this.Route_CarDetail);
        };
        return AppRouter;
    })(Backbone.Router);
    RouterExample.AppRouter = AppRouter;    
})(RouterExample || (RouterExample = {}));

