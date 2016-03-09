$(function() {
  
  function fillInjoke(res) {
    $("#joke_container p").html(res.value.joke);
  }

  function processJoke () {
  $.ajax({
      url: 'http://api.icndb.com/jokes/random',
      type: 'GET'
    })
    .done(function(data) {
      fillInjoke(data);
      console.log("success");
    });
  }

  $("#fetch_quote").on("click", function() {
    processJoke();   
  });

  processJoke();

});



