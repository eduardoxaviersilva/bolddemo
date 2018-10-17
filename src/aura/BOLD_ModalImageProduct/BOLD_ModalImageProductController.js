({
	closeModal: function(component, event, helper) {
        var evt = $A.get("e.c:BOLD_CloseModalProduct");
        evt.fire();  
    },
})