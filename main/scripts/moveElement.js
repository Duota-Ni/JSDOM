function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById || !document.getElementById(elementID)) return false;
    let elem = document.getElementById(elementID);
    let xpos = parseInt(elem.style.left);
    let yops = parseInt(elem.style.top);
    if(xpos==final_x && yops==final_x){
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(yops<final_y){
        yops++;
    }
    if(yops>final_y){
        yops--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = yops+"px";
    let repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement=setTimeout(repeat,interval);
}
function positionMessage(){
    if(!document.getElementById || !document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    //三秒后移动
    //movement = setTimeout("moveElement()",3000);
    moveElement("message",124,300,10);
    //增加message2
    if(!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position="absolute";
    elem.style.left="10px";
    elem.style.top="50px";
    moveElement("message2",125,200,20);
}
addLoadEvent(positionMessage);
