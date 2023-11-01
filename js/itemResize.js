function itemResize(res) {
    document.documentElement,
        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize =  (clientWidth / 1920)  * 2.7;
    return res * fontSize;
}