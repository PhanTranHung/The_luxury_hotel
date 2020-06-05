(function(window, document, $, undefined) {
    var $slides, $btnArr;

    function onClick(e) {
        var $target = $(e.target);
        let container = $target.parent();
        if ($target.hasClass('flexbox') && !$target.hasClass('active') && !$target.siblings().hasClass('active')) {
            $target.removeClass('anim-in last-viewed').addClass('active');
            container.removeClass('room-out').addClass('zoom-in');
            $target.siblings().removeClass('anim-in last-viewed').addClass('anim-out');
        }
    }

    function closeSlide(e) {
        var $slide = $(e.target).parent();
        let container = $slide.parent();
        $slide.removeClass('active anim-in').addClass('last-viewed');
        container.removeClass('zoom-in').addClass('zoom-out');
        $slide.siblings().removeClass('anim-out').addClass('anim-in');
    }

    $(function() {
        $slides = $('.flexbox');
        $btnArr = $slides.find('.btn-close');
        $slides.on('click', onClick);
        $btnArr.on('click', closeSlide);
    });
})(this, document, jQuery);