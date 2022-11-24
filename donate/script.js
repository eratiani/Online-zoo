const logoHeader = document.querySelectorAll(".header__logo");
const navHeader = document.querySelector(".header__navigation--ul");
const navFooter = document.querySelector(".footer__navigation--ul");
const secTwoRadio = document.querySelector(".section__two__radio--container");
//////////////////////// week1-2 ///////////////////////////////
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
            e.target.classList.add("radio__active")
            e.target.nextElementSibling.classList.add("highlight")
        }
    });
};
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
        for (const iterator of e.currentTarget.children) {
            iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
        }
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
console.log(window.innerWidth);
radioBtnFunc();
navFunc();
//////////////////////// week1-2 ///////////////////////////////
