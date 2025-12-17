const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


    function page3Animation(){
          var imgcontainer= document.querySelector(".elementcontainer")
var fixedimg= document.querySelector(".fixed")
imgcontainer.addEventListener('mouseenter',function(){
     fixedimg.style.display="block"
})
imgcontainer.addEventListener('mouseleave',function(){
     fixedimg.style.display="none"
})

     var elems= document.querySelectorAll(".element")
        elems.forEach(function(ele){
            ele.addEventListener('mouseenter',function(){
                var img = ele.getAttribute("data-image")
                     fixedimg.style.backgroundImage=`url(${img})`
                })
        })
    }
    page3Animation();
    function swiperanimation() {
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
    });
    }
    swiperanimation();

    function menuanimation(){
     
    var navmenu = document.querySelector(".menu");
    var scrn = document.querySelector(".fullscrn");
     var navimg = document.querySelector("nav img");
     var flag=0;
    navmenu.addEventListener('click',function(){
     if (flag==0) {
           scrn.style.top=0;
            navimg.style.opacity=0;
            flag=1;
     }
     else{
          scrn.style.top="-100%";
            navimg.style.opacity=1;
            flag=0; }
    })
    }
     menuanimation();

     var loader = document.querySelector(".loader");
     setTimeout(() => {
          loader.style.top="-100%";
     }, 4000);