var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Views;
(function (Views) {
    var CarListView = (function (_super) {
        __extends(CarListView, _super);
        function CarListView(el, options) {
                _super.call(this, options);
            this.$el = el;
            this.carListTemplate = $('#car-list-template').html();
        }
        CarListView.prototype.render = function () {
            var data = this.getSampleData();
            var html = Mustache.to_html(this.carListTemplate, data);
            this.$el.html(html);
        };
        CarListView.prototype.getSampleData = function () {
            var data = {
                cars: [
                    {
                        id: 1,
                        name: "Subaru WRX Impreza STi"
                    }, 
                    {
                        id: 2,
                        name: "Ferrari 355 Spyder"
                    }, 
                    {
                        id: 3,
                        name: "Mazda 3"
                    }, 
                    {
                        id: 4,
                        name: "Jeep Grand Cherokee"
                    }
                ]
            };
            return data;
        };
        return CarListView;
    })(Backbone.View);
    Views.CarListView = CarListView;    
})(Views || (Views = {}));
