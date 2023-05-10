status = "";

function preload()
{
    img = loadImage('download.jpg');
}

function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw()
{
    image(img , 0 , 0 , 640 , 420);
    fill("#0dd6d6");
    text("Fruits" , 45, 75);
    noFill();
    stroke("#0dd6d6");
    rect(30 , 60 , 450 , 350);
}
function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

