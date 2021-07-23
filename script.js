var birthday = document.querySelector(".date");
var number = document.querySelector(".number");
var btn = document.querySelector(".check");
var result = document.querySelector(".res");
var img1 = document.getElementById('lucky'); 
var lucky=0;

function checkIfLucky(){
    var sum=0;
    var dateinput = birthday.value;
    var numberinput = number.value;
    console.log(dateinput);
    console.log(numberinput);

    var last = Math.trunc(dateinput%10);
    var first = Math.trunc(dateinput/10);

    sum = first+last;

    if(sum%numberinput==0)
    {
        lucky=1;
        result.innerText = "You are lucky !!";
        GFG_Fun();
       
    }
    else{
        GFG_Fun();
        result.innerText = "Well!! sorry, not solucky";
    }

}

var styles = {
    "width":"90%",
    "height":"30%",
    "padding-left":"5%"
};

function GFG_Fun() {
    if(lucky===1)
    {
    var img = new Image();
    img.src = 'lucky.png';
    var obj = document.getElementById('body').appendChild(img);
    Object.assign(obj.style,styles);
    }
   
    else{
        var img = new Image();
        img.src = 'unlucky.png';
        var obj = document.getElementById('body').appendChild(img);
    Object.assign(obj.style,styles);
    }
    
    
} 

btn.addEventListener("click",checkIfLucky);
