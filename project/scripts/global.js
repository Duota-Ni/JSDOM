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
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
function addClass(element, value) {
    //没有时直接加上
    if (!element.className) {
        element.className = value;
    } else {
        //有时追加
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

//页面突出显示
function hightlightPage() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    let headers = document.getElementsByTagName('header');
    if (headers.length == 0) return false;
    let navs = headers[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;
    let links = navs[0].getElementsByTagName('a');
    let linkurl;
    for (let i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute('href');
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = 'here';
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id', linktext);
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
function prepareSlideshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('intro')) return false;
    let intro = document.getElementById('intro');
    let slideshow = document.createElement('div');
    slideshow.setAttribute('id', 'slideshow');

    let frame = document.createElement('img');
    frame.setAttribute('src', 'images/frame.gif');
    frame.setAttribute('alt', " ");
    frame.setAttribute('id', 'frame');
    slideshow.appendChild(frame);

    let preview = document.createElement('img');
    preview.setAttribute('src', 'images/all.jpg');
    preview.setAttribute('alt', 'a glimpse of what await you');
    preview.setAttribute('id', 'preview');
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);
    //let links = intro.getElementsByTagName('a');
    let links = document.getElementsByTagName('a');
    let destination;
    for (let i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            destination = this.getAttribute('href');
            if (destination.indexOf("index.html") != -1) {
                moveElement('preview', 0, 0, 5);
            }
            if (destination.indexOf("about.html") != -1) {
                moveElement('preview', -150, 0, 5);
            }
            if (destination.indexOf("photos.html") != -1) {
                moveElement('preview', -300, 0, 5);
            }
            if (destination.indexOf("live.html") != -1) {
                moveElement('preview', -450, 0, 5);
            }
            if (destination.indexOf("contact.html") != -1) {
                moveElement('preview', -600, 0, 5);
            }
        }
    }
}
addLoadEvent(prepareSlideshow);
function showSection(id) {
    let sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute('id') != id) {
            sections[i].style.display = 'none';
        } else {
            sections[i].style.display = 'block';;
        }
    }
}
function prepareInternalnav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    let articles = document.getElementsByTagName('article');
    if (articles.length == 0) return false;
    let navs = articles[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;
    let nav = navs[0];
    let links = nav.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        let sectionId = links[i].getAttribute('href').split('#')[1];
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = 'none';
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }
    }
}
addLoadEvent(prepareInternalnav);

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
    if (!document.getElementById("description")) return false;
    if (document.getElementById("description")) {
        let text = whichpic.getAttribute('title') ? whichpic.getAttribute('title') : "";
        let description = document.getElementById('description');
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    let placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'images/imagegallery/placeholder.gif');
    placeholder.setAttribute('alt', 'my image gallery')
    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    let destext = document.createTextNode("Choose an image.");
    description.appendChild(destext);
    //new
    let gallery = document.getElementById('imagegallery');
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
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
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
function stripeTables() {
    if (!document.getElementsByTagName) return false;
    let tables = document.getElementsByTagName("table");
    let odd, rows;
    for (let i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (let j = 0; j < rows.length; j++) {
            if (odd == true) {
                //rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j], "odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTables);
function highlightRows() {
    if (!document.getElementsByTagName) return false;
    let rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function () {
            addClass(this, 'highlight');
        }
        rows[i].onmouseout = function () {
            this.className = this.oldClassName;
        }
    }
}
addLoadEvent(highlightRows);
function displayabbreviations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    //取得所有略缩词
    let abbreviations = document.getElementsByTagName("abbr");
    let abbrlen = abbreviations.length;
    if (abbrlen < 1) return false;
    let defs = new Array();
    //遍历这些略缩词
    for (let i = 0; i < abbrlen; i++) {
        let current_abbr = abbreviations[i];
        //IE7的平稳退化
        if (current_abbr.childNodes.length < 1) continue;

        let definition = current_abbr.getAttribute("title");
        let key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    let dlist = document.createElement("dl");
    //遍历定义
    for (key in defs) {
        let definition = defs[key];
        //创建定义标题
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把他们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //IE7的平稳退化
    if (dlist.childNodes.length < 1) return false;

    //创建标题
    let header = document.createElement("h2");
    let header_text = document.createTextNode("注释：");
    header.appendChild(header_text);
    let articles = document.getElementsByTagName('article');
    if (articles.length == 0) return false;
    let container = articles[0];
    //把标题添加到页面主体
    container.appendChild(header);
    //把定义列表添加到页面主体
    container.appendChild(dlist);
}
addLoadEvent(displayabbreviations);

//labrl文字被点击时，对应的表单获得焦点
function focusLabels() {
    if (!document.getElementsByTagName) return false;
    let labels = document.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
        if (!labels.getAttribute('for')) continue;
        labels[i].onclick = function () {
            let id = this.getAttribute('for');
            if (!document.getElementById(id)) return false;
            let element = document.getElementById(id);
            element.focus;
        }
    }
}
addLoadEvent(focusLabels);

//让所有浏览器都存在placeholder
function resetFields(whichform) {
    if (Modernizr.input.placeholder) return;
    for (let i = 0; i < whichform.element.length; i++) {
        let element = whichform.element[i];
        if(element.type == 'sumbit') continue;
        let check = element.placeholder || element.getAttribute('placeholder');
        if(!check) continue;
        element.onfocus = function(){
            let text = this.placeholder || this.getAttribute('placeholder');
            if(this.value == text){
                this.className = '';
                this.value = '';
            }
        }
        element.onblur = function(){
            if(this.value == ''){
                this.className = 'placeholder';
                this.value = this.placeholder || this.getAttribute('placeholder');
            }
        }
        element.onblur;
    }
}
function prepareForms(){
    for (let i = 0; i< document.forms.length; i++) {
      let thisform = document.forms[i];
      resetFields(thisform);
    }
}
addLoadEvent(prepareForms);