(function($) {
    $.fn.fadeCircleLoading = function(options) {
        var RunSpeed = {
            low: 1,
            normal: 2,
            fast: 3
        };
        var FadeSpeed = {
            low: 1,
            normal: 2,
            fast: 3  
        };
        
        // This is the easiest way to have default options.
        var settings = $.extend({
            circleSize: 40,
            runSpeed: RunSpeed.normal,
            fadeSpeed: FadeSpeed.normal
        }, options);
        
        // Set the fade circle count based on the settings variable.
        this.append((function() {
            var arr = new Array(12);
            $(arr).each(function(index) {
                arr[index] = $("<div>");
            });
            return arr;
        })()).addClass("fadeCircleLoading");
    
        // chainable
        return this;

        // If you need to do something for each element separately, write like below
        // return this.each(function(index, ele) {
        //     $(ele).append((function(count) {
        //         var arr = new Array(count);
        //         $(arr).each(function(index) {
        //             arr[index] = $("<div>");
        //         });
        //         return arr;
        //     })(12)).addClass("sk-fading-circle");
        // });
    };
})(jQuery);