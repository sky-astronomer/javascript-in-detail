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