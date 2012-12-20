module RouterExample {
    export class DetailView extends Backbone.View {
        constructor (el: JQuery, options?: Backbone.ViewOptions);
        public setCarId(carId: number): void;
        public render(): void;
        private getData(): any;
        public detailTemplate: string;
        public carId: number;
    }
}
