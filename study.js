// import { resolve } from "url"
// import { rejects } from "assert"

// /**
//  * ES6新增特性 类
//  * node 环境下运行 node test.js
//  */
// class Animal{
//    constructor(name,color){
//         // 构造函数，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
//         this.name = name;
//         this.color = color;
//    }

//    //toString 是原型对象上的属性
//    toString(){
//        console.log('name:'+this.name+',color:'+this.color);
//    }
// }

// var animal = new Animal('dog','white'); //实例化类
// animal.toString();  
// //hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是是否有指定的键）
// // console.log(animal.hasOwnProperty('name'));
// // console.log(animal.hasOwnProperty('color'));
// // console.log(animal.hasOwnProperty('toString'));

// class Cat extends Animal {
//    constructor(action){
//     // 子类必须要在constructor中指定super 函数，否则在新建实例的时候会报错.
//     // 如果没有置顶consructor,默认带super函数的constructor将会被添加、
//        super('cat','white');//super 调用父对象的构造函数                 
//        this.action = action;
//    }
//    toString(){
//        console.log(super.toString())
//    }
// }

// var cat = new Cat('catch')
// cat.toString();
// // 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
// // console.log(cat instanceof Cat); // true
// // console.log(cat instanceof Animal); // true

// /**
//  *  模块化
//  * export可以导出变量，常量，函数，导出多个可以用{}；
//  * import可以在export之后进行导入；
//  */

//  /**
//   * 箭头函数
//   * 箭头函数主要学this的指向 https://blog.csdn.net/liwusen/article/details/70257837
//   */

//   /**
//    * 函数参数默认值
//    */
//   function foo(height = 50, color = 'red')
//   {
//       // ...
//   }
//   //不使用情况
//   function foo(height, color)
//   {
//       var height = height || 50;
//       var color = color || 'red';
//       //...
//   }
//   /**
//    * 模板字符串
//    */
//   //不使用
// var name = 'Your name is ' + first + ' ' + last + '.'
// //使用
// var name = `Your name is ${first} ${last}.`

// /**
//  *  解构赋值 可以获取或修改数组和对象的值 简单理解就是等号的左边和右边相等。
//  */
// //在没有解构赋值的时候，我们赋值是这样的
// // let arr = [0,1,2]
// // let a = arr[0]
// // let b = arr[1]
// // let c = arr[2]
// // //既声明，又赋值 数组的解构赋值
// // let arr = [0,1,2]
// // let [a,b,c] = arr
// // console.log(a)//0
// // console.log(a)//1
// // console.log(a)//2

// // let arr = [,1,2]
// // let [a='我是默认值',b,c] = arr
// // console.log(a)//'我是默认值'
// // console.log(b)//1
// // console.log(c)//2
// //从这个例子可以看出，在解构赋值的过程中，a=undefined时，会使用默认值
// //那么当a=null时呢？当a=null时，那么a就不会使用默认值，而是使用null

// /**
//  * 数组拼接
//  */
// let a=[0,1,2]
// let b=[3,4,5]
// let c=a.concat(b)
// console.log(c)//[0,1,2,3,4,5]

// let d = [...a,...b]
// console.log(d)//[0,1,2,3,4,5]

// // 数组的克隆 把数组进行克隆一份，互不影响
// // 假如我们简单地把一个数组赋值给另外一个变量
// let a = [0,1,2,3]
// let b = [...a]
// b.push(4)
// console.log(a) // [0,1,2,3]
// console.log(b) // [0,1,2,3,4]


// /**
//  * 对象的解构赋值
//  */
// let ssss = '1111'
// let {name,age} = {name:ssss,age:28}
// console.log(name) // 'swr'
// console.log(age) // 28
// // 这里规则和数组的解构赋值一样，当name = undefined时，则会使用默认值

// let [a] = [{name:"swr",age:28}]
// console.log(a) // {name:"swr",age:28}

// let { length } = "hell"
// let sss = '11111111'
// console.log(6+{sss});//10
// console.log(length) // 9
/**
 * 扩展运算符
 */
// function sum(){
//     console.log(arguments)

//     let total = 0
//     let { length }=arguments

//     for(let i=0;i<length;i++){
//         total+=arguments[i]
//     }
//     return total
// }
// console.log(sum(1,2,3,4,5,6)) // 21

// function sum(...args){//// 使用...扩展运算符
//     console.log(args) // [ 1, 2, 3, 4, 5, 6 ] args是一个数组
////eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
//     return eval(args.join('+')) //
// }
// console.log(sum(1,2,3,4,5,6)) // 21

// function sum(a,b,...args){//扩展运算符只能放在最后一个参数
//     console.log(a) // 1
//     console.log(b) // 2
//     console.log(args) // [ 3, 4, 5, 6 ]
// }
// sum(1,2,3,4,5,6)

// 扩展运算符可以把argument转为数组
// 但是扩展运算符不能把伪数组转为数组（除了有迭代器iterator的伪数组，如arguments）
// function max(){
//     console.log(arguments)//{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
//     let arr = [...arguments]

//     console.log(arr)// [1,2,3,4,5,6]
// }
// max(1,2,3,4,5,6)
// 但是扩展运算符不能把伪数组转为数组（除了有迭代器iterator的伪数组，如arguments）
// let likeArr = { "0":1,"1":2,"length":2 }
// let arr = [...likeArr] //报错 TypeError: likeArr is not iterable
// //但是可以用Array.from把伪数组转为数组
// let likeArr = { "0":1,"1":2,"length":2 }
// let arr = Array.from(likeArr)
// console.log(arr) //[1,2]
/**
 * Object.assign方法用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象
 * Object.assign方法用来将源对象（source）的所有可枚举属性，复制到目标对象（target）。
 * 它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象
 **/
// //以往我们合并对象
// let name ={name:'Anlen'}
// let age = {age:21}
// let person = {}
// Object.assign(person,name,age)
// console.log(person)
// //使用运算符合并对象
// let person = {...name,...age}
// console.log(person) // { name: '邵威儒', age: 28 }

/**
 * 利用JSON.stringify和JSON.parse进行深拷贝。
 * JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
 * JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
 **/

// let swr={
//     name:'summer',
//     age:21,
//     pets:['小黄']
// }

// let swrcopy = JSON.parse(JSON.stringify(swr))
// console.log(swrcopy)
// //// 此时我们新增swr的属性
// swr.pets.push('旺财')
// console.log(swr) // { name: '邵威儒', age: 28, pets: [ '小黄', '旺财' ] }
// // 但是swrcopy却不会受swr影响
// console.log(swrcopy) // { name: '邵威儒', age: 28, pets: [ '小黄' ] }

/**
 * instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
 */

// function deepCopy(fromObj, toObj) {// // 深拷贝函数
//     //容错
//     if (fromObj === null) return null //当fromObj 为null
//     if (fromObj instanceof RegExp) return new RegExp(fromObj) //当fromObj 为正则
//     if (fromObj instanceof Date) return new Date(fromObj) //当fromObj为Date
//     toObj = toObj || {}
//     for (let key in fromObj) {//遍历
//         if (typeof fromObj[key] !== 'object') {// 是否为对象
//             toObj[key] = fromObj[key] //如果为普通值，则直接赋值
//         } else {
//             if (fromObj[key] === null) {
//                 toObj[key] = null
//             } else {
//                 toObj[key] = new fromObj[key].constructor //如果为object，则new这个object指向的构造函数
//                 deepCopy(fromObj[key], toObj[key])
//             }
//         }

//     }
//     return toObj
// }

// let dog = {
//     name: "小白",
//     sex: "公",
//     firends: [
//         {
//             name: "小黄",
//             sex: "母"
//         }
//     ]
// }

// let dogcopy = deepCopy(dog)
// // 此时我们把dog的属性进行增加
// dog.firends.push({ name: "小红", sex: "母" })
// console.log(dog)
// // 当我们打印dogcopy，会发现dogcopy不会受dog的影响
// console.log(dogcopy) 

// //方法3
// let dog = {
//     name:"小白",
//     sex:"公",
//     firends:[
//       {
//         name:"小黄",
//         sex:"母"
//       }
//     ]
//   }

//   function deepCopy(obj){
//       if(obj === null) return null
//       if(typeof obj !=='object') return obj
//       if(obj instanceof RegExp) return new RegExp(obj)
//       if(obj instanceof Date) return new Date(obj)
//       let newObj = new obj.constructor
//       for(let key in obj){
//           newObj[key] = deepCopy(obj[key])
//       }
//       return newObj
//   }
//   let dogcopy = deepCopy(dog)
//   dog.firends.push({name:'小红',sex:'母'})
//   console.log(dog,typeof(dog))
//   console.log(dogcopy,typeof(dogcopy))

/**
 * 延展操作符(Spread operator)  ...
 * 可用于函数调用，数组拷贝，数组连接，es2018增加了对对象的支持
 * */

/**
 * 对象属性简写
 */
// const name = 'Ming',age='18',city='Shanghai';
// const student = {
//     name,
//     age,
//     city
// };
// console.log(student)//{name: "Ming", age: "18", city: "Shanghai"}

/*
 *.Promise主要解决回调地狱的问题；
 *let和const 都是块级作用域；const定义了就不能修改
 **/

/////////ES7/////////

/**
 * includes() 判断数组是否存在某值；
 * 指数运算符 **
 */

// console.log(2**3)

//////////////ES8////////////
/**
 * async/await 也是为了解决回调地狱的问题；
 */
// login(userName){
//     return new Promise((resolve,reject) => {
//       setTimeout(()=>{
//         resolve('1001');
//       },600)
//     })
// }

// getData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (userId === '1001') {
//                 resolve('Success');
//             } else {
//                 reject('Fail');
//             }
//         },600)
//     })
// }
// //不使用async/await
// daLogin(userName){
//     this.login(userName)
//         .then(this.getData)
//         .then(result =>{
//             console.log(result)
//         })
// }

// // 使用async/await ES8
// async doLogin2(userName) {
//     const userId=await this.login(userName);
//     const result=await this.getData(userId);
// }
// this.doLogin()// Success
// this.doLogin2()// Success

/**
 * Object.values()是一个与ES7的Object.keys()类似的新函数，
 * 但返回的是Object自身属性的所有值，不包括继承的值。
 */

// const obj = {a: 1, b: 2, c: 3}
// //不使用
// const keys=Object.keys(obj)
// const vals = keys.map(key=>obj[key]);
// console.log(vals);//[1, 2, 3]
// const values=Object.values(obj);
// console.log(values);//[1, 2, 3]

/**
 * Object.entries()函数返回一个给定对象自身可枚举属性的键值对的数组。
 */
// Object.keys(obj).forEach(key=>{
//     console.log('key:'+key+'value:'+obj[key]);
// })

// for (let [key,value] of Object.entries(obj1)){
//     console.log(`key:${key} value:${value}`)
// }
// //key:a value:1
// //key:b value:2
// //key:c value:3

/**
 * 字符串补全
 *padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
 *padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。
 *以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
 */
// console.log("h".padStart(5, "o"));  // "ooooh"
// console.log("h".padEnd(5, "o"));    // "hoooo"
// console.log("h".padStart(5));      // "    h"
// //如果指定的长度小于或等于原字符串的长度，则返回原字符串
// console.log('hello'.padStart(5, 'A')) ;//hello
// console.log('hello', padEnd(10, ',world')); //hello,worl
// console.log('hello'.padEnd(10, 'world')); //helloworld
 //补全位数
//  console.log('123'.padStart(10,'0')); //"0000000123"