let array=[1,3,2,4,6,7,8,5,9,14,15,10,11,18,19,20,12,13,16,17,]
const order=(k)=>{
    for(let i=0;i<k.length;i++)
    {
        for(let j=i+1;j<k.length;j++){
            if(k[i]>k[j]){
                let m=k[j]
                k[j]=k[i]
                k[i]=m
            }
        }
    }
}

order(array)
console.log(array)