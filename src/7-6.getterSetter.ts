// getter 
// setter



class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    (this.userId = userId),
      (this.userName = userName),
      (this._userBalance = userBalance);
  }

  // balance ke set kortase
  //  addBalance(balance:number){
  //   return this._userBalance = this._userBalance + balance
  // }


  // setter use kore korte chai
  set addBalance(amount:number){
     this._userBalance=this._userBalance + amount
  }


  // getBalance(){
  //   return this._userBalance;
  // }


  // getter use kore get korte chai
  get getBalance(){
    return this._userBalance
  } 


}


const mezbaBhaiAccount = new BankAccount(111,'mezba',20)


// use setter 
mezbaBhaiAccount.addBalance = 100;
mezbaBhaiAccount.addBalance = 20;
console.log(mezbaBhaiAccount);

// user getter 
console.log(mezbaBhaiAccount.getBalance)



// const mezbaBhaiAccount = new BankAccount(111,'mezba',20)

// mezbaBhaiAccount.addBalance(100) // function call korte hocche
// mezbaBhaiAccount.addBalance(30)

// console.log(mezbaBhaiAccount.getBalance()); // function call korte hocche

