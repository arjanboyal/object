function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detection Objects";
}
img="";
status="";
function preload(){

}
function draw(){

    image(video, 0, 0, 380, 380);
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video, gotResult);
        for (i=0;i<objects.length; i++){
            document.getElementById("number_of_objects").innerHTML="Number of objects detected are";
            document.getElementById("status").innerHTML="status:Object Detection";
            fill(r,g,b);
    fill("#FF0000");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+""+percent+"4",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results){
if (error){
    console.log(error);
}
console.log(results);
}