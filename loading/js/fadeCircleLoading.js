(function($) {
    $.fn.fadeCircleLoading = function(options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            circleCount: 12
        }, options);
        
        // Set the fade circle count based on the settings variable.
        this.append((function(count) {
            var arr = new Array(count);
            $(arr).each(function(index) {
                arr[index] = $("<div>");
            });
            return arr;
        })(settings.circleCount)).addClass("sk-fading-circle");
    
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