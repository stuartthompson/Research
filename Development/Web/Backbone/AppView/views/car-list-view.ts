/// <reference path="../framework/jquery-1.8.3.d.ts" />
/// <reference path="../framework/underscore-1.4.2.d.ts" />
/// <reference path="../framework/backbone-0.9.2.d.ts" />
/// <reference path="../framework/mustache-0.7.0.d.ts" />

module Views
{
	export class CarListView extends Backbone.View
	{
		constructor (el: JQuery, options?: Backbone.ViewOptions)
		{
			super(options);

			this.$el = el;
			this.carListTemplate = $('#car-list-template').html();
		}

		render() {
			var data = this.getSampleData();
			var html = Mustache.to_html(this.carListTemplate, data);
			this.$el.html(html);
		}

		getSampleData() : any
		{
			var data = 
			{
				cars: 
				[
					{ id: 1, name: "Subaru Impreza WRX STi" },
					{ id: 2, name: "Ferrari 355 Spyder" },
					{ id: 3, name: "Mazda 3" },
					{ id: 4, name: "Jeep Grand Cherokee" }
				]
			};
			return data;
		}

		carListTemplate: string;
	}
}