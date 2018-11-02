let ajax = (ops) => {
    let options = Object.assign({}, {
        type: 'get',
        data: "",
        async: true,
        dataType: 'json'
    }, ops);
    let formate = data => Object.entries(data).map(item => item[0] + '=' + item[1] + '&').join('').replace(/&$/, '');
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let data = typeof options.data === 'object' ? formate(options.data) : options.data;
        let url = /get/i.test(options.type) && data != '' ? options.url + '?' + data : options.url;
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
                resolve(options.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText);
            } else {
                reject(new Error('报错了,自己找'));
            }
        };
        xhr.open(options.type, url, options.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(/get/i.test(options.type) ? null : data); //4
    })
};