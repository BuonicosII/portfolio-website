function createDesktopMenu () {
    const nav = document.querySelector("nav");

    while (nav.hasChildNodes()) {
        nav.removeChild(nav.firstChild)
    }

    if (nav.classList.contains("navSticky")) {
        nav.classList.remove("navSticky")
    }
    
    const desktopMenu = document.createElement("div");
    desktopMenu.classList.add("desktopMenu");
    nav.appendChild(desktopMenu);

    const aboutLink = document.createElement("a");
    aboutLink.textContent = "About";
    aboutLink.setAttribute("href", "#aboutMe")
    desktopMenu.appendChild(aboutLink);

    const projectsLink = document.createElement("a");
    projectsLink.textContent = "Projects";
    projectsLink.setAttribute("href", "#myWork")
    desktopMenu.appendChild(projectsLink);

    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact Me";
    contactLink.setAttribute("href", "#contactMe")
    desktopMenu.appendChild(contactLink);
}

export { createDesktopMenu }