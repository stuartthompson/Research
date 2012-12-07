var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Views;
(function (Views) {
    var CarDetailView = (function (_super) {
        __extends(CarDetailView, _super);
        function CarDetailView(el, carId, options) {
                _super.call(this, options);
            this.$el = el;
            this.car = this.getCarData(carId);
            this.carTemplate = $('car-template').html();
        }
        CarDetailView.prototype.render = function () {
            var html = Mustache.to_html(this.carTemplate, this.car);
            this.$el.html(html);
        };
        CarDetailView.prototype.getCarData = function (carId) {
            switch(carId) {
                case 1: {
                    return {
                        id: 1,
                        name: "Subaru Impreza WRX STi",
                        description: "AWESOME"
                    };

                }
                case 2: {
                    return {
                        id: 2,
                        name: "Ferrari 355 Spyder",
                        description: "Fabulous!"
                    };

                }
                case 3: {
                    return {
                        id: 3,
                        name: "Mazda 3",
                        description: "Zoom Zoom!"
                    };

                }
                case 4: {
                    return {
                        id: 4,
                        name: "Jeep Grand Cherokee",
                        description: "Vroom!"
                    };

                }
            }
        };
        return CarDetailView;
    })(Backbone.View);
    Views.CarDetailView = CarDetailView;    
})(Views || (Views = {}));
