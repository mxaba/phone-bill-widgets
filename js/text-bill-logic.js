var textBillLogic = function(){
    var totalCalls = 0
    var totalSms = 0

    var calculates = function(billType){
        // console.log('Inside calculates function...')
        if (billType === 'sms'){
            totalSms += 0.65
        }else if (billType === "call"){
            totalCalls += 2.75
        }
    }

    var getTotals = function(){
        return{
            total: (totalCalls + totalSms).toFixed(2),
            call: totalCalls.toFixed(2),
            sms: totalSms.toFixed(2)
        }
    }

    return{
        get: getTotals,
        calculates: calculates
    }
}