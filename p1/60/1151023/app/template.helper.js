document.addEventListener("DOMContentLoaded", function(event) {

    // ===========================================
    // ======== helper is from url.helper.js
    // ======== gallery is from gallery.helper.js
    // ======== news is from news.helper.js
    // ===========================================

    // This file is created in order to avoid repeat html in every screen.
    // So this is how the 'template cache' in angular works.
    // Save the content of the repeated html in a variable and just draw it into real html

    var section_top = '<div class="left">'+
            '<h5 class="color-white"><i class="fa fa-star"></i> Bienvenido al descubrimiento de negocios</h5>'+
        '</div>'+
        '<div class="right color-white">'+
            '<ul>'+
                '<li>'+
                    '<a href="#">'+
                        '<h4><i class="fa fa-facebook"></i></h4>'+
                    '</a>'+
                '</li>'+
                '<li>'+
                    '<a href="#">'+
                        '<h4><i class="fa fa-twitter"></i></h4>'+
                    '</a>'+
                '</li>'+
                '<li>'+
                    '<a href="#">'+
                        '<h4><i class="fa fa-instagram"></i></h4>'+
                    '</a>'+
                '</li>'+
           ' </ul>'+
       '</div>';
       
       // section top, the little line with social media links
        views.find('#social-top').html(section_top);


       var nav = '<nav>'+
            '<div class="left goToIndex manito">'+
                '<img src="assets/img/logos/logo_main.png" alt="logo" width="250">'+
            '</div>'+
            '<div class="right">'+
                '<ul>'+
                    '{{repeat_list}}' +
                '</ul>'+
            '</div>'+
        '</nav>';

        // the links of the navigation bar
        views.find('header').html(helper.getNav(nav));


        var footer = '<div class="first border-bottom-semiwhite">'+
            '<ul>'+
                '<li><a href="#"><img src="assets/img/logos/mintic.png" alt="logo_mintic"></a></li>'+
                '<li><a href="#"><img src="assets/img/logos/vivedigital.png" alt="logo_vive_digital"></a></li>'+
                '<li><a href="#"><img src="assets/img/logos/appsco.png" alt="logo_apps_co"></a></li>'+
                '<li><a href="#"><img src="assets/img/logos/colciencias.png" alt="logo_colciencias"></a></li>'+
                '<li><a href="#"><img src="assets/img/logos/nuevopais.png" alt="logo_nuevo_pais"></a></li>'+
            '</ul>'+
        '</div>'+
        '<div class="second">'+
            '<div class="left">'+
                '<h5>Developed by <a href="http://github.com/screenfun" target="_blank">Cristhian León</a> - Programaci&oacute;n web UFPS</h5>'+
            '</div>'+
            '<div class="right">'+
                '<ul>'+
                    '<li><a href="#"><i class="fa fa-facebook"></i></a></li>'+
                    '<li><a href="#"><i class="fa fa-twitter"></i></a></li>'+
                    '<li><a href="#"><i class="fa fa-github"></i></a></li>'+
                    '<li><a href="#"><i class="fa fa-linkedin"></i></a></li>'+
                '</ul>'+
            '</div>'+
        '</div>';

        // finally the footer and the logos inside it
        views.find('footer').html(footer);

        if(views.find("#page-top").node != null) {
            views.find("#page-top").css(helper.getHeaderCss());
        }

        if(views.find(".gallery .cards").node != null) {
            views.find(".gallery .cards").html(gallery.getTeachers());
        }

        if(views.find(".news .cards").node != null) {
            views.find(".news .cards").html(newshelper.getNews());
        }

        views.find('.goToIndex').click(function(){
            window.location.href = "index.html";
        });

});