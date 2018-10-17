public without sharing class BOLD_ListProductsController {
    
    @AuraEnabled
    public static List<Product2> getProducts() {
        return Product2DAO.getInstance().getProducts();
    }

}