
$(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });

    /*
    $('#roleChange').click(function(){
        if($("body").hasClass("mens")){
            $("body").removeClass("mens");
            $("#main_image").prop("src", "public/img/hack_main.jpg");
            $("#roleChange").text("クレイジー休日ハック");
        } else {
            $("body").addClass("mens");
            $("#main_image").prop("src", "public/img/hack_main_crazy.jpg");
            $("#roleChange").text("ふつうの休日ハック");
        }
        return false;
    });
    */

});
