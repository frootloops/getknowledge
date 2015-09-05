

$( document ).ready(function() {
  
  $.each($(".que"), function(i, el) {
    
    var question = $(el).find(".qtext").text();

      $.get("https://getknowledge-staging.herokuapp.com/api", { q: question.trim() })
      .done(function(text) {
        $(el).find(".answer label").filter(function() {
          return $(this).text() == text; 
        }).parent().find("input").click()
      })
    .fail(function() {
      alert( "error" );
    });


      });

});
