function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    //取得文档中所有链接
    let links = document.getElementsByTagName("a");
    //创建一个数组保存访问键
    let akeys = new Array();
    //遍历链接
    for (let i = 0; i < links.length; i++) {
        let current_link = links[i];
        //如果没有accesskey属性，继续循环
        if (!current_link.getAttribute("accesskey")) continue;
        //取得accesskey的值
        let key = current_link.getAttribute("accesskey");
        //取得链接文本
        let text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    }
    //创建列表
    let list = document.createElement("ul");
    //遍历访问键
    for (key in akeys) {
        let text = akeys[key];
        //创建放到列表项的字符串
        let str = key + ": " + text;
        //创建列表项
        let item = document.createElement("li");
        let item_text = document.createTextNode(str);
        item.appendChild(item_text);
        //把列表项添加到表中
        list.appendChild(item);
    }
    //创建标题
    let header = document.createElement("h3");
    let header_text = document.createTextNode("Accesskey");
    header.appendChild(header_text);
    //把标题和列表项放到body
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);