public class Product2DAO {

    private static Product2DAO instance = null;
    
    public static Product2DAO getInstance(){
        if(instance == null) {
            instance = new Product2DAO();
        }
        return instance;
    }

    public List<Product2> getProducts(){
        return [SELECT Id, Name, Image__c, Description, Family, ProductCode FROM Product2];
    }

}