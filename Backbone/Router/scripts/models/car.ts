/// <reference path="../framework/jquery-1.8.3.d.ts" />
/// <reference path="../framework/underscore-1.4.2.d.ts" />
/// <reference path="../framework/backbone-0.9.2.d.ts" />

module RouterExample {

	export class Car extends Backbone.Model {

		constructor (id: number, name: string) {
			super();

			this.set("id", id);
			this.set("name", name);
		}

	}

}