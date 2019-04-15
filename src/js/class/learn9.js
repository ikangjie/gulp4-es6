//Symbol定义一个独一无二的值
{
    let a1 = Symbol(2);
    let a2 = Symbol(2);
    console.log(a1===a2); //false
    console.log(123456789000);
    //有时我们希望重新使用一个Symbol值
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3===a4);//true
}

//Symbol使用场景
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1] : '123',
        'abc' : 345,
        'c' : 456
    };
    console.log(obj);

    //已经赋值的Symbo没法获取值
    for(let [key,value] of Object.entries(obj)){
        console.log(key,value);
    }

}

//getOwnPropertySymbols获取Symbol值
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1] : '123',
        'abc' : 345,
        'c' : 456
    };    
    Object.getOwnPropertySymbols(obj).forEach(function(i){
        console.log('Object.getOwnPropertySymbols',obj[i]);
    });
    //获取所有对象的Key值
    Reflect.ownKeys(obj).forEach(function(i){
        console.log('Reflect.ownKeys()',obj[i]);
    });
}