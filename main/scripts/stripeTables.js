function stripeTables() {
    if (!document.getElementsByTagName) return false;
    let tables = document.getElementsByTagName("table");
    let odd, rows;
    for (let i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        console.log(rows);
        for (let j = 0; j < rows.length; j++) {
            if (odd == true) {
                //rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd");
                odd = false;
            } else {
                odd = true;
            }
        }
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
addLoadEvent(stripeTables);