// get refences to all the settings fields
var callTotalSettings = document.querySelector('.callTotalSettings')
var smsTotalSettings = document.querySelector('.smsTotalSettings')
var totalSettings = document.querySelector('.totalSettings')
//get a reference to the add button
var smsAndCallSecttings = document.querySelector('.smsAndCallSecttings')
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings')
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var costOfCall = 0
var costOfSMS = 0
var critialCost = 0
var costWarning = 0
//add an event listener for when the 'Update settings' button is pressed
var totalCall = 0
var totalSms = 0
var overallTotal = 0
//add an event listener for when the add button is pressed
updateSettings.addEventListener('click', function(){
    var callCostSettings = document.querySelector('.callCostSettings')
    var smsCostSettings = document.querySelector('.smsCostSettings')
    var warningLevelSetting = document.querySelector('.warningLevelSetting')
    var criticalLevelSetting = document.querySelector('.criticalLevelSetting')
    costOfCall = callCostSettings.value
    costOfSMS = smsCostSettings.value
    critialCost = criticalLevelSetting.value
    costWarning = warningLevelSetting.value
})

// function radioBillSettingTotal
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
smsAndCallSecttings.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        
        if (checkedRadioBtn.value === 'callSet'){
            if (overallTotal <= parseInt(critialCost)){
                totalCall += parseInt(costOfCall)
                overallTotal += parseInt(costOfCall)
            }
        } else if (checkedRadioBtn.value === 'smsSet'){
            if (overallTotal <= parseInt(critialCost)){
                totalSms += parseInt(costOfSMS)
                overallTotal += parseInt(costOfSMS)
            }
        }
        console.log(overallTotal)
        //update the totals
        // if ((totalCall + totalSms) <= parseInt(critialCost)){
        callTotalSettings.innerHTML = totalCall
        smsTotalSettings.innerHTML = totalSms
        totalSettings.innerHTML = 'R' + overallTotal
        // }
        // console.log(typeof overallTotal)

        if (overallTotal >= parseInt(costWarning) && overallTotal < parseInt(critialCost)){
            if (totalSettings.classList.contains('danger')){
                totalSettings.classList.remove('danger')
            } totalSettings.classList.add("warning")
        } else if (overallTotal >= parseInt(critialCost)){
            if (totalSettings.classList.contains('warning')){
                totalSettings.classList.remove('warning')
            } totalSettings.classList.add('danger')
        }
    }
})