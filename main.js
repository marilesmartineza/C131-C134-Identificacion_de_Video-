img = "";
objects = [];

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide(); 
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Estatus: DETECTANDO OBJETOS";
}

function modelLoaded() {
    console.log("Modelo cargado");
    status=true;
}

function gotResult(error,results) {
    if (error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video,0,0,400,400);
    if(status !="") {


        objectDetector.detect(video,gotResult);

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Estatus: objeto detectado";
            document.getElementById("number_objects").innerHTML = "Número de objetos detectados:" + objects.length;

            r=random(225); 
            g=random(225); 
            b=random(225); 

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);        
        }
    }
}


function prueba() {
    window.alert("Buenas buenaaaas genteeee  ♪⁠ヽ⁠(⁠･⁠ˇ⁠∀⁠ˇ⁠･⁠ゞ⁠)");
  }
