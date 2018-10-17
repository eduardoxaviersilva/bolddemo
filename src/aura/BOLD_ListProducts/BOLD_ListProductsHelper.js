({
	getProducts : function(component, helper) {
        var action = component.get("c.getProducts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var listProductsAll = response.getReturnValue();
                component.set("v.listProductsAll", listProductsAll);
                component.set("v.totalNumberOfRows", listProductsAll.length); 
                component.set('v.listProducts', helper.fetchData(component, component.get("v.initialRows"), component.get("v.rowsToLoad")));
            } else if (state == "INCOMPLETE") {
            } else if (state == "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +errors[0].message);
                    }
                }
            }
        });
        $A.enqueueAction(action);
	},
    
    fetchData : function(component, numberInitial, numberFinal) {
        var listProductsAll = component.get("v.listProductsAll");
        var listReturn = [];
        
        for(var i = numberInitial; i < numberFinal; i++){
            if(i < listProductsAll.length){
            	listReturn.push(listProductsAll[i]);    
            }
        }
        component.set("v.initialRows", numberInitial+20);
        component.set("v.rowsToLoad", numberFinal+20);
        console.log(listReturn);
        return listReturn;
    }
})