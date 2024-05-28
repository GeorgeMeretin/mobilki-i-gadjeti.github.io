const body1 = document.querySelector('body');
const divs = document.getElementsByTagName('div');
const vectorPics = document.getElementsByClassName("vectorPic");
const rects = document.getElementsByClassName('header2rects');

const header2 = document.getElementById("header2");
const main3bodyBoxes = document.getElementsByClassName("main3bodyBox");
const main4boxPic = document.getElementById("main4boxPic");
const main5keyword = document.getElementById("main5keyword");
const main5box = document.getElementById("main5box");
const footerStyle = document.getElementById("footerStyle");
// const main2bodyBoxes = document.getElementsByClassName("main2bodyBox");


const body1_backgroundColor = body1.style.backgroundColor;
const divs_color = divs[0].style.color;
//const vectorPics_src = vectorPics[0].src;
const rects_backgroundColor = rects[0].style.backgroundColor;

const header2_backgroundColor = header2.style.backgroundColor;
const main3bodyBoxes_backgroundColor = main3bodyBoxes[0].style.backgroundColor
const main4boxPic_filter = main4boxPic.style.filter;
const main5keyword_backgroundColor = main5keyword.style.backgroundColor;
const main5box_backgroundColor = main5box.style.backgroundColor;
const footerStyle_backgroundColor = footerStyle.style.backgroundColor;



let curSiteTheme = "Light";
const californiaButton = document.getElementById("californiaButton");
const darkColorLight = "#1f1f1f";
const darkColorDark = "#181818";
const lightColor = "#959a9c";



californiaButton.addEventListener('click', 
    function(){
        if (curSiteTheme == "Light"){
            curSiteTheme = "Dark";
            
            body1.style.backgroundColor = darkColorLight;
            for (let div1 of divs) {
                div1.style.color = lightColor;
            }
            for (let vectorPic of vectorPics){
                vectorPic.src = vectorPic.src.slice(0, vectorPic.src.length - 4) + "Light.svg";
            }
            for (let rect of rects){
                rect.style.backgroundColor = lightColor;
            }
            
            header2.style.backgroundColor = darkColorDark;
            for (let main3bodyBox of main3bodyBoxes) {
                main3bodyBox.style.backgroundColor = darkColorDark;
            }
            main4boxPic.style.filter = "brightness(50%)";
            main5keyword.style.backgroundColor = darkColorDark;
            main5box.style.backgroundColor = darkColorDark;
            footerStyle.style.backgroundColor = darkColorDark;

            // for (let main2bodyBox of main2bodyBoxes){
            //     main2bodyBox.style.backgroundColor = darkColorDark;
            // }
        }
        
        else if (curSiteTheme == "Dark"){
            curSiteTheme = "Light";
            
            body1.style.backgroundColor = body1_backgroundColor;
            for (let div1 of divs) {
                div1.style.color = divs_color;
            }
            for (let vectorPic of vectorPics){
                vectorPic.src = vectorPic.src.slice(0, vectorPic.src.length - 9) + ".svg";
            }
            for (let rect of rects){
                rect.style.backgroundColor = rects_backgroundColor;
            }
            
            header2.style.backgroundColor = header2_backgroundColor;
            for (let main3bodyBox of main3bodyBoxes) {
                main3bodyBox.style.backgroundColor = main3bodyBoxes_backgroundColor;
            }
            main4boxPic.style.filter = main4boxPic_filter;
            main5keyword.style.backgroundColor = main5keyword_backgroundColor;
            main5box.style.backgroundColor = main5box_backgroundColor;
            footerStyle.style.backgroundColor = footerStyle_backgroundColor;

            // for (let main2bodyBox of main2bodyBoxes){
            //     main2bodyBox.style.backgroundColor = "white";
            // }
        }
    }
)


/// анимации при скролле

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for (let animItem of animItems) {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem);

            let animItemPoint = window.innerHeight - animItemHeight;
            if (animItemHeight > window.innerHeight){
                animItemPoint = 0;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && (window.pageYOffset < animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }else{
               // animItem.classList.remove('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    animOnScroll();
}