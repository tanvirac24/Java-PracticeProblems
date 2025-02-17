var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const check=(f)=>{
    let element=f[0]
    for(let i=0;i<f.length;i++){
        if(element<f[i])
        {
            element=f[i]
        }
    }
    return element
 }
let biggest=check(numbers)
console.log(biggest)