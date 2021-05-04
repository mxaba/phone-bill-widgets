document.addEventListener('DOMContentLoaded', function(){
// get a reference to the textbox where the bill type is to be entered
var addToBillBtn = document.querySelector('.addToBillBtn')

//create a variable that will keep track of the total bill

var textBill = textBillLogic()

function getTextBtnElement(){
    var checkedRadioBtn = document.querySelector('.billTypeText');
    return {
        billType: checkedRadioBtn.value
    }
}

function setTextTotals(){
    var callTotalOne = document.querySelector('.callTotalOne')
    var smsTotalOne = document.querySelector('.smsTotalOne')
    var totalOne = document.querySelector('.totalOne')
    var userTemplate = document.querySelector('.userTemplate').innerHTML

    var totalEle = Handlebars.compile(userTemplate)

    callTotalOne.innerHTML = textBill.get().call
    smsTotalOne.innerHTML = textBill.get().sms
    totalsBills = totalEle({totalsBills: textBill.get().total})
    console.log(typeof totalsBills)
    totalOne.innerHTML = 'R' + totalEle({totalsBills: textBill.get().total})
}


function applyStyle(totalValue){
    var totalOne = document.querySelector('.totalOne')
    if (totalValue > 49.99){
        if (totalOne.classList.contains('warning')){
            totalOne.classList.remove('warning')
        }
        totalOne.classList.add('danger')
    } else if (totalValue > 29.99 && totalValue <= 49.99){
        if (totalOne.classList.contains('danger')){
            totalOne.classList.remove('danger')
        }
        totalOne.classList.add('warning')
    }
}

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', function(){
    getTextBtnElement()
    var billEntered = getTextBtnElement().billType
    textBill.calculates(billEntered)
    setTextTotals()
    applyStyle(textBill.get().total)
})

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
})