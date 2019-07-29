// Griglia 6x6, ad ogni click parte una richiesta AJAX
//  che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){
  // richiamo api dentro una variabile
  var apiNumrdm = "https://flynn.boolean.careers/exercises/api/random/int";

  $(".quadrato").click(function(){
    var quadsel = $(this);
    console.log(quadsel);

    $.ajax ({

      url : apiNumrdm,
      method : "GET",
      success : function (data){
        var apiNum = data.response;

        if (apiNum > 5) {
          quadsel.addClass("green");
          quadsel.text(apiNum);
        } else {
          quadsel.addClass("yellow");
          quadsel.text(apiNum);
        };
      },
      error: function(richiesta,stato,errore){
               console.log("c'è un problema con il server",richiesta,stato,errore);
             }
    });
  });

});
