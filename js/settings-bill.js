var settingsBill = seetingBillLogic()

// get refences to all the settings fields
var callTotalSettings = document.querySelector('.callTotalSettings')
var smsTotalSettings = document.querySelector('.smsTotalSettings')
var totalSettings = document.querySelector('.totalSettings')
//get a reference to the add button
var smsAndCallSecttings = document.querySelector('.smsAndCallSecttings')
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector('.updateSettings')
// create a variables that will keep track of all the settings



var getSettings = function(){
    var callCostSettings = document.querySelector('.callCostSettings').value
    var smsCostSettings = document.querySelector('.smsCostSettings').value
    var warningLevelSetting = document.querySelector('.warningLevelSetting').value
    var criticalLevelSetting = document.querySelector('.criticalLevelSetting').value

    settingsBill.getCallCost(callCostSettings)
    settingsBill.getSmsCost(smsCostSettings)
    settingsBill.getWarningCost(warningLevelSetting)
    settingsBill.getCriticalCost(criticalLevelSetting)
}

function applySettingColorClass(){
    // var overallTotal = settingsBill.getTotal()
    // var costWarning = settingsBill.getWarningVlue()
    // var critialCost = settingsBill.getCriticalVlue()

    if (settingsBill.addClass() === 'warning'){
        if (totalSettings.classList.contains('danger')){
            totalSettings.classList.remove('danger')
        } totalSettings.classList.add("warning")
    } else if (settingsBill.addClass() === 'danger'){
        if (totalSettings.classList.contains('warning')){
            totalSettings.classList.remove('warning')
        } totalSettings.classList.add('danger')
    } 
    else if (settingsBill.addClass() === 'normal'){
        if (totalSettings.classList.contains('warning' || 'danger')){
            totalSettings.classList.remove('warning', 'danger')
        } 
        
    }

}


//setting calculated values in the html
function setSettings(){
    callTotalSettings.innerHTML = settingsBill.getCostCallTotal()
    smsTotalSettings.innerHTML = settingsBill.getCostSmsTotal()
    totalSettings.innerHTML = 'R' + settingsBill.getTotal()
}

updateSettings.addEventListener('click', function(){
    getSettings()
    applySettingColorClass()
})

smsAndCallSecttings.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    settingsBill.settingsCalculation(checkedRadioBtn.value)
    setSettings()
    applySettingColorClass()
})