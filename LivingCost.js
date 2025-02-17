let SampleInput=[900,2700,3400]
const cost=10000
const savings=(k,cost)=>{
    if(typeof(k)=="object")
    {
        let count=0
    for(let i=0;i<k.length;i++)
    {
       if(k[i]>=3000){
        count+=(k[i]-k[i]*.2)
       }
       else{
        count+=k[i]
       }
    }
    if(count>=cost){
        return (count-cost)
    }
    else{
        let motivation="earn more"
        return motivation
    }
    }
    else{
        let m="invalid Input"
        return m
    }
}
let gh=savings(SampleInput,cost)
console.log(gh)

