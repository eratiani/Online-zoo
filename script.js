const logoHeader = document.querySelectorAll(".header__logo--text");
const navHeader = document.querySelector(".header__navigation--ul");
const nvigationHead = document.querySelector(".nav__logo__container");
const navFooter = document.querySelector(".footer__navigation--ul");
const burgerIcon = document.querySelector(".burger__container");
const overly = document.querySelector(".overly--black");
const body = document.querySelector("body");
const closeBtnBurger = document.querySelector(".img__x--continer");
//////////////////////// week1-2 ///////////////////////////////
overly.style.height = `${body.getBoundingClientRect().height}px`;

function overlyFunc() {
    window.addEventListener("resize", () => {
        overly.style.height = `${body.getBoundingClientRect().height}px`;
    });
}
function navFunction(){

    navHeader.addEventListener("click", (e) => {
        e.preventDefault();
        for (const iterator of e.currentTarget.children) {
            iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
        }
        if (e.target.textContent =="About") {
            window.location.href ="./index.html"
        } else if (e.target.textContent =="Map") {
            
        } else if (e.target.textContent == "Zoos") {
            
        } else if (e.target.textContent == "Donate") {
            window.location.href ="donate/index.html"
        }
        e.target.classList .add("highlight")
    });
    logoHeader.forEach((e) => {
        e.addEventListener("click", () => {
            window.location.href ="./index.html"
        });
    });
    navFooter.addEventListener("click", (e) => {
        e.preventDefault();
        for (const iterator of e.currentTarget.children) {
            iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
        }
        if (e.target.textContent =="About") {
            window.location.href ="./index.html"
        } else if (e.target.textContent =="Map") {
            
        } else if (e.target.textContent == "Zoos") {
            
        } else if (e.target.textContent == "Donate") {
            window.location.href ="donate/index.html"
        }
        e.target.classList .add("highlight")
    });
};
function burgerFun() {
    burgerIcon.addEventListener("click", () => {
        nvigationHead.style.display = "block";
        overly.classList.remove("none");
        overly.classList.add("block");
        console.log(closeBtnBurger);
        closeBtnBurger.classList.remove("none");
        closeBtnBurger.classList.add("block");
        console.log(closeBtnBurger);
    });
    overly.addEventListener("click", () => {
        nvigationHead.style.display = "none";
        overly.classList.remove("block")
        overly.classList.add("none")
    });
    closeBtnBurger.addEventListener("click", () => {
        nvigationHead.style.display = "none";
        overly.classList.remove("block")
        overly.classList.add("none")
    })
}
function carousel() {
    const containerCarousel = document.querySelector(".sec__three--cards")
    const rightBtn = document.querySelector(".section_three--button--right");
    const lefttBtn = document.querySelector(".section_three--button--left");
    const cardsArray = document.querySelectorAll(".sec__three--card");
   
    function clickFunc(e) {
        rightBtn.removeEventListener("click", clickFunc);
        const newCards = shuffler(cardsArray);
        containerCarousel.innerHTML=""
        newCards.forEach((e)=>{
            e.style.animationName = "carousel";
            e.style.animationDuration = "1s";
            
            containerCarousel.appendChild(e);
        });
        setTimeout(()=>{

            rightBtn.addEventListener("click", clickFunc);
        },1000);
    }
    function clickFuncLeft(e) {
        lefttBtn.removeEventListener("click", clickFuncLeft);
        const newCards = shuffler(cardsArray);
        containerCarousel.innerHTML=""
        newCards.forEach((e)=>{
            e.style.animationName = "carousel";
            e.style.animationDuration = "1s";
            
            containerCarousel.appendChild(e);
        });
        setTimeout(()=>{

            lefttBtn.addEventListener("click", clickFuncLeft);
        },1000);
    }
    rightBtn.addEventListener("click", clickFunc);
    lefttBtn.addEventListener("click", clickFuncLeft);
    function shuffler(nodelist) {
        const shuffledArr = Array.prototype.slice.call(nodelist, 0);
        return shuffledArr.sort(() => Math.random() - 0.5);
    }
}
overlyFunc();
navFunction();
burgerFun();
carousel();
//////////////////////// week1-2 ///////////////////////////////



