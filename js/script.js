;(function($){
  $(function(){

    $(".abopen").click(function(){
      $("#wrap2").addClass("wrap2open");
        $("#wrap").removeClass("wrapopen");
        $("#wrap3").removeClass("wrap3open");
        $("#wrap").css("height","0");
        $("#wrap3").css("height","0");
        $("#wrap4").removeClass("wrap4open");
        $("footer").css("border","0");
        $("footer").css("height","0");
    });

    $(".dsopen").click(function(){
      $('#footer_p').css("display","block");
      $("#wrap").addClass("wrapopen");
      $("#wrap2").removeClass("wrap2open");
      $("#wrap3").removeClass("wrap3open");
      $("#wrap4").removeClass("wrap4open");
      $("footer").css("border","0");
      $("footer").css("height","0");
    });

    $(".ptopen").click(function(){
      $("#wrap3").addClass("wrap3open");
      $("#wrap2").removeClass("wrap2open");
      $("#wrap").removeClass("wrapopen");
      $("#wrap").css("height","0");
      $("#wrap4").removeClass("wrap4open");
      $("footer").css("border","0");
      $("footer").css("height","0");
    });

    $(".ecopen").click(function(){
      $("#wrap4").addClass("wrap4open");
      $("#wrap2").removeClass("wrap2open");
      $("#wrap").removeClass("wrapopen");
      $("#wrap3").removeClass("wrap3open");
      $("#wrap2").css("height","0");
      $("#wrap3").css("height","0");
      $("#wrap").css("height","0");
      $("footer").css("border","0");
      $("footer").css("height","0");
    });

  $(".all").click(function(){
    $('#footer_p').css("display","none");
    $("#wrap2").addClass("wrap2open");
    $("#wrap").addClass("wrapopen");
    $("#wrap3").addClass("wrap3open");
    $("#wrap4").addClass("wrap4open");
    $("footer").css("border-top","2px solid #ccc");
    $("footer").css("height","70");
  });

  $('#m_gnb').click(function(){
    $('#gnb').toggleClass('gnbon');
    $('#logo').toggleClass('logoon');
  });

  $('.Cmbtn').click(function(){
    $('.Cmbtn').toggleClass('btnon');
    $('#myinfo').toggleClass('infoon');
    $('#myintro').toggleClass('introon');
    $('#me').toggleClass('meon');
  });

  });
})(jQuery);
