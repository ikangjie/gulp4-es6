//ES6提供了新的数据结构Set，它类似数组，但是成员的值都是唯一的，没有重复的值。
//Set本身是一个构造函数，用来生成Set数据结构

//通过add()方法向Set结构加入成员，结果表明Set结构不会添加重复的值
{
    let s = new Set();
    let arr = [1,1,2,2,3,3,4,4,5,5];
    arr.forEach(x => s.add(x));
    console.log('Set()',s);
    for(let i of s){
        console.log('遍历',i);
    }
}

//Set默认值
{
    let s = new Set([1,2,3,4,5,5,5,6]);
    console.log('Set默认值',s,'长度',s.size);
}

//Set不会去转换数据类型，比如数值2和字符2是不相等的
{
    let s = new Set([1,"1",2,"2"]);
    console.log(s);
}

//Set实例方法
//add(value) 添加某个值，返回Set结构本身
//delete(value) 删除某个值，返回一个布尔值，表示是否删除成功
//has(value) 返回一个布尔值，表示该值是否为Set成员
//clear() 清除所有成员，没有返回值
{
    let arr = ['add','delete','has','clear'];
    let s = new Set(arr);
    console.log('has',s.has('has'));
    console.log('delete',s.delete('add'),s);
    s.clear();
}

//Set遍历操作
//keys() 返回键名遍历器
//values() 返回键值遍历器
//entries() 返回键值和键名
//forEach() 使用回调函数遍历每个成员
{
    //keys()由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
    let set = new Set(["a",'b','c','d']);
    for(let i of set.keys()){
        console.log('keys',i);
    }
    //values
    for(let i of set.values()){
        console.log('values',i);
    }
    //entries
    for(let i of set.entries()){
        console.log('entries',i);
    }
    //forEach
    set.forEach(i => {console.log('forEach',i)});
}

//WeakSet结构与Set类似，也是去重，但是它与Set有两个区别，首先，weakSet的成员只能是对象，而不能是其他类型的值，不能遍历
{
    let ws = new WeakSet();
    let arg = {a : 1};
    ws.add(arg);
    console.log('weakSet',ws);
    console.log('has',ws.has(arg),ws);
    console.log('delete',ws.delete(arg),ws);
}

//Map
//ES6提供了Map数据结构，它类似对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值都可以单座键，也就是说，Object结构提供的是字符串-值得对应，Map结构提供了值-值得对应
{
    let map = new Map();
    map.set(123,123);
    console.log('map.set(key,value)',map);
}
//size 返回Map结构的成员总数
//set(key,value) 设置键名 和 键值，然后返回整个Map结构。如果key已经有值，则键值会被更新
//get(key) 读取key对应的键值
//has(key) 表示某个键是否在当前Map对象中，返回一个布尔值
//delete(key) 删除某个键，返回布尔值 true/flase
//clear() 清除所有成员，没有返回值
//Map也有遍历，和Set遍历一样
{
    let map = new Map();
    let arr1 = ['123'];
    map.set(arr1,456);
    console.log('map',map,map.get(arr1));
    let map2 = new Map([['a',123],['b',456]]);
    console.log('map',map2.get('a'));//123
    console.log('map',map2.get('b'));//456
    console.log('size',map2.size);
    console.log('delete',map2.delete('a'),map.size);
    console.log('clear',map2.clear(),map2);
}

//weakMap 结构与Map结构类似，但是，WeakMap只接受对象作为键名，不接受其他类型的值作为键名
{
    let wsmap = new WeakMap();
    let o = {};
    wsmap.set(o,123);
    console.log(wsmap.get(o));
}

{
    // 数据结构横向对比，增，查，改，删
    let map=new Map();
    let array=[];
    // 增
    map.set('t',1);
    array.push({t:1});
  
    console.info('map-array',map,array);
  
    // 查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.info('map-array',map_exist,array_exist);
  
    // 改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.info('map-array-modify',map,array);
  
    // 删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
  }
  
  {
    // set和array的对比
    let set=new Set();
    let array=[];
  
    // 增
    set.add({t:1});
    array.push({t:1});
  
    console.info('set-array',set,array);
  
    // 查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t);
    console.info('set-array',set_exist,array_exist);
  
    // 改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info('set-array-modify',set,array);
  
    // 删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array-empty',set,array);
  }

  {
    // map,set,object对比
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};
  
    // 增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
  
    console.info('map-set-obj',obj,map,set);
  
    // 查
    console.info({
      map_exist:map.has('t'),
      set_exist:set.has(item),
      obj_exist:'t' in obj
    })
  
    // 改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.info('map-set-obj-modify',obj,map,set);
  
    // 删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-empty',obj,map,set);
  }