describe('SettingsBillLogic Function', function(){
    it('Should be able to set the values according as set on the updates', function(){
        var settingBill = seetingBillLogic()

        settingBill.getCallCost('1.65')
        settingBill.getSmsCost('0.93')
        settingBill.getWarningCost('25')
        settingBill.getCriticalCost('30')

        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('sms')

        assert.equal(1.65, settingBill.getCostCallTotal())
        assert.equal(0.93, settingBill.getCostSmsTotal())
        assert.equal(25, settingBill.getWarningVlue())
        assert.equal(30, settingBill.getCriticalVlue())
    })
    it('should be able to set call AND sms value also be able to update the grand total', function(){
        var settingBill = seetingBillLogic()
        settingBill.getCallCost('2')
        settingBill.getSmsCost('3')
        settingBill.getCriticalCost('20')
        settingBill.getWarningCost('10')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('sms')

        assert.equal(2, settingBill.getCostCallTotal())
        // assert.equal(3.00, settingBill.getCostSmsTotal())
        assert.equal(5, settingBill.getTotal())
    })
    it('should return a zero (0) if anything entered is not a call or sms', function(){
        var settingBill = seetingBillLogic()
        settingBill.getCallCost('2.65')
        settingBill.getSmsCost('0.65')
        settingBill.getCriticalCost('20')
        settingBill.getWarningCost('10')
        settingBill.settingsCalculation('Anything beside those two key words used')

        assert.equal(0, settingBill.getTotal())
    })

    it('should not continue counting or adding if the total is beyond the critical value and you should also display the value with the message on console', function(){
        var settingBill = seetingBillLogic()
        settingBill.getCallCost('5')
        settingBill.getSmsCost('2')
        settingBill.getCriticalCost('30')
        settingBill.getWarningCost('25')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('call')
        settingBill.settingsCalculation('sms')
        settingBill.settingsCalculation('sms')
        settingBill.settingsCalculation('sms')
        settingBill.settingsCalculation('sms')
        settingBill.settingsCalculation('sms')
        settingBill.settingsCalculation('sms')

        assert.equal(30, settingBill.getTotal())
        // assert.equal('This is over the critical value', settingBill.getTotal())
    })
})