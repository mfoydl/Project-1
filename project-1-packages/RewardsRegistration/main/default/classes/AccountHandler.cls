public with sharing class AccountHandler {

    public static void addContacts(List<Account> accounts){

        List<Contact> newContacts = new List<Contact>();

        for(Account acc: accounts){
            newContacts.add(createAccountContact(acc));
        }

        Insert newContacts;
    }

    public static void createAccountContact(Account acc){
        
        Contact newContact = new Contact();
        String accName = acc.name;
        String contactName = accName.split(' ');

        newContact.firstName = contactName[0];
        newContact.lastName = contactName[1];
        newContact.accountId = acc.id;

        return newContact;
    }
}
