//--------

export const addClass = (element, className) => {
    if (element.classList)
        element.classList.add(className);
    else
        element.className += ' ' + className;
}

//--------

export const removeClass = (element, className) => {
    if (element.classList)
        element.classList.remove(className);
    else
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

export const isDesktop = () => {
    return window.innerWidth > 1024;
}



