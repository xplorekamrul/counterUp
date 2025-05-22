const count = document.querySelectorAll(".count")
const counterArray = Array.from(count)


counterArray.map((item)=>{
   let increment = (item.dataset.number)/20
   let dataset = (item.dataset.number)
   let startCount = 0 
   const counter = ()=>{
      startCount += increment
      item.innerHTML= startCount;

      if(startCount == dataset){
         clearInterval(stopCounter)
      }
   }

   const stopCounter = setInterval(()=>{
      counter();
   },100);

})