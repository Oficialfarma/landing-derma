$(function() {

        function atualizar_informacoes() {
            $("#watch-name").text($(".slick-center").data("name"));
            // var watchPrice = parseFloat($(".slick-center").data("price")).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
            // $("#watch-price").text(watchPrice);
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
    //Slider Facial
$(function() {

    function atualizar_informacoes() {
        $("#watch-name-fac").text($(".slick-center").data("name"));
        // var watchPrice = parseFloat($(".slick-center").data("price")).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
        // $("#watch-price").text(watchPrice);
    }

    $(".watch-slider-fac").on('init', function() {
        atualizar_informacoes();
    });

    $(".watch-slider-fac").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $("#arrow-prev-fac"),
        nextArrow: $("#arrow-next-fac"),
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $(".watch-slider-fac").on('afterChange', function() {
        atualizar_informacoes();
    });
})

// Cronometro
var aa = 2021

var mm = 08

var dd = 01

var hh = 00

var mi = 00



function setcountdown(theyear, themonth, theday, hour, minutes) {

    yr = theyear;
    mo = themonth;
    da = theday

}
setcountdown(aa, mm, dd)
var countdownwidth = '510px'
var countdownheight = '200px'
var opentags = '<font face="Lato-bold" size="32" color="#000000">'
var closetags = '</font>'





var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

var crosscount = ''



function start_countdown() {

    if (document.layers)

        document.countdownnsmain.visibility = "show"

    else if (document.all || document.getElementById)

        crosscount = document.getElementById && !document.all ? document.getElementById("countdownie") : countdownie

    countdown()

}



if (document.all || document.getElementById)

    document.write('<span id="countdownie" style="width:' + countdownwidth + ';"></span>')

window.onload = start_countdown

function countdown() {

    var today = new Date()

    var todayy = today.getYear()

    if (todayy < 1000)

        todayy += 1900

    var todaym = today.getMonth()

    var todayd = today.getDate()

    var todayh = today.getHours()

    var todaymin = today.getMinutes()

    var todaysec = today.getSeconds()

    var todaystring = montharray[todaym] + " " + todayd + ", " + todayy + " " + todayh + ":" + todaymin + ":" + todaysec

    futurestring = montharray[mo - 1] + " " + da + ", " + yr

    dd = Date.parse(futurestring) - Date.parse(todaystring)

    dday = Math.floor(dd / (60 * 60 * 1000 * 24) * 1)

    dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1)

    dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1)

    dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1)

    //if on day of occasion

    if (dday <= 0 && dhour <= 0 && dmin <= 0 && dsec <= 1 && todayd == da) {} else {

        if (document.layers) {

            // document.countdownnsmain.document.countdownnssub.document.write(opentags + dday + " days, " + dhour + " hours, " + dmin + " minutes, and " + dsec + " " + occasion + closetags)

            document.countdownnsmain.document.countdownnssub.document.close()
        } else if (document.all || document.getElementById)

            document.getElementById("day").textContent = dday < 10 ? "0" + dday : dday;
        document.getElementById("hour").textContent = dhour < 10 ? "0" + dhour : dhour;
        document.getElementById("minutes").textContent = dmin < 10 ? "0" + dmin : dmin;
        document.getElementById("seconds").textContent = dsec < 10 ? "0" + dsec : dsec;
    }

    setTimeout("countdown()", 1000)

}