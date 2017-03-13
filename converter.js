module.exports = {
  convert: function(input) {

  	if(input % 3 === 0) {
  		return "Fizz"
  	}

    if(input % 5 === 0) {
  		return "Buzz"
  	}
  }
}
