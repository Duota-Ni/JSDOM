/*
此处只有Microsoft Edge可以访问，firefox\IE\Chrome出现
Cross-Origin Request Blocked:
 The Same Origin Policy disallows reading the remote resource at
  file:///C:/Users/duota/Desktop/self-taught/test%20font-end/JSDOM/main/example.txt. 
  (Reason: CORS request not http)
*/
function getNewContent(){
    let request = getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                let para = document.createElement("p");
                let txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("Sorry, your brouses doesn\'t support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent)