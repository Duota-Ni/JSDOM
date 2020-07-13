function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById || !document.getElementById(elementID)) return false;
    let elem = document.getElementById(elementID);
    //已经存在移动时clearTimeout
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    //增加检查top,left是否存在
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    let xpos = parseInt(elem.style.left);
    let yops = parseInt(elem.style.top);
    let dist = 0;
    if (xpos == final_x && yops == final_x) {
        return true;
    }
    if (xpos < final_x) {
        //优化动画效果
        dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (yops < final_y) {
        dist = Math.ceil((final_y - yops) / 10);
        yops = yops + dist;
    }
    if (yops > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        yops = yops - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = yops + "px";
    let repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}
