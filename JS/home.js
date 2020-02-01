/*-- for toggole button */
$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
      }); 

     /* $('.menu-item').click(function(){

        $(this).addClass('nav-active').siblings().removeClass('nav-active');
  
      }); */
     
     /* for extra navbar design*/
     $(window).scroll(function(){
      let position= $(this).scrollTop();
      
     if(position>=700){
        $('.nav-menu').addClass('custom-navbar');
      }
     else{
      $('.nav-menu').removeClass('custom-navbar');
     }

     
    });

    $(window).scroll(function(){
      let position= $(this).scrollTop();
      if(position>=700){
        $('.m-img').addClass('fromleft');
        $('.m-texts').addClass('fromright');
      }
     else{
      $('.m-img').removeClass('fromleft');
      $('.m-texts').removeClass('fromright');
     }
      
    });

    $('.gallery-list-item').click(function(){

      let value=$(this).attr('data-filter');
      if(value==='all'){
        $('.filter').show(300);
      } else{
        $('.filter').not('.'+ value).hide(300);
        $('.filter').filter('.'+ value).show(300);

      }

    });

    /* $('.gallery-list-item').click(function(){

      $(this).addClass('active-item').siblings().removeClass('active-item');

    });
   */
    /*for card animation */
    $(window).scroll(function(){
      let position= $(this).scrollTop();
      if(position >= 4700){
        $('.card1').addClass('cardfromleft');
        $('.card2').addClass('cardfromBottom');
        $('.card3').addClass('cardfromRight');

      } else{
        $('.card1').removeClass('cardfromleft');
        $('.card2').removeClass('cardfromBottom');
        $('.card3').removeClass('cardfromRight');

      }

    });
   
}); 

 