/*
function styleHeaderSilbling() {
    if (!document.getElementsByTagName) return false;
    let headers = document.getElementsByTagName("h1");
    let elem;
    for(let i = 0;i<headers.length;i++){
        elem = getNextElement(headers[i].nextSibling);
        
        //elem.style.fontWeight = "bold";
        //elem.style.fontSize = "1.5em";
        //elem.style.color = "red";

       // elem.className = "intro";

       addClass(elem,"intro");
    }
}
*/
//抽象
function styleElementSilblings(tag,theclass) {
    if (!document.getElementsByTagName) return false;
    let elems = document.getElementsByTagName(tag);
    let elem;
    for(let i = 0;i<elems.length;i++){
        elem = getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}

function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
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
//抽象
//addLoadEvent(styleHeaderSilbling);
addLoadEvent(

        styleElementSilblings("h1","intro")
    
)