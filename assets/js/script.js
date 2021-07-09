(function($) {

    const func = {

        init: () => {
            func.multilayerMenu();
        },

        multilayerMenu: () => {
            $("[data-collapse='menu']").hover(function(event) {
                event.preventDefault();
        
                $("[id='menu']").toggleClass("active");
            });
            $("[data-collapse='nav']").hover(function(event) {
                event.preventDefault();
        
                $("[id='nav']").toggleClass("active");
            });
        }

    };

    $(document).ready(function() {
        func.init();
    });

})(jQuery);

