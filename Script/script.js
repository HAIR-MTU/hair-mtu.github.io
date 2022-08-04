document.getElementById("partners1").addEventListener("click", function(){mySecondFunction("TCD_")});
document.getElementById("partners2").addEventListener("click", function(){mySecondFunction("UCC_")});
document.getElementById("partners3").addEventListener("click", function(){mySecondFunction("Teagasc_")});
document.getElementById("partners4").addEventListener("click", function(){mySecondFunction("Ulster_")});
document.getElementById("partners5").addEventListener("click", function(){mySecondFunction("Embrapa_")});
document.getElementById("partners6").addEventListener("click", function(){mySecondFunction("Cerela_")});
document.getElementById("partners7").addEventListener("click", function(){mySecondFunction("Tohoku_")});

function mySecondFunction(info_1){

  var info_text = info_1;
  $(".collaborators_text_att").hide();
  var y = document.getElementById("collaborators_text");
  y.style.display = "none";
  var z = document.getElementById(info_text+"text");
  z.style.display = "block";
  $(".collaborators_right_att").hide();
  var rightbar = document.getElementById(info_text+"right");
  rightbar.style.display = "block";
}
