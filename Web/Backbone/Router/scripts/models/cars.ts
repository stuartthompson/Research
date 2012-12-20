/// <reference path="../framework/jquery-1.8.3.d.ts" />
/// <reference path="../framework/underscore-1.4.2.d.ts" />
/// <reference path="../framework/backbone-0.9.2.d.ts" />
/// <reference path="car.d.ts" />

module RouterExample {

	export class Cars extends Backbone.Collection {

		constructor (cars: RouterExample.Car[]) {
			super();
			this.models = cars;
		}

	}

}