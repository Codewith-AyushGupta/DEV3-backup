public without sharing class HomePageMainComponentController {
    
    @AuraEnabled
    public static Map<String,string> fetchOnLoadConfigration(){
              
        Map<String, string> configrations = GetRecordByCurrentUser.getRecordSize();
        return configrations;
    }
}