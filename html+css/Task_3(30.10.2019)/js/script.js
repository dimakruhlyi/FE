let canvas = document.getElementById("SmileyId");
 let context = canvas.getContext("2d");
 let cw=canvas.width;
 let ch=canvas.height;
 let rr=Math.min(cw,ch);
 let cx=rr/2;
 let cy=rr/2;
 //Circle
 context.fillStyle = "yellow";
 context.beginPath();
 context.arc(cx, cy, Math.floor(rr*0.25), 0, 2*Math.PI);
 context.closePath();
 context.fill();
 context.lineWidth = 2;
 context.stroke();
 context.fillStyle = "black";
 //Left eye
 context.beginPath();
 context.arc(Math.floor(rr*0.41), Math.round(rr*0.4), Math.round(rr*0.03), 0, 2*Math.PI);
 context.closePath();
 context.fill();
 //Right Eye
 context.beginPath();
 context.arc(Math.ceil(rr*0.59), Math.floor(rr*0.4), Math.round(rr*0.03), 0, 2*Math.PI);
 context.closePath();
 context.fill();
 //Mounth
 context.beginPath();
 context.arc(cx, Math.round(rr*0.52), Math.round(rr*0.13), Math.PI, 2*Math.PI, true);
 context.closePath();
 context.fill();

// ********************************************* Smooth Scroll
 $(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });
});