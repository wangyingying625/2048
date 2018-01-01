var borad=new Array();
$(function () {
    newgame();
});
function newgame() {
    inti();
    OneNumber();
    OneNumber();
}
/*初始化棋盘函数*/
function inti() {

    for(var i=0;i<4;i++)
    {
        borad[i]=new Array();
        for(var j=0;j<4;j++)
        {
            borad[i][j]=0;
            var cell=$("#cell"+i+j);
            cell.css("top",getTop(i,j));
            cell.css("left",getLeft(i,j));
        }
    }
    boradview();
}
/*初始化棋盘上的格子*/
function  boradview() {
    $(".number").remove();
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++) {
            $("#container").append("<div class='number' id='number" + i + j+"'></div>");
            var numberCell = $("#number" + i + j);
            if (borad[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getTop(i, j) + 50);
                numberCell.css("left", getLeft(i, j) + 50);
            }
            else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getTop(i, j));
                numberCell.css("left", getLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(borad[i][j]));
                numberCell.css("color", getColor(borad[i][j]));
                numberCell.text(borad[i][j]);
            }
        }
}
/*生成随机数*/
function OneNumber(){
    var x=parseInt(Math.floor(Math.random()*4));
    var y=parseInt(Math.floor(Math.random()*4));
    while(true)
    {
        if(borad[x][y]==0)
            break;
        var x=parseInt(Math.floor(Math.random()*4));
        var y=parseInt(Math.floor(Math.random()*4));
    }
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    borad[x][y]=randNumber;
    ShowNumber(x,y,randNumber);
}