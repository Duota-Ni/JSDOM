function createVideoControls(){
    let vid = document.getElementsByTagName("video");
    for(let i = 0; i<vid.length ; i++ ){
        addControls(vid[i]);
    }
}
function addControls(vid){
    vid.removeAttribute("controls");

    let height = vid.videoHeight;
    let width = vid.videoWidth;
    vid.parentNode.style.height = height+"px";
    vid.parentNode.style.width = width+"px";

    let controls = document.createElement("div");
    controls.setAttribute("class","controls");

    let play = document.createElement("button");
    play.setAttribute("title","play");
    play.innerHTML = "&#x25BA";

    controls.appendChild(play);

    vid.parentNode.insertBefore(controls,vid);

    play.onclick = function(){
        if(vid.ended){
            vid.currentTime = 0;
        }
        if(vid.paused){
            vid.play();
        }else{
            vid.pause();
        }
    };

    vid.addEventListener('play',function(){
        play.innerHTML = '&#x2590;&#x2590;';
        play.setAttribute('paused',true);
    },false);

    vid.addEventListener('pause',function(){
        play.removeAttribute('paused');
        play.innerHTML = '&#x25BA;';
    },false);

    vid.addEventListener('ended',function(){
        vid.pause();
    },false);
}

window.onload = function(){
    createVideoControls();
}