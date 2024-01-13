 function fun(){
 var randomNumber1=Math.floor(Math.random()*6)+1;
  var source1 = "./dice"+randomNumber1+".png";
  var b= document.querySelectorAll("img")[0].setAttribute("src",source1);
 var randomNumber2=Math.floor(Math.random()*6)+1;
  var source2 = "./dice"+randomNumber2+".png";
  var b= document.querySelectorAll("img")[1].setAttribute("src",source2);
   if ( randomNumber1 > randomNumber2)
   {
      document.querySelector('h1').textContent="🚩Player 1 wins !";
      
   }
   else if ( randomNumber1< randomNumber2)
   {
      document.querySelector('h1').textContent=" 🚩 Player 2 wins !";

   }
   else 
   {
      document.querySelector('h1').textContent="✨Draw !"
   }}
   function refresh(){
      location.reload();

   }