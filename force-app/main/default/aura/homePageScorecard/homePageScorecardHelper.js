({
    getTotalCount : function(component, event, helper) {
        var action = component.get("c.fetchOnLoadConfigration"); 
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") { 
                var returnResult=  response.getReturnValue();
                //alert(JSON.stringify(returnResult));
                console.log('returnResult == '+JSON.stringify(returnResult));
                component.set("v.totalCountOfObject.opportunityByMonth",returnResult.opportunityByMonth);
                component.set("v.totalCountOfObject.opportunityByYear",returnResult.opportunityByYear);
                component.set("v.totalCountOfObject.accountByMonth",returnResult.accountByMonth);
                component.set("v.totalCountOfObject.accountByYear",returnResult.accountByYear);
                component.set("v.totalCountOfObject.contactByMonth",returnResult.contactByMonth);
                component.set("v.totalCountOfObject.contactByYear",returnResult.contactByYear);
                component.set("v.totalCountOfObject.leadByMonth",returnResult.leadByMonth);
                component.set("v.totalCountOfObject.leadByYear",returnResult.leadByYear);
                 component.set("v.totalCountOfObject.opportunityByMonthId",returnResult.opportunityByMonthId);
                component.set("v.totalCountOfObject.opportunityByYearId",returnResult.opportunityByYearId);
                component.set("v.totalCountOfObject.accountByMonthId",returnResult.accountByMonthId);
                component.set("v.totalCountOfObject.accountByYearId",returnResult.accountByYearId);
                component.set("v.totalCountOfObject.contactByMonthId",returnResult.contactByMonthId);
                component.set("v.totalCountOfObject.contactByYearId",returnResult.contactByYearId);
                component.set("v.totalCountOfObject.leadByMonthId",returnResult.leadByMonthId);
                component.set("v.totalCountOfObject.leadByYearId",returnResult.leadByYearId);
            }
            
            else if (state === "ERROR") {
                var errors = response.getError();
                
                if (errors) {
                    
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                    errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            } 
        });         
        $A.enqueueAction(action);
    },
})