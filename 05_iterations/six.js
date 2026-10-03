const coding =["js","ts","java","python","ruby","c","c++"]

const values=coding.forEach((item)=>{
// console.log(item);
return item
})

console.log(values);

const myNUms=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNUms.filter((num)=>num)

const newScope = myNUms.filter((num)=>{
    return num>4
})

const newNums = []
myNUms.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);
console.log(newScope);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBook =books.filter((bk)=>bk.genre==='History')

  const year2000 =books.filter((bk)=>{return bk.publish>2000})

  const yearHistory =books.filter((bk)=>{return bk.publish>1998 && bk.genre==='History'})

  //console.log(userBook);

  //console.log(year2000);

  console.log(yearHistory);
  
  