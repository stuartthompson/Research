/// <reference path="framework/jquery-1.8.3.d.ts" />
/// <reference path="framework/underscore-1.4.2.d.ts" />
/// <reference path="framework/backbone-0.9.2.d.ts" />
/// <reference path="framework/mustache-0.7.0.d.ts" />
/// <reference path="models/cars.d.ts" />
/// <reference path="models/car.d.ts" />

module RouterExample {

	export class ListView extends Backbone.View {

		constructor (el: JQuery, options? : Backbone.ViewOptions) {
			super(options);

			this.$el = el;
			this.listTemplate = $('#list-template').html();
		}

		render() {
			var html = Mustache.to_html(this.listTemplate, this.getData().toJSON());
			this.$el.html(html);
		}

		getData() : RouterExample.Cars
		{
			var cars = 
				new RouterExample.Cars([
					new RouterExample.Car(1, 'Subaru Impreza WRX STi'),
					new RouterExample.Car(2, 'Ferrari 355 Spyder'), 
					new RouterExample.Car(3, 'Mazda 3'), 
					new RouterExample.Car(4, 'Jeep Grand Cherokee')]);
			return cars;
		}

		listTemplate: string;

	}

}