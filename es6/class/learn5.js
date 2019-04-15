"use strict";

//数值扩展
{
  //Number.isFinite()判断数值是否无穷大
  console.log('Number.isFinite(15)', Number.isFinite(15)); //true

  console.log('Number.isFinite(NaN)', Number.isFinite(NaN)); //false
  //Number.isNaN()判断是否是非数值s

  console.log('Number.isNaN(0)', Number.isNaN(0)); //false

  console.log('Number.isNaN(NaN)', Number.isNaN(NaN)); //true
  //Number.isInteger()判断是否是整数

  console.log('Number.isInteger(25)', Number.isInteger(25)); //true

  console.log('Number.isInteger(25.5)', Number.isInteger(25.5)); //false
  //Number.Max_SAFE_INTEGER 常量 最大数值

  console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); //9007199254740991
  //Number.MIN_SAAFE_INTEGER 常量 最小数值

  console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER); //-9007199254740991
  //NUmber.isSafeInteger 是否在有效数值内，有效数值内是数值最大限和数值最小值

  console.log('Number.isSafeInteger(10)', Number.isSafeInteger(10)); //true

  console.log('Number.isSafeInteger(9007199254740992)', Number.isSafeInteger(9007199254740992)); //false
  //Math.trunc() 取整

  console.log("Math.trunc(4.9)", Math.trunc(4.9)); //4

  console.log('parseInt', parseInt(4.9)); //4
  //Math.ceil 向上取整

  console.log('Math.ceil(4.1)', Math.ceil(4.1)); //5
  //Math.round 向下取整

  console.log('Math.round(4.1)', Math.round(4.1)); //4
  //Math.sign 判断一个数值是否是正数还是负数或者0

  console.log('Math.sign(-5)', Math.sign(-5)); //-1

  console.log('Math.sign(5)', Math.sign(5)); //1

  console.log('Math.sign(0)', Math.sign(0)); //0

  console.log('Math.sign(hello)', Math.sign('hello')); //NaN
  //Math.cbrt() 用与计算一个数的立方根

  console.log('Math.cbrt(-1)', Math.cbrt(-1)); //-1

  console.log('Math.cbrt(0)', Math.cbrt(0)); //0

  console.log('Math.cbrt(1)', Math.cbrt(1)); //1

  console.log('Math.cbrt(2)', Math.cbrt(2)); //1.2599210498948732
}