//prime
function prime(n){
 let count=0;
for(let i=1;i<=n;i++){
if(n%i===0)
count++
}
return count;

}
let ans=prime(9);
if(ans==2){
console.log("is a prime")
}else{
console.log("not a prime")
}