module.exports = {
  convert : function test(i) {
      var f = i % 3 == 0, b = i % 5 == 0;
      return f ? (b ? "FizzBuzz" : "Fizz" ): (b ? "Buzz" : '') ;
  }
}
// function coba(i){
// if(i%3 === 0) {
//   if(i%5 ===0) return "fizzbuzz"
//   return "fizz"
// } else if(i%5===0){
//   return "buzz"
// }
//   return i
// }
// console.log(coba(15))
