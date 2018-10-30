> 声明变量
- var
- function
- let
- const
- class
- export

#### let 和 const
1. let所声明的变量，只在let命令所在的代码块内有效
```
    if (true) {
        let str = 'hello';
    };
    console.log(str);  //报错

```
2. 不存在变量提升
3. 暂时性死区
4. 不允许重复声明
5. 块级作用域
```
for (let i = 1; i < 10; i++) {
    setTimeout(function() {
        console.log(i); //1-10
    }, 10);
};
//console.log(i); //报错
```
-----
> const声明的是常量，let声明的是变量
6. const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动
```
const arr = [1, 2, 3];
      arr.push(4); 
    console.log(arr);  //[1,2,3,4]
      arr = [1, 2, 3, 4];
    console.log(arr);   //报错
```
7. 顶层对象的属性
```
let n1 = 20;
alert(window.n1);  //undefined
```