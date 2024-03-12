class Wallet {
  /*   constructor() {
    this._balance = 0
    this._transactions = []
  } */
  #balance = 0
  #transactions = 0

  deposit(amount) {
    this._processDeposit(amount)
    this._balance += amount
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds')
    }
    this._processWithdraw(amount)
    this._balance -= amount
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`)
    this._transactions.push({
      type: 'deposit',
      amount,
    })
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`)
    this._transactions.push({
      type: 'withdraw',
      amount,
    })
  }

  get balance() {
    return this._balance
  }

  get transactions() {
    return this._transactions
  }
}

const wallet = new Wallet()
/* wallet.deposit(300)
wallet.withdraw(30)

console.log(wallet.balance)
console.log(wallet.transactions) */
//console.log(wallet.#balance)

//ES2022 PRIVATE FIELDS # kullanılır sadece sınıfın içinde erişilir
