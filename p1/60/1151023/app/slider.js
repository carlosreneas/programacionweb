document.addEventListener("DOMContentLoaded", function(event) {

    var slider, buttons, titles, images, current, pages, text, timer;

    setUp();

    function setUp() {

        pages = 3;
        current = -1;
        timer = 2500;

        slider = views.find('.no-slider');
        buttons = views.find('.buttons-slider .buttoner');
        text = views.find('.information h1');

        titles = [
            'Ayudamos a transformar las ideas en <br>negocios sostenibles',
            'Gestamos el emprendimiento <br> digital en Colombia',
            'Promovemos la creación <br>de negocios TIC'
        ];

        images = [
            'assets/img/slider/b1.jpg',
            'assets/img/slider/b2.jpg',
            'assets/img/slider/b3.jpg'
        ];
        moveSlide();
        setInterval(moveSlide, timer);
    }

    function moveSlide() {
        current = ((current + 1) % pages);

        buttons.children().removeClass('active');

        var inci = 0;
        for(var i = 0; i < buttons.node.childNodes.length; i++) {
            var b = buttons.node.childNodes[i];
            if(b.nodeType === 1) {
                if(inci == current) {
                    b.classList.add('active');
                    inci++;
                }else {
                    b.classList.remove('active');
                    inci++;
                }
            }
        }

        slider.css('background', "url(" + images[current] + ")");
        text.html(titles[current]);

    }
})