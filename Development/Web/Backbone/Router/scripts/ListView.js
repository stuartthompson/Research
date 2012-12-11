var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var RouterExample;
(function (RouterExample) {
    var ListView = (function (_super) {
        __extends(ListView, _super);
        function ListView(el, options) {
                _super.call(this, options);
            this.$el = el;
            this.listTemplate = $('#list-template').html();
        }
        ListView.prototype.render = function () {
            var html = Mustache.to_html(this.listTemplate, this.getData().toJSON());
            this.$el.html(html);
        };
        ListView.prototype.getData = function () {
            var cars = new RouterExample.Cars([
                new RouterExample.Car(1, 'Subaru Impreza WRX STi'), 
                new RouterExample.Car(2, 'Ferrari 355 Spyder'), 
                new RouterExample.Car(3, 'Mazda 3'), 
                new RouterExample.Car(4, 'Jeep Grand Cherokee')
            ]);
            return cars;
        };
        return ListView;
    })(Backbone.View);
    RouterExample.ListView = ListView;    
})(RouterExample || (RouterExample = {}));

