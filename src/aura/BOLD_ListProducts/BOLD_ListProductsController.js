({
	doInit : function(component, event, helper) {
        var actions = [
            { label: 'Show Image', name: 'show_image' }
        ];
        
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'Product Code', fieldName: 'ProductCode', type: 'text'},
            {label: 'Description', fieldName: 'Description', type: 'text'},
            {label: 'Family', fieldName: 'Family', type: 'text'},
            {type: 'action', typeAttributes: { rowActions: actions } }
        ]);
        
        helper.getProducts(component, helper);
	},
    
    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
		
        component.set("v.showModalProduct", true);
        component.set("v.productName", row.Name);
        component.set("v.productImage", row.Image__c);
    },
    
    closeModal: function (component, event, helper) {
        component.set("v.showModalProduct", false);
    },
    
    loadMoreData: function (cmp, event, helper) {
        //Display a spinner to signal that data is being loaded
        console.log('entrei aqui');
        event.getSource().set("v.isLoading", true);
        //Display "Loading" when more data is being loaded
        cmp.set('v.loadMoreStatus', 'Loading');
        var data = helper.fetchData(cmp, cmp.get("v.initialRows"), cmp.get('v.rowsToLoad'));
        
        if (cmp.get('v.listProducts').length >= cmp.get('v.totalNumberOfRows')) {
            cmp.set('v.enableInfiniteLoading', false);
            cmp.set('v.loadMoreStatus', 'No more data to load');
        } else {
            var currentData = cmp.get('v.listProducts');
            //Appends new data to the end of the table
            var newData = currentData.concat(data);
            cmp.set('v.listProducts', newData);
            cmp.set('v.loadMoreStatus', '');
        }
        event.getSource().set("v.isLoading", false);
    }
    
})