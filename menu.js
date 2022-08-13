$('#nav__trigger').on('click', function(e){
    e.preventDefault();
    $('header').toggleClass('active')
});

$('#nav__trigger').keydown(function (e){
    if (e.keyCode ===  13 || e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
        $('header').toggleClass('active')
     }
});

$('#search-icon').on('click', function (e){
    if($(window).width() >= 991.7){
        e.preventDefault();
        $('header').toggleClass('active')
    } else {
        $('#search').toggleClass('focus')
    }
});

$('#search').on('focus', function (){
    if( !$('header').hasClass('active')){
        $('header').toggleClass('active')
    }
})

$('.container, main, footer').on('click', function (){
    $('header').removeClass('active')
});
