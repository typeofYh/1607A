> Promise

```
 new Promise((resolve,reject)=>{
     //resolve() 成功执行方法
     //reject 失败执行方法
 })
```

> Promise.prototype.then

```
    PromiseObject.then((参数)=>{
        //resolve要执行的函数
    },(参数)=>{
        //reject要执行的函数
    }).then()
```

##### 调用resolve 和 reject 方法


> Promise.all([promise1,promise2])

##### all 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
##### 所有promise实例执行成功执行then

> Promise.prototype.catch()

##### 捕捉异常 替代 .then第二个参数

> Promise.prototype.finally()

##### 不管 Promise 对象最后状态如何，都会执行的操作。

> Promise.prototype.race([promise1,promise2])

##### all 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
##### 只要有一个成功会执行then

