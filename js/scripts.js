$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
           $('#mycarousel').carousel('pause');
           $('#carouselButton').children('span').removeClass('fa-pause');
           $('#carouselButton').children('span').addClass('fa-play');
        }
        else{
           $('#mycarousel').carousel('cycle');
           $('#carouselButton').children('span').removeClass('fa-play');
           $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
 });
 $(document).ready(function(){
    $('#reserveButton').click(function(){
        if($('#ReservationModal').hasClass('show')){
            $('#ReservationModal').modal('hide');
        }
        else{
            $('#ReservationModal').modal('show');
        }
    });
  });
  $(document).ready(function(){
    $('#loginButton').click(function(){
        if($('#loginModal').hasClass('show')){
            $('#loginModal').modal('hide');
            return false;
        }
        else{
            $('#loginModal').modal('show');
            return false;
        }
    });
});