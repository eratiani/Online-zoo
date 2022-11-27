const logoHeader = document.querySelectorAll(".header__logo--text");
const navHeader = document.querySelector(".header__navigation--ul");
const nvigationHead = document.querySelector(".nav__logo__container");
const navFooter = document.querySelector(".footer__navigation--ul");
const secTwoRadio = document.querySelector(".section__two__radio--container");
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
function radioBtnFunc() {
    if(window.innerWidth<=375){
       const radioOne = document.getElementById("1000");
       const radioTwo = document.getElementById("100");
       radioOne.classList.remove("radio__active");
       radioOne.nextElementSibling.classList.remove("highlight");
       radioTwo.classList.add("radio__active");
       radioTwo.nextElementSibling.classList.remove("highlight");
    }
    secTwoRadio.addEventListener("click", (e) => {
        if (e.target.matches("input")) {
            for (const [index,value] of [...secTwoRadio.children].entries()) {
                if (index>1) {
                    if (value.children[0].classList.contains("radio__active")) {
                        value.children[0].classList.remove("radio__active");
                        value.children[1].classList.remove("highlight");
                    }
                }
                
            }
            const radioVal = e.target.nextElementSibling.textContent.match(/\d/g).join("")
            document.querySelector(".section__two__amount").value= radioVal
            e.target.classList.add("radio__active")
            e.target.nextElementSibling.classList.add("highlight")
        }
    });
};
function inputFunc() {
    function elementFunc(e, input) {
        
        e.forEach((element) => {
            element.children[0].classList.contains("radio__active") ? element.children[0].classList.remove("radio__active") : "do nothing";
            element.children[1].classList.contains("highlight") ? element.children[1].classList.remove("highlight") : "do nothing";
        });
        const inputEl = document.getElementById(`${Number(input.value)}`)
        if (inputEl !== null) {
            inputEl.classList.add("radio__active");
            inputEl.parentElement.children[1].classList.add("highlight");
        }
    }
    const input = document.querySelector(".section__two__amount");
    input.addEventListener("input", () => {
        const element = document.querySelectorAll(".section__two__radio");
        if (Number(input.value) >= 10000 ) {
            input.value = 0;
        } else if (Number(input.value) === 5000) {
            elementFunc(element, input);
            
        } else if (Number(input.value) === 2000) {
            elementFunc(element, input);
        } else if (Number(input.value) === 1000) {
            elementFunc(element, input);
        } else if (Number(input.value) === 500) {
            elementFunc(element, input);
        } else if (Number(input.value) === 250) {
            elementFunc(element, input);
        } else if (Number(input.value) === 100) {
            elementFunc(element, input);
        } else if (Number(input.value) === 50) {
            elementFunc(element, input);
        } else {
            elementFunc(element, input);
        }
    })
}
function highlightRemFunc(e) {
    for (const iterator of e.currentTarget.children) {
        iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
    }
}
function navFunc(){
    navHeader.addEventListener("click", (e) => {
        e.preventDefault();
        for (const iterator of e.currentTarget.children) {
            iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
        }
        if (e.target.textContent == "About") {
            e.target.classList .add("highlight")
            window.location.href = "../index.html"
            
        } else if (e.target.textContent =="Map") {
            e.target.classList .add("highlight")
        } else if (e.target.textContent == "Zoos") {
            e.target.classList .add("highlight")
        } else if (e.target.textContent == "Donate") {
            e.target.classList .add("highlight")
            window.location.href ="index.html"
        }
        
    });
    logoHeader.forEach((e) => {
        e.addEventListener("click", () => {
            window.location.href ="../index.html"
        });
    });
    navFooter.addEventListener("click", (e) => {
        e.preventDefault();
        highlightRemFunc(e);
        if (e.target.textContent =="About") {
            window.location.href ="../index.html"
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
        overly.classList.remove("none")
        overly.classList.add("block")
        closeBtnBurger.classList.remove("none")
        closeBtnBurger.classList.add("block")
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
radioBtnFunc();
navFunc();
inputFunc();
overlyFunc();
burgerFun();
//////////////////////// week1-2 ///////////////////////////////
