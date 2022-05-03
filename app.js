let inCm=document.querySelector(".txtfield");
const convert=document.querySelector(".convert");
let result= document.querySelector(".result");

   function feet(){
    let inp1=inCm.value;
    let calc=inp1/30.48
    let inft=Math.floor(calc);
    let deci=(calc%1)*12;
let inches=deci.toFixed(0);
if(inp1<0||inp1==0){
   result.innerHTML=`<p> Enter a valid height!! </p>`
}
  else{result.innerHTML= `<p> Your height in feet and inches is ${inft}'${inches} </p>`}
   };
convert.addEventListener("click",function(){
 feet()
})


