function scrollToTop() {
    let span = document.querySelector(".scroll-to-top");

    window.onscroll = function() {
        this.scrollY >= "700" ? span.classList.add("show") : span.classList.remove("show");
    }
    span.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    })
}

window.onscroll = function() {
    scrollToTop();
}

// elements filter 
// elements.forEach(ele => {
//     ele.addEventListener("click", (e) => {
//         setActiveClassToElemet(elements, e.target);
//     });
// });

let elements = document.querySelectorAll(".our-work ul li");
let imgs = Array.from(document.querySelectorAll(".our-work .box"));
let holders = Array.from(document.querySelectorAll(".our-work .row > div"));
elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        setActiveClassToElemet(elements, e.target);
        filterImg(e.target, imgs, holders);
    });
});

function filterImg(ele, imgs, holders) {
    imgs.forEach((img, index) => {
        // console.log(img.childNodes[1].classList);
        img.childNodes[1].classList.contains(ele.getAttribute("data-cat")) ? holders[index].style.display = "block" : holders[index].style.display = "none";
    })
}

// nav bar links 
let links = document.querySelectorAll(".navbar ul li a");

links.forEach(ele => {
    ele.addEventListener("click", (e) => {
        setActiveClassToElemet(links, e.target);
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function setActiveClassToElemet(list, e) {
    list.forEach((ele) => {
        ele.classList.remove("active", "rounded-pill");
    })
    e.classList.add("active", "rounded-pill");
}

// images box
let ourWork = document.querySelectorAll(".our-work .box");
let team = document.querySelectorAll(".team .box");
let blog = document.querySelectorAll(".blog .card");

ourWorkBoxImages(ourWork);
teamBoxImages(team);
teamBoxImages(blog);

function ourWorkBoxImages(images) {
    images.forEach((img) => {
        img.addEventListener("click", (ele) => {
            // create overlay
            let popupOverlay = document.createElement("div");
            popupOverlay.className = "popup-overlay";
            // create pupot to hold the image
            let popupBox = document.createElement("div");
            popupBox.className = "popup-box";
            // create imgae with scr
            let image = document.createElement("img");
            image.src = ele.target.childNodes[1].src;

            if (ele.target.childNodes[1].alt !== "" || ele.target.childNodes[1].alt !== null) {
                let title = document.createElement("h3");
                title.textContent = ele.target.childNodes[1].alt;
                popupBox.appendChild(title);
            }

            // console.log(title);
            popupBox.appendChild(image);
            popupOverlay.appendChild(popupBox);
            document.body.appendChild(popupOverlay);

            let closeBtn = document.createElement("span");
            closeBtn.className = "close-button";
            closeBtn.textContent = "x";
            popupBox.appendChild(closeBtn);
        })
    })
}

function teamBoxImages(images) {
    images.forEach((img) => {
        img.addEventListener("click", (ele) => {
            // create overlay
            let popupOverlay = document.createElement("div");
            popupOverlay.className = "popup-overlay";
            // create pupot to hold the image
            let popupBox = document.createElement("div");
            popupBox.className = "popup-box";
            // create imgae with scr
            let image = document.createElement("img");
            image.src = ele.target.src;

            if (ele.target.alt !== "" || ele.target.alt !== null) {
                let title = document.createElement("h3");
                title.textContent = ele.target.alt;
                popupBox.appendChild(title);
            }

            // console.log(title);
            popupBox.appendChild(image);
            popupOverlay.appendChild(popupBox);
            document.body.appendChild(popupOverlay);

            let closeBtn = document.createElement("span");
            closeBtn.className = "close-button";
            closeBtn.textContent = "x";
            popupBox.appendChild(closeBtn);
        })
    })
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-button")) {
        document.querySelector(".popup-overlay").remove();
    }
})

// footer
footerLinks = document.querySelectorAll(".footer .links a");

footerLinks.forEach(ele => {
    ele.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target.dataset.section);
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});