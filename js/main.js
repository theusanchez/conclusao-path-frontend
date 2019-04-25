function smoothScroll(selector) {
    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);  
    });
}
smoothScroll('a[href*=conteudo]');
smoothScroll('a[href*=palestrantes]');
smoothScroll('a[href*=formulario]');