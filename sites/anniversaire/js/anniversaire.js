/*MES VARIABLES*/
    var audio = $("#audio");

/*MES FONCTIONS*/
    function play_sound(){
    var audio = document.getElementById("audio");
       audio.play();   }


/*HIDE BUTTONS*/
$('#great').hide();
$('#today').hide();
$('#coke').hide();

/*ONCLICK SHOW*/
$('#click_me').on('click', function () {
    $('#great').show()
    $('#click_me').hide();
}); 
$('#great').on('click', function () {
    $('#today').show()
}); 
$('#today').on('click', function () {
    $('#coke').show()
});

/*ONCLICK CHANGE BACKGROUND, MOVE BUTTONS AND PLAY SOUND*/
$('#coke').on('click', function () {
    $('body').css('background-image', "url(img/bg2.jpg)");
    $("#alpha").animate({
            left: '250px',
            top: '350px',
        });
    play_sound();

});