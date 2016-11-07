(function(){

	"use strict"

	console.log("start"); 
	var app = {
		html: null, 	
		recupererjson: null, 
		id: null, 


		init:function(){
			console.log(app); 

		},

		recupererjson:function(data){
			$.ajax({
				dataType: "json",
				url: "/crm.json",
				success: app.success; 
			});

		}, 
app.
	}; 
	app.init(); 
})(); 