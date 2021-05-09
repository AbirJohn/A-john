window.addEventListener("load",() =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".Home-section").classList.add("active");

    //page Loader-----------------------------------------
    document.querySelector(".page-loader").classList.add("fade-out");

    setTimeout(()=>{
        document.querySelector(".page-loader").style.display="none";
    },1000);
});






/*========================================
Toggle NAVBER part
=========================================*/
const navToggler =document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    hidescetion();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hidescetion(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector("header").classList.toggle("active");
}
/*========================================
Toggle NAVBER part
=========================================*/

/*========================================
Active Scetion Tab Part
=========================================*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item")&& e.target.hash !== ""){
        //active Olverly To Prevent Maltipull  clicks
        document.querySelector(".overly").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hidescetion();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout( () =>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector("overly").classList.remove("active");
        },500);
    }
});





/*========================================
Active Scetion Tab Part
=========================================*/


/*========================================
About Scetion Tab Part
=========================================*/
const tabcontainer = document.querySelector(".about-tabs"),
    aboutScetion = document.querySelector(".about-section");
tabcontainer.addEventListener("click",(e) =>{
    if(e.target.classList.contains("teb-item") && !e.target.classList.contains("active")){
        tabcontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");

        let a = document.querySelectorAll('.tab-content')
        var i;
        for(i = 0; i < a.length; i++){
        	a[i].classList.remove('active');
        }
        
        document.querySelector(target).classList.add('active');

    }
});

/*========================================
About Scetion Tab Part
=========================================*/


/*========================================
Portfolio-item Popup details part
=========================================*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        toggleportfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemdetails(e.target.parentElement);
    }
})
function toggleportfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",toggleportfolioPopup);

/*========================================
hide Portfolio-item when Click then Show
=========================================*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains(".pp-inner")){
        toggleportfolioPopup();
    }
});
/*========================================
hide Portfolio-item when Click then Show
=========================================*/

function portfolioItemdetails(portfolioitem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioitem.querySelector(".portfolio-item-thumbnil img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioitem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioitem.querySelector(".portfolio-item-details").innerHTML;
}
/*========================================
Portfolio-item Popup details part
=========================================*/
