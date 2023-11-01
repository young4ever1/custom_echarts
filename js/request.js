function apiUrl(url) {
    $.getJSON(`http://mall.marsgis.cn${url}`, { id: new Date() }, (res) => {
        result = res;
    })
}

