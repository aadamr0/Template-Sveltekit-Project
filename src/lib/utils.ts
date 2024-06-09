import { pageTransition } from "./pageTransitioner.js"

export function anchor(e?: Event) {
    if (e) {
        e.preventDefault()
        const href = e.target.href;
        const pathname = new URL(href).pathname;
        console.log('Pathname:', pathname);
        pageTransition(pathname)
    }
}

export function changePath(pathname: string) {
    pageTransition(pathname)
}