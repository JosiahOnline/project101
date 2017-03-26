WebFont.load({
            google: {
                families: ["Merriweather:300,400,700,900", "Droid Serif:400,700", "Vollkorn:400,400italic,700,700italic", "Berkshire Swash:regular:latin,latin-ext", "Oleo Script:regular,700:latin,latin-ext"]
            }
        });

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {

    document.getElementById("mySidenav").style.borderLeft = "5px";
    document.getElementById("mySidenav").style.borderLeftColor = "#e9ff00";
    document.getElementById("mySidenav").style.borderLeftStyle = "solid";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("myBgColor").style.display = "block";
    document.getElementById("myBgColor").style.backgroundColor = "rgba(19,19,42,0.4)";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {

    document.getElementById("mySidenav").style.borderLeft = "0";
    document.getElementById("mySidenav").style.borderLeftColor = "0";
    document.getElementById("mySidenav").style.borderLeftStyle = "0";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myBgColor").style.backgroundColor = "transparent";
    document.getElementById("myBgColor").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
}

var iScrollPos = 0;
$(window).scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        document.getElementById("scrollDown").style.backgroundColor = "transparent";
        document.getElementById("scrollDown").style.display = "none";
    } else {
        document.getElementById("scrollDown").style.backgroundColor = "rgba(19,19,42,1)";
        document.getElementById("scrollDown").style.display = "block";
        document.getElementById("scrollDown").style.borderBottomStyle = "solid";
        document.getElementById("scrollDown").style.borderBottomColor = "white";
        document.getElementById("scrollDown").style.borderBottomWidth = "1px";

    }
    iScrollPos = iCurScrollPos;
});

var $window = $(window);

$(window).on('scroll', function() {
    $topOffset = $(this).scrollTop();
    if ($topOffset == 0) {
        $("#scrollDown").css('background-color', 'transparent');
        $("#scrollDown").css('border-bottom-style', 'none');
    }
});

$(document).ready(function() {
    $('.tabs a').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.contact-pgraph-2').css("display", "none");
        $('.showtab').css("display", "block");
        $('.tabs a').removeClass('activecolor');
        $('.tabs-section').removeClass('current');
        $(this).addClass('activecolor');
        $("#" + tab_id).addClass('current');
    })
})