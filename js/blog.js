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
        // show cursor
        showCursor: false,
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