WebFont.load({
            google: {
                families: ["Merriweather:300,400,700,900", "Droid Serif:400,700", "Vollkorn:400,400italic,700,700italic", "Berkshire Swash:regular:latin,latin-ext", "Oleo Script:regular,700:latin,latin-ext"]
            }
        });

function openNav() {
    document.getElementById("mySidenav").style.borderLeft = "5px";
    document.getElementById("mySidenav").style.borderLeftColor = "#e9ff00";
    document.getElementById("mySidenav").style.borderLeftStyle = "solid";
    document.getElementById("mySidenav").style.width = "285px";
    document.getElementById("mySidenav").style.minHeight = "110%";
    document.getElementById("mySidenav").style.marginTop = "285px";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("myDiv").style.minHeight = "110%";
    document.getElementById("myDiv").style.backgroundColor = "rgba(19,19,42,0.4)";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {

    document.getElementById("mySidenav").style.borderLeft = "0";
    document.getElementById("mySidenav").style.borderLeftColor = "0";
    document.getElementById("mySidenav").style.borderLeftStyle = "0";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.minHeight = "0";
    document.getElementById("myDiv").style.backgroundColor = "transparent";
    document.getElementById("myDiv").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
}

var triggered_times = 0;
$(window).scroll(function() {

    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100 && triggered_times == 0) {
        $(".ti-ads").show(10).css("display", "block");
        $("body").css("overflow", "hidden");
        triggered_times = 1;
    }
});

$("#close-ti-ads").click(function() {
    $(".ti-ads").css("display", "none");
    $("body").css("overflow", "visible");
});