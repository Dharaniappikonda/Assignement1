
let str="vijay kumar"

let res=""
for(let i=0;i<=str.length-1;i++)
{
if(i%2==0)
{
    res=res+ str.charAt(i).toLowerCase()
}
else{
    res=res+str.charAt(i).toUpperCase()
}
}
console.log(res)


