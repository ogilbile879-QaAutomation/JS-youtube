const array1=[1,2,3,4,5]

const initialValue =0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue)=> accumulator +currentValue,initialValue
)

console.log(sumWithInitial);



const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc+currval
    
// },0)



const myTotal =myNums.reduce((acc,currval)=>acc+currval,0)

console.log(myTotal);

const shoppingCart=[{itemName:"js course",
    price: 2999
},
{itemName:"py course",
    price: 9999
},
{itemName:"mobile dev course",
    price: 5999
},
{itemName:"data science course",
    price: 12999
},
{itemName:"java course",
    price: 2999
}]


const price=shoppingCart.reduce((acc,item)=> (acc+item.price),0)

console.log(price);
