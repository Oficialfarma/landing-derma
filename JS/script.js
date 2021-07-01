$(function() {

        function atualizar_informacoes() {
            $("#watch-name").text($(".slick-center").data("name"));
            var watchPrice = parseFloat($(".slick-center").data("price")).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
            $("#watch-price").text(watchPrice);
        }

        $(".watch-slider").on('init', function() {
            atualizar_informacoes();
        });

        $(".watch-slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            prevArrow: $("#arrow-prev"),
            nextArrow: $("#arrow-next"),
            responsive: [{
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }]
        });

        $(".watch-slider").on('afterChange', function() {
            atualizar_informacoes();
        });
    })
    // var slideIndex = 0;
    // showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     // var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
//     console.log('teste')
// }