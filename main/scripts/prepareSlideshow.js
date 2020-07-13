function prepareSlidesshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("linklist")) return false;
    //if (!document.getElementById("preview")) return false;

    //DOM生成
    let sildeshow = document.createElement("div");
    sildeshow.setAttribute("id","slideshow");
    let preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","four color gif");
    preview.setAttribute("id","preview");
    sildeshow.appendChild(preview);
    //为图片应用样式
    //let preview = document.getElementById("preview");
    //preview.style.position = "absolute";
    //preview.style.left = "0px";
    //preview.style.top = "0px";
    //取得列表中所有链接
    let list = document.getElementById("linklist");
    insertAfter(sildeshow,list);
    let links = list.getElementsByTagName("a");
    //为mouseoover添加动画效果
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,10);
    }
}
addLoadEvent(prepareSlidesshow);