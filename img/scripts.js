$(document).ready(function() {

  console.log("here");

  $("form#radios").submit(function(event) {


  var cereal = $("input:radio[name=cerealRadio]:checked").val();
  var socks = $("input:radio[name=sockRadio]:checked").val();
  var sox = $("input:radio[name=soxRadio]:checked").val();
  var show = $("input:radio[name=showRadio]:checked").val();


if (cereal === "Froot" && socks === "White" && sox === "Whi" && show === "Sei"){
  $(".keanu").show();
  } else if (cereal === "Froot" && socks === "Bla" && sox === "Red" && show === "Sei"){
      $(".rosario").show();
  } else if (cereal === "Froot" && socks === "White" && sox === "Red" && show === "Fri"){
      $(".bill").show();
  } else if (cereal === "Cap" && socks === "White" && sox === "Whi" && show === "Sei"){
      $(".trump").show();
  } else if (cereal === "Cap" && socks === "Bla" && sox === "Red" && show === "Fri"){
      $(".angelica").show();
  } else if (cereal === "Cap" && socks === "Bla" && sox === "Red" && show === "Sei"){
      $(".julia").show();
  } else {
    alert("you have no matches. try again. or go outside.")
  }
  event.preventDefault();
  });

});
