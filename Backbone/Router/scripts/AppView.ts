/// <reference path="framework/jquery-1.8.3.d.ts" />
/// <reference path="framework/underscore-1.4.2.d.ts" />
/// <reference path="framework/backbone-0.9.2.d.ts" />
/// <reference path="framework/mustache-0.7.0.d.ts" />
/// <reference path="AppRouter.d.ts" />

module RouterExample {

	export class AppView extends Backbone.View {

		constructor (el: JQuery, options?: Backbone.ViewOptions) {
			super(options);

			this.$el = el;
			
			this.appRouter = new AppRouter(this.$el);
		}

		render() {
			this.appRouter.navigate('CarList', {trigger: true});
		}

		// Fields
		appRouter: AppRouter;
		
	}

}