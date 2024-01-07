function dropDownOn () {
    const mobileMenu = document.querySelector(".mobileMenu");

    while (mobileMenu.hasChildNodes()) {
        mobileMenu.removeChild(mobileMenu.firstChild)
    }

    const closeButton = document.createElement("div");
    closeButton.classList.add("closeBtn")
    closeButton.addEventListener("click", dropDownOff);
    mobileMenu.appendChild(closeButton);

    const dropDownDiv = document.querySelector(".dropDownDiv");
    dropDownDiv.classList.toggle("invisible");
}

function dropDownOff () {
    const mobileMenu = document.querySelector(".mobileMenu");

    while (mobileMenu.hasChildNodes()) {
        mobileMenu.removeChild(mobileMenu.firstChild)
    }

    const openButton = document.createElement("div");
    openButton.classList.add("openBtn")
    openButton.addEventListener("click", dropDownOn);
    mobileMenu.appendChild(openButton);

    const dropDownDiv = document.querySelector(".dropDownDiv");
    dropDownDiv.classList.toggle("invisible");
}

function createMobileMenu () {
    const nav = document.querySelector("nav");

    while (nav.hasChildNodes()) {
        nav.removeChild(nav.firstChild)
    }

    nav.classList.add("navSticky")
    
    const mobileMenu = document.createElement("div");
    mobileMenu.classList.add("mobileMenu");
    nav.appendChild(mobileMenu);

    const openButton = document.createElement("div");
    openButton.classList.add("openBtn")
    openButton.addEventListener("click", dropDownOn);
    mobileMenu.appendChild(openButton);

    const dropDownDiv = document.createElement("div");
    dropDownDiv.classList.add("dropDownDiv");
    dropDownDiv.classList.add("invisible");
    nav.appendChild(dropDownDiv);

    for (let i = 1; i <= 3; i++) {
        const holderDiv = document.createElement("div");
        holderDiv.classList.add("holderDiv");
        dropDownDiv.appendChild(holderDiv);

        const link = document.createElement("a");
        holderDiv.appendChild(link);

        switch (i) {
            case 1: 
                link.textContent = "About";
                link.setAttribute("href", "#aboutMe")
                break;
            case 2: 
                link.textContent = "Projects";
                link.setAttribute("href", "#myWork")
                break;
            case 3:
                link.textContent = "Contact Me";
                link.setAttribute("href", "#contactMe")
                break;
        }

    }
}

export { createMobileMenu } 