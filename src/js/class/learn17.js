//ES6的模块化语法
//导出
// export let a = 123;
// export function test(){
//     console.log('test');
// }
// export class Hello{
//     test(){
//         console.log('class');
//     }
// }

let a = 123;
let test = function(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
    }
}

export default {
    a,
    test,
    Hello
}