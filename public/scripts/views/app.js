define(['backbone', 'hbs!template/main'], function(Backbone, template) {
	var App = Backbone.View.extend({
		initialize: function(){
			var self = this;
			console.log( 'initialize' );
			$.get('http://localhost:8080/hello', function(data){
				self.render(data);
			});

		},
		render: function(data){
			console.log( 'render' );
			this.$el.html(template({data: data}));
			return this;
		}
	});

	return App;
});