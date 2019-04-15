//Proxy
{
    let obj = {
        time : '2018-03-28',
        name : 'net',
        _r : 123
    };

    //代理对象
    let monnitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2018','2019');
        },
        //拦截对象设置属性
        set(target,key,value){
            //只允许修改name属性
            if(key === 'name'){
                console.log(123);
                return target[key] = value;
            }else{
                return target[key];
            }
        },
        //拦截当前对象是否存在某个属性
        has(target,key){
            //只暴露name属性
            if(key === 'name'){
                return target[key];
            }else{
                return false;
            }
        },
        //拦截delete返回一个布尔值
        deleteProperty(target,key){
            //以_开头允许删除
            if(key.indexOf('_') > -1){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        //拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(i => i != 'time');
        }
    });

    // console.log('Proxy',obj,monnitor.time);
    // monnitor.time = '2020';
    // monnitor.name = 'hello world';//可以修改
    // console.log('只允许修改name属性',monnitor.time,monnitor.name,monnitor);
    // console.log('是否是monnitor属性','name' in monnitor);//true

    //无法删除time
    // delete monnitor.time;
    // console.log(monnitor);

    //已经删除_r
    // delete monnitor._r;
    // console.log(monnitor);

    //保护了time属性
    console.log('ownkeys保护time属性',Object.keys(monnitor));

}

//Reflect
{
    let obj = {
        time : '2018-03-28',
        name : 'net',
        _r : 123
    };
    //Reflect读取属性
    console.log('Reflect get',Reflect.get(obj,'time')); 
    //Reflect设置属性
    Reflect.set(obj,'name','hello world');
    console.log('Reflect set',obj);
    //Reflect判断属性是否存在当前对象
    console.log('Reflect has',Reflect.has(obj,'name'));  
}

//Proxy和Reflxy使用场景
{

    function validator(target,validator){
        return new Proxy(target,{
          _validator:validator,
          set(target,key,value,proxy){
            if(target.hasOwnProperty(key)){
              let va=this._validator[key];
              if(!!va(value)){
                return Reflect.set(target,key,value,proxy)
              }else{
                throw Error(`不能设置${key}到${value}`)
              }
            }else{
              throw Error(`${key} 不存在`)
            }
          }
        })
      }
    
      const personValidators={
        name(val){
          return typeof val==='string'
        },
        age(val){
          return typeof val === 'number' && val>18
        },
        mobile(val){
          
        }
      }
    
      class Person{
        constructor(name,age){
          this.name=name;
          this.age=age;
          this.mobile='1111';
          //代理Person对象
          return validator(this,personValidators)
        }
      }
    

    const person = new Person('Kangjie',23);
    
    console.log(person);//Proxy {name: "Kangjie", age: 23}
    
    person.name = 'Kuoguoguo';
    
    console.log(person);

}