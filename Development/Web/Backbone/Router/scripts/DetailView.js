var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RouterExample;
(function (RouterExample) {
    var DetailView = (function (_super) {
        __extends(DetailView, _super);
        function DetailView(el, options) {
                _super.call(this, options);
            this.$el = el;
            this.detailTemplate = $('#detail-template').html();
        }
        DetailView.prototype.setCarId = function (carId) {
            this.carId = carId;
        };
        DetailView.prototype.render = function () {
            var data = this.getData();
            var html = Mustache.to_html(this.detailTemplate, data);
            this.$el.html(html);
        };
        DetailView.prototype.getData = function () {
            switch(this.carId) {
                case "1": {
                    return {
                        id: 1,
                        name: "Subaru Impreza WRX STi",
                        description: "AWESOME"
                    };

                }
                case "2": {
                    return {
                        id: 2,
                        name: "Ferrari 355 Spyder",
                        description: "Fabulous!"
                    };

                }
                case "3": {
                    return {
                        id: 3,
                        name: "Mazda 3",
                        description: "Zoom Zoom!"
                    };

                }
                case "4": {
                    return {
                        id: 4,
                        name: "Jeep Grand Cherokee",
                        description: "Vroom!"
                    };

                }
            }
        };
        return DetailView;
    })(Backbone.View);
    RouterExample.DetailView = DetailView;    
})(RouterExample || (RouterExample = {}));

