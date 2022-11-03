const logoHeader = document.querySelectorAll(".header__logo");
const navHeader = document.querySelector(".header__navigation--ul");
// const navFooter = document.querySelector(".footer__navigation--ul");

navHeader.addEventListener("click", (e) => {
    e.preventDefault();
    for (const iterator of e.currentTarget.children) {
        iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
    }
    console.log(e.target);
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
    
})
logoHeader.forEach((e) => {
    e.addEventListener("click", () => {
        window.location.href ="../index.html"
    });
})
// navFooter.addEventListener("click", (e) => {
//     e.preventDefault();
//     for (const iterator of e.currentTarget.children) {
//         console.log(iterator);
//         iterator.children[0].classList .contains("highlight")? iterator.children[0].classList.remove("highlight"):"do nothing"
//     }
//     if (e.target.textContent =="About") {
//         window.location.href ="./index.html"
//     } else if (e.target.textContent =="Map") {
        
//     } else if (e.target.textContent == "Zoos") {
        
//     } else if (e.target.textContent == "Donate") {
//         window.location.href ="donate/index.html"
//     }
//     e.target.classList .add("highlight")
// })