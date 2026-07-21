function checkdatatypes() {
    document.getElementById("A").innerText="score 0 -type:"+typeof 0+"\n"+"highscore onethousand    -type"+typeof "onethousand"+"\n"+"leastscore true -type"+typeof true;
}
function typeconversion() {
    var numberstore=document.getElementById("B").value;
    document.getElementById("C").innerHTML="the original datatype is "+typeof numberstore+"\n"+String(numberstore)+"the new datatype is "+typeof numberstore;
}
function errorhandling() {
    try{
        var accessability=document.getElementById("D").value;
        if(accessability==""){
            throw "enter a number";
        }
    }catch(err){
        document.getElementById("E").innerHTML="17 divide"+accessability+"="+(17/Number(accessability));
    }
}
function find() {
    var numbers= [5, 10, 15, 20, 25, 30];
    var appear = numbers.find((element) => element > 15);
    console.log=(found);
    document.getElementById("F").value;
}
function swap(){
    var a = document.getElementById("G").value;
    var b= [cat];
    var c=[a,b] = [b,a];
}