const tab = document.querySelectorAll(".tabheader__item");
const tabParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tab.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tab[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabParent.addEventListener("click", (event) => {
    const target = event.target;
    if(target.classList.contains("tabheader__item")){
        tab.forEach((item, i) => {
            if(target === item){
                console.log(i);
                hideTabContent();
                showTabContent(i);
                
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal);
console.log(modalTrigger);
console.log(closeModalBtn);

const showModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow="hidden";
};

modalTrigger.addEventListener("click", showModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow="";
};

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);


closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if(event.target === modal) {
        closeModal();
    }
})

let slideIndex = 0
const slidetime = () => {
    slideIndex++
    if(slideIndex > 3) {
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(slidetime, 1000)

openToScroll_End =()=> {
    window.addEventListener('scroll', () => {

            const documentHeight = document.documentElement.scrollHeight;

            const currentHeight = window.pageYOffset + document.documentElement.clientHeight;

            const isScrollEnd = Math.abs(documentHeight - currentHeight) < 10;

            if(isScrollEnd){
                openModal()

            }
        }
    )
}

window.addEventListener("scroll", openToScroll_End)

setTimeout(openModal,4000)