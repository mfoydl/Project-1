public with sharing class AccountHandler {

    public static void addContacts(List<Account> accounts){

        List<Contact> newContacts = new List<Contact>();

        for(Account acc: accounts){
            newContacts.add(createAccountContact(acc));
        }

        Insert newContacts;
    }

    public static Contact createAccountContact(Account acc){
        
        Contact newContact = new Contact();

        newContact.lastName = acc.name;
        newContact.accountId = acc.id;

        return newContact;
    }

    @AuraEnabled
    public static void createAccountFromForm(String email, String name, String birthdate, string phone){
        try {
            Account newAccount = new Account();
            
            newAccount.name = name;

            Insert newAccount;

            updateAccountContactDetails(email,name,Date.parse(birthdate),phone);

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }

    private static void updateAccountContactDetails(String email, String name, Date birthdate, String phone){
        Contact accountContact = [SELECT firstName,email,mobilePhone,birthdate FROM Contact WHERE lastName = :name LIMIT 1 ];

        accountContact.firstName = name;
        accountContact.email = email;
        accountContact.mobilephone = phone;
        accountContact.birthdate = birthdate;

        Update accountContact;
    }
}
