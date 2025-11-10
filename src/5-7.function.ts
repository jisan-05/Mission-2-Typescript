// Function
// arrow function, normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 4);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(1,2)

// object => function => method

const poorUser = {
  name:"JIsan",
  balance:0,
  addBalance(value:number):number{
    const totalBalance = this.balance + value
    return totalBalance;
  }
}

console.log(poorUser.addBalance(10000))

const arr: number[] = [1,3,5]

const sqrArray = arr.map((element : number) : number => element * element)

console.log(sqrArray)