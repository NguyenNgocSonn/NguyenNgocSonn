
$("#tab .nd").hide();
$("#tab h3").click(function(){
  $nd = $(this).next();
  if ($nd.is(':hidden') === true) {
    $("#tab .nd").slideUp();
    $nd.slideDown();
  } else {
    $nd.slideUp();
  }
});