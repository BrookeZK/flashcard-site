$(document).ready(function() {
  $(".title").click(function() {
    $(".definition").hide();
    var defid = event.target.id;
    var define = "#" + defid.replace("title", "def");
    $(define).fadeIn("slow");
  })
})
