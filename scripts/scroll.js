(function(){

    "use strict";


    // function parallax(){
    //     var prlx_lyr_2 = document.getElementById('appointments');
    //     prlx_lyr_2.style.top = -(window.pageYOffset / 8)+'px';
    // }
    

    function magicMenu(){
        var yPos;

        yPos = window.pageYOffset;

        if(yPos > 300){
            $("nav.navbar-default").css({
                "background-color" : "#1b1b1b",
                "transition": "background-color 0.3s linear 0s, padding 0.3s linear 0s"
            });
        }else{
            $("nav.navbar-default").css({
                "background-color" : "rgba(0, 0, 0, 0)",
                "transition": "background-color 0.3s linear 0s"
            });
        }
    }

    $(window).scroll(function(){
        // parallax();
        magicMenu();
    });

    // $(window).load(function(){
    //     $("nav.navbar-default").css({
    //         "height" : "200px"
    //     });
    // });

})();

// $(document).ready(function(){
//     $window = $(window);
//     //Captura cada elemento section com o data-type "background"
//     $('section[data-type="background"]').each(function(){
//         var $scroll = $(this);   
//             //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
//             $(window).scroll(function() {
//                 var yPos = -($window.scrollTop() / $scroll.data('speed')); 
//                 var coords = '50% '+ yPos + 'px';
//                 $scroll.css({ backgroundPosition: coords });    
//             });
//    });  
// }); 