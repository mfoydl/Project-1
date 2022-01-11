@isTest
public class AccountHandlerTest {
    
    @isTest
    public static void TP_addContacts(){
        Account newAccount = new Account(name='TEST@TEST.com');

        
        Test.startTest();
        Insert newAccount;

        List<Contact> contacts = [SELECT id FROM Contact];

        System.assertEquals(1,contacts.size());
        Test.stopTest();
    }

    @isTest
    public static void TP_createAccountFromForm(){
        String email = 'TEST@TEST.com';
        String name = 'TEST TESTER';
        String birthdate = '1/1/1111';
        String phone = '555-555-5555';

        AccountHandler.createAccountFromForm(email, name, birthdate, phone);

        Account account = [SELECT id, (SELECT name FROM Contacts) FROM Account WHERE id = : email LIMIT 1];
        Contact accountContact= account.contacts[0];
        
        System.assertEquals(email,accountContact.email);
        System.assertEquals(name, accountContact.name);
        System.assertEquals(date.parse(birthdate), accountContact.Birthdate);
        System.assertEquals(phone, accountContact.MobilePhone);
    }
}
