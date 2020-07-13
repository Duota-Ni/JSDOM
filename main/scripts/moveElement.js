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
