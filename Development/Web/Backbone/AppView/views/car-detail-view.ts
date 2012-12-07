/// <reference path="../framework/jquery-1.8.3.d.ts" />
/// <reference path="../framework/underscore-1.4.2.d.ts" />
/// <reference path="../framework/backbone-0.9.2.d.ts" />
/// <reference path="../framework/mustache-0.7.0.d.ts" />

module Views
{
	export class CarDetailView extends Backbone.View
	{
		constructor (el: JQuery, carId: number, options?: Backbone.ViewOptions)
		{
			super(options);

			this.$el = el;
			this.car = this.getCarData(carId);
			this.carTemplate = $('car-template').html();
		}

		render() {
			var html = Mustache.to_html(this.carTemplate, this.car);
			this.$el.html(html);
		}

		getCarData(carId: number): any {
			switch (carId) {
				case 1: return { id: 1, name: "Subaru Impreza WRX STi", description: "AWESOME" }
				case 2: return { id: 2, name: "Ferrari 355 Spyder", description: "Fabulous!" }
				case 3: return { id: 3, name: "Mazda 3", description: "Zoom Zoom!" }
				case 4: return { id: 4, name: "Jeep Grand Cherokee", description: "Vroom!" }
			}
		}

		car: any;
		carTemplate: string;
	}
}