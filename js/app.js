$(document).foundation();
$(document).ready(function(){
  var code=Math.floor((Math.random() * 1000) + 1);
  $( "#next" ).prop( "disabled", true );
  $("#phone").keyup(function(){
    var input= $(this).val().length;
    if(input>=10){
      $( "#next" ).prop( "disabled", false );
    }
  });
  $("#next").click(function(){

    alert("tu código es LAB "+code);
    var data =
    '<h2>Verifica tu numero</h2>'+
    '<p><span>LAB.-</span><input type="text" id="num" value=""></p>'+
    '<div class="small-12 columns"> <button type="button" name="button" id="next" >Siguiente</button>'+
    '</div>';
    $(".title").html("Verify Phone nomber");
    $(".cont").html(data);
    $( "#next" ).prop( "disabled", true );

    $("#num").keyup(function(){
      var input= $(this).val();
      console.log(input);
      if(input==code){
        $( "#next" ).prop( "disabled", false );
      }
    });
    $("#next").click(function(){
      var data='input';
      $(".cont").html(data);
    });

  });
});
