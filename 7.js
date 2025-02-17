var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const order=(k)=>{
    c=1
    for(let i=0;i<k.length;i++)
    {  
        for(let j=i+1;j<k.length;j++){
            if(k[i]==k[j]){
               c=0
            }
            
        }
        if(c==1){
            console.log(k[i])
        }
    }
}
order(numbers)