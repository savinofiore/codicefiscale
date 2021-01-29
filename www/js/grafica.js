

function controllavalorenome()
{
  var valore = document.getElementById("nome").value;
  
  if (valore.length>0) { document.getElementById("spuntanome").innerHTML = "<img src=\"img/vero.png\" width=\"25px\" hight=\"25px\"> ";}
  else { document.getElementById("spuntanome").innerHTML = "<img src=\"img/falso.png\" width=\"25px\" hight=\"25px\"> ";}
}

function controllavalorecognome()
{
  var valore = document.getElementById("cognome").value;
  
  if (valore.length>0) { document.getElementById("spuntacognome").innerHTML = "<img src=\"img/vero.png\" width=\"25px\" hight=\"25px\"> ";}
  else { document.getElementById("spuntacognome").innerHTML = "<img src=\"img/falso.png\" width=\"25px\" hight=\"25px\"> ";}
}

function controllavaloresesso()
{
  var valore = document.getElementById("sesso").value;
  
  if (valore.length>0) { document.getElementById("spuntasesso").innerHTML = "<img src=\"img/vero.png\" width=\"25px\" hight=\"25px\"> ";}
  else { document.getElementById("spuntasesso").innerHTML = "<img src=\"img/falso.png\" width=\"25px\" hight=\"25px\"> ";}
}

function controllavaloredatanascita()
{
  var valore = document.getElementById("datanascita").value;
  
  if (valore.length>0) { document.getElementById("spuntadatanascita").innerHTML = "<img src=\"img/vero.png\" width=\"25px\" hight=\"25px\"> ";}
  else { document.getElementById("spuntadatanascita").innerHTML = "<img src=\"img/falso.png\" width=\"25px\" hight=\"25px\"> ";}
}

function controllavaloreluogonascita()
{
  var valore = document.getElementById("luogonascita").value;
  
  if (valore.length>0) { document.getElementById("spuntaluogonascita").innerHTML = "<img src=\"img/vero.png\" width=\"25px\" hight=\"25px\"> ";}
  else { document.getElementById("spuntaluogonascita").innerHTML = "<img src=\"img/falso.png\" width=\"25px\" hight=\"25px\"> ";}
}



$(document).ready(function() {
  

  $('.it-date-datepicker').datepicker({
    inputFormat: ["dd/MM/yyyy"],
    outputFormat: 'dd/MM/yyyy',
  });


$("#calcola").click(function(){
  var valnome = $("#nome").val();     
  var valcognome = $("#cognome").val();    
  var valsesso = $("#sesso").val();
  var valdatanascita = $("#datanascita").val();    
  var valluogonascita = $("#luogonascita").val();    
  
   //chiamata asincrona
  $.ajax({
    type: "POST",
    url: "https://savinofiore.it/scuola/codicefiscale/calcolacf.php",
    crossDomain:true,
    data : {nome : valnome, cognome:valcognome, sesso:valsesso, datanascita:valdatanascita, luogonascita:valluogonascita},
    cache: false,
    dataType: "html",      //TIPO DI OUTPUT CHE RICEVERA'
    beforeSend:function()
    {
      // clessidra di loading in attesa dell'output della funzione
      $("#risultato").html("<p style=\"text-align:center;color:red\">calcolo in corso.....</p>"); 
    },
    success: function(ris)
    {
      $("#risultato").html("<h4>" + "" +ris + "</h4>");
    },
    error: function()
    {
      $("#risultato").html("Chiamata fallita, si prega di riprovare...");      
    }
  });
});

});


