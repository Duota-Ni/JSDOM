function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
          try {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
          } catch (error) {} 
          try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (error) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (error) {} 
        return false;
        }
    }
    return new XMLHttpRequest();
}