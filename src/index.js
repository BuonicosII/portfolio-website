import "./style.css";
import { createMobileMenu } from "./mobile-menu.js"

const mediaQuery = window.matchMedia('(max-width: 1150px)')

function handleTabletChange(evt) {
    if (evt.matches) {
        createMobileMenu()
    }
}

handleTabletChange(mediaQuery)

mediaQuery.addEventListener("change", handleTabletChange)

