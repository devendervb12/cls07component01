
sap.ui.core.UIComponent.extend("smax.cls07.proj1.Component",{
	metadata : {
		rootView : "smax.cls07.proj1.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",
				viewType : "XML",
				controlId : "idApp",
				controlAggregation : "pages"
			},
			routes : [
				{					
				    pattern : "",
					name : "home",
					viewName : "smax.cls07.proj1.view.Page1"					
				},
				{
					pattern : "toPage2",
					name : "forPage2",
					viewName : "smax.cls07.proj1.view.Page2"					
				}
				
			]
		}
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
		
	}
});