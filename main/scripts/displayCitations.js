function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    //取得所有引用
    let quotes = document.getElementsByTagName("blockquote");
    //遍历引用
    for (let i = 0; i < quotes.length; i++) {
        //如果没有cite属性，跳到下一次循环，不再执行本次循环的语句
        if (!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        let url = quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        let quotesChildren = quotes[i].getElementsByTagName('*');
        //如果没有元素节点继续循环
        if (quotesChildren.length < 1) continue;
        //取得引用中最后一个元素节点
        let elem = quotesChildren[quotesChildren.length - 1];
        //创建标记
        let link = document.createElement("a");
        let link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        let superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用的最后一个元素
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);