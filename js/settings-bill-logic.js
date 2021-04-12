var seetingBillLogic = function(){

    var intiSmsTotal = 0
    var initCallsTotal = 0
    var warningMes
    var overallTotal = 0

    //objects that will store the sectings from the dom
    var billObjectCall = 0
    var billObjectSms = 0
    var billObjectWarning = 0
    var billObjecCritical = 0

    //Functions to getll all the update settings and it will set it to the billObject
    var getCallCost = function(callTotalSettings){
        billObjectCall = parseFloat(callTotalSettings).toFixed(2)
        
    }
    var getSmsCost = function(smsTotalSettings){
        billObjectSms = parseFloat(smsTotalSettings).toFixed(2)
    }
    var getWarningCost = function(warningLevelSetting){
        billObjectWarning = parseFloat(warningLevelSetting).toFixed(2)
    }
    var getCriticalCost = function(CritialCostSetting){
        billObjecCritical = parseFloat(CritialCostSetting).toFixed(2)
    }
    
    function addClass(){
        if(criticalLevel()){
            return "danger"
        } if(warningLevel()){
            return "warning"
        }
    }

    //function to calculate the cost of call or sms bill given according to the update
    function settingsCalculation(checkedRadioSet){
        // console.log("Inside cal")
        if (checkedRadioSet === 'call'){
            if ((overallTotal + parseFloat(billObjectCall)) <= billObjecCritical){ //I am stoping it not to add if the overal total is beyonf the critital value
                initCallsTotal += parseFloat(billObjectCall)
                overallTotal += parseFloat(billObjectCall)
            } else{
                warningMes = 'This is over the critical value'
            }
        } if (checkedRadioSet === 'sms'){ //I am stoping it not to add if the overal total is beyonf the critital value
            if ((overallTotal + parseFloat(billObjectSms)) <= billObjecCritical){
                intiSmsTotal += parseFloat(billObjectSms)
                overallTotal += parseFloat(billObjectSms)
            } else{
                
                warningMes = 'This is over the critical value'
            }
        }
    }


function criticalLevel(){
 return overallTotal >= billObjecCritical
}

function warningLevel(){
  return  overallTotal >= billObjectWarning && overallTotal < billObjecCritical
}


    //Functions to return the values 
    var getCostSmsTotal = function(){
        return intiSmsTotal
    }
    var getCostCallTotal = function(){
        return initCallsTotal
    }
    var getTotal = function(){
        return overallTotal
    }
    var getWarningVlue = function(){
        // console.log(billObjectWarning)
        return parseFloat(billObjectWarning)
    }
    var getCriticalVlue = function(){
        return parseFloat(billObjecCritical)
    }
    
    return {
        getSmsCost: getSmsCost,
        getCallCost: getCallCost,
        getWarningCost: getWarningCost,
        getCriticalCost: getCriticalCost,
        settingsCalculation: settingsCalculation,
        getCostCallTotal: getCostCallTotal,
        getCostSmsTotal: getCostSmsTotal,
        getTotal: getTotal,
        getWarningVlue: getWarningVlue,
        getCriticalVlue: getCriticalVlue,
        addClass
    }
}