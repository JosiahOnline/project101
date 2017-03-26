$(function() {
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 10,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 6000,
        // loop
        loop: true,
        showCursor: false
    });
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

$(document).ready(function() {
    $("#welcome-message").fadeOut(3000);
    $(".email-sign-up").click(function() {
        $(".sign-up-container").css('display', 'block');
        $("body").first().css('overflow', 'hidden');
    });
    $(".sign-up-close").click(function() {
        $(".sign-up-container").css('display', 'none');
        $("body").first().css('overflow', 'visible');
    });

    $(".learn-more").click(function() {
        $(".learn-more-container").css('display', 'block');
        $("body").first().css('overflow', 'hidden');
    });
    $(".learn-more-close").click(function() {
        $(".learn-more-container").css('display', 'none');
        $("body").first().css('overflow', 'visible');
    });
    $(".features-link").click(function() {
        $("body").first().css('overflow', 'hidden');
    });
    $(".features-close").click(function() {
        $("body").first().css('overflow', 'visible');
    });

    $("#slide a").click(function() {
        $("#slide a").removeClass('selected-circle');
        $(this).addClass('selected-circle');
        $(".cs-slider-container li").removeClass('cs-current');

        $selectedtab = $(this).attr('href');
        $currenttab = $($selectedtab).removeAttr('href');
        //how did currenttab able to store and link to the selected 'li#cs-tab'? 
        //just by removing the href? how?
        $($currenttab).addClass('cs-current');
        //  At the end, we add return false so that the click on the link is not executed
        return false;
    });

});

$(document).ready(function() {
    //  When user clicks on tab, this code will be executed
    $("#mtabs li").click(function() {
        //  First remove class "active" from currently active tab
        $("#mtabs li").removeClass('currentTab');

        //  Now add class "active" to the selected/clicked tab
        $(this).addClass("currentTab");

        //  Hide all tab content
        $(".mtab-content").hide();

        //  Here we get the href value of the selected tab
        var selected_tab = $(this).find("a").attr("href");

        //  Show the selected tab content
        $(selected_tab).fadeIn();

        //  At the end, we add return false so that the click on the link is not executed
        return false;
    });
});

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
        document.getElementById("scrollDown").style.boxShadow = "grey";
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