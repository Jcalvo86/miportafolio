$('.carousel').carousel()

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    $(".nav-link").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top - 50
            }, 800, function() {
                window.location.hash = gato - 50;
            });
        }
    });
});