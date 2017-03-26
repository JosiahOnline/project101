$(document).ready(function() {
            $("#welcome-message").fadeOut(3000);
        });
        $(function() {
            $("#typed").typed({
                stringsElement: $('#typed-strings'),
                typeSpeed: 10,
                // time before typing starts
                startDelay: 0,
                // backspacing speed
                backSpeed: 0,
                // time before backspacing
                backDelay: 10000,
                // loop
                loop: true,
                // show cursor
                showCursor: true,
                // character for cursor
                cursorChar: "|",
            });
        });
    
        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        function openNav() {

            document.getElementById("mySidenav").style.borderLeft = "5px";
            document.getElementById("mySidenav").style.borderLeftColor = "#e9ff00";
            document.getElementById("mySidenav").style.borderLeftStyle = "solid";
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("myDiv").style.display = "block";
            document.getElementById("myDiv").style.backgroundColor = "rgba(19,19,42,0.4)";
        }
        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {

            document.getElementById("mySidenav").style.borderLeft = "0";
            document.getElementById("mySidenav").style.borderLeftColor = "0";
            document.getElementById("mySidenav").style.borderLeftStyle = "0";
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("myDiv").style.backgroundColor = "transparent";
            document.getElementById("myDiv").style.display = "none";

        }