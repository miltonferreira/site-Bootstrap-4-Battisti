$(document).ready(function(){ // só executa o codigo quando a página carregar totalmente

    // Progress bar ---------------------------------------------------------------------------------------------------

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        
        color: '#64DAF9',
        strokeWidth: 8,          // largura da borda do circulo
        duration: 1400,     // tempo em milisegundos
        from: { color: '#AAA'},
        to: { color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);

        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#64DAF9',
        strokeWidth: 8,          // largura da borda do circulo
        duration: 1600,     // tempo em milisegundos
        from: { color: '#AAA'},
        to: { color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);

        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        
        color: '#64DAF9',
        strokeWidth: 8,          // largura da borda do circulo
        duration: 2000,     // tempo em milisegundos
        from: { color: '#AAA'},
        to: { color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);

        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#64DAF9',
        strokeWidth: 8,          // largura da borda do circulo
        duration: 2200,     // tempo em milisegundos
        from: { color: '#AAA'},
        to: { color: '#64DAF9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);

        }
    });

    /* iniciando o loader quando o usuario chega no elemento */
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop(); // pega a posição do scroll do usuario

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;   // só deixa entrar uma fez no if

        }

    });

    // Parallax, faz a imagem carrega antes da página para não buga --------------------------------------------------

    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});     // imagem do parallax do container >> Dados da empresa <<
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});           // imagem do parallax do container >> Trabalhe Conosco <<

    }, 250);
    
    // Filtro do portfólio -------------------------------------------------------------------------------------------

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');          // pega o id do botao
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');   // remove a classe active de todos os botões
        $(this).addClass('active');             // adiciona a classe active ao botão clicado

        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes);            // só mostra projetos de design
        } else if (type == 'dev-btn'){
            eachBoxes('dev', boxes);            // só mostra projetos de dev
        } else if (type == 'seo-btn'){
            eachBoxes('seo', boxes);            // só mostra projetos de seo
        } else {
            eachBoxes('all', boxes);            // mostra todos projetos
        }

    });

    function eachBoxes(type, boxes){

        if(type == 'all'){
            $(boxes).fadeIn();  // mostra todos os projetos
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');    // se as classes não forem os mesmos, esconde
                } else {
                    $(this).fadeIn();           // se as classes forem os mesmo, mostra
                }
            });
        }

    }

    // scroll para seções -------------------------------------------------------------------------------------------
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){

        let btnId = $(this).attr('id');

        // console.log(btnId);

        if(btnId == 'about-menu'){
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70    // 70 é o tamanho da barra de navegação
        }, 1500);                                       // 1500 é 1s5 para fazer a animação

    });

    

});