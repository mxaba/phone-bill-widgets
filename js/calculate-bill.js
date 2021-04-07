var billString = document.querySelector(".billString")
var calculateBtn = document.querySelector(".calculateBtn")
var billTotal = document.querySelector(".billTotal")
var getBillString = function(){
    var inputValue = billString.value
    return {
        inputValue: inputValue
    }
}

function setStyle(roundedBillTotal){
    if (roundedBillTotal < 20){
        if (billTotal.classList.contains('warning' || 'danger')) {
            billTotal.classList.remove('danger', 'warning')
        }
    } else if (roundedBillTotal >= 19.00 && roundedBillTotal <= 29.99){
        if (billTotal.classList.contains('danger')){
            billTotal.classList.remove('danger')
        }
        billTotal.classList.add('warning')
    }
    else if (roundedBillTotal > 30){
        if (billTotal.classList.contains('warning')){
            billTotal.classList.remove('warning')
        }
        billTotal.classList.add('danger')
    }
}

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', function(){
    var getString = getBillString()
    var roundedBillTotal = calculateBill(getString.inputValue).total
    billTotal.innerHTML = 'R' + roundedBillTotal.toFixed(2)
    setStyle(roundedBillTotal)
})
