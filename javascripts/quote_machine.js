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
      changeTwiterText(data);
      console.log("success");
    });
  }

  https://twitter.com/intent/tweet?text=Chuck%Norris%doesn%t%bowl%strikes%%he%just%knocks%down%one%pin%and%the%other%nine%faint

  function changeTwiterText(res) {
    console.log("cahnge")
    var link_text = "https://twitter.com/intent/tweet?text=",
        joke_text = res.value.joke.trim().replace(/\W/g, "%20"),
        joke_text = joke_text.substring(0, 140);

    $("a").attr("href", link_text + joke_text);
  }

  $("#fetch_quote").on("click", function() {
    processJoke();   
  });

  processJoke();

});



