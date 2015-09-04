

$( document ).ready(function() {
  
  $.each($(".que"), function(i, el) {
    
    var question = $(el).find(".qtext").text();
    console.log(question)

    $.get("https://getknowledge-staging.herokuapp.com/api", {q: question})
    .done(function() {
      alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    });


    $(el).find(".answer label").filter(function() {
      return $(this).text() == "ненормированное рабочее время"; 
    }).parent().find("input").click()
    
  });

});
