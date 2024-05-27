import { goto } from "$app/navigation";

function convertToMilliseconds(textTime: string) {
  const regex = /(\d+)(s|ms)/;
  const match = textTime.match(regex);

  if (match) {
    const value = parseInt(match[1]);
    const unit = match[2];

    if (unit === 's') {
      return value * 1000;
    } else if (unit === 'ms') {
      return value;
    }
  }

  return 0;
}

export function pageTransition(path: string, colour?: string) {
    
    const pageTransitioner = document.getElementById('page-transitioner')
    const transitionDuration = '300ms'    

    if (pageTransitioner) {
        pageTransitioner.style.transitionDuration = transitionDuration
        pageTransitioner.style.opacity = '1'
        pageTransitioner.style.visibility = 'visible'
        setTimeout(() => {
            goto(path)
            pageTransitioner.style.opacity = '0'
            pageTransitioner.style.visibility = 'hidden'
        }, convertToMilliseconds(transitionDuration))
    }
}