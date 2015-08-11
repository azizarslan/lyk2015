/* document.getElementsByClassName('deneme')[0].setAttribute("style", "display: none");

$(".deneme").hide(); */


/* document.getElementsByClassName('deneme')[0].innerHTML = "selam";

$(".deneme").html("selam"); */


/* document.getElementsByClassName('deneme')[0].className = document.getElementsByClassName('deneme')[0].className + " yenibirdeneme";

$(".deneme").addClass("yenibirdeneme"); */


$(".menulink").click(function() {
  $(".menu").toggle();

  /* if ($(".menu").is(":visible")) {
    $(".menu").hide();
  } else {
    $(".menu").show();
  } */
});

$(".forminput").focus(function() {
  console.log("Focus oldu.");
});

$(".forminput").focusout(function() {
  if ($(".forminput").val() == "") {
    console.log("Lütfen bir değer girin.");
  }

  // console.log("FocusOut oldu.");
});

$(".forminput").keyup(function() {
  var value = $(this).val();

  $(".formverisi").html(value);
});


$(".content a").mouseover(function() {
  var content = $(this).attr("data-tooltip");
  $(this).append('<div class="tooltip">' + content + '</div>');
});

$(".content a").mousemove(function(event) {
  $(".tooltip").css({
    "top": event.pageY + 20,
    "left": event.pageX + 20
  });
});

$(".content a").mouseout(function() {
  $(this).children(".tooltip").remove();
});










/* localStorage.setItem("isim", "Aziz");
console.log(localStorage.getItem("isim"));
localStorage.removeItem("isim"); */


$(".person").submit(function(event) {
  event.preventDefault();

  localStorage.setItem("firstname", $("input.firstname").val());
  localStorage.setItem("lastname", $("input.lastname").val());
});

if (localStorage.getItem("firstname") && localStorage.getItem("lastname")) {
  console.log("Hoşgeldin " + localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"));
}
