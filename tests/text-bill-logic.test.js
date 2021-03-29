

describe('textBillLogic function', function(){
    it('The function should return the correct cost of calculated bill type of call then on sms should be 0.00', function(){
        var textBill = textBillLogic()
        textBill.calculates("call")
        assert.equal(textBill.get().call, 2.75)
        assert.equal(textBill.get().sms, 0.00)
        assert.equal(textBill.get().total, 2.75)
    })

    it('The function should return the correct cost of calculated bill type of sms then on calls should return 0.00', function(){
        var textBill = textBillLogic()
        textBill.calculates('sms')
        assert.equal(textBill.get().call, 0.00)
        assert.equal(textBill.get().sms, 0.65)
        assert.equal(textBill.get().total, 0.65)
    })

    it('Should return the correct total of cost bills for the passed string or bill entered', function(){
        var textBill = textBillLogic()
        textBill.calculates("call")
        textBill.calculates("sms")
        textBill.calculates("sms")
        textBill.calculates("call")
        assert.equal(textBill.get().call, 5.50);
        assert.equal(textBill.get().sms, 1.30);
        assert.equal(textBill.get().total, 6.80);
    })

    it('Even if you pass sms and call but the aim is to get the correct value of call and sms it should also return the correct value', function(){
        var textBill = textBillLogic()
        textBill.calculates('call')
        textBill.calculates('sms')
        textBill.calculates('sms')
        textBill.calculates('sms')
        textBill.calculates('call')
        textBill.calculates('call')
        textBill.calculates('sms')
        assert.equal(textBill.get().call, 8.25);
        assert.equal(textBill.get().sms, 2.60);
        assert.equal(textBill.get().total, 10.85);
    })
})