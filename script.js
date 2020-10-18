const akram = $(".akram");
const info_ak = $(".info_akram")


const yassin = $(".yassin")
const info_yas = $(".info_yassin")

const oussama = $(".oussama")
const info_ous = $(".info_oussama")


akram.click(function(){
    info_ak.toggle();
    info_yas.fadeOut();
    info_ous.fadeOut();
    
});


yassin.click(function(){
    info_ak.fadeOut();
    info_yas.toggle();
    info_ous.fadeOut();
});

oussama.click(function(){ 
    info_ous.toggle(); 
    info_ak.fadeOut();
    info_yas.fadeOut();
    
});


const botton = $(".red")
const botton2 = $(".green")
const botton3 = $(".black")
const backg = $("body")

botton.click(function(){
    backg.css("background-color", "red");
    

});
botton2.click(function(){
    backg.css("background-color", "green");
});
botton3.click(function(){
    backg.css("background-color", "#050801");
});
