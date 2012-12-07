/// <reference path="../framework/jquery-1.8.3.d.ts" />
/// <reference path="../framework/underscore-1.4.2.d.ts" />
/// <reference path="../framework/backbone-0.9.2.d.ts" />
/// <reference path="car-list-view.d.ts" />

module Views
{
	export class AppView extends Backbone.View 
	{
		constructor (el: JQuery, options?: Backbone.ViewOptions) 
		{
			super(options);

			this.$el = el;
			this.carListView = new CarListView(this.$el);
		}

		render() {
			this.carListView.render();
		}

		carListView: Views.CarListView;
	}
}