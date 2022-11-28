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
overlyFunc();
navFunction();
burgerFun();
//////////////////////// week1-2 ///////////////////////////////



