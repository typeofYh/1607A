/**
 * [最少需要多少辆车]
 * @param  {Array} classList [班级人数列表]
 * @param  {Number} m         [汽车最大装载人数]
 * @return {Number}           [汽车总数]
 */
function minNeedCar(classList, m) {
    return Math.ceil(classList.reduce((prev, next) => prev + next) / m);
}

console.log(minNeedCar([2, 3, 2, 1], 3));