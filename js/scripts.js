$(document).ready(function() {
  $(".clickable").click(function() {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
    $("#design").show();
  });
  $(".click").click(function() {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
    $("#development").show();
  });
  $(".clic").click(function() {
    $(".product-management-showing").toggle();
    $(".product-management-hidden").toggle();
    $("#product-management").show();
  });
$("#submit").click(function(){
  var name = $("#contactName").val();
  var email = $("#contactEmail").val();
  var info = $("#textArea").val();
  $(".contactName").text(name);
  $(".contactEmail").text(email);
  $(".textArea").text(info);
  alert("Thank you " + name + " for your feedback. We will be in touch via " + email);
  });
});  