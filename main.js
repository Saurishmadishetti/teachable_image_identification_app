Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
}); 
var camera=document.getElementById("camopen");
Webcam.attach("#camopen");
function take_snapshot(){
    Webcam.snap(function (data_uri){
      document.getElementById("result").innerHTML="<img id='result_img' src='" + data_uri + "'>";
    });
}
console.log(ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sQumrs5u8/model.json",modelLoaded);
    function modelLoaded(){
    console.log("model is loaded");
    } 
function check_image(){
    img=document.getElementById("result_img");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("object_name_dis").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}