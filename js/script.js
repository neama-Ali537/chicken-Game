let buletContainer = document.querySelector(".bulet-container");
let bullet = document.querySelector(".bullet");
let rocket = document.querySelector(".rocket");
let chicken = document.querySelector(".chicken");
let counterLeft = 0;
let counterBottom = 0;
let chikenDiv = document.querySelector('.chiken-div')

for (let i = 0; i < 10; i++) {

  let img = document.createElement('img');
  img.className='chicken';
  img.src=("./css/imgs/chicken.png");
 
  chikenDiv.appendChild(img)

    
  }
document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowLeft" ) {
    counterLeft -= 50;
    buletContainer.style.left = counterLeft + "px";
 
   
  } else if (e.code === "ArrowRight") {
    counterLeft += 50;
    buletContainer.style.left = counterLeft + "px";
  } else if (e.code === "ArrowUp") {
  
    counterBottom -= 50;
    buletContainer.style.top = counterBottom + "px";
  } else if (e.code === "ArrowDown") {
    counterBottom += 50;
    buletContainer.style.top = counterBottom + "px";
  } else if (e.code === "Space") {
  
    let bulletTop = 0;
    bullet.style.opacity = 1;
    bulletTop -= 300;
    bullet.style.top = bulletTop + "px";

    chikenDiv.style.opacity=0
    setTimeout(()=>{
      chikenDiv.style.opacity=1
    },1000)
  }
   
});
