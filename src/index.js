import "./style.css";
import { createMobileMenu } from "./mobile-menu.js";
import { createDesktopMenu } from "./desktop-menu.js";

const mediaQuery = window.matchMedia('(max-width: 1000px)')

function handleTabletChange(evt) {
    if (evt.matches) {
        createMobileMenu()
    } else {
        createDesktopMenu()
    }
}

handleTabletChange(mediaQuery)

mediaQuery.addEventListener("change", handleTabletChange)

