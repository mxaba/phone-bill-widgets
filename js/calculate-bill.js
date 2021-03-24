//get a reference to the billString
var billString = document.querySelector(".billString")

//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn")

//get a reference to the billTotal 
var billTotal = document.querySelector(".billTotal")

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal 

function setStyle(roundedBillTotal){
    if (roundedBillTotal < 20){
        if (billTotal.classList.contains('warning' || 'danger')) {
            billTotal.classList.remove('danger', 'warning')
        }
        billTotal.classList.add('style')
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

function calculateBtnClicked(){
    var billStringValue = billString.value;
    var roundedBillTotal = totalPhoneBill(billStringValue)
    
    billTotal.innerHTML = 'R' + roundedBillTotal
    setStyle(roundedBillTotal)
}

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked)
