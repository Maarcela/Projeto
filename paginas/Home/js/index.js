//JS do meu Menu
$('.hamburguer').click(function(){
    $(this).toggleClass("click");
    $('.mainMenu').toggleClass("show");
});

$('.prodBtn').click(function(){
    $('.mainMenu ul .prod-show').toggleClass("show");
    $('.mainMenu ul .only').toggleClass("rotate");
});

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});


// Carousel de mais vendidos
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


//Validação do campo Newsletter
console.clear()
function validar(){
    alert('Ficamos muito felizes por você fazer parte da nossa comunidade!')
}   
