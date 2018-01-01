function  getTop(i,j) {
    return 20+120*i;
}
function  getLeft(i,j) {
    return 20+120*j;
}
function getNumberBackgroundColor(number){
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
    }

}
function getColor(number){
    if (number <= 4) {
        return "#776e65"
    }
    return "white";
}
function canMoveLeft(board) {
    for(var i=0;i<4;i++)
        for(var j=1;j<4;j++)
        {
            if (board[i][j]!=0)
            {
                if(board[i][j-1]==0||board[i][j-1]==board[i][j])
                    return true;
            }
        }
        return false;
}
function canMoveRight(board) {
    for(var i=0;i<4;i++)
        for(var j=2;j>=0;j--)
        {
            if (board[i][j]!=0)
            {
                if(board[i][j+1]==0||board[i][j+1]==board[i][j])
                    return true;
            }
        }
    return false;
}
function canMoveTop(board) {
    for(var i=1;i<4;i++)
        for(var j=0;j<4;j++)
        {
            if (board[i][j]!=0)
            {
                if(board[i-1][j]==0||board[i-1][j]==board[i][j])
                    return true;
            }
        }
    return false;
}
function canMoveBottom(board) {
    for(var i=2;i>=0;i--)
        for(var j=0;j<4;j++)
        {
            if (board[i][j]!=0)
            {
                if(board[i+1][j]==0||board[i+1][j]==board[i][j])
                    return true;
            }
        }
    return false;
}
function zhongjian(i,r,j,board) {
    for(var k=r+1;k<j;k++)
    {
        if(board[i][k]==0)
            continue;
        else
            return false;
    }
    return true;
}
function zhongjian1(i,r,j,board) {
    for(var k=r-1;k>j;k--)
    {
        if(board[i][k]==0)
            continue;
        else
            return false;
    }
    return true;
}
function zhongjian2(i,r,j,board) {
    for(var k=r+1;k<i;k++)
    {
        if(board[k][j]==0)
            continue;
        else
            return false;
    }
    return true;
}
function zhongjian3(i,r,j,board) {
    for(var k=r-1;k>i;k--)
    {
        if(board[k][j]==0)
            continue;
        else
            return false;
    }
    return true;
}
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function nomove(board) {
    if (canMoveBottom(board) || canMoveLeft(board) || canMoveRight(board) || canMoveTop(board)) {
        return false;
    }
    return true;
}