"use strict";

var _assert = require("assert");

//基本定义
{//es5模拟异步操作
  // let ajax = function(cb){
  //     console.log('执行a');
  //     setTimeout(function(){
  //         cb&&cb.call();
  //     },1000);
  // };
  // ajax(function(){
  //     console.log('执行b');
  // });
}
{} // let ajax = function(){
//     console.log('执行1');
//     return new Promise(function(resolve,reject){
//         //resolve表示执行下一步的操作
//         //reject表示中断当前操作
//         setTimeout(function(){
//             resolve();
//         },1000);
//     });
// };
//then表示执行下一步
// ajax().then(function(){
//     console.log('promise','执行2');
// });
//执行多步操作
// {
//     let ajax = function(){
//         console.log('执行1');
//         return new Promise(function(resolve,reject){
//             //resolve表示执行下一步的操作
//             //reject表示中断当前操作
//             setTimeout(function(){
//                 resolve();
//             },1000);
//         });
//     };
//     ajax().then(function(){
//         console.log('执行2');
//         return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve();
//             },2000);
//         });
//     }).then(function(){
//         console.log('执行3');
//     });        
// }
//捕获异常
// {
//     let ajax = function(num){
//         console.log('执行1');
//         return new Promise(function(resolve,reject){
//             if(num > 5){
//                 resolve();
//             }else{
//                 throw new Error('出错了');
//             }
//         });
//     };
//     //正确
//     ajax(6).then(function(){
//         console.log('log',6);
//     }).catch(function(err){
//         console.log('Error',err);
//     });
//     //抛出错误
//     ajax(3).then(function(){
//         console.log('log',3);
//     }).catch(function(err){
//         console.log('Error',err);
//     });    
// }
//Promise.all()

{
  //所有图片加载完成再添加到页面
  var loadImg = function loadImg(src) {
    return new Promise(function (resolve, reject) {
      var img = document.createElement('img');
      img.src = src;

      img.onload = function () {
        resolve(img);
      };

      img.onerror = function (err) {
        reject(err);
      };
    });
  };

  var showImgs = function showImgs(imges) {
    imges.forEach(function (img) {
      document.body.appendChild(img);
    });
  }; //将多个 Promise 实例，包装成一个新的 Promise 实例,当所有的loadImg都完成之后才会触发PromiseAll新的Promise对象，触发Promise对象后才会执行then方法(showImgs)


  Promise.all([loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'), loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')]).then(showImgs);
} //Promise.race()

{
  //将多个 Promise 实例，包装成一个新的 Promise 实例，当有一个loadImg完成之后就会触发Promise实例
  //有一个图片加载完成就添加到页面
  var _loadImg = function _loadImg(src) {
    return new Promise(function (resolve, reject) {
      var img = document.createElement('img');
      img.src = src;

      img.onload = function () {
        resolve(img);
      };

      img.onerror = function (err) {
        reject(err);
      };
    });
  };

  var _showImgs = function _showImgs(img) {
    var p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  };

  Promise.race([_loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'), _loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'), _loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')]).then(_showImgs);
}