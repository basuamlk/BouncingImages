window.addEventListener("load",()=>{
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");   
    // images = document.querySelectorAll(".image");
    const imgs = ["Dodge.jpg","fetsquirrel.jpg","what it looks like.jpg","Atem.jpg","BatmanBeyond.jpg","brandoncaught.jpg"]
    pads.forEach((pad,index) =>{
        pad.addEventListener('click',function(){
            // var img = document.createElement('img');
            // img.setAttribute('src',imgs);   
            createBubbles(index);
        });
    });
    const createBubbles =(index) =>{
        const bubbles = document.createElement("img");
        bubbles.setAttribute('src',imgs[index]);
        bubbles.setAttribute('class','rounded-corners');
        visual.appendChild(bubbles);
        bubbles.style.animation = "jump 1s ease";
        bubbles.addEventListener("animationend",function(){
            visual.removeChild(this);
        }
        )};
});