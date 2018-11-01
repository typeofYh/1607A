function swiper(data) {
    let ul = document.querySelector('.swiper ul');
    let arr = data.map(item => imageLoad(item.url));
    Promise.all(arr).then(res => {
        res.forEach(item => {
            let li = document.createElement('li');
            li.append(item);
            ul.append(li);
        })
    })
};