//最终
//共享onload,多个function
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

//第七章动态创建标记
function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    let placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'images/kong.jpg');
    placeholder.setAttribute('alt', 'my image gallery')
    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    let destext = document.createTextNode("Choose an image.");
    description.appendChild(destext);
    //new
    let gallery = document.getElementById('imagegallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
    //document.getElementsByTagName('body')[0].appendChild(placeholder);
    //document.getElementsByTagName('body')[0].appendChild(description);

}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    let gallery = document.getElementById("imagegallery");
    let links = gallery.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
        //键盘
        links[i].onkeypress = links[i].onclick;
    }
}

//第六章
function showPic(whichpic) {
    //"placeholder"是否存在
    if (!document.getElementById("placeholder")) return false;
    //图片切换
    let source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    //检查图片
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    //文本切换(可选)
    if(!document.getElementById("description")) return false;
    if (document.getElementById("description")) {
        let text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : "";
        let description = document.getElementById('description');
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}


//调用
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
/*
window.onload = function () {
    createLast();
    prepareGallery();
}

/*
//第五章及之前
function showPic(whichpic){
    let source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute("src", source);
    let text = whichpic.getAttribute('title');
    let description = document.getElementById('description');
    description.firstChild.nodeValue=text;
}

function popUp(winURL) {
    window.open(winURL, "popup", "width=635,height=396")
}

window.onload = function () {
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName('a');
    let length = links.length;
    for (let i = 0; i <= length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
*/


/*
function countBodyChildern(){
    let body_element  = document.getElementsByTagName('body')[0];
    alert(body_element.nodeValue);
}
window.onload= countBodyChildern;
*/