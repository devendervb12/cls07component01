sap.ui.controller("smax.cls07.proj1.view.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Page1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Page1
*/
//	onExit: function() {
//
//	}
	/*gotoPage2 : function(){
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("forPage2");
	},*/
	onItemSelection : function(oEvent){
		var custId = oEvent.getSource().getDescription()
		this.getOwnerComponent().getRouter().navTo("forPage2", { cId : custId });
	}

});