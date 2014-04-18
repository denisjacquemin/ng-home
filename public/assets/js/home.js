$(document).ready(function () {
        $('.c').slick(
            {
                autoplay: true,
                fade: true,
                speed: 1000
            }
        );

        $('#submit').on('click', function () {
            var url = window.location +  $('#location').val();
            window.location = url;
        });

});