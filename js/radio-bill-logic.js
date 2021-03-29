var radioBillLogic = function(){

    //This will keep track of the totals of sms's and calls
    var callTotalBill = 0
    var smsTotalBill = 0

    var CalculateRadioBill = function(checkedRadio){
        if(checkedRadio === 'call'){
            callTotalBill += 2.75
        } if (checkedRadio === 'sms'){
            smsTotalBill += 0.65
        }
    }
    var getRadioTotals = function(){
        return {
            call: callTotalBill.toFixed(2),
            sms: smsTotalBill.toFixed(2),
            totalOfSmsCall: (callTotalBill + smsTotalBill).toFixed(2)
        }
    }

    return {
        calculate: CalculateRadioBill,
        getTotals: getRadioTotals
    }
}