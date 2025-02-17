 var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
 
 const check=(f)=>{
    let element=f[0]
    for(let i=0;i<f.length;i++){
        if(element.length<f[i].length)
        {
            element=f[i]
        }
    }
    return element
 }
let biggest=check(friends)
console.log(biggest)