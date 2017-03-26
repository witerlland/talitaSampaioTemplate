(function(){

    "use strict";

    $(window).load(function(){
        var feed = new Instafeed({
            get: 'user',
            userId: '3118798698',
            clientId: '760d0cc4e849423d84abebab53c4caf3',
            accessToken: '3118798698.760d0cc.90f56786bd754854b26d1461ab708b38',
            useHttp: true,
            limit: 8,
            template: '<div class="col-xs-6 col-md-3 insta-post" ><a target="_blank" href="{{link}}"><span class="{{type}}" ></span><img src="{{image}}" /></a></div>'
        });
        feed.run();
    });
    
})()