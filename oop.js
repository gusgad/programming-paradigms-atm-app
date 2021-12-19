class ATM {
    available = 1000
    notesAvailable = [100, 50, 10]
  
    constructor(toWithdraw) {
      this.toWithdraw = toWithdraw
    }
  
    run() {
      if (this.checkAvailableCache(this.available, this.toWithdraw)) {
        const notesToDispence = this.prepareNotes(this.toWithdraw, this.notesAvailable)
        console.log(`Here is your cash: ${notesToDispence}`)
      }
    }
  
    /*** check if we have enough in the machine ***/
    checkAvailableCache(available, toWithdraw) {
      if (available >= toWithdraw) {
        console.log('Processing... Please wait.')
        return true
      } else {
        console.log('Amount not available in the ATM.')
        return false
      }
    }
  
    /*** prepare cash, but give larger notes first ***/
    prepareNotes(toWithdraw, notesAvailable) {
      let amountLeft = 0
      let preparedAmount = 0
      const notesToDispence = []
  
      if (toWithdraw / notesAvailable[0] > 0) {
        // $500 / $100 = 5 
        const quantity = toWithdraw / notesAvailable[0]
  
        for (let i = 0; i < Math.floor(quantity); i++) {
          // [$100, $100, $100, $100, $100]
          preparedAmount += notesAvailable[0]
          notesToDispence.push(notesAvailable[0])
        }
  
        amountLeft = toWithdraw - preparedAmount
      }
  
      if (amountLeft < toWithdraw && toWithdraw / notesAvailable[1] > 0) {
        // $500 / $50 = 10 
        const quantity = amountLeft / notesAvailable[1]
  
        for (let i = 0; i < Math.floor(quantity); i++) {
          // [$50, $50, $50, $50, $50, $50, $50, $50, $50, $50]
          preparedAmount += notesAvailable[1]
          notesToDispence.push(notesAvailable[1])
        }
  
        amountLeft = toWithdraw - preparedAmount
      }
  
      if (amountLeft && toWithdraw / notesAvailable[2] > 0) {
        // $500 / $10 = 50 
        const quantity = amountLeft / notesAvailable[2]
  
        for (let i = 0; i < quantity; i++) {
          // [$10, $10, $10, $10, $10, $10, $10, $10, $10, $10, ...]
          notesToDispence.push(notesAvailable[2])
        }
      }
  
      return notesToDispence
    }
}
  
// initialize and run
const atmOne = new ATM(660)
atmOne.run()
