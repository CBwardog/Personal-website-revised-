    $('#container_2').click(function(){
        $(this).find('#about_card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });