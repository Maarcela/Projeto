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
console.clear()
var slideBtn = document.getElementsByClassName('slideBtn');
var slideItem = document.getElementsByClassName('carouselItem');
var l = 0;

slideBtn[1].onclick = ()=>{
    l++;
    for(var i of slideItem){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-1200px";}
        if (l==2) {i.style.left = "-2400px";}
        if (l>3){l=3;}
    }
}
slideBtn[0].onclick = ()=>{
    l--;
    for(var i of slideItem){
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-1200px";}
        if (l==2) {i.style.left = "-2400px";}
        if (l<0){l=0;}
    }
}


//Validação do campo Newsletter
console.clear()
function validar(){
    alert('Ficamos muito felizes por você fazer parte da nossa comunidade!')
}   
