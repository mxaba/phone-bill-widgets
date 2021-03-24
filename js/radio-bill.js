// get a reference to the sms or call radio buttons
// var checkedRadioBtn = document.querySelector('input[name="billItemType"]:checked')

//get a reference to the add button
var radioAddBtn = document.querySelector('.radioBillAddBtn')
var callTotalTwo = document.querySelector('.callTotalTwo')
var smsTotalTwo = document.querySelector('.smsTotalTwo')
var totalTwo = document.querySelector('.totalTwo')
//Virable
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
//* add the appropriate value to the running total
//* add nothing for invalid values that is not 'call' or 'sms'.
//* display the latest total on the screen
var callTotal = 0
var smsTotal = 0
var callSmsTotal = 0

function applyBillStyle(callSmsTotal){
    if ((callSmsTotal > 29.99) && (callSmsTotal <= 49.99)){
        if (totalTwo.classList.contains('danger')){
            totalTwo.classList.remove('danger')
        }
        totalTwo.classList.add('warning')
    } else if (callSmsTotal > 49.99) {
        if (totalTwo.classList.contains('warning')) {
            totalTwo.classList.remove('warning')
        }
        totalTwo.classList.add('danger')
    }
}

radioAddBtn.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 
    if (checkedRadioBtn){
        var checkedRadioBtn = checkedRadioBtn.value

        if (checkedRadioBtn === 'call'){
            callTotal += 2.75
            callSmsTotal += 2.75

        } else if (checkedRadioBtn === 'sms'){
            smsTotal += 0.65
            callSmsTotal += 0.65
        }

        console.log("sashashjdkahsahksha "+callSmsTotal)
        callTotalTwo.innerHTML = callTotal.toFixed(2)
        smsTotalTwo.innerHTML = smsTotal.toFixed(2)
        totalTwo.innerHTML = 'R' + callSmsTotal.toFixed(2)
        applyBillStyle(callSmsTotal)
    }
    
})
