var radioAddBtn = document.querySelector('.radioBillAddBtn')
var callTotalTwo = document.querySelector('.callTotalTwo')
var smsTotalTwo = document.querySelector('.smsTotalTwo')
var totalTwo = document.querySelector('.totalTwo')

var radioBill = radioBillLogic() 

function setRadioTotals(){

    var userTemplate = document.querySelector('.userTemplate').innerHTML
    var totalEle = Handlebars.compile(userTemplate)

    callTotalTwo.innerHTML = totalEle({
         totalsCallBills: radioBill.getTotals().call
     })
    smsTotalTwo.innerHTML = totalEle({
        totalsSmsBills: radioBill.getTotals().sms
    })
    totalTwo.innerHTML = 'R' + totalEle({
        totalsBills: radioBill.getTotals().totalOfSmsCall
    })
}

function getRadioBtnElement(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    return {
        billTypeChecked: checkedRadioBtn.value
    }
}

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
    getRadioBtnElement()
    var checkedRadioBtn = getRadioBtnElement().billTypeChecked
    radioBill.calculate(checkedRadioBtn)
    setRadioTotals()
    applyBillStyle(radioBill.getTotals().totalOfSmsCall)
    
})
