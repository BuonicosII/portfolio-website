function createDesktopMenu () {
    const nav = document.querySelector("nav");

    while (nav.hasChildNodes()) {
        nav.removeChild(nav.firstChild)
    }
    
    const desktopMenu = document.createElement("div");
    desktopMenu.classList.add("desktopMenu");
    nav.appendChild(desktopMenu);

    const aboutLink = document.createElement("a");
    aboutLink.textContent = "About";
    desktopMenu.appendChild(aboutLink);

    const projectsLink = document.createElement("a");
    projectsLink.textContent = "Projects";
    desktopMenu.appendChild(projectsLink);

    const contactLink = document.createElement("a");
    contactLink.textContent = "Contact Me";
    desktopMenu.appendChild(contactLink);
}

export { createDesktopMenu }