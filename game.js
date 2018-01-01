$(document).keydown(function (event) {
    switch (event.keyCode){
        case 37: {
            if (canMoveLeft(borad)) {
                moveLeft();
                setTimeout("OneNumber()", 200);
                 setTimeout("isgameover()",300);
            }
            break;
        }
            case 38:{
                if(canMoveTop(borad)) {
                    moveTop();
                    setTimeout("OneNumber()", 200);
                     setTimeout("isgameover()",300);
                }
                    break;
                }
                case 40:{
                    if(canMoveBottom(borad)) {
                        moveBottom();
                        setTimeout("OneNumber()", 200);
                         setTimeout("isgameover()",300);
                    }
                        break;
                    }
                    case 39:{
                        if(canMoveRight(borad)) {
                            moveRight();
                            setTimeout("OneNumber()", 200);
                            setTimeout("isgameover()",300);
                        }
                            break;
                        }
    }
})

function moveLeft() {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (borad[i][j] != 0)
            {
                for (var k = 0; k < j; k++)
                {
                  if (borad[i][k] == 0 && zhongjian(i, k, j, borad))
                  {
                   //move
                        showMove(i, j, i, k);
                        //borad[i][k] =borad[i][k]+ borad[i][j];
                        //borad[i][j] = 0;
                        borad[i][k] = borad[i][j];
                        borad[i][j] = 0;
                        continue;
                    }
                 else if (borad[i][k] == borad[i][j]&& zhongjian(i, k, j, borad))
                     {
                       showMove(i, j, i, k);
                        borad[i][k] =borad[i][k]+ borad[i][j];
                        borad[i][j] = 0;
                        //add score
                      /* score += borad[i][k];
                        updateScore(score);*/
                   }
                }
            }
        }
    }

    setTimeout("boradview()", 200);
}


function moveRight() {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (borad[i][j] != 0)
            {
                for (var k = 3; k >j; k--)
                {
                    if (borad[i][k] == 0 && zhongjian1(i, k, j, borad))
                    {
                        //move
                        showMove(i, j, i, k);
                        //borad[i][k] =borad[i][k]+ borad[i][j];
                        //borad[i][j] = 0;
                        borad[i][k] = borad[i][j];
                        borad[i][j] = 0;
                        continue;
                    }
                    else if (borad[i][k] == borad[i][j]&& zhongjian1(i, k, j, borad))
                    {
                        showMove(i, j, i, k);
                        borad[i][k] =borad[i][k]+ borad[i][j];
                        borad[i][j] = 0;
                        //add score
                       /* score += borad[i][k];
                       updateScore(score);*/
                    }
                }
            }
        }
    }

    setTimeout("boradview()", 200);
}


function moveTop() {
    for (var j = 0; j < 4; j++)
    for (var i = 1; i < 4; i++) {
         {
            if (borad[i][j] != 0)
            {
                for (var k = 0; k < i; k++)
                {
                    if (borad[k][j] == 0 && zhongjian2(i, k, j, borad))
                    {
                        //move
                        showMove(i, j, k, j);
                        borad[k][j] = borad[i][j];
                        borad[i][j] = 0;
                        continue;
                    }
                    else if (borad[k][j] == borad[i][j]&& zhongjian2(i, k, j, borad))
                    {
                        showMove(i, j, k, j);
                        borad[k][j] =borad[k][j]+ borad[i][j];
                        borad[i][j] = 0;
                        //add score
                       /* score += borad[i][k];
                        updateScore(score);*/
                    }
                }
            }
        }
    }

    setTimeout("boradview()", 200);
}

function moveBottom() {
    for (var i = 2; i >=0; i--)
    for (var j = 0; j < 4; j++)
    {
            if (borad[i][j] != 0)
            {
                for (var k = 3; k >i; k--)
                {
                    if (borad[k][j] == 0 && zhongjian3(i, k, j, borad))
                    {
                        //move
                        showMove(i, j, k, j);
                        borad[k][j] = borad[i][j];
                        borad[i][j] = 0;
                        continue;
                    }
                    else if (borad[k][j] == borad[i][j]&& zhongjian3(i, k, j, borad))
                    {
                        showMove(i, j, k, j);
                        borad[k][j] =borad[k][j]+ borad[i][j];
                        borad[i][j] = 0;
                        //add score
                       /* score += borad[i][k];
                       updateScore(score);*/
                    }
                }
        }
    }

    setTimeout("boradview()", 200);
}
function win(borad) {
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++)
        {
            if(borad[i][j]==2048)
                return true;
        }
        return false;
}
function isgameover() {
    if (nospace(borad) && nomove(borad)) {
        gameover();
        return true;
    }
    else if(win(borad))
    {alert("你赢了");return true;}
    else
        return false;
}

function gameover() {
    alert("gameover");
}