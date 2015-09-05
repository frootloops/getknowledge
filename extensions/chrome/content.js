var findAnswer = function(i) {
  var el = $(".que")[i]
  var question = $(el).find(".qtext").text();

  $.get("https://getknowledge-staging.herokuapp.com/api", { q: question.trim() })
    .done(function(text) {
      var input = $(el).find(".answer label").filter(function() {
        return $(this).text() == text; 
      }).parent().find("input")

      if (input) {
        $(el).find('.formulation').css("background-color", "#66FF66");
        input.click();
      } else {
        $(el).find('.formulation').css("background-color", "#FF3333");
      }
    })
  .fail(function() {
    $(el).find('.formulation').css("background-color", "#FF3333");
  })
  .always(function() {
    if (i < $(".que").length) {
      findAnswer(i + 1);
    }
  });
}

$( document ).ready(function() {

  var count = $(".que").length;
  if (count > 0) {
    findAnswer(0);
  }
});
