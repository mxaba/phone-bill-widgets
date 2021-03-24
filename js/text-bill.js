// get a reference to the textbox where the bill type is to be entered

var addToBillBtn = document.querySelector('.addToBillBtn')
var callTotalOne = document.querySelector('.callTotalOne')
var smsTotalOne = document.querySelector('.smsTotalOne')
var totalOne = document.querySelector('.totalOne')

//create a variable that will keep track of the total bill
var smsCallTotal = 0
var callTotal1 = 0
var smsTotal1 = 0

function applyStyle(smsCallTotal){
    if (smsCallTotal > 49.99){
        if (totalOne.classList.contains('warning')){
            totalOne.classList.remove('warning')
        }
        totalOne.classList.add('danger')
    } else if (smsCallTotal > 29.99 && smsCallTotal <= 49.99){
        if (totalOne.classList.contains('danger')){
            totalOne.classList.remove('danger')
        }
        totalOne.classList.add('warning')
    }
}

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', function(){
    var billTypeText = document.querySelector('.billTypeText')
    if (billTypeText.value === 'call' || billTypeText.value === 'Call'){
        callTotal1 += 2.75
        smsCallTotal += 2.75
    } else if (billTypeText.value === 'sms' || billTypeText.value === 'SMS'){
        smsTotal1 += 0.65
        smsCallTotal += 0.65
    }
    smsTotalOne.innerHTML = smsTotal1.toFixed(2)
    callTotalOne.innerHTML = callTotal1.toFixed(2)
    totalOne.innerHTML = 'R' + smsCallTotal.toFixed(2)
    applyStyle(smsCallTotal.toFixed(2))
})

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
