$('#nav__trigger').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

$('#nav__trigger').keydown(function (e){
    if (e.keyCode ===  13 || e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
     }
});

$('#search-icon').on('click', function (e){
    e.preventDefault();
    $('header').toggleClass('active');
});

$('#search').on('focus', function (){
    if( !$('header').hasClass('active')){
        $('header').toggleClass('active')
    }
})

$('.container, main, footer').on('click', function (){
    $('header').removeClass('active');
});
