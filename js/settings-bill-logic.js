var seetingBillLogic = function(){
    var intiSmsTotal = 0
    var initCallsTotal = 0

    //objects that will store the sectings from the dom
    var billObject = {
        'sms': 0,
        'call': 0,
        'critical': 0,
        'warning': 0
    }

    //Functions to getll all the update settings and it will set it to the billObject
    var getCallCost = function(callTotalSettings){
        billObject['call'] = parseInt(callTotalSettings).toFixed(2)
    }
    var getSmsCost = function(smsTotalSettings){
        billObject['sms'] = parseInt(smsTotalSettings).toFixed(2)
    }
    var getWarningCost = function(warningLevelSetting){
        billObject['warning'] = parseInt(warningLevelSetting).toFixed(2)
    }
    var getCriticalCost = function(CritialCostSetting){
        billObject['critical'] = parseInt(CritialCostSetting).toFixed(2)
    }

    //function to calculate the cost of call or sms bill given according to the update
    function settingsCalculation(checkedRadioSet){
        if (checkedRadioSet == 'csll'){
            // (getTotal() <= billObject.critical ? initCallsTotal += billObject.call: console.log('This is over the critical value'))
            if ((getTotal + billObject.csll) <= billObject.critical){
                initCallsTotal += billObject.csll
            }else{
                console.log('This is over the critical value')
            }
        } if (checkedRadioSet == 'sms'){
            // (getTotal() <= billObject.critical ? intiSmsTotal += billObject.sms: console.log('This is over the critical value'))
            if ((getTotal + billObject.sms) <= billObject.critical){
                intiSmsTotal += billObject.sms
            }else{
                console.log('This is over the critical value')
            }
        }
    }

    //Functions to return the values 
    var getCostSmsTotal = function(){
        return intiSmsTotal
    }
    var getCostCallTotal = function(){
        return initCallsTotal
    }
    var getTotal = function(){
        return getCostSmsTotal() + getCostCallTotal()
    }
    
    return {
        setSms: getSmsCost,
        setCall: getCallCost,
        warning: getWarningCost,
        critical: getCriticalCost,
        calcu: settingsCalculation,
        getCall: getCostCallTotal,
        getSms: getCostSmsTotal,
        total: getTotal,
        bill: bill
    }
}