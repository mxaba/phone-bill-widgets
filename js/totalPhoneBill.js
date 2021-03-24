function totalPhoneBill(string){
    var array = string.split(", ")
    var calls = 0
    var sms = 0
    for (var i=0; i<array.length;i++){
      var m = array[i].trim()
      if (m.startsWith("s") || m.startsWith("S")){
        sms++
      }else if (m.startsWith("c") || m.startsWith("C")){
        calls++
      }
    }
    var bill = 2.75 * calls + 0.65 * sms
    console.log(bill)
    return bill.toFixed(2)
}