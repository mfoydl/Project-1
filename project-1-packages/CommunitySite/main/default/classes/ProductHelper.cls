public without sharing class ProductHelper {
    

    @AuraEnabled(cacheable=true)
    public static List<id> getSeasonalProductIds(){
        try {
            List<id> productIds = new List<id>();

            for(Product2 product: [SELECT id, Seasonal__c FROM Product2 WHERE Seasonal__c = true LIMIT 3 ]){
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
            return [SELECT name,description, Featured__c FROM Product2 WHERE Featured__c = true LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Product2> getProductsByType(String type){
        try {
            return [SELECT name,description,Menu_Type__c FROM Product2 WHERE Menu_Type__c = :type];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
