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

    totalSettings.classList.remove('danger')
    totalSettings.classList.remove('warning')
    totalSettings.classList.add(settingsBill.addClass())
}


//setting calculated values in the html
function setSettings(){
    callTotalSettings.innerHTML = settingsBill.getCostCallTotal().toFixed(2)
    smsTotalSettings.innerHTML = settingsBill.getCostSmsTotal().toFixed(2)
    totalSettings.innerHTML = 'R' + settingsBill.getTotal().toFixed(2)
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