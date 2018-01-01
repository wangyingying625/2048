function ShowNumber(x,y,randNumber) {
    var num=$("#number"+x+y);
    num.css("background-color", getNumberBackgroundColor(randNumber));
    num.css("color",getColor(randNumber));
    num.text(randNumber);
    num.animate({
        width: "100px",
        height: "100px",
        top: getTop(x, y),
        left: getLeft(x, y)
    }, 50);
}
function  showMove(fromx,fromy,tox,toy) {
    var Numb=$("#number"+fromx+fromy);
    Numb.animate({
        left:getLeft(tox,toy),
        top:getTop(tox,toy)
    },200);
}
/*
function  showMove1(fromx,fromy,tox,toy) {
    var Numb=$("#number"+fromx+fromy);
    Numb.animate({
        top:getTop(tox,toy)
    },200);
}*/
function updateScore(score) {
    $("#score").text(score);
}
