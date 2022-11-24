const logoHeader = document.querySelectorAll(".header__logo");
const navHeader = document.querySelector(".header__navigation--ul");
const navFooter = document.querySelector(".footer__navigation--ul");
//////////////////////// week1-2 ///////////////////////////////
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
navFunction();
//////////////////////// week1-2 ///////////////////////////////



