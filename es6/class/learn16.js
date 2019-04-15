"use strict";

//Decorators 类的修饰
//修饰器是一个函数
//修改行为
//修改类的行为
//只能在类范围内生效
//需要安装 @babel/preset-stage-0 支持
// cnpm install @babel/core @babel/plugin-proposal-decorators
//限制某个属性为只读
// {
//     //第一个参数是修改类的本身
//     //第二个参数是属性的名称
//     //第三个参数是该属性的描述对象
//   let readonly=function(target,name,descriptor){
//     target.test=1;
//     descriptor.writable=false;
//     return descriptor
//   };
//   class Test{
//     @readonly
//     time(){
//       return '2017-03-11'
//     }
//   }
// }
{
  console.log(1234);
}