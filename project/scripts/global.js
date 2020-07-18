function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
//在目标元素后面插入
function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function addClass(element,value){
    //没有时直接加上
    if(!element.className) {
        element.className = value;
    }else{
        //有时追加
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

//页面突出显示
function hightlightPage(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    let headers = document.getElementsByTagName('header');
    if(headers.length==0) return false;
    let navs = headers[0].getElementsByTagName('nav');
    if(navs.length == 0) return false;
    let links = navs[0].getElementsByTagName('a');
    let linkurl;
    for(let i=0;i<links.length;i++){
        linkurl = links[i].getAttribute('href');
        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className = 'here';
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id',linktext);
        }
    }
}
addLoadEvent(hightlightPage);
//幻灯片移动
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
function prepareSlideshow(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('intro')) return false;
    let intro = document.getElementById('intro');
    let slideshow = document.createElement('div');
    slideshow.setAttribute('id','slideshow');
    
    let frame = document.createElement('img');
    frame.setAttribute('src','images/frame.gif');
    frame.setAttribute('alt'," ");
    frame.setAttribute('id','frame');
    slideshow.appendChild(frame);
    
    let preview = document.createElement('img');
    preview.setAttribute('src','images/all.jpg');
    preview.setAttribute('alt','a glimpse of what await you');
    preview.setAttribute('id','preview');
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
    //let links = intro.getElementsByTagName('a');
    let links = document.getElementsByTagName('a');
    let destination;
    for (let i = 0; i< links.length; i++) {
        links[i].onmouseover = function(){
            destination = this.getAttribute('href');
            if(destination.indexOf("index.html") != -1){
                moveElement('preview',0,0,5);
            }
            if(destination.indexOf("about.html") != -1){
                moveElement('preview',-150,0,5);
            }
            if(destination.indexOf("photos.html") != -1){
                moveElement('preview',-300,0,5);
            }
            if(destination.indexOf("live.html") != -1){
                moveElement('preview',-450,0,5);
            }
            if(destination.indexOf("contact.html") != -1){
                moveElement('preview',-600,0,5);
            }
        }       
    }
}
addLoadEvent(prepareSlideshow);