var birthday = document.querySelector(".date");
var number = document.querySelector(".number");
var btn = document.querySelector(".check");
var result = document.querySelector(".res");
var luckyimage = document.querySelector('.img1'); 
var unluckyimage = document.querySelector('.img2'); 
var lucky=0;

luckyimage.style.display = "none";
unluckyimage.style.display = "none";


btn.addEventListener("click",checkIfLucky);

function checkIfLucky(){
    
    
    const dateinput = birthday.value;
    const sum = calculatesum(dateinput);
    console.log(sum);

    const numberinput = number.value;
    if(sum%numberinput==0)
    {
        lucky=1;
        result.innerText = "You are lucky !!";
        display();
       
    }
    else{
        display();
        result.innerText = "Well!! sorry, not solucky";
    }

}

function calculatesum(bdate)
{
   bdate = bdate.replaceAll("-","");
   var sum=0;
   for(let i=0;i<bdate.length;i++)
   {
       sum = sum+ Number(bdate.charAt(i));
   }
  return sum;


}


function display() {
    if(lucky===1)
    {
    luckyimage.style.display = "block";
    }
   
    else{
        unluckyimage.style.display = "block";
    }
    
    
} 

