(function($) {

    const func = {

        init: () => {
            func.multilayerMenu();
        },

        multilayerMenu: () => {
            $("[data-collapse='menu']").hover(function(event) {
                event.preventDefault();
        
                $("[id='menu']").toggleClass("active");
                $("[id='arrow1']").toggleClass("orange");
            });
            $("[data-collapse='nav']").hover(function(event) {
                event.preventDefault();
        
                $("[id='nav']").toggleClass("active");
                $("[id='arrow2']").toggleClass("orange");
            });
        }

    };

    $(document).ready(function() {
        func.init();
    });

})(jQuery);

