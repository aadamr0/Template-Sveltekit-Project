import { pageTransition } from "./pageTransitioner.ts"

export function anchor(e: Event) {
    e.preventDefault()
    const href = e.target.href;
    const pathname = new URL(href).pathname;
    console.log('Pathname:', pathname);
    pageTransition(pathname)
}