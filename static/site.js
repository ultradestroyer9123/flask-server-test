function goToHome () {
  window.location = '/'
}

function addNumbers () {
  var dog1 = numberify($("#dog1").val())
  var dog2 = numberify($("#dog2").val())

  $.get('/add/' + dog1 + '/' + dog2, function( response ) {
    console.log(response) 
    $("#answer").html('The answer is: ' + response.answer)
  });
}

function subtractNumbers () {
  var dog1 = numberify($("#dog1").val())
  var dog2 = numberify($("#dog2").val())

  $.get('/subtract/' + dog1 + '/' + dog2, function( response ) {
    console.log(response) 
    $("#answer").html('The answer is: ' + response.answer)
  });
}

function multiplyNumbers () {
  var dog1 = numberify($("#dog1").val())
  var dog2 = numberify($("#dog2").val())

  $.get('/multiply/' + dog1 + '/' + dog2, function( response ) {
    console.log(response) 
    $("#answer").html('The answer is: ' + response.answer)
  });
}

function numberify (num) {
  if(num == '') { num = 0 }
  num = parseInt(num)
  if(isNaN(num)) { num = 0 }
  return num
}