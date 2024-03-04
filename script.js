gsap.from('#nscroll', {
    scrollTrigger:{
        trigger:'body',
        scrub:true,
        start:'50% 50%',
        end:'100% 50%'
     }, 
    x:"-100%"
});

gsap.from('.box-about h2', {
    scrollTrigger:{
        trigger:'body',
        scrub:true,
        start:'80% 50%',
        end:'150% 50%'
     }, 
    opacity:0,
    delay:3,
    duration:3
});

gsap.from('.dev img,.des img', {
    scrollTrigger:{
        trigger:'body',
        scrub:true,
        start:'220% 50%',
        end:'230% 50%'
     }, 
    opacity:0,
    delay:3,
    duration:3
});

gsap.from('.foot-box', {
    scrollTrigger:{
        trigger:'body',
        scrub:true,
        start:'180% 50%',
        end:'220% 50%'
     }, 
     opacity:0,
     delay:3,
     duration:3,
     x:-300
});


let btnresume=document.querySelector(".btnresume");

btnresume.addEventListener("click",function(){
    alert("Sorry for your request !! It will be updated soon....")
})

let cursorpoint=document.querySelector('body');

let cursor=document.querySelector('.cursor');

cursorpoint.addEventListener("mousemove",function(e){
    cursor.style.left=e.pageX+"px";
    cursor.style.top=e.pageY+"px";
})