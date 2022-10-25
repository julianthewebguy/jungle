    $(function () {
        $('.toggle-menu').click(function () {
            $('.exo-menu').toggleClass('display');

        });

    });

    jQuery(document).ready(function () {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

            var listingFooter = jQuery('<a href="https://api.whatsapp.com/send?phone=529841765748 &text=Hello%21%20I%20want%20more%20information." class="float" target="_blank"><i class="fab fa-whatsapp my-float"></i></a><div id="toTop" class="button-row2 align-center"><a href="#Top">Back to Top</a> </div> <div class="secondaryBackground"> <div class="mainBackground"> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <h2>Jungle Realtor</h2> <br /> <p><strong><a href="tel:+529841765748">+52 (984) 176-5748</a></strong> Office</p><p>Tulum, Quintana Roo</p> <p>Mexico</p> <div class="footer-social"> <h3>Follow Us:</h3> <a href="https://twitter.com/jungle_realtor/" target="_blank"><i class="fab fa-twitter socials"></i></a> <a href="https://www.facebook.com/JungleRealtor/" target="_blank"><i class="fab fa-facebook-f socials"></i></a> <a href="https://www.instagram.com/junglerealtor/" target="_blank"><i class="fab fa-instagram socials"></i></a> </div> </div> <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/21d3/9503/21b6/1b8af26fe8b86e6d510d/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p> </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/">Home</a></li> <li><a href="/playa_del_carmn_real_estate/page_2710046.html">Playa del Carmen</a></li> <li><a href="/tulum_real_estate/page_2710047.html">Tulum</a></li> <li><a href="/puerto_aventuras_real_estate/page_2710048.html">Puerto Aventuras</a></li> <li><a href="/bacalar_real_estate/page_2710049.html">Bacalar</a></li> <li><a href="/contact_us/page_2688141.html">Contact Us</a></li> </ul> </div> <div class="footer-flex only-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/21d3/9503/21b6/1b8af26fe8b86e6d510d/original.png" alt=""> <p><img class="realtor" alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p> </div> </div> </div> </div> <div id="final-footer" class="secondaryBackground"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div>');

            jQuery('body').append(listingFooter);
        }

        jQuery(".row-fluid").last().addClass("footerBG");
    });


    function addCustomClasses() {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var headerDiv = document.getElementsByClassName('maindiv')[0];
        }
        else {
            var headerDiv = document.getElementsByClassName('row-fluid')[1];
        }
        headerDiv.classList.add('headerBG');
    }
    document.ready = addCustomClasses;

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        // Get the header depending on whether we're on a listing page or not
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var header = document.getElementsByClassName('maindiv')[0];
            //console.log('AM');
        }
        else {
            var header = document.getElementsByTagName('header')[1];
        }
        //Get the offset position of the navbar
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    // Make Nav Transparent on Home
    $(document).ready(function () {
        var url = location.href;
        var headerDiv = document.getElementsByClassName('row-fluid')[1];
        console.log(url)
        if (url == "https://www.jungletulumrealestate.com/" || url == "https://jungletulumrealestate.com/" || url == "http://www.jungletulumrealestate.com/" || url == "https://www.jungletulumrealestate.com/#starthere" ||  url == "http://www.jungletulumrealestate.com/#Top" || url == "http://www.jungletulumrealestate.com/#starthere" || url == "https://jungletulumrealestate.com/#starthere" || url == "https://www.jungletulumrealestate.com/#Top" || url == "https://jungletulumrealestate.com/#Top") {
            headerDiv.classList.add('transparent');
        }

    });

    // Make home fill width
    $(document).ready(function () {
        var url = location.href;
        var headerDiv = document.getElementsByClassName('row-fluid')[2];
        console.log(url)
        if (url == "https://www.jungletulumrealestate.com/" || url == "https://jungletulumrealestate.com/" || url == "http://www.jungletulumrealestate.com/" || url == "https://www.jungletulumrealestate.com/#starthere" ||  url == "http://www.jungletulumrealestate.com/#Top" || url == "http://www.jungletulumrealestate.com/#starthere" || url == "https://jungletulumrealestate.com/#starthere" || url == "https://www.jungletulumrealestate.com/#Top" || url == "https://jungletulumrealestate.com/#Top") {
            headerDiv.classList.add('fullwidth');
        }

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
