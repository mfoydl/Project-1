public without sharing class ProductHelper {
    

    @AuraEnabled(cacheable=true)
    public static List<id> getSeasonalProductIds(){
        try {
            List<id> productIds = new List<id>();

            for(Product2 product: [SELECT id FROM Product2 LIMIT 3 ]){
                productIds.add(product.id);
            }
            
            return productIds;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Product2> getFeaturedProducts(){
        try {
            return [SELECT name,description FROM Product2 LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Product2> getProductsByType(String type){
        try {
            return [SELECT name,description FROM Product2];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
