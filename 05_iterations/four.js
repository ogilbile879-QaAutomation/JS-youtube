const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} is key for ${myObject[key]}`);
}


const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}


const map =new Map()

map.set('IN',"India")
map.set('USA',"United states of America")
map.set('fr',"France")



for (const key in map) {
    
    console.log(key)
    
}