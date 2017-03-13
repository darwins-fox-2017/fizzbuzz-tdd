function fizzBuzz(number) {
  var temp = ''
  if(number%15 == 0){
    temp = "FizzBuzz"
  }
  else if(number%5 == 0){
    temp = "Buzz"
  }
  else if(number%3 == 0){
    temp = "Fizz"
  }
  else{
    temp = number
  }


  return temp
}

module.exports = fizzBuzz
