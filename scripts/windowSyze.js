(function(){

    "";

    function sizeOfThings(){

        var windowWidth = window.innerWidth;

        var windowHeight = window.innerHeight;

        $(".full-screen").css({"height" : windowHeight + "px"});
        // $("#appointments").css({"height" : windowHeight + "px"});

        console.log("Redimencionando, height: " + windowHeight + "px");
    //   document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;
    };

    $(window).load(function(){
        sizeOfThings();
    });

    $(window).resize(function(){
        sizeOfThings();
    });

    // window.addEventListener('resize', function(){
    //     sizeOfThings();
    // });

})();
