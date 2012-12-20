/// <reference path="framework/jquery-1.8.3.d.ts" />
/// <reference path="framework/underscore-1.4.2.d.ts" />
/// <reference path="framework/backbone-0.9.2.d.ts" />
/// <reference path="framework/mustache-0.7.0.d.ts" />
/// <reference path="ListView.d.ts" />
/// <reference path="DetailView.d.ts" />

module RouterExample {

	export class AppRouter extends Backbone.Router {

		constructor (el: JQuery, options? : Backbone.RouterOptions) {
			super(options);

			this.listView = new ListView(el);
			this.detailView = new DetailView(el);

			this.RegisterRoutes();

			Backbone.history.start();
		}

		Route_CarList() {
			this.listView.render();
		}

		Route_CarDetail(carId: any) {
			this.detailView.setCarId(carId);
			this.detailView.render();
		}

		private RegisterRoutes() {
			this.route('CarList', 'Route_CarList', this.Route_CarList);
			this.route('Car/:id', 'Route_CarDetail', this.Route_CarDetail);
		}

		listView: ListView;
		detailView: DetailView;

	}

}