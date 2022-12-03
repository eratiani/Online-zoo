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

function overlyFunc(element) {
    window.addEventListener("resize", () => {
        element.style.height = `${body.getBoundingClientRect().height}px`;
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
function popup() {
    const container = document.querySelector(".section__five--content--cards");
    const overlay = document.querySelector(".section__five--overlay--dark");
    const popup = document.querySelector(".section__five--popup");
    
    overlay.style.height = `${body.getBoundingClientRect().height }px`;
    console.log(overlay.getBoundingClientRect().height);
    overlyFunc(overlay);
    container.addEventListener("click", (e)=>{
        popup.classList.remove("none");
        popup.classList.add("block");
        popup.innerHTML = `
        <div class="section__five--content--card--two">
                <div class="section__five--content--card--img--x">
                                <img src="assets/images/x_icon2.png" alt="x" class="section__five--content--card--img--x--img">
                    </div>
                    <div class="section__five--content--card--img--text--two">
                        <div class="section__five--content--card--img--wrapper--two">
                            <img src="assets/images/user_icon.png" alt="picture" class="section__five--content--card--img--two">
                        </div>
                        <div class="section__five--content--card--text--two">
                            <h4 class="section__five--content--card--name--two">Michael John </h4>
                            <p class="section__five--content--card--location--two">Local Austria <span class="section__five--content--card--location--dot--two">
                                &#183;
                            </span> <span class="section__five--content--card--location--date--two">Today</span></p>
                        </div>
                    </div>
                    <p class="section__five--content--card--description--two">The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                        The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
                        </p>
                </div>
        `
        overlay.classList.remove("none");
        overlay.classList.add("block");
        const closeBtn = document.querySelector(".section__five--content--card--img--x");
        closeBtn.addEventListener("click", ()=>{
            overlay.classList.remove("block");
            overlay.classList.add("none");
            popup.classList.remove("block");
            popup.classList.add("none");
        });
    });
    overlay.addEventListener("click",()=>{
        overlay.classList.remove("block");
        overlay.classList.add("none");
        popup.classList.remove("block");
        popup.classList.add("none");
    });
    
}
if(body.getBoundingClientRect().width<=640) {
    popup();

};
window.addEventListener("resize", () => {
    if(body.getBoundingClientRect().width<=640) {
        popup();

    };
});
function rangeSlider() {
    const rangeSlider = document.querySelector(".slider");
    let i = 0;
    rangeSlider.addEventListener("input", (e)=>{
            i++
                    const postArr = document.querySelectorAll(".section__five--content--card");
                    const newArr = Array.from(postArr);
            
                orderer(newArr, e.currentTarget.value)

                newArr.forEach((e)=>{
                    e.style.animation = "carousel 1s infinite";
                    e.style.animationPlayState = "running";
                    setTimeout(() => {
                        e.style.animationPlayState = "paused";
                    }, 1001);
                });
                // let first = newArr.shift();
                // newArr.push(first)
                // console.log(newArr);
        });
        function orderer(array, eventVal){
            array.forEach((e, i)=>{
                if (i<eventVal) {
                    
                    e.style.order=`${i+1}`
                } else {
                    e.style.order=`${1-10}`
                }
                
            });
            
        }
    }

overlyFunc(overly);
navFunction();
burgerFun();
carousel();
rangeSlider();
//////////////////////// week1-2 ///////////////////////////////



