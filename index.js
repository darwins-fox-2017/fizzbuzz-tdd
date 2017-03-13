function fizzBuzz(number) {
  var arraytemp = [[5,"Buzz"],[3,"Fizz"],[15,"FizzBuzz"]]
  var temp = number

  arraytemp.map(function (result) {
    if(number%result[0] == 0){
      temp = result[1]
    }
  })
  return temp
}

module.exports = fizzBuzz
