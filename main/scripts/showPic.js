function showPic(whichpic) {
    //图片切换
    let source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute("src", source);
    //文本切换
    let text = whichpic.getAttribute('title');
    let description = document.getElementById('description');
    description.firstChild.nodeValue = text;
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
/*
function countBodyChildern(){
    let body_element  = document.getElementsByTagName('body')[0];
    alert(body_element.nodeValue);
}
window.onload= countBodyChildern;
*/