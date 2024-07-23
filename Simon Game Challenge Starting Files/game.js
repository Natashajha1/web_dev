var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var startedtoToggle=true;
var level=0;
var count=0;
$(".btn").on("click",function()
    {
        var userChosenColour=this.id;
        playSound(userChosenColour);
        animatePress(userChosenColour);
        userClickedPattern.push(userChosenColour);
        checkAnswer(count++)
    });
function nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}
function playSound(name)
{
    var path="sounds/"+name+".mp3";
    var sound=new Audio(path);
    sound.play();
}
function animatePress(currentColour)
{
    $("#"+currentColour).addClass('pressed').delay(20)
                        .queue(function(next){
                        $(this).removeClass('pressed');
                        next();})
}
function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]!==userClickedPattern[currentLevel])
    {
        count=0;
        var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass('game-over').delay(200)
                        .queue(function(next){
                        $(this).removeClass('game-over');
                        next();})
        $("h1").text("Game over, Press any key to restart");
        startOver();
    }
    else if(currentLevel===level-1)
    {
        count=0;
        userClickedPattern=[];
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
}
function startOver()
{
    level=0;
    gamePattern=[];
    startedtoToggle=true;
}
$(document).on("keydown",function()
{    
    if(startedtoToggle)
    {
    $("h1").text("Level 0")
    nextSequence();
    startedtoToggle=false;}
});