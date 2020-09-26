function main() {
  const drawing = document.getElementById('glcanvas');
    const gl = drawing.getContext('webgl');
    if (!gl) {
      alert("无法初始化WebGL，你的浏览器、操作系统或硬件等可能不支持WebGL。");
      return;
    }

    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(0,0,drawing.width/2,drawing.height/2);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.AEEAY_BUFFER,buffer)
    gl.bufferData(gl.AEEAY_BUFFER,new Float32Array([0,0.5,1]),gl.STATIC_DRAW)

}
main();
