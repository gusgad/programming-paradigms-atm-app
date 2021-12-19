

/*** check if we have enough in the machine ***/
function checkIfCashAvailable(available, toWithdraw) {
    if (available >= toWithdraw) {
      console.log('Processing... Please wait.')
      return true
    } else {
      console.log('Amount not available in the ATM.')
      return false
    }
}
  
/*** calculate how much to give, but larger notes first ***/
function calculateCash(toWithdraw, notesAvailable) {
    let preparedAmount = 0
    let amountLeft = 0
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
  
const available = 1000
const toWithdraw = 660
const notesAvailable = [100, 50, 10]

const isCashAvailable = checkIfCashAvailable(available, toWithdraw)
if (isCashAvailable) {
    console.log(`Here is your cash: ${calculateCash(toWithdraw, notesAvailable)}`)
}
  