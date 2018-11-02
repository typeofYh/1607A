function getNumber(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 20));
        }, time);
    })
};

let sum = async function() {
    let n1 = await getNumber(200);
    let n2 = await getNumber(300);
    let n3 = await getNumber(400);
    return n1 + n2 + n3;
};
sum().then(res => {
    console.log(res);
});
// getNumber(200).then(res => {
//     console.log(res);
// });
// getNumber(300).then(res => {
//     console.log(res);
// });
// getNumber(400).then(res => {
//     console.log(res);
// });