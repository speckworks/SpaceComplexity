//In this Algorithm there is only on variable "i" declared and it contains a number. Even though that number can increase arbitrarily large with n, Space complexity is constant since it's just 1 value that is changing.
const logUpToN(n)=>{
  for(let i = 1; i <= n; i++){
    console.log(i)
  }
}