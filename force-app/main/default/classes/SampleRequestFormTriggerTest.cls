@isTest
public class SampleRequestFormTriggerTest {
    public static testMethod void testInsert(){
        Id recordTypeId = Schema.SObjectType.Sample_Request_Form__c.getRecordTypeInfosByDeveloperName().get('InternalEmployee').getRecordTypeId();
        Sample_Request_Form__c sampleRequest = new Sample_Request_Form__c();
        sampleRequest.Company_name__c = 'test1';
        sampleRequest.Sample_Request_Form_Status__c = 'Submitted';
        sampleRequest.Email_address_for_confirmation__c='test@gmail.com';
        sampleRequest.RecordTypeId = recordTypeId;
        insert sampleRequest;
        
        Sample_Request_Form__c objSampleRequest =[select id,Email_address_for_confirmation__c from Sample_Request_Form__c where Company_name__c='test1'];
        objSampleRequest.Sample_Request_Form_Status__c = 'In Progress';
        objSampleRequest.Email_address_for_confirmation__c='test@gmail.com';
        update objSampleRequest;
    }
    
}