/// <reference path="framework/jquery-1.8.3.d.ts" />
/// <reference path="framework/underscore-1.4.2.d.ts" />
/// <reference path="framework/backbone-0.9.2.d.ts" />
/// <reference path="framework/mustache-0.7.0.d.ts" />

module RouterExample {

	export class DetailView extends Backbone.View {

		constructor(el: JQuery, options?: Backbone.ViewOptions) {
			super(options);

			this.$el = el;
			this.detailTemplate = $('#detail-template').html();
		}

		setCarId(carId: number): void {
			// This would typically involve modifying the rest url for the view
			this.carId = carId;
		}

		render() {
			var data = this.getData();
			var html = Mustache.to_html(this.detailTemplate, data);
			this.$el.html(html);
		}

		private getData(): any {
			// Simulate getting data from the server
			switch (this.carId) {
				case "1": return { id: 1, name: "Subaru Impreza WRX STi", description: "AWESOME" }
				case "2": return { id: 2, name: "Ferrari 355 Spyder", description: "Fabulous!" }
				case "3": return { id: 3, name: "Mazda 3", description: "Zoom Zoom!" }
				case "4": return { id: 4, name: "Jeep Grand Cherokee", description: "Vroom!" }
			}
		}

		detailTemplate: string;
		carId: number;

	}

}