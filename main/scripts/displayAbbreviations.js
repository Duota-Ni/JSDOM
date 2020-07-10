function displayabbreviations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    //取得所有略缩词
    let abbreviations = document.getElementsByTagName("abbr");
    let abbrlen = abbreviations.length;
    if (abbrlen < 1) return false;
    let defs = new Array();
    //遍历这些略缩词
    for (let i=0; i < abbrlen; i++) {
        let current_abbr = abbreviations[i];
        //IE7的平稳退化
        if(current_abbr.childNodes.length<1) continue;

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
    if(dlist.childNodes.length<1) return false;

    //创建标题
    let header = document.createElement("h2");
    let header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    document.body.appendChild(dlist);
}
addLoadEvent(displayabbreviations);