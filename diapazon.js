
/*===========diapazon=============*/
let arr = []
function diapazon(a, b) {
    if (a === b) {
        return arr
    }
    
    return arr.push(a), diapazon(a + 1, b) 
}

console.log(diapazon(2, 9));





