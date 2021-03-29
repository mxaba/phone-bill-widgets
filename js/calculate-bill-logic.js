var calculateBill = function(billStringPassed){
    var arrayBill = billStringPassed.split(',')
    var call = 0
    var sms = 0

    //looping through the array
    for (var i = 0; i < arrayBill.length; i++){
        var str = arrayBill[i].trim()
        if (str == "sms" || str == "SMS"){
            sms++
        } else if (str == "call" || str == "Call"){
            call++
        }
    }
    //Adding the values to get the bill total
    var billlTotal = (2.75 * call) + (sms * 0.65)
    return {
        //returning the fixed value
        total: billlTotal
    }
}
